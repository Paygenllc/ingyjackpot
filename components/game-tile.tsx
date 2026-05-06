import { Plus } from "lucide-react"

import type { Game } from "@/lib/games"
import { cn } from "@/lib/utils"

export function GameTile({ game }: { game: Game }) {
  return (
    <article
      className={cn(
        "group relative aspect-[4/5] overflow-hidden rounded-xl border border-border/40 bg-gradient-to-br p-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 sm:rounded-2xl sm:p-4",
        game.gradient,
      )}
    >
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* Glow */}
      <div className="pointer-events-none absolute -top-12 left-1/2 size-44 -translate-x-1/2 rounded-full bg-white/20 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />

      {/* Badge */}
      {game.badge && (
        <span className="absolute right-2 top-2 z-10 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary-foreground neon-button-glow sm:right-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
          {game.badge}
        </span>
      )}

      {/* Title */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex-1 grid place-items-center px-1 text-center sm:px-2">
          <h3 className="font-heading text-base font-extrabold uppercase tracking-tight text-white text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-2xl">
            {game.name}
          </h3>
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <p className="line-clamp-2 text-center text-[10px] text-white/85 sm:text-xs">{game.tagline}</p>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary/95 px-2.5 py-1.5 text-[11px] font-semibold text-primary-foreground neon-button-glow hover:brightness-110 transition sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
          >
            <Plus className="size-3.5 sm:size-4" />
            Add Account
          </button>
        </div>
      </div>
    </article>
  )
}
