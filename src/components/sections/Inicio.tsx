"use client"

import { motion } from "motion/react"
import { ArrowDown, Play } from "lucide-react"
import { SeismicTrace } from "@/components/SeismicTrace"
import { BrandSymbol } from "@/components/BrandSymbol"
import { ScrollProgress } from "@/components/ScrollProgress"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { WordRotate } from "@/components/magicui/word-rotate"
import { Particles } from "@/components/magicui/particles"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: number
  suffix?: string
  label: string
  delay?: number
}

function StatCard({ value, suffix = "", label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="font-mono text-3xl font-bold text-cyan sm:text-4xl">
        <NumberTicker value={value} delay={delay} />
        {suffix}
      </span>
      <span className="mt-1 font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
        {label}
      </span>
    </motion.div>
  )
}

export function Inicio() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <ScrollProgress />

      {/* particle background */}
      <Particles
        className="absolute inset-0 opacity-40"
        quantity={60}
        staticity={40}
        ease={60}
        size={0.5}
        color="#00A8FF"
      />

      {/* hero background: subtle grid + radial glow */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1F3144 1px, transparent 1px),
            linear-gradient(to bottom, #1F3144 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          opacity: 0.06,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan/3 via-transparent to-transparent opacity-30" />

      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <BrandSymbol size={320} showRings={true} ringCount={5} animate={false} />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col items-center gap-10 px-6 py-12 text-center">
        {/* wordmark */}
        <motion.h1
          className="font-display text-6xl font-bold tracking-[0.14em] uppercase sm:text-7xl md:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="text-white">ARDAS</span>
          <span className="text-secondary">SYSMIC</span>
        </motion.h1>

        <motion.p
          className="font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Análisis y Registro de Datos Sísmicos
        </motion.p>

        {/* rotating tagline */}
        <motion.div
          className="h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <WordRotate
            words={["Geosísmica", "Instrumentación", "Sismología Aplicada"]}
            duration={2500}
            className="font-display text-xl font-bold tracking-[0.08em] text-white uppercase sm:text-2xl"
          />
        </motion.div>

        {/* tagline */}
        <motion.p
          className="max-w-2xl text-center text-base text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Guayaquil, Ecuador
        </motion.p>

        {/* interactive seismogram */}
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <SeismicTrace width={1000} height={120} animate={true} duration={2.4} />
        </motion.div>

        {/* stat cards */}
        <motion.div
          className="mt-4 grid grid-cols-2 gap-8 sm:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <StatCard value={3} suffix="D" label="DAS 3D" delay={0.1} />
          <StatCard value={4} suffix="D" label="DAS 4D" delay={0.2} />
          <StatCard value={4} label="Canales" delay={0.3} />
          <StatCard value={1} suffix=".26s" label="Isoperíodo" delay={0.4} />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <ShimmerButton
            onClick={() => {
              document.querySelector("#equipos")?.scrollIntoView({ behavior: "smooth" })
            }}
            className={cn(
              "border border-border/50 bg-ink/30 font-mono text-xs tracking-[0.12em] uppercase",
              "hover:bg-ink/50"
            )}
            shimmerColor="#00A8FF"
            background="rgba(5, 7, 15, 0.8)"
          >
            <Play className="mr-2 h-4 w-4" />
            Conocer más
          </ShimmerButton>
        </motion.div>
      </div>

      {/* scroll-down cue */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  )
}
