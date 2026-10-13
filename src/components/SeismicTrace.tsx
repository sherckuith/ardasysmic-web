"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const BRAND_CYAN = "#00A8FF"
const BRAND_ORANGE = "#FF7F00"

/* Deterministic hash-based noise so the trace is identical on every render. */
function hashNoise(x: number, seed: number): number {
  return (((Math.sin(x * 12.9898 + seed * 78.343) * 43758.5453) % 1) + 1) / 2 - 0.5
}

interface SeismicTraceProps {
  className?: string
  width?: number
  height?: number
  animate?: boolean
  showEvent?: boolean
  eventDelay?: number
  duration?: number
}

/**
 * Animated seismogram SVG.  Renders a realistic-looking seismic trace
 * with a prominent S-wave spike.  When `animate` is true the path draws
 * itself progressively and the event marker pulses.
 */
export function SeismicTrace({
  className,
  width = 720,
  height = 100,
  animate = true,
  showEvent = true,
  eventDelay = 0.7,
  duration = 2,
}: SeismicTraceProps) {
  // ---- generate deterministic path data -----------------------------------
  const center = height / 2
  const scale = height / 5 / 50 // amplitude scale factor
  const spikeAt = Math.floor(width * 0.6)

  const pts: string[] = [`0,${center}`]
  for (let x = 1; x < width; x++) {
    let y = center
    const n = hashNoise(x * 0.31 + 1, 1) * 3 * scale

    if (x < spikeAt - 40) {
      // background microseism noise — small, high-frequency
      y += n
    } else if (x >= spikeAt - 40 && x < spikeAt) {
      // P-wave arrival — ramping amplitude
      const t = (x - (spikeAt - 40)) / 40
      y += n * t + Math.sin(t * Math.PI) * 8 * scale * t
    } else if (x === spikeAt) {
      // S-wave peak — the prominent event
      y = center - 48 * scale
    } else if (x > spikeAt && x <= spikeAt + 25) {
      // S-wave trough
      const t = (x - spikeAt) / 25
      y += Math.cos(t * Math.PI * 0.5) * 36 * scale + n * 0.5
    } else {
      // post-event coda — decaying noise
      const decay = Math.exp(-(x - spikeAt - 25) / 45)
      y += hashNoise(x * 0.27 + 2, 2) * 5 * scale * decay
    }
    pts.push(`${x},${y.toFixed(2)}`)
  }

  const pathData = `M ${pts[0]} L ${pts.slice(1).join(" L ")}`
  const eventY = center - 48 * scale

  const PATH_LEN = 3000 // large enough for stroke-dasharray

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("w-full h-auto", className)}
      role="img"
      aria-label="Sismograma sísmico animado con evento marcado"
    >
      {/* baseline grid line */}
      <line
        x1="0"
        y1={center}
        x2={width}
        y2={center}
        stroke={BRAND_CYAN}
        strokeWidth="0.5"
        opacity="0.15"
      />

      {/* animated trace */}
      {animate ? (
        <motion.path
          d={pathData}
          fill="none"
          stroke={BRAND_CYAN}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDashoffset: PATH_LEN, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 1 }}
          transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
        />
      ) : (
        <path
          d={pathData}
          fill="none"
          stroke={BRAND_CYAN}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* event marker */}
      {showEvent && (
        <>
          <motion.circle
            cx={spikeAt}
            cy={eventY}
            r={animate ? 0 : 3}
            fill={BRAND_ORANGE}
            initial={animate ? { r: 0, opacity: 0 } : undefined}
            animate={animate ? { r: 3, opacity: 1 } : undefined}
            transition={{ duration: 0.3, delay: duration * eventDelay }}
          />
          {animate && (
            <motion.circle
              cx={spikeAt}
              cy={eventY}
              r={0}
              fill={BRAND_ORANGE}
              opacity="0.5"
              initial={{ r: 0, opacity: 0 }}
              animate={{ r: 10, opacity: 0 }}
              transition={{ duration: 1.2, delay: duration * eventDelay }}
            />
          )}
        </>
      )}
    </svg>
  )
}
