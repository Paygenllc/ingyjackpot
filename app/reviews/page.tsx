"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import { PageHero } from "@/components/page-hero"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function ReviewsPage() {
  const [robot, setRobot] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!robot) {
      toast.error("Please confirm you are not a robot.")
      return
    }
    toast.success("Thanks for your review! We'll publish it after moderation.")
    ;(e.target as HTMLFormElement).reset()
    setRobot(false)
  }

  return (
    <main className="min-h-screen pb-16">
      <PageHero title="Reviews" trail="Client experiences" />

      <section className="mx-auto max-w-3xl px-3 py-8 text-center sm:px-4 sm:py-12 lg:px-8">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-primary sm:text-3xl md:text-4xl">
          Client Experiences
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
          At INGYJACKPOT CITYSLOTS, we are committed to providing the best possible experience for our customers.
          We value your feedback and continuously strive to improve our products and services.
        </p>

        <p className="mt-8 text-sm text-muted-foreground sm:mt-10">
          No approved reviews yet. Be the first to leave one below.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-3 sm:px-4 lg:px-8">
        <div className="rounded-2xl border border-primary/40 bg-card/40 p-5 shadow-[0_0_50px_rgba(217,70,239,0.2)] backdrop-blur sm:p-8">
          <h3 className="text-center font-display text-xl uppercase tracking-wider text-primary sm:text-2xl">Leave a Review</h3>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Please write a few words about our services and how professional and legitimate we are.
          </p>

          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="reviewer-name" className="text-xs font-semibold uppercase tracking-widest text-foreground/90">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input id="reviewer-name" name="reviewer-name" placeholder="Your display name" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="reviewer-email" className="text-xs font-semibold uppercase tracking-widest text-foreground/90">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="reviewer-email"
                name="reviewer-email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="reviewer-message" className="text-xs font-semibold uppercase tracking-widest text-foreground/90">
                Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="reviewer-message"
                name="reviewer-message"
                placeholder="Share your experience..."
                rows={6}
                required
              />
            </div>

            <div className="flex items-start gap-3 rounded-md border border-border bg-background/50 p-4">
              <Checkbox
                id="robot"
                checked={robot}
                onCheckedChange={(v) => setRobot(v === true)}
                className="mt-0.5"
              />
              <label htmlFor="robot" className="text-sm text-foreground">
                I&apos;m not a robot
              </label>
              <span className="ml-auto text-xs text-muted-foreground">reCAPTCHA</span>
            </div>

            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-primary to-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_30px_rgba(217,70,239,0.6)] transition hover:brightness-110"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
