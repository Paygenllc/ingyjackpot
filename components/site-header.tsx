"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  ChevronDown,
  Gauge,
  KeyRound,
  LogOut,
  Menu,
  Receipt,
  Repeat2,
  Ticket,
  User,
  Volume2,
  VolumeX,
  Wallet,
  WalletCards,
  Banknote,
  BarChart3,
} from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "MY GAMES", href: "/games" },
  { label: "LIVE CHAT", href: "/contact" },
  { label: "PROMOS", href: "/promos" },
  { label: "REVIEWS", href: "/reviews" },
  { label: "RULES", href: "/rules" },
  { label: "TIERS", href: "/tiers" },
]

const ACCOUNT_ITEMS = [
  { label: "Dashboard", icon: Gauge, href: "/dashboard" },
  { label: "Wallet", icon: Wallet, href: "/wallet" },
  { label: "Profile", icon: User, href: "/profile" },
  { label: "Purchase", icon: Ticket, href: "/purchase" },
  { label: "Cashout", icon: Banknote, href: "/cashout" },
  { label: "Withdraw Request", icon: Receipt, href: "/withdraw" },
  { label: "Transaction History", icon: Repeat2, href: "/transactions" },
  { label: "Statistics", icon: BarChart3, href: "/statistics" },
  { label: "Change Password", icon: KeyRound, href: "/change-password" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [muted, setMuted] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/85 bg-background/95">
      {/* Top bar */}
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
        <Link
          href="/"
          aria-label="INGYJACKPOT CITYSLOTS home"
          className="shrink-0 rounded-xl ring-1 ring-border/60 overflow-hidden bg-card/40"
        >
          <Image
            src="/logo.jpeg"
            alt="INGYJACKPOT CITYSLOTS logo"
            width={64}
            height={64}
            className="size-10 sm:size-14 object-cover"
            priority
          />
        </Link>

        {/* Mobile auth buttons */}
        <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
          <Link
            href="/sign-up"
            className="inline-flex h-9 items-center rounded-full bg-primary px-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary-foreground neon-button-glow hover:brightness-110 transition"
          >
            Join Now
          </Link>
          <Link
            href="/sign-in"
            className="inline-flex h-9 items-center rounded-full border border-primary/60 bg-card/60 px-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-foreground hover:bg-card transition"
          >
            Log In
          </Link>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open menu"
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card/60 hover:bg-card transition"
                >
                  <Menu className="size-4" />
                </button>
              }
            />
            <SheetContent side="right" className="w-[78%] max-w-sm p-0">
              <SheetHeader className="border-b border-border/40 px-5 py-4">
                <SheetTitle className="font-heading text-base uppercase tracking-[0.2em]">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 px-5 py-5">
                <div className="flex flex-col gap-2">
                  <Link
                    href="/wallet"
                    onClick={() => setSheetOpen(false)}
                    className="inline-flex h-11 items-center justify-between gap-2 rounded-full bg-primary/15 px-4 text-sm font-semibold text-foreground ring-1 ring-primary/40"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WalletCards className="size-4 text-primary" />
                      Balance
                    </span>
                    <span className="font-bold text-primary">$0.00</span>
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/purchase"
                      onClick={() => setSheetOpen(false)}
                      className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground neon-button-glow"
                    >
                      <Ticket className="size-3.5" />
                      Purchase
                    </Link>
                    <Link
                      href="/cashout"
                      onClick={() => setSheetOpen(false)}
                      className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-primary/60 bg-card/60 px-3 text-xs font-semibold uppercase tracking-wider"
                    >
                      <Banknote className="size-3.5" />
                      Cashout
                    </Link>
                  </div>
                </div>

                <nav aria-label="Mobile primary">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Browse
                  </p>
                  <ul className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => {
                      const isActive =
                        pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href))
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setSheetOpen(false)}
                            className={cn(
                              "flex h-11 items-center rounded-lg px-3 text-sm font-semibold tracking-wide uppercase transition",
                              isActive
                                ? "bg-primary/15 text-primary ring-1 ring-primary/40"
                                : "text-foreground/85 hover:bg-card",
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>

                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Account
                  </p>
                  <ul className="flex flex-col gap-1">
                    {ACCOUNT_ITEMS.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setSheetOpen(false)}
                            className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm transition hover:bg-card"
                          >
                            <Icon className="size-4 text-primary" />
                            {item.label}
                          </Link>
                        </li>
                      )
                    })}
                    <li>
                      <button
                        type="button"
                        className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm transition hover:bg-card"
                      >
                        <LogOut className="size-4 text-primary" />
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Action buttons — desktop */}
        <div className="hidden md:flex items-center gap-3">
          <ActionPill href="/purchase" icon={<Ticket className="size-4" />}>
            Purchase
          </ActionPill>
          <ActionPill href="/cashout" icon={<Banknote className="size-4" />}>
            Cashout
          </ActionPill>
          <ActionPill href="/wallet" icon={<WalletCards className="size-4" />}>
            <span className="font-semibold">$0.00</span>
            <span className="ml-1 text-[11px] uppercase tracking-wide opacity-80">USD</span>
          </ActionPill>
        </div>

        {/* Account dropdown — desktop only */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                type="button"
                aria-label="Account menu"
                className="hidden md:inline-flex h-11 items-center gap-2 rounded-full border border-border/60 bg-card/60 pl-2 pr-3 hover:bg-card transition"
              >
                <Avatar className="size-8 ring-2 ring-primary/60">
                  <AvatarFallback className="bg-primary/30 text-foreground text-xs">
                    PL
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Player</span>
                <ChevronDown className="size-4 opacity-70" />
              </button>
            }
          />
          <DropdownMenuContent align="end" sideOffset={8} className="w-60 p-2">
            <DropdownMenuGroup>
              {ACCOUNT_ITEMS.map((item) => {
                const Icon = item.icon
                return (
                  <DropdownMenuItem
                    key={item.label}
                    render={
                      <Link href={item.href} className="cursor-pointer gap-3 py-2.5 text-sm">
                        <Icon className="size-4 text-primary" />
                        {item.label}
                      </Link>
                    }
                  />
                )
              })}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-3 py-2.5 text-sm cursor-pointer">
              <LogOut className="size-4 text-primary" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          type="button"
          aria-label={muted ? "Unmute" : "Mute"}
          onClick={() => setMuted((m) => !m)}
          className="hidden md:inline-flex size-10 items-center justify-center rounded-full border border-border/60 bg-card/60 hover:bg-card transition"
        >
          {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative hidden md:inline-flex size-10 items-center justify-center rounded-full border border-border/60 bg-card/60 hover:bg-card transition"
        >
          <Bell className="size-4" />
          <Badge className="absolute -top-1 -right-1 size-5 p-0 flex items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
            1
          </Badge>
        </button>
      </div>

      {/* Bottom nav — desktop and tablets only */}
      <nav className="hidden md:block border-t border-border/40 bg-card/40">
        <ul
          className="mx-auto flex w-full max-w-7xl items-center gap-1 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative inline-flex h-11 items-center px-4 text-[13px] font-semibold tracking-[0.18em] uppercase whitespace-nowrap transition-colors",
                    isActive ? "text-primary" : "text-foreground/85 hover:text-foreground",
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary neon-button-glow" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile sub-nav (mirrors the reference screenshot) */}
      <nav className="md:hidden border-t border-border/40 bg-card/40">
        <ul
          className="mx-auto flex w-full items-center gap-0 overflow-x-auto px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Primary mobile"
        >
          {NAV_ITEMS.filter((i) => i.href !== "/" && i.href !== "/games").map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative inline-flex h-10 items-center px-3 text-[10px] font-semibold tracking-[0.18em] uppercase whitespace-nowrap transition-colors",
                    isActive ? "text-primary" : "text-foreground/85 hover:text-foreground",
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary neon-button-glow" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

function ActionPill({
  href,
  icon,
  children,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground neon-button-glow hover:brightness-110 transition"
    >
      <span className="grid place-items-center size-5 rounded-full bg-white/20">
        {icon}
      </span>
      {children}
    </Link>
  )
}
