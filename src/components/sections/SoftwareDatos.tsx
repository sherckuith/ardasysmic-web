"use client"

import { motion } from "motion/react"
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"
import { Code, Database, Brain, BarChart3 } from "lucide-react"
import { SectionHeader } from "@/components/sections/Equipos"
import { cn } from "@/lib/utils"

interface SoftwareItem {
  name: string
  description: string
  Icon: React.ElementType
  href: string
  cta: string
  img?: string
  license: "mit" | "por-validar" | "publico"
  colSpan: string
}

const ITEMS: SoftwareItem[] = [
  {
    name: "TremorSys",
    description: "Procesamiento sísmico en Rust: FFT, filtros, STA/LTA, espectrogramas. Formatos MiniSEED y CSV.",
    Icon: Code,
    href: "https://github.com/sherckuith/TremorSys",
    cta: "Ver repositorio",
    img: "/images/tremorsys/interfaz-principal.jpg",
    license: "mit",
    colSpan: "col-span-2",
  },
  {
    name: "MotusWave v2",
    description: "Plataforma MATLAB para SED/HVSR (Nakamura), SESAME 2004, NEC-15, Eurocódigo 8. Caso Hospital Urdesa.",
    Icon: BarChart3,
    href: "https://github.com/sherckuith/MotusWaves-26",
    cta: "Ver repositorio",
    img: "/images/motuswaves/portada-motuswave.jpg",
    license: "por-validar",
    colSpan: "col-span-1",
  },
  {
    name: "FDSNStation-XML",
    description: "Editor de archivos FDSNStationXML (estándar FDSN v1.1) para la red ARDASYSMIC DAS NETWORK.",
    Icon: Database,
    href: "https://github.com/sherckuith/FDSNStation-XML",
    cta: "Ver editor",
    img: "/images/fdsnstation/splash-fdsn.png",
    license: "mit",
    colSpan: "col-span-1",
  },
  {
    name: "HVSR Promart-CityMall",
    description: "Estudio de respuesta de sitio (técnica Nakamura) en Guayaquil. Isoperíodo N9 = 1.26 s.",
    Icon: BarChart3,
    href: "https://github.com/sherckuith/HVSR-Promart-CityMall",
    cta: "Ver estudio",
    img: "/images/hvsr-promart/hvsr-n7-nk.png",
    license: "por-validar",
    colSpan: "col-span-2",
  },
  {
    name: "Infonak",
    description: "Skill IA para agentes: clasifica trabajos Nakamura desde RAW, genera Excel de bitácora.",
    Icon: Brain,
    href: "https://github.com/sherckuith/infonak",
    cta: "Ver skill",
    img: undefined,
    license: "por-validar",
    colSpan: "col-span-1",
  },
]

function LicenseBadge({ license }: { license: SoftwareItem["license"] }) {
  const labels = {
    mit: { text: "MIT", color: "bg-green-500/10 text-green-400 border-green-500/30" },
    "por-validar": { text: "Por validar", color: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
    publico: { text: "Público", color: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  }
  const cfg = labels[license]
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs",
        "tracking-[0.08em] uppercase",
        cfg.color
      )}
    >
      {cfg.text}
    </span>
  )
}

export function SoftwareDatos() {
  return (
    <section id="software-datos" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Software y datos"
          title="Ecosistema de Procesamiento Sísmico"
          subtitle="Herramientas propias y proyectos de referencia en geofísica aplicada."
          delay={0}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map((item) => (
              <BentoCard
                key={item.name}
                name={item.name}
                description={item.description}
                href={item.href}
                cta={item.cta}
                Icon={item.Icon}
                className={cn(
                  "group relative col-span-1 overflow-hidden rounded-2xl",
                  item.colSpan
                )}
                background={
                  item.img ? (
                    <img
                      src={item.img}
                      alt={`_fondo ${item.name}`}
                      className="h-full w-full object-cover object-top opacity-60 grayscale"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-ink/30">
                      <item.Icon className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                  )
                }
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* license summary */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4 text-center text-xs font-mono text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span>
            <LicenseBadge license="mit" /> TremorSys y FDSNStation-XML — licencia MIT
          </span>
          <span>
            <LicenseBadge license="por-validar" /> MotusWave, HVSR-Promart-CityMall e Infonak — por validar
          </span>
        </motion.div>
      </div>
    </section>
  )
}
