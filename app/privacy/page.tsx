import { PageHero } from "@/components/page-hero"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pb-16">
      <PageHero title="Privacy Policy" trail="Privacy Policy" />
      <section className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            INGYJACKPOT CITYSLOTS values your privacy. This policy explains what data we collect, how we use it, and the
            choices you have.
          </p>
          <p>
            <strong className="text-foreground">Information we collect.</strong> Account details (name, email, phone),
            transaction history, and gameplay activity required to operate the service.
          </p>
          <p>
            <strong className="text-foreground">How we use it.</strong> To process deposits and withdrawals, prevent
            fraud, comply with legal obligations, and improve the platform.
          </p>
          <p>
            <strong className="text-foreground">Sharing.</strong> We never sell your personal information. We may share
            limited data with payment processors and identity verification providers as needed.
          </p>
          <p>
            <strong className="text-foreground">Your rights.</strong> You may request access, correction, or deletion of
            your data at any time by contacting support.
          </p>
        </div>
      </section>
    </main>
  )
}
