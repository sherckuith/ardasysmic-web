"use client"

import { motion } from "motion/react"
import { SectionHeader } from "@/components/sections/Equipos"
import { GraduationCap, Shield, Award, Package, Code } from "lucide-react"
import { GithubIcon } from "@/components/ui/icons"

interface TimelineItem {
  title: string
  description: string
  Icon: React.ElementType
  color?: string
}

const ITEMS: TimelineItem[] = [
  {
    title: "Ingeniero especialista en geofísica aplicada",
    description:
      "Especialidad en sismología, instrumentación sísmica y arquitectura de software científico.",
    Icon: GraduationCap,
    color: "#00A8FF",
  },
  {
    title: "Doctor Honoris Causa (Dr. hc)",
    description:
      "Reconocimiento honorífico según firma de repositorios oficiales y publicaciones.",
    Icon: Award,
    color: "#FF7F00",
  },
  {
    title: "Fundador y Gerente General — ARDASYSMIC LLC",
    description:
      "Análisis y Registro de Datos Sísmicos. Geosísmica · Instrumentación · Sismología Aplicada. Guayaquil, Ecuador.",
    Icon: Shield,
    color: "#1B4B8F",
  },
  {
    title: "Inventor — Equipos DAS 3D y DAS 4D",
    description:
      "Sistemas de adquisición sísmica de 3 y 4 componentes con formato MiniSEED.",
    Icon: Package,
    color: "#00A8FF",
  },
  {
    title: "Autor del ecosistema TremorSys / MotusWave / FDSN / DAS",
    description:
      "Suite de software para procesamiento, análisis HVSR y generación de informes sísmicos.",
    Icon: Code,
    color: "#FF7F00",
  },
]

export function Autor() {
  return (
    <section id="autor" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Autor"
          title="Angel David Yaguana"
          subtitle="Fundador y gerente general de ARDASYSMIC LLC."
          delay={0}
        />

        <motion.div
          className="relative mt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          {/* vertical line */}
          <div className="absolute left-5 top-0 bottom-4 w-0.5 bg-border/30" />

          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative mb-8 flex items-start gap-5"
              variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.Icon className="h-5 w-5" style={{ color: item.color }} />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub profile link */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <GithubIcon className="h-4 w-4" />
          <a
            href="https://github.com/sherckuith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan transition-colors hover:text-amber"
          >
            @sherckuith
          </a>
        </motion.div>
      </div>
    </section>
  )
}
