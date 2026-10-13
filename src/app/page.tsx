"use client"

import { motion } from "motion/react"
import { BrandIntro } from "@/components/BrandIntro"
import { NavigationDock } from "@/components/NavigationDock"
import { Footer } from "@/components/Footer"
import { Inicio } from "@/components/sections/Inicio"
import { Equipos } from "@/components/sections/Equipos"
import { SoftwareDatos } from "@/components/sections/SoftwareDatos"
import { Flujo } from "@/components/sections/Flujo"
import { Autor } from "@/components/sections/Autor"
import { Referencias } from "@/components/sections/Referencias"
import { Contacto } from "@/components/sections/Contacto"

export default function HomePage() {
  return (
    <>
      {/* Brand intro — shows once per session */}
      <BrandIntro />

      {/* Scroll to top button (client) */}
      <ScrollToTop />

      <main>
        <Inicio />

        <Equipos />

        <div className="relative py-20 md:py-28">
          <div
            className="absolute inset-0 -z-10 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #00A8FF 1px, transparent 1px),
                linear-gradient(to bottom, #00A8FF 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <SoftwareDatos />
        </div>

        <div className="relative">
          <DotPatternBackground />
          <Flujo />
        </div>

        <Autor />

        <Referencias />

        <Contacto />
      </main>

      <Footer />
      <NavigationDock />
    </>
  )
}

function DotPatternBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(#00A8FF 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    />
  )
}

function ScrollToTop() {
  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-40 rounded-full border border-border/30 bg-ink/40 p-2 text-muted-foreground hover:text-foreground"
      aria-label="Volver arriba"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </motion.button>
  )
}
