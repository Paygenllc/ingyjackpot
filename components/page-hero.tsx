import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PageHero({
  title,
  breadcrumb,
  trail,
}: {
  title: string
  breadcrumb?: string
  trail?: string
}) {
  const label = breadcrumb ?? trail ?? ""
  return (
    <section className="casino-hero-bg border-b border-border/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-2 px-4 py-10 text-center sm:gap-3 sm:px-6 sm:py-20">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-foreground/80 sm:gap-3 sm:text-sm">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ArrowRight className="size-3.5 sm:size-4 text-primary" />
          <span className="text-muted-foreground">{label}</span>
        </nav>
      </div>
    </section>
  )
}
