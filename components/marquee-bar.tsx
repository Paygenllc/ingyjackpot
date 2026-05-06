import { Flame } from "lucide-react"

const MESSAGES = [
  "Play all your favorite games on INGYJACKPOT CITYSLOTS & win real cash",
  "Golden Dragon is on flames today!",
  "Several deposit options available",
  "24/7 cashouts for verified accounts",
  "Loyalty tiers — earn more the more you play",
]

export function MarqueeBar() {
  // Duplicate the messages so the marquee animation loops seamlessly.
  const items = [...MESSAGES, ...MESSAGES]

  return (
    <div className="border-y border-primary/30 bg-gradient-to-r from-primary/15 via-primary/5 to-primary/15 overflow-hidden">
      <div className="relative">
        <div className="flex gap-6 whitespace-nowrap py-2 animate-[marquee_38s_linear_infinite] sm:gap-10 sm:py-2.5">
          {items.map((message, idx) => (
            <span
              key={`${message}-${idx}`}
              className="inline-flex items-center gap-1.5 text-xs text-foreground/90 sm:gap-2 sm:text-sm"
            >
              <Flame className="size-3.5 text-primary sm:size-4" />
              {message}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
