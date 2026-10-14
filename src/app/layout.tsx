import type { Metadata, Viewport } from "next"
import "@/styles/globals.css"
import { Providers } from "@/components/Providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://ardasysmic.com"),
  title: "ARDASYSMIC — Sistemas de adquisición sísmica",
  description:
    "ARDASYSMIC (Análisis y Registro de Datos Sísmicos). Geosísmica, instrumentación y sismología aplicada. Equipos DAS 3D y DAS 4D. Guayaquil, Ecuador.",
  alternates: {
    canonical: "https://ardasysmic.com",
  },
  icons: {
    icon: "/brand/favicon.webp",
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: "ARDASYSMIC — Sistemas de adquisición sísmica",
    description:
      "ARDASYSMIC (Análisis y Registro de Datos Sísmicos). Geosísmica, instrumentación y sismología aplicada. Equipos DAS 3D y DAS 4D. Guayaquil, Ecuador.",
    images: [{ url: "/brand/og-image.webp" }],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground min-h-screen font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
