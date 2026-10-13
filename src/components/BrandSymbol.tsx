"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const BRAND_CYAN = "#00A8FF"
const BRAND_ORANGE = "#FF7F00"

interface BrandSymbolProps {
  className?: string
  size?: number
  animate?: boolean
  showRings?: boolean
  ringCount?: number
}

/**
 * The ARDASYSMIC circular brand symbol: a bicolor disc
 * (cian left / orange right) with a central seismic wave
 * and optional concentric rings (radar / pulse effect).
 */
export function BrandSymbol({
  className,
  size = 200,
  animate = true,
  showRings = true,
  ringCount = 3,
}: BrandSymbolProps) {
  const half = size / 2
  const radius = half * 0.32
  const strokeWidth = Math.max(2, size * 0.03)

  // build concentric ring radii
  const rings = Array.from({ length: ringCount }, (_, i) => radius * (1 + (i + 1) * 0.22))

  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={cn("block", className)}
      role="img"
      aria-label="Símbolo ARDASYSMIC"
    >
      {/* gradient definition: cian → naranja left-to-right */}
      <defs>
        <linearGradient id="ard-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={BRAND_CYAN} />
          <stop offset="100%" stopColor={BRAND_ORANGE} />
        </linearGradient>
      </defs>

      {/* concentric dotted rings (radar pulse) */}
      {showRings &&
        rings.map((r, i) => {
          const dotted = i % 2 === 1
          const animDelay = (i * 0.3) % 1
          const common = {
            cx: half,
            cy: half,
            r,
            fill: "none",
            strokeWidth: strokeWidth * 0.6,
            stroke: "url(#ard-gradient)",
            opacity: 0.35,
          }
          if (animate && !reduced) {
            return (
              <motion.circle
                key={i}
                {...common}
                strokeDasharray={dotted ? `${r * 2} ${r * 0.6}` : undefined}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.35 }}
                transition={{ delay: animDelay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            )
          }
          return (
            <circle
              key={i}
              {...common}
              strokeDasharray={dotted ? `${r * 2} ${r * 0.6}` : undefined}
            />
          )
        })}

      {/* main disc */}
      <motion.circle
        cx={half}
        cy={half}
        r={radius}
        fill="url(#ard-gradient)"
        initial={animate ? { scale: 0 } : undefined}
        animate={animate ? { scale: 1 } : undefined}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* central seismic wave icon */}
      <SeismicWaveIcon cx={half} cy={half} size={radius * 0.6} />
    </svg>
  )
}

/** Central seismic-wave icon inside the disc. */
function SeismicWaveIcon({ cx, cy, size }: { cx: number; cy: number; size: number }) {
  const half = size / 2
  // simple seismic wave: low-amplitude noise → spike → coda
  const pathPoints = []
  const spikeAt = half * 0.72
  const noiseFn = (x: number) => Math.sin(x * 0.4) * 0.3 + Math.sin(x * 1.3) * 0.2

  for (let x = 0; x < size; x++) {
    let y = half
    if (x < spikeAt - 5) {
      y += noiseFn(x) * 1.8
    } else if (x < spikeAt + 2) {
      const t = Math.abs(x - spikeAt) / 7
      y -= Math.cos(t * Math.PI) * 8
    } else {
      const decay = Math.exp(-(x - spikeAt - 2) / 8)
      y += noiseFn(x) * 2 * decay
    }
    pathPoints.push(`${x},${(cy - half + y).toFixed(1)}`)
  }

  const pathData = `M ${pathPoints[0]} L ${pathPoints.slice(1).join(" L ")}`

  return (
    <g transform={`translate(${cx - half}, ${cy - half})`}>
      <path
        d={pathData}
        fill="none"
        stroke="white"
        strokeWidth={Math.max(1, size * 0.025)}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </g>
  )
}
