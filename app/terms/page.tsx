import { PageHero } from "@/components/page-hero"

export default function TermsPage() {
  return (
    <main className="min-h-screen pb-16">
      <PageHero title="Terms and Conditions" trail="Terms and Conditions" />
      <section className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Welcome to INGYJACKPOT CITYSLOTS. By accessing or using our platform, you agree to be bound by these
            Terms and Conditions. Please read them carefully before using the service.
          </p>
          <p>
            You must be of legal gambling age in your jurisdiction to register and play. INGYJACKPOT CITYSLOTS reserves
            the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.
          </p>
          <p>
            All purchases of in-game balance are final. Withdrawals are subject to verification, daily limits, and tier
            level. Bonus credits may have wagering requirements as outlined in individual promotions.
          </p>
          <p>
            INGYJACKPOT CITYSLOTS is provided on an &quot;as is&quot; basis. We make no warranties regarding
            availability or fitness for a particular purpose. To the fullest extent permitted by law, our liability is
            limited to the amount paid into your account in the prior 30 days.
          </p>
          <p>
            We may update these terms at any time. Continued use of the platform after changes are posted constitutes
            acceptance of the revised terms.
          </p>
        </div>
      </section>
    </main>
  )
}
