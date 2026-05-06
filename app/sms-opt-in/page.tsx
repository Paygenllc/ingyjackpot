import { PageHero } from "@/components/page-hero"

export default function SmsOptInPage() {
  return (
    <main className="min-h-screen pb-16">
      <PageHero title="SMS Opt In Policy" trail="SMS Opt In Policy" />
      <section className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            By opting in to receive SMS messages from INGYJACKPOT CITYSLOTS, you consent to receive transactional and
            promotional text messages at the phone number provided.
          </p>
          <p>
            Message frequency varies. Message and data rates may apply based on your mobile carrier plan. Consent is not
            a condition of any purchase.
          </p>
          <p>
            <strong className="text-foreground">Opt-out:</strong> Reply <strong className="text-foreground">STOP</strong>{" "}
            to any message to unsubscribe at any time.
          </p>
          <p>
            <strong className="text-foreground">Help:</strong> Reply <strong className="text-foreground">HELP</strong> for
            customer support, or contact us at support@ingyjackpot.com.
          </p>
          <p>
            Your phone number and SMS consent will never be sold to third parties for marketing purposes. See our
            Privacy Policy for full details.
          </p>
        </div>
      </section>
    </main>
  )
}
