"use client"

import { motion } from "motion/react"
import { BrandSymbol } from "@/components/BrandSymbol"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  delay?: number
}

function SectionHeader({ eyebrow, title, subtitle, delay = 0 }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && (
        <p className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-bold tracking-[0.04em] uppercase mt-2 text-3xl sm:text-4xl md:text-5xl">
        <span className="text-white">{title.split(" ").slice(0, -1).join(" ")}</span>{" "}
        <span className="text-secondary">{title.split(" ").slice(-1).join(" ")}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

interface EquipoCardProps {
  name: string
  model: string
  dimensions: string
  image?: string
  imageLight?: string
  channels: string[]
  format: string
  views: string[]
  description: string[]
  delay?: number
}

function EquipoCard({
  name,
  model,
  dimensions,
  image,
  imageLight,
  channels,
  format,
  views,
  description,
  delay = 0,
}: EquipoCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative col-span-1 flex flex-col overflow-hidden rounded-2xl border border-border/30",
        "bg-card shadow-inner"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {image && (
          <img
            src={image}
            alt={`Equipo ${name} — ${model}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        {!image && (
          <div className="flex h-full w-full items-center justify-center bg-ink/30">
            <BrandSymbol size={100} animate={false} showRings={false} />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="font-display text-xs font-bold tracking-[0.12em] text-cyan uppercase">
            {model}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-bold tracking-[0.04em] uppercase text-white">
          {name}
        </h3>
        <p className="mt-1 font-mono text-xs text-muted-foreground uppercase">
          {dimensions}
        </p>

        <div className="mt-4 space-y-2.5 text-sm">
          <div>
            <span className="font-mono text-xs font-semibold text-cyan uppercase">
              Canales
            </span>
            <p className="mt-0.5 text-muted-foreground">{channels.join(", ")}</p>
          </div>
          <div>
            <span className="font-mono text-xs font-semibold text-cyan uppercase">
              Formato
            </span>
            <p className="mt-0.5 text-muted-foreground">{format}</p>
          </div>
          <div>
            <span className="font-mono text-xs font-semibold text-cyan uppercase">
              Vistas
            </span>
            <p className="mt-0.5 text-muted-foreground">{views.join(", ")}</p>
          </div>
        </div>

        <div className="mt-4 space-y-1 text-xs text-muted-foreground">
          {description.map((d, i) => (
            <p key={i}>• {d}</p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Equipos() {
  const equipos: EquipoCardProps[] = [
    {
      name: "DAS 3D",
      model: "DAS-03-blue",
      dimensions: "576 × 416",
      image: "/images/das-ardasysmic/logo-das.jpg",
      channels: ["EHZ"],
      format: "MiniSEED",
      views: ["Nakamura / HVSR", "MASW"],
      description: [
        "Adquisición sísmica de 3 componentes",
        "Visualización en campo en tiempo real",
        "Segmentación de trazas para análisis",
      ],
      delay: 0.1,
    },
    {
      name: "DAS 4D",
      model: "DAS-04-yellow",
      dimensions: "640 × 480",
      image: "/images/das-ardasysmic/logo-das.jpg",
      channels: ["EHZ", "ENZ", "ENN", "ENE"],
      format: "MiniSEED",
      views: ["Nakamura / HVSR", "MASW"],
      description: [
        "Adquisición sísmica de 4 componentes",
        "Visualización en campo en tiempo real",
        "Segmentación de trazas para análisis",
      ],
      delay: 0.2,
    },
  ]

  return (
    <section
      id="equipos"
      className="relative py-20 md:py-28"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Equipos DAS"
          title="Equipos de Adquisición Sísmica"
          subtitle="Sistemas DAS 3D y DAS 4D para registro de vibraciones ambienatles y eventos sísmicos."
          delay={0}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {equipos.map((e, i) => (
            <EquipoCard key={e.model} {...e} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { SectionHeader }
