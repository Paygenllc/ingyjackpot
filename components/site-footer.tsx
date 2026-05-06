import Image from "next/image"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"

const LEGAL_LINKS = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "SMS Opt In Policy", href: "/sms-opt-in" },
]

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9V12.06h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/30 mt-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-12">
        <Link
          href="/"
          aria-label="INGYJACKPOT CITYSLOTS"
          className="rounded-2xl overflow-hidden ring-1 ring-border/50"
        >
          <Image
            src="/logo.jpeg"
            alt="INGYJACKPOT CITYSLOTS logo"
            width={140}
            height={140}
            className="size-24 sm:size-32"
          />
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground sm:gap-6 sm:text-sm">
          {LEGAL_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/90">
            Follow Us
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm hover:bg-card transition-colors"
            >
              <InstagramIcon className="size-4" />
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm hover:bg-card transition-colors"
            >
              <FacebookIcon className="size-4" />
              Facebook
            </a>
          </div>
        </div>

        <Separator className="bg-border/40" />

        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.25em]">
          Copyright {new Date().getFullYear()} &copy; INGYJACKPOT CITYSLOTS, LLC.
        </p>
      </div>
    </footer>
  )
}
