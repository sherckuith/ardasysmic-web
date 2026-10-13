import type { Metadata, Viewport } from "next"
import "@/styles/globals.css"
import { Providers } from "@/components/Providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://ardasysmic.com"),
  title: "ARDASYSMIC — Sistemas de adquisición sísmica",
  description:
    "ARDASYSMIC (Análisis y Registro de Datos Sísmicos). Geosísmica, instrumentación y sismología aplicada. Equipos DAS 3D y DAS 4D. Guayaquil, Ecuador.",
  icons: {
    icon: "/brand/favicon.png",
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: "ARDASYSMIC — Sistemas de adquisición sísmica",
    description:
      "ARDASYSMIC (Análisis y Registro de Datos Sísmicos). Geosísmica, instrumentación y sismología aplicada. Equipos DAS 3D y DAS 4D. Guayaquil, Ecuador.",
    images: [{ url: "/brand/og-image.png" }],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070F",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-background text-foreground min-h-screen font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
