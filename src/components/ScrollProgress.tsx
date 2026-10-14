"use client"

import { motion, useScroll, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

interface ScrollProgressProps {
  className?: string
}

/**
 * Branded top-of-viewport scroll progress bar.
 * Uses ARDASYSMIC cyan → orange gradient.
 */
export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-linear-to-r",
        "from-cyan via-amber to-secondary",
        className
      )}
      style={{ scaleX }}
    />
  )
}
