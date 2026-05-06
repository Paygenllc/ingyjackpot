import { PageHero } from "@/components/page-hero"

const SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    body: [
      "These rules keep the game fair, secure, and fun for everyone. By playing at INGYJACKPOT CITYSLOTS, you agree to follow and respect the house rules listed on this page.",
    ],
  },
  {
    id: "eligibility-accounts",
    title: "1. Eligibility & Accounts",
    body: [
      "- You must be of legal gambling age in your jurisdiction.",
      "- Only one account per player is allowed. Duplicate or shared accounts may be closed.",
      "- Keep your login details secret. You are responsible for all activity on your account.",
    ],
  },
  {
    id: "fair-play",
    title: "2. Fair Play",
    body: [
      "- Any form of cheating, collusion, or use of bots is strictly prohibited.",
      "- We reserve the right to review gameplay and void suspicious bets or winnings.",
      "- Abuse of bonuses or promotions can lead to bonus removal and account review.",
    ],
  },
  {
    id: "deposit-redeem",
    title: "3. Deposit/Redeem Rules",
    body: [
      "- Minimum withdrawal $25",
      "- Minimum deposit $10",
      "- Max withdrawal based on tier level",
      "- Withdrawal open 24 hours",
    ],
  },
  {
    id: "responsible",
    title: "4. Responsible Gaming",
    body: [
      "- Never gamble with money you cannot afford to lose.",
      "- You may request limits, cool-offs, or self-exclusion by contacting support.",
      "- INGYJACKPOT CITYSLOTS supports safe and responsible gaming at all times.",
    ],
  },
  {
    id: "system-issues",
    title: "5. Game & System Issues",
    body: [
      "- If a game malfunctions, affected bets may be voided and stakes returned.",
      "- In case of disputes, our server records and game logs are final.",
      "- We are not responsible for losses due to connection or device issues on your side.",
    ],
  },
  {
    id: "changes",
    title: "6. Changes to Rules",
    body: [
      "- Rules may be updated from time to time.",
      "- Continued use of the site after updates means you accept the new rules.",
    ],
  },
]

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility-accounts", label: "Eligibility & Accounts" },
  { id: "fair-play", label: "Fair Play" },
  { id: "deposit-redeem", label: "Deposit/Redeem Rules" },
  { id: "responsible", label: "Responsible Gaming" },
  { id: "system-issues", label: "Game & System Issues" },
  { id: "changes", label: "Changes to Rules" },
]

export default function RulesPage() {
  return (
    <main className="min-h-screen pb-16">
      <PageHero title="Casino Rules" trail="Rules" />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="hidden lg:block">
          <nav aria-label="Rules sections" className="sticky top-24 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-md border border-transparent px-4 py-3 text-sm text-muted-foreground transition hover:border-primary/40 hover:bg-card/40 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="flex flex-col gap-10">
          {SECTIONS.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground md:text-3xl">
                {section.title}
              </h2>
              <div className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-muted-foreground">
                {section.body.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
