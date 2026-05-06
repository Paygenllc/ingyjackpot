import { Plus } from "lucide-react"

import type { Game } from "@/lib/games"
import { cn } from "@/lib/utils"

export function GameTile({ game }: { game: Game }) {
  return (
    <article
      className={cn(
        "group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30",
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
        <span className="absolute right-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground neon-button-glow">
          {game.badge}
        </span>
      )}

      {/* Title */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex-1 grid place-items-center px-2 text-center">
          <h3 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
            {game.name}
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          <p className="line-clamp-2 text-center text-xs text-white/85">{game.tagline}</p>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/95 px-4 py-2 text-sm font-semibold text-primary-foreground neon-button-glow hover:brightness-110 transition"
          >
            <Plus className="size-4" />
            Add Account
          </button>
        </div>
      </div>
    </article>
  )
}
