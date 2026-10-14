"use client"

import { motion } from "motion/react"
import { SectionHeader } from "@/components/sections/Equipos"
import { ExternalLink, Code, BookOpen, FileImage } from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"
import { cn } from "@/lib/utils"

interface SourceItem {
  name: string
  href: string
  license: "MIT" | "Por-validar" | "Público"
  description: string
  type: "repo" | "scientific"
}

const REPOS: SourceItem[] = [
  {
    name: "TremorSys",
    href: "https://github.com/sherckuith/TremorSys",
    license: "MIT",
    description:
      "Procesamiento sísmico en Rust: FFT, filtros, STA/LTA, espectrogramas. Formatos MiniSEED y CSV.",
    type: "repo",
  },
  {
    name: "FDSNStation-XML",
    href: "https://github.com/sherckuith/FDSNStation-XML",
    license: "MIT",
    description:
      "Editor y constructor de archivos FDSNStationXML (estándar FDSN v1.1) para la red ARDASYSMIC.",
    type: "repo",
  },
  {
    name: "MotusWave v2",
    href: "https://github.com/sherckuith/MotusWaves-26",
    license: "Por-validar",
    description:
      "Plataforma MATLAB para SED/HVSR (Nakamura), SESAME 2004, Eurocódigo 8. Caso Hospital Urdesa.",
    type: "repo",
  },
  {
    name: "DAS-Ardasysmic",
    href: "https://github.com/sherckuith/DAS-Ardasysmic",
    license: "Por-validar",
    description: "Red de adquisición sísmica local DAS 3D y DAS 4D. Proyecto público, consultar licencia.",
    type: "repo",
  },
  {
    name: "HVSR-Promart-CityMall",
    href: "https://github.com/sherckuith/HVSR-Promart-CityMall",
    license: "Por-validar",
    description:
      "Estudio de respuesta de sitio (técnica Nakamura) en Guayaquil. Isoperíodo N9 = 1.26 s.",
    type: "repo",
  },
  {
    name: "infonak",
    href: "https://github.com/sherckuith/infonak",
    license: "Por-validar",
    description: "Skill IA para agentes: clasificación de trabajos Nakamura, generación de bitácoras.",
    type: "repo",
  },
]

const SCIENTIFIC: SourceItem[] = [
  {
    name: "Nakamura — Método H/V (1989, 2000)",
    href: "#",
    license: "Público",
    description:
      "Fundamento teórico y práctico de la razón espectral horizontal/vertical para evaluación de sitio.",
    type: "scientific",
  },
  {
    name: "Nogoshi & Igarashi (1971)",
    href: "#",
    license: "Público",
    description: "Estimación de frecuencias predominantes a partir de espectros de respuesta.",
    type: "scientific",
  },
  {
    name: "SESAME — Guía HVSR (2004)",
    href: "#",
    license: "Público",
    description:
      "Directrices para adquisición y procesamiento de mediciones HVSR de microtremores.",
    type: "scientific",
  },
]

function LicenseBadge({ license }: { license: string }) {
  const configs = {
    MIT: {
      classes: "border-green-500/30 bg-green-500/10 text-green-400",
    },
    "Por-validar": {
      classes: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    },
    Público: {
      classes: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    },
  }
  const cfg = configs[license as keyof typeof configs] || configs["Por-validar"]
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs",
        "tracking-[0.08em] uppercase",
        cfg.classes
      )}
    >
      {license}
    </span>
  )
}

function SourceCard({ item }: { item: SourceItem }) {
  const IconMap = {
    repo: Code,
    scientific: BookOpen,
  }
  const Icon = IconMap[item.type]
  return (
    <motion.div
      className="group flex items-center justify-between gap-4 rounded-xl border border-border/20 bg-card p-4 transition-colors hover:bg-ink/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-5 w-5 text-cyan" />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white">{item.name}</span>
            <LicenseBadge license={item.license} />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
        </div>
      </div>
      <a
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="shrink-0 text-cyan opacity-60 transition-opacity group-hover:opacity-100"
        aria-label={`Ver ${item.name}`}
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    </motion.div>
  )
}

export function Referencias() {
  return (
    <section id="referencias" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Referencias"
          title="Fuentes y Licencias"
          subtitle="Proyectos de código abierto y literatura científica de referencia."
          delay={0}
        />

        {/* marquee of standards */}
        <motion.div
          className="mb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Marquee className="border-y border-border/10 py-3" pauseOnHover>
            {["MiniSEED", "FDSNStationXML", "Nakamura H/V", "SESAME 2004", "NEC-15", "Eurocódigo 8", "MASW", "HVSR", "STA/LTA", "FFT"].map((item) => (
              <span key={item} className="mx-6 font-mono text-sm tracking-[0.15em] text-muted-foreground uppercase">
                {item}
              </span>
            ))}
          </Marquee>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.1 },
            },
          }}
        >
          {REPOS.map((item) => (
            <SourceCard key={item.name} item={item} />
          ))}
          {SCIENTIFIC.map((item) => (
            <SourceCard key={item.name} item={item} />
          ))}
        </motion.div>

        {/* image credits */}
        <motion.div
          className="mt-12 border-t border-border/20 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="flex items-center gap-2 font-display text-sm font-bold text-white">
            <FileImage className="h-4 w-4 text-cyan" />
            Créditos de imágenes
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Las imágenes utilizadas correspondientes al ecosistema TremorSys (licencia MIT)
            y al estudio HVSR Promart-CityMall. Consulte{" "}
            <a
              href="https://github.com/sherckuith/HVSR-Promart-CityMall"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan underline"
            >
              ASSETS_MANIFEST
            </a>{" "}
            para el manifiesto completo de atribuciones.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
