import { PageHero } from "@/components/page-hero"
import { Check } from "lucide-react"

type Tier = {
  name: string
  subtitle: string
  ribbon: string
  star: string
  features: { key: string; value: string }[]
  flavor: string
}

const TIERS: Tier[] = [
  {
    name: "Diamond",
    subtitle: "Our elite VIP level — unmatched rewards and total flexibility.",
    ribbon: "from-sky-300 via-cyan-400 to-sky-600",
    star: "text-sky-200",
    features: [
      { key: "3× Promo Bonus", value: "on all qualifying wagers" },
      { key: "Daily Redeem Limit:", value: "$6000" },
      { key: "Redeem Availability:", value: "24/7 instant access" },
      { key: "Redeem Hours:", value: "Unlimited" },
    ],
    flavor: "Priority-level perks perfect for our highest-level players",
  },
  {
    name: "Gold",
    subtitle: "Premium benefits for dedicated players.",
    ribbon: "from-yellow-300 via-amber-400 to-orange-500",
    star: "text-yellow-200",
    features: [
      { key: "2× Promo Bonus", value: "Bonus points is paid for times for the tier" },
      { key: "Daily Redeem Limit:", value: "$1000" },
      { key: "Redeem Availability:", value: "24/7 instant access" },
      { key: "Redeem Hours:", value: "Unlimited" },
    ],
    flavor: "Enjoy reliable rewards with no time restrictions",
  },
  {
    name: "Silver",
    subtitle: "Strong rewards with a flexible redemption schedule.",
    ribbon: "from-slate-200 via-zinc-300 to-slate-500",
    star: "text-slate-100",
    features: [
      { key: "1.5× Promo Bonus", value: "Bonus points is paid for times for the tier" },
      { key: "Daily Redeem Limit:", value: "$750" },
      { key: "Redeem Availability:", value: "24/7 instant access" },
      { key: "Redeem Hours:", value: "11 AM – 9 PM EST daily" },
    ],
    flavor: "Great for regular players looking to boost their benefits",
  },
  {
    name: "Bronze",
    subtitle: "Start earning and redeeming from day one.",
    ribbon: "from-orange-400 via-amber-700 to-amber-900",
    star: "text-orange-200",
    features: [
      { key: "1× Promo Bonus", value: "" },
      { key: "Daily Redeem Limit:", value: "$500" },
      { key: "Redeem Hours:", value: "11 AM – 9 PM EST daily" },
    ],
    flavor: "A perfect starting point with room to grow",
  },
]

function TierBadge({ ribbon, star }: { ribbon: string; star: string }) {
  return (
    <div className="relative mx-auto h-20 w-16">
      <div
        className={`absolute left-1/2 top-0 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br ${ribbon} shadow-[0_0_20px_rgba(255,255,255,0.25)] ring-2 ring-black/40`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${star}`} aria-hidden="true">
          <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.77l-5.9 3.1 1.13-6.58L2.45 9.44l6.6-.96L12 2.5z" />
        </svg>
      </div>
      <div className={`absolute left-1/2 top-9 h-7 w-2.5 -translate-x-[16px] rotate-[8deg] bg-gradient-to-b ${ribbon}`} />
      <div className={`absolute left-1/2 top-9 h-7 w-2.5 translate-x-[6px] -rotate-[8deg] bg-gradient-to-b ${ribbon}`} />
    </div>
  )
}

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div className="rounded-2xl border border-primary/30 bg-card/40 p-5 shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur sm:p-8">
      <TierBadge ribbon={tier.ribbon} star={tier.star} />
      <h3 className="mt-3 text-center font-display text-2xl uppercase tracking-widest text-foreground sm:mt-4 sm:text-3xl">
        {tier.name}
      </h3>
      <p className="mt-2 text-center text-sm text-muted-foreground">{tier.subtitle}</p>

      <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <ul className="flex flex-col gap-4">
        {tier.features.map((f) => (
          <li key={f.key} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-semibold text-foreground">{f.key}</span>
              {f.value ? <span className="text-muted-foreground">{f.value}</span> : null}
            </div>
          </li>
        ))}
        <li className="flex items-start gap-3 text-sm">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
          <span className="text-muted-foreground">{tier.flavor}</span>
        </li>
      </ul>
    </div>
  )
}

export default function TiersPage() {
  return (
    <main className="min-h-screen pb-16">
      <PageHero title="Loyalty Rewards" trail="Loyalty Rewards" />

      <section className="mx-auto max-w-6xl px-3 py-8 sm:px-4 sm:py-12 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-foreground text-balance sm:text-3xl md:text-4xl">
            Welcome to our Loyalty Rewards Program
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
            Welcome to our Loyalty Rewards Program, where every wager earns points and every tier unlocks bigger
            bonuses, faster redemptions, and exclusive perks. Move up the levels to maximize your rewards!
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
          {TIERS.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary/40 bg-card/40 p-5 text-center shadow-[0_0_60px_rgba(217,70,239,0.2)] backdrop-blur sm:mt-12 sm:p-10">
          <h3 className="font-display text-xl uppercase tracking-widest text-foreground sm:text-2xl md:text-3xl">
            Level Up &amp; Earn More
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            Upgrade your tier as you play to unlock higher bonuses, larger daily redemption limits, and faster cashout
            access. The more you play, the more you earn.
          </p>
          <button className="mt-6 w-full rounded-md bg-gradient-to-r from-primary to-accent px-5 py-3 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_30px_rgba(217,70,239,0.6)] transition hover:brightness-110 sm:mt-8 sm:w-auto sm:px-8 sm:py-4 sm:text-sm">
            See your progress and current level here
          </button>
        </div>
      </section>
    </main>
  )
}
