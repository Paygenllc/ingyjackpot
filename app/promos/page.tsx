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

      <section className="mx-auto max-w-5xl px-3 py-8 sm:px-4 sm:py-12 lg:px-8">
        <div className="rounded-2xl border border-primary/30 bg-card/40 p-2 shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur sm:p-3">
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:grid-cols-4">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={cn(
                  "rounded-md px-2 py-2.5 font-display text-[10px] uppercase tracking-wider transition sm:px-4 sm:py-3 sm:text-xs sm:tracking-widest md:text-sm",
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

        <div className="mt-12 text-center sm:mt-16">
          <h2 className="font-display text-xl font-bold uppercase tracking-wider text-foreground text-balance sm:text-3xl md:text-4xl">
            No promos available for this category
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">Check back soon for new offers!</p>
        </div>
      </section>
    </main>
  )
}
