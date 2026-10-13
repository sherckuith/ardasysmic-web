"use client"

import Link from "next/link"
import { Home, Package, Code, GitBranch, User, BookOpen, Mail } from "lucide-react"
import { Dock, DockIcon } from "@/components/magicui/dock"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#inicio", label: "Inicio", icon: Home },
  { href: "#equipos", label: "Equipos", icon: Package },
  { href: "#software-datos", label: "Software", icon: Code },
  { href: "#flujo", label: "Flujo", icon: GitBranch },
  { href: "#autor", label: "Autor", icon: User },
  { href: "#referencias", label: "Referencias", icon: BookOpen },
  { href: "#contacto", label: "Contacto", icon: Mail },
]

interface NavigationDockProps {
  className?: string
}

export function NavigationDock({ className }: NavigationDockProps) {
  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        "pointer-events-auto fixed bottom-6 left-1/2 z-40 -translate-x-1/2",
        "md:bottom-8",
        className
      )}
    >
      <Dock
        className="bg-ink/50 border border-border/30"
        iconSize={44}
        iconMagnification={64}
        iconDistance={120}
      >
        {navItems.map((item) => (
          <DockIcon key={item.href} title={item.label}>
            <Link
              href={item.href}
              aria-label={item.label}
              className={cn(
                "flex h-full w-full items-center justify-center rounded-full",
                "text-muted-foreground hover:text-foreground",
                "transition-colors duration-200"
              )}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          </DockIcon>
        ))}
      </Dock>
    </nav>
  )
}
