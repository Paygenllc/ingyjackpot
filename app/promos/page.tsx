"use client"

import { useState } from "react"
import { PageHero } from "@/components/page-hero"
import { cn } from "@/lib/utils"

const TABS = ["Active Promos", "Daily Promos", "Weekly", "Monthly"] as const
type Tab = (typeof TABS)[number]

export default function PromosPage() {
  const [active, setActive] = useState<Tab>("Active Promos")

  return (
    <main className="min-h-screen pb-16">
      <PageHero title="Promos" trail="Promos" />

      <section className="mx-auto max-w-5xl px-4 py-12 lg:px-8">
        <div className="rounded-2xl border border-primary/30 bg-card/40 p-3 shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={cn(
                  "rounded-md px-4 py-3 font-display text-xs uppercase tracking-widest transition md:text-sm",
                  active === tab
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_25px_rgba(217,70,239,0.6)]"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
            No promos available for this category
          </h2>
          <p className="mt-3 text-base text-muted-foreground">Check back soon for new offers!</p>
        </div>
      </section>
    </main>
  )
}
