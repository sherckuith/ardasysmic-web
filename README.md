# ARDASYSMIC — Web de marca

Sitio web estático de **ARDASYSMIC LLC** (Análisis y Registro de Datos Sísmicos). Geosísmica · Instrumentación · Sismología Aplicada — Guayaquil, Ecuador.

## Stack

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS 4** + **shadcn/ui**
- **Magic UI** — 24 componentes (Bento Grid, Animated Beam, Dock, Marquee, Particles, etc.)
- **Motion** — animaciones con `prefers-reduced-motion` respetado
- **Export estático** (`output: 'export'`) → servido con **nginx**

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
```

El export estático se genera en `out/`. Para servirlo localmente:

```bash
npx serve out -l 3000
```

## Despliegue (Docker)

```bash
docker build -t ardasysmic-web .
docker run -p 8080:8080 ardasysmic-web
```

El Dockerfile es multistage: `node:20-alpine` (build) → `nginx:1.27-alpine` (serve, usuario no-root, gzip, headers de seguridad).

## Estructura

```
src/
  app/
    layout.tsx          # Root layout (lang="es", metadata, OG)
    page.tsx            # Página principal (client)
  components/
    BrandIntro.tsx      # Intro de marca (3.5s, una vez por sesión)
    BrandSymbol.tsx     # Símbolo circular bicolor SVG
    SeismicTrace.tsx    # Sismograma SVG animado
    NavigationDock.tsx  # Dock de navegación (Magic UI)
    ScrollProgress.tsx  # Barra de progreso de scroll
    Footer.tsx          # Footer con sismograma
    Providers.tsx       # Theme provider (next-themes)
    magicui/            # 24 componentes Magic UI
    sections/           # Inicio, Equipos, SoftwareDatos, Flujo, Autor, Referencias, Contacto
    ui/                 # Button, Icons (shadcn/ui)
  styles/
    globals.css         # Design tokens (Tailwind 4 @theme)
public/
  brand/                # Logo, favicon, OG image, splash
  images/               # Imágenes de equipos y software (por ASSETS_MANIFEST.md)
  fonts/                # Space Grotesk (400-800)
```

## Contenido

- **Equipos**: DAS 3D (DAS-03-blue) y DAS 4D (DAS-04-yellow, DAS-04-black) — canales EHZ/ENZ/ENN/ENE, MiniSEED, Nakamura/HVSR, MASW
- **Software**: TremorSys (Rust, MIT), MotusWave v2 (MATLAB, por-validar), FDSNStation-XML (Rust, MIT), Infonak (skill IA, por-validar), HVSR Promart-CityMall (por-validar)
- **Autor**: Ing. Angel David Yaguana Hernandez, Dr. hc — Fundador y Gerente General de ARDASYSMIC LLC
- **Contacto**: Solo LinkedIn y GitHub (sin teléfonos ni correos)

## Licencias

- **TremorSys** y **FDSNStation-XML**: MIT
- **MotusWave**, **HVSR-Promart-CityMall**, **DAS-Ardasysmic**, **Infonak**: por-validar (proyecto público, consultar licencia)
- **Fuentes científicas**: Nakamura (1989, 2000), Nogoshi & Igarashi (1971), SESAME (2004)

## PI — Regla crítica

La web explica **QUÉ** hacen los equipos/programas, **NUNCA CÓMO**. Prohibido: hardware base, componentes, esquemáticos, PCB, firmware, decodificación de formatos propios, algoritmos, calibraciones, parámetros internos, configuraciones internas (RS3D/RS4D, perfiles de fabricación, IDs internos), código de repos privados, evidencias internas.
