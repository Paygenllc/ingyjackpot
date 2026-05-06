"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import { PageHero } from "@/components/page-hero"
import { Send, Mail, MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex size-12 items-center justify-center rounded-md border border-primary/40 bg-card/60 text-primary shadow-[0_0_18px_rgba(217,70,239,0.4)]">
        <Icon className="size-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-widest text-foreground/90">{label}</span>
        <span className="text-sm text-muted-foreground">{value}</span>
      </div>
    </div>
  )
}

function FieldLabelRequired({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <Label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-widest text-foreground/90">
      {children} <span className="text-destructive">*</span>
    </Label>
  )
}

export default function ContactPage() {
  const [smsConsent, setSmsConsent] = useState(false)
  const [emailConsent, setEmailConsent] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!smsConsent) {
      toast.error("Please agree to receive SMS messages to continue.")
      return
    }
    toast.success("Message sent. We'll get back to you shortly.")
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <main className="min-h-screen pb-16">
      <PageHero title="Contact Us" trail="Contact" />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-primary/30 bg-card/40 p-8 shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur">
          <h2 className="font-display text-2xl uppercase tracking-wider text-foreground">Contact Information</h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Get in touch with us. We&apos;re here to help you with any questions or concerns.
          </p>

          <div className="mt-8 flex flex-col gap-6">
            <InfoRow icon={Send} label="Telegram" value="@INGYJackpotCitySlots" />
            <InfoRow icon={Mail} label="Email" value="support@ingyjackpot.com" />
            <InfoRow icon={MessageCircle} label="Chat Now" value="Live agents 24/7" />
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground/90">Follow us</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex size-11 items-center justify-center rounded-md border border-primary/40 bg-card/60 text-foreground shadow-[0_0_15px_rgba(217,70,239,0.5)] transition hover:bg-primary/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                  <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.7c0-.9.3-1.5 1.6-1.5H17V4.6c-.3 0-1.4-.1-2.6-.1-2.5 0-4.3 1.5-4.3 4.3v2.7H7.5v3h2.6V21h3.4z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-11 items-center justify-center rounded-md border border-primary/40 bg-card/60 text-foreground shadow-[0_0_15px_rgba(217,70,239,0.5)] transition hover:bg-primary/20"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/30 bg-card/40 p-8 shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur">
          <h2 className="font-display text-2xl uppercase tracking-wider text-foreground">Get In Touch</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>

          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <FieldLabelRequired htmlFor="firstName">First name</FieldLabelRequired>
                <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
              </div>
              <div className="flex flex-col gap-2">
                <FieldLabelRequired htmlFor="lastName">Last name</FieldLabelRequired>
                <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <FieldLabelRequired htmlFor="email">Email address</FieldLabelRequired>
                <Input id="email" name="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="flex flex-col gap-2">
                <FieldLabelRequired htmlFor="phone">Phone number</FieldLabelRequired>
                <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <FieldLabelRequired htmlFor="message">Your message</FieldLabelRequired>
              <Textarea id="message" name="message" placeholder="Enter your message" rows={6} required />
            </div>

            <div className="mt-2 flex items-start gap-3">
              <Checkbox
                id="smsConsent"
                checked={smsConsent}
                onCheckedChange={(v) => setSmsConsent(v === true)}
                className="mt-1"
              />
              <label htmlFor="smsConsent" className="text-sm leading-relaxed text-muted-foreground">
                I agree to receive SMS/text messages from INGYJACKPOT CITYSLOTS. Message and data rates may apply.
                Reply STOP to opt-out. <span className="text-destructive">*</span>
              </label>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              By checking this box, you consent to receive promotional and transactional SMS messages. You can opt-out
              at any time by replying STOP. Standard message and data rates may apply.
            </p>

            <div className="flex items-start gap-3">
              <Checkbox
                id="emailConsent"
                checked={emailConsent}
                onCheckedChange={(v) => setEmailConsent(v === true)}
                className="mt-1"
              />
              <label htmlFor="emailConsent" className="text-sm leading-relaxed text-muted-foreground">
                I agree to receive email newsletters and promotional offers from INGYJACKPOT CITYSLOTS.
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_30px_rgba(217,70,239,0.6)] transition hover:brightness-110"
            >
              Send Message
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
