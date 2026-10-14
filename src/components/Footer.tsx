"use client"

import { motion } from "motion/react"
import { SeismicTrace } from "@/components/SeismicTrace"

export function Footer() {
  return (
    <footer className="relative border-t border-border/20 bg-ink/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 border-border/10 py-4">
          <SeismicTrace width={480} height={40} animate={false} showEvent={false} />
        </div>

        <motion.div
          className="mt-4 flex flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground font-mono md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>
            © {new Date().getFullYear()} ARDASYSMIC LLC — Análisis y Registro de Datos Sísmicos
          </span>
          <span>Guayaquil, Ecuador</span>
        </motion.div>
      </div>
    </footer>
  )
}
