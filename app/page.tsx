import Image from "next/image"

import { GAMES } from "@/lib/games"
import { GameTile } from "@/components/game-tile"
import { MarqueeBar } from "@/components/marquee-bar"

export default function HomePage() {
  return (
    <>
      {/* Welcome banner */}
      <section className="relative overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-3 pt-4 sm:px-6 sm:pt-6">
          <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-emerald-700/40 via-emerald-900/40 to-zinc-900/60 sm:rounded-3xl">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 35%), radial-gradient(circle at 80% 70%, rgba(255,200,80,0.18), transparent 35%)",
              }}
              aria-hidden
            />
            <div className="relative grid items-center gap-4 px-4 py-6 sm:grid-cols-[auto_1fr] sm:gap-6 sm:px-10 sm:py-14">
              <div className="mx-auto sm:mx-0 size-24 sm:size-40 rounded-2xl ring-1 ring-border/60 overflow-hidden shadow-xl sm:rounded-3xl">
                <Image
                  src="/logo.jpeg"
                  alt="INGYJACKPOT CITYSLOTS"
                  width={200}
                  height={200}
                  className="size-full object-cover"
                  priority
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[10px] uppercase tracking-[0.25em] text-amber-200 sm:text-xs sm:tracking-[0.3em]">
                  Welcome to your fortune
                </p>
                <h1 className="mt-1.5 font-heading text-2xl font-extrabold uppercase text-white text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)] sm:mt-2 sm:text-5xl">
                  INGYJACKPOT <span className="text-amber-300">CITYSLOTS</span>
                </h1>
                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/85 sm:mt-3 sm:text-base">
                  Premium online casino. Play your favorite slots and games, deposit
                  in seconds, cash out 24/7, and climb the loyalty tiers for bigger
                  bonuses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeBar />

      {/* Games grid */}
      <section className="mx-auto w-full max-w-7xl px-3 py-8 sm:px-6 sm:py-14">
        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]">
              Selection
            </p>
            <h2 className="mt-1 font-heading text-2xl font-bold uppercase sm:text-4xl">
              Games we offer
            </h2>
          </div>
          <p className="hidden sm:block max-w-md text-sm text-muted-foreground text-right">
            {GAMES.length} games available. New titles added regularly.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {GAMES.map((game) => (
            <GameTile key={game.slug} game={game} />
          ))}
        </div>
      </section>

      {/* Why play */}
      <section className="border-t border-border/40 bg-card/20">
        <div className="mx-auto w-full max-w-3xl px-4 py-10 text-center sm:px-6 sm:py-14">
          <h2 className="font-heading text-2xl font-bold uppercase text-foreground sm:text-3xl">
            Why play our casino
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground sm:mt-6">
            <p>
              Are you searching for the finest online casino to enjoy your gaming
              experience? If so, you have come to the right destination. INGYJACKPOT
              CITYSLOTS has established a strong reputation as a leading internet
              casino over the past seven years, and by choosing to play with us, you
              will soon understand the reasons behind our acclaim.
            </p>
            <p>
              There is no requirement to load funds through cashiers and endure
              lengthy waits. We have entirely removed the necessity for cashiers,
              placing greater emphasis on customer support when required. We offer a
              wide array of top-notch applications, including Fish Tables, Slots,
              and Card games. With numerous payment options available, we are
              accessible around the clock, 24/7.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
