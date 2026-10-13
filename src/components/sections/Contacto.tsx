"use client"

import { motion } from "motion/react"
import { SectionHeader } from "@/components/sections/Equipos"
import { MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

export function Contacto() {
  const contacts = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/angeldavidyaguanahernandez",
      icon: LinkedinIcon,
      color: "#0A66C2",
    },
    {
      label: "GitHub",
      href: "https://github.com/sherckuith",
      icon: GithubIcon,
      color: "#FFFFFF",
    },
  ]

  return (
    <section id="contacto" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Contacto"
          title="Conectar"
          subtitle="Solo canales profesionales. No se publican teléfonos ni correos."
          delay={0}
        />

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          {contacts.map((c) => {
            const Icon = c.icon
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex items-center gap-3 rounded-xl border border-border/30",
                  "bg-card px-7 py-3.5 text-decoration-none",
                  "transition-all duration-300 hover:border-cyan/50 hover:bg-ink/30"
                )}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Icon className="h-5 w-5" style={{ color: c.color }} />
                <span className="font-display font-bold text-white">{c.label}</span>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <MapPin className="h-4 w-4 text-cyan" />
          <span>Guayaquil, Ecuador</span>
        </motion.div>
      </div>
    </section>
  )
}
