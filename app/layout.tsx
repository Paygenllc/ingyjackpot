import type { Metadata, Viewport } from "next"
import { Inter, Orbitron } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BalanceBar } from "@/components/balance-bar"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "INGYJACKPOT CITYSLOTS — Premium Online Casino",
  description:
    "Play your favorite slots and casino games at INGYJACKPOT CITYSLOTS. Fast deposits, 24/7 cashouts, exclusive bonuses, and a loyalty program that pays.",
  generator: "v0",
}

export const viewport: Viewport = {
  themeColor: "#1a0f3d",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased dark bg-background",
        inter.variable,
        orbitron.variable,
        "font-sans",
      )}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <SiteHeader />
        <BalanceBar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  )
}
