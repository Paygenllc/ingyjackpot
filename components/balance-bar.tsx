import Link from "next/link"

export function BalanceBar() {
  return (
    <div className="balance-bar-bg border-y border-border/40">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 py-2 text-center text-xs sm:py-2.5 sm:text-sm sm:px-6">
        <span className="text-foreground/90">Your balance is</span>
        <span className="font-semibold text-foreground">$0.00.</span>
        <Link
          href="/purchase"
          className="font-semibold text-amber-300 underline-offset-4 hover:underline"
        >
          Purchase more balance to continue playing
        </Link>
      </div>
    </div>
  )
}
