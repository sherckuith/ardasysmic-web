import * as React from "react"

/** Inline SVG icon replacements for brand icons removed from lucide-react v1. */
export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a2.4 2.4 0 0 0-.4-1.8 2.7 2.7 0 0 0-.6-1 4.4 4.4 0 0 0-1.3-.8 4.7 4.7 0 0 0-1.6-.3c-1.2 0-2.3.3-1.5 2-1 .5-1.5 1.3-1.8 2.2-.2.7-.2 1.5-.1 2.3v4h8Z" />
    <path d="M9 18c0 .5-.2 1.1-.5 1.5-.2.4 1 1.5 2 1.5 1 0 1.8-.5 2.2-1" />
    <path d="M13 14.5c0 1.1.4 2.1 1 2.5 1.2-.3 2-1 2-2.5 0-1.2-.4-2.1-1.2-2.8-.7-.6-1.7-1-2.8-1-1 0-2 .4-2.8 1-.7.7-1 1.6-1 2.8Z" />
    <circle cx="12" cy="9" r="3" />
    <path d="M12 6V3c-2 0-3 2-3 4 0 1.6.8 3 2 3.8 1.3-.4 2-.8 3-.8h.5c.5 0 1 .3 1 .8 0 .5-.5 1-1 1-.2 0-.4-.1-.5-.1" />
  </svg>
)
GithubIcon.displayName = "GithubIcon"

export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3Z" />
    <rect x="4" y="9" width="3" height="12" rx="1.5" />
    <rect x="15" y="9" width="4" height="12" rx="1.5" />
    <path d="M9 9V8a3 3 0 0 1 3-3 3 3 0 0 1 3 3v1" />
  </svg>
)
LinkedinIcon.displayName = "LinkedinIcon"
