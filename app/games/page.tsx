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

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {USER_GAMES.map((game) => (
            <article
              key={game.name}
              className="rounded-2xl border border-border/50 bg-card/60 p-6 shadow-lg shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="grid place-items-center size-16 rounded-xl bg-gradient-to-br from-amber-500/40 to-amber-900/40 ring-1 ring-amber-400/40">
                  <span className="font-heading text-xl font-bold text-amber-200">
                    {game.initials}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                    <Check className="size-3" />
                    Active
                  </p>
                  <h2 className="mt-1 font-heading text-2xl font-bold uppercase">
                    {game.name}
                  </h2>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold text-primary">
                      ${game.balance.toFixed(2)}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      / ${game.cap.toFixed(2)}
                    </span>
                  </p>
                </div>
                <Button variant="outline" size="sm" className="rounded-full">
                  <RefreshCw className="size-3.5" />
                  Refresh
                </Button>
              </div>

              <div className="mt-5 rounded-xl border border-border/50 bg-background/40 p-4">
                <div className="flex items-center gap-2 text-sm">
                  <UserIcon className="size-4 text-primary" />
                  <span className="text-muted-foreground">Username:</span>
                  <span className="font-medium">{game.username}</span>
                  <button
                    type="button"
                    className="ml-auto rounded-md p-1 hover:bg-card"
                    aria-label="Copy username"
                  >
                    <Copy className="size-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <KeyRound className="size-4 text-primary" />
                  <span className="text-muted-foreground">Password:</span>
                  <span className="font-medium tracking-widest">***</span>
                  <button
                    type="button"
                    className="ml-auto rounded-md p-1 hover:bg-card"
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

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button className="rounded-xl bg-primary hover:brightness-110 neon-button-glow">
                  <Plus className="size-4" />
                  Add Credits
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <Minus className="size-4" />
                  Withdraw Credits
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
            className="group relative grid place-items-center rounded-2xl border-2 border-dashed border-border/60 bg-card/30 p-10 transition-colors hover:border-primary/60 hover:bg-card/50"
          >
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg font-semibold">+ Add new game</p>
              <span className="grid size-16 place-items-center rounded-2xl bg-primary text-primary-foreground neon-button-glow group-hover:brightness-110 transition">
                <Plus className="size-7" />
              </span>
            </div>
          </Link>
        </div>

        {/* Pagination strip */}
        <nav
          aria-label="Pagination"
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
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
