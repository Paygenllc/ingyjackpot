import Link from "next/link"
import {
  Check,
  Copy,
  Gamepad2,
  KeyRound,
  Minus,
  Plus,
  RefreshCw,
  RotateCw,
  User as UserIcon,
} from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"

const USER_GAMES = [
  {
    name: "Golden Dragon",
    initials: "GD",
    username: "M-392-788-624",
    balance: 0,
    cap: 0,
    active: true,
  },
]

export default function GamesPage() {
  return (
    <>
      <PageHero title="My Games" breadcrumb="Game accounts" />

      <section className="mx-auto w-full max-w-5xl px-3 py-8 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {USER_GAMES.map((game) => (
            <article
              key={game.name}
              className="rounded-2xl border border-border/50 bg-card/60 p-4 shadow-lg shadow-primary/5 sm:p-6"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="grid place-items-center size-12 shrink-0 rounded-xl bg-gradient-to-br from-amber-500/40 to-amber-900/40 ring-1 ring-amber-400/40 sm:size-16">
                  <span className="font-heading text-base font-bold text-amber-200 sm:text-xl">
                    {game.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 sm:text-[11px]">
                    <Check className="size-3" />
                    Active
                  </p>
                  <h2 className="mt-1 font-heading text-lg font-bold uppercase truncate sm:text-2xl">
                    {game.name}
                  </h2>
                  <p className="mt-1 text-sm sm:mt-2">
                    <span className="font-semibold text-primary">
                      ${game.balance.toFixed(2)}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      / ${game.cap.toFixed(2)}
                    </span>
                  </p>
                </div>
                <Button variant="outline" size="sm" className="rounded-full shrink-0">
                  <RefreshCw className="size-3.5" />
                  <span className="hidden sm:inline">Refresh</span>
                </Button>
              </div>

              <div className="mt-4 rounded-xl border border-border/50 bg-background/40 p-3 sm:mt-5 sm:p-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <UserIcon className="size-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">Username:</span>
                  <span className="font-medium truncate">{game.username}</span>
                  <button
                    type="button"
                    className="ml-auto rounded-md p-1 hover:bg-card shrink-0"
                    aria-label="Copy username"
                  >
                    <Copy className="size-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm">
                  <KeyRound className="size-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">Password:</span>
                  <span className="font-medium tracking-widest">***</span>
                  <button
                    type="button"
                    className="ml-auto rounded-md p-1 hover:bg-card shrink-0"
                    aria-label="Copy password"
                  >
                    <Copy className="size-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    View Password
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCw className="size-3.5" />
                    Reset Password
                  </Button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                <Button className="rounded-xl bg-primary hover:brightness-110 neon-button-glow">
                  <Plus className="size-4" />
                  Add Credits
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <Minus className="size-4" />
                  Withdraw
                </Button>
              </div>

              <Button className="mt-3 w-full rounded-xl bg-gradient-to-r from-fuchsia-500/80 to-violet-500/80 hover:brightness-110">
                <Gamepad2 className="size-4" />
                Play Now
              </Button>
            </article>
          ))}

          {/* Add new game card */}
          <Link
            href="/"
            className="group relative grid place-items-center rounded-2xl border-2 border-dashed border-border/60 bg-card/30 p-6 transition-colors hover:border-primary/60 hover:bg-card/50 sm:p-10"
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <p className="text-base font-semibold sm:text-lg">+ Add new game</p>
              <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground neon-button-glow group-hover:brightness-110 transition sm:size-16">
                <Plus className="size-5 sm:size-7" />
              </span>
            </div>
          </Link>
        </div>

        {/* Pagination strip */}
        <nav
          aria-label="Pagination"
          className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground sm:mt-10"
        >
          <span className="rounded-md border border-border/50 bg-card/50 px-3 py-1">20</span>
          <span>(1 total)</span>
          <span className="ml-3">Page</span>
          <button className="rounded-md border border-border/50 bg-primary/90 text-primary-foreground px-3 py-1 font-semibold">
            1
          </button>
        </nav>
      </section>
    </>
  )
}
