"use client"

import { useRef } from "react"
import { motion } from "motion/react"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { SectionHeader } from "@/components/sections/Equipos"
import {
  MapPin,
  Database,
  BarChart3,
  TrendingUpDown,
  FileText,
} from "lucide-react"

interface FlujoStep {
  id: string
  title: string
  subtitle: string
  Icon: React.ElementType
  color: string
  gradient: string
}

const STEPS: FlujoStep[] = [
  {
    id: "acquisition",
    title: "Adquisición en campo",
    subtitle: "Registro DAS 3D/4D",
    Icon: MapPin,
    color: "#00A8FF",
    gradient: "from-cyan to-blue-500",
  },
  {
    id: "mseed",
    title: "MiniSEED",
    subtitle: "Formato estandar",
    Icon: Database,
    color: "#FF7F00",
    gradient: "from-orange-400 to-amber-500",
  },
  {
    id: "processing",
    title: "Procesamiento espectral",
    subtitle: "FFT, filtros, sed",
    Icon: BarChart3,
    color: "#00A8FF",
    gradient: "from-cyan to-blue-500",
  },
  {
    id: "curve",
    title: "Curva H/V",
    subtitle: "Nakamura — f0, T0",
    Icon: TrendingUpDown,
    color: "#FF7F00",
    gradient: "from-orange-400 to-amber-500",
  },
  {
    id: "report",
    title: "Informe con normativa",
    subtitle: "SESAME 2004, Eurocódigo 8",
    Icon: FileText,
    color: "#00A8FF",
    gradient: "from-cyan to-blue-500",
  },
]

export function Flujo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = STEPS.reduce(
    (acc, step) => ({ ...acc, [step.id]: useRef<HTMLDivElement>(null) }),
    {} as Record<string, React.RefObject<HTMLDivElement | null>>
  )

  return (
    <section id="flujo" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Metodología"
          title="Flujo de Trabajo Sísmico"
          subtitle="Del sitio al informe H/V: proceso validado por normas internacionales."
          delay={0}
        />

        <div
          ref={containerRef}
          className="relative mt-6 flex flex-col items-center justify-center gap-4 py-10 md:flex-row md:gap-6"
        >
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1
            const ref = itemRefs[step.id]
            return (
              <div key={step.id} className="relative flex flex-col items-center">
                <motion.div
                  ref={ref as React.Ref<HTMLDivElement>}
                  className="relative z-10 flex h-28 w-32 flex-col items-center justify-center rounded-2xl border border-border/20 bg-card p-3 text-center shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-b shadow-lg"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, ${step.color}, #1B4B8F)`,
                    }}
                  >
                    <step.Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-2 font-display text-sm font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {step.subtitle}
                  </p>
                </motion.div>

                {/* connecting beam to next node */}
                {!isLast && (
                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={ref}
                    toRef={itemRefs[STEPS[i + 1].id]}
                    pathColor={step.color}
                    gradientStopColor={STEPS[i + 1].color}
                    duration={3}
                  />
                )}
              </div>
            )
          })}

          {/* mobile vertical label */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:hidden">
            <motion.span
              className="font-mono text-xs text-muted-foreground uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: STEPS.length * 0.15 + 0.3 }}
            >
              → informe H/V
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  )
}
