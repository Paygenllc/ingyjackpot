"use client"

import Image from "next/image"
import { Plus } from "lucide-react"

import type { Game } from "@/lib/games"
import { cn } from "@/lib/utils"
import { useSession } from "@/lib/auth"

export function GameTile({ game }: { game: Game }) {
  const { isAuthenticated } = useSession()

  return (
    <article
      className={cn(
        "group relative aspect-[4/5] overflow-hidden rounded-xl border-2 border-primary/70 bg-gradient-to-br shadow-[0_0_0_1px_rgba(217,70,239,0.35),0_0_18px_-2px_rgba(217,70,239,0.55)] transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-[0_0_0_1px_rgba(217,70,239,0.6),0_0_28px_-2px_rgba(217,70,239,0.85)] sm:rounded-2xl",
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
        <span className="absolute right-2 top-2 z-20 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary-foreground neon-button-glow sm:right-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
          {game.badge}
        </span>
      )}

      {/* Artwork — fills the entire card so layout never shifts */}
      <div className="absolute inset-0 z-10 grid place-items-center p-3 sm:p-4">
        {game.image ? (
          <Image
            src={game.image}
            alt={`${game.name} logo`}
            width={320}
            height={320}
            className="max-h-full max-w-full object-contain drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-[1.04]"
          />
        ) : (
          <h3 className="text-center font-heading text-base font-extrabold uppercase tracking-tight text-white text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-2xl">
            {game.name}
          </h3>
        )}
      </div>

      {/* Bottom overlay — tagline + (when logged in) Add Account button.
          Positioned absolutely so the card height never changes. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col items-stretch gap-1.5 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-2.5 pb-2.5 pt-6 sm:px-3 sm:pb-3 sm:pt-8">
        <p className="line-clamp-2 text-center text-[10px] leading-tight text-white/90 sm:text-xs">
          {game.tagline}
        </p>
        {isAuthenticated && (
          <button
            type="button"
            className="pointer-events-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-primary/95 px-2.5 py-1.5 text-[11px] font-semibold text-primary-foreground neon-button-glow hover:brightness-110 transition sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
          >
            <Plus className="size-3.5 sm:size-4" />
            Add Account
          </button>
        )}
      </div>
    </article>
  )
}
