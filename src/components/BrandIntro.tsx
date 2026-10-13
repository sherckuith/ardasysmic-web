"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { BrandSymbol } from "@/components/BrandSymbol"
import { SeismicTrace } from "@/components/SeismicTrace"
import { cn } from "@/lib/utils"

const INTRO_STORAGE_KEY = "ardasysmic-intro-skipped"

interface BrandIntroProps {
  logo?: React.ReactNode
  skipText?: string
  duration?: number
}

/**
 * Full-screen brand introduction (3.5 s).
 * Shows the ARDASYSMIC symbol, wordmark + tagline, and a
 * drawing seismogram.  Shown once per session (sessionStorage).
 * Honours `prefers-reduced-motion`.
 */
export function BrandIntro({
  logo,
  skipText = "Saltar intro",
  duration = 3.5,
}: BrandIntroProps) {
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const skipped = sessionStorage.getItem(INTRO_STORAGE_KEY) === "true"
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    if (!skipped && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
    }
  }, [])

  // auto-skip after duration (when animations are enabled)
  useEffect(() => {
    if (!visible || reduced) return
    const t = setTimeout(() => handleComplete(), duration * 1000)
    return () => clearTimeout(t)
  }, [visible, reduced, duration])

  function handleComplete() {
    sessionStorage.setItem(INTRO_STORAGE_KEY, "true")
    setVisible(false)
  }

  // If reduced-motion or already seen → render nothing
  if (!visible || reduced) return null

  const introDuration = reduced ? 0 : duration

  return (
    <motion.div
      key="brand-intro"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00A8FF 1px, transparent 1px),
            linear-gradient(to bottom, #00A8FF 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* logo / symbol */}
        {logo ?? <BrandSymbol size={120} animate={!reduced} />}

        {/* wordmark + tagline */}
        <motion.div
          className="mt-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-display text-5xl font-bold tracking-[0.12em] text-balance text-white uppercase sm:text-6xl">
            <span className="text-white">ARDAS</span>
            <span className="text-secondary">SYSMIC</span>
          </div>
          <span className="mt-2 font-mono text-xs tracking-[0.24em] text-muted-foreground uppercase">
            Sistemas de adquisición sísmica
          </span>
        </motion.div>

        {/* seismogram drawing */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <SeismicTrace
            width={480}
            height={60}
            animate={!reduced}
            duration={1.6}
            eventDelay={0.6}
          />
        </motion.div>
      </div>

      {/* skip button */}
      <motion.button
        type="button"
        onClick={handleComplete}
        className={cn(
          "fixed bottom-8 right-8 rounded-full border border-border bg-ink/40 px-5 py-2.5",
          "font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase",
          "hover:text-foreground transition-colors"
        )}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.4 }}
        aria-label={skipText}
      >
        {skipText}
      </motion.button>
    </motion.div>
  )
}
