import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PageHero({
  title,
  breadcrumb,
}: {
  title: string
  breadcrumb: string
}) {
  return (
    <section className="casino-hero-bg border-b border-border/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-3 px-4 py-16 text-center sm:px-6 sm:py-20">
        <h1 className="font-heading text-5xl sm:text-6xl font-bold tracking-tight text-foreground drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-sm text-foreground/80">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ArrowRight className="size-4 text-primary" />
          <span className="text-muted-foreground">{breadcrumb}</span>
        </nav>
      </div>
    </section>
  )
}
