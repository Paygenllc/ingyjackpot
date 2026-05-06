export type Game = {
  slug: string
  name: string
  /** Short tagline for the card */
  tagline: string
  /** Tailwind gradient classes used as the game tile background */
  gradient: string
  /** Decorative accent emoji-free label badge text */
  badge?: string
  /** Optional logo image rendered on the tile (in /public/games) */
  image?: string
}

export const GAMES: Game[] = [
  {
    slug: "golden-dragon",
    name: "Golden Dragon",
    tagline: "Mythic reels • Big multipliers",
    gradient: "from-amber-500/30 via-amber-700/20 to-zinc-900/60",
    badge: "Hot",
  },
  {
    slug: "e-gaming",
    name: "E-Gaming",
    tagline: "Premium e-gaming experience",
    gradient: "from-yellow-500/30 via-amber-600/20 to-zinc-900/60",
  },
  {
    slug: "vblink",
    name: "Vblink",
    tagline: "Lucky lanterns • Asian classics",
    gradient: "from-rose-500/30 via-fuchsia-600/20 to-zinc-900/60",
  },
  {
    slug: "ultra-panda",
    name: "Ultra Panda",
    tagline: "Bamboo bonanza & coin showers",
    gradient: "from-lime-500/25 via-emerald-700/20 to-zinc-900/60",
  },
  {
    slug: "glamour-spin",
    name: "Glamour Spin",
    tagline: "Glitz, glam, and giant jackpots",
    gradient: "from-pink-500/30 via-fuchsia-700/20 to-zinc-900/60",
  },
  {
    slug: "fire-kirin",
    name: "Fire Kirin",
    tagline: "Arcade-style fish hunting",
    gradient: "from-red-500/30 via-orange-600/20 to-zinc-900/60",
    badge: "Popular",
  },
  {
    slug: "gt",
    name: "GT",
    tagline: "Fast lanes, fast wins",
    gradient: "from-sky-500/30 via-indigo-700/20 to-zinc-900/60",
  },
  {
    slug: "legend-fire",
    name: "Legend Fire",
    tagline: "Burning legends and free spins",
    gradient: "from-orange-500/30 via-red-700/20 to-zinc-900/60",
  },
  {
    slug: "cash-machine",
    name: "Cash Machine",
    tagline: "Pull the lever, print the cash",
    gradient: "from-emerald-500/30 via-teal-700/20 to-zinc-900/60",
  },
  {
    slug: "game-room",
    name: "Game Room",
    tagline: "All-in-one classic room",
    gradient: "from-yellow-500/25 via-orange-700/20 to-zinc-900/60",
  },
  {
    slug: "blue-dragon",
    name: "Blue Dragon",
    tagline: "Ocean kings & deep payouts",
    gradient: "from-cyan-500/30 via-blue-700/20 to-zinc-900/60",
  },
  {
    slug: "easy-street",
    name: "Easy Street",
    tagline: "Take the easy way to wins",
    gradient: "from-yellow-400/30 via-amber-600/20 to-zinc-900/60",
  },
  {
    slug: "panda-master",
    name: "Panda Master",
    tagline: "Master your stack with pandas",
    gradient: "from-emerald-500/25 via-green-700/20 to-zinc-900/60",
  },
  {
    slug: "milkyways",
    name: "Milkyways",
    tagline: "Spin among the stars",
    gradient: "from-indigo-500/30 via-violet-700/20 to-zinc-900/60",
    image: "/games/milkyways.png",
  },
  {
    slug: "orion-stars",
    name: "Orion Stars",
    tagline: "Galactic fishing & slots",
    gradient: "from-fuchsia-500/30 via-purple-700/20 to-zinc-900/60",
    image: "/games/orion-stars.png",
  },
  {
    slug: "juwa",
    name: "Juwa",
    tagline: "Crowned classics with treasure",
    gradient: "from-amber-500/30 via-yellow-700/20 to-zinc-900/60",
    image: "/games/juwa.png",
  },
  {
    slug: "juwa-2",
    name: "Juwa 2",
    tagline: "Next-gen Juwa with bigger wins",
    gradient: "from-yellow-500/25 via-amber-700/20 to-zinc-900/60",
    image: "/games/juwa-2.png",
  },
  {
    slug: "mafia",
    name: "Mafia",
    tagline: "Dark, classy, big payouts",
    gradient: "from-zinc-700/40 via-stone-700/30 to-zinc-950/60",
    image: "/games/mafia.png",
  },
  {
    slug: "fire-phoenix",
    name: "Fire Phoenix",
    tagline: "Rise again with bonus rounds",
    gradient: "from-rose-500/30 via-red-700/20 to-zinc-900/60",
    image: "/games/fire-phoenix.png",
  },
  {
    slug: "great-balls-of-fire",
    name: "Great Balls of Fire",
    tagline: "Heat up the reels",
    gradient: "from-orange-500/30 via-red-700/25 to-zinc-900/60",
    image: "/games/great-balls-of-fire.png",
  },
  {
    slug: "yolo",
    name: "Yolo",
    tagline: "Live a little, win a lot",
    gradient: "from-pink-500/30 via-fuchsia-700/20 to-zinc-900/60",
    image: "/games/yolo.png",
  },
  {
    slug: "lucky-star",
    name: "Lucky Star",
    tagline: "Catch your lucky break",
    gradient: "from-rose-500/25 via-red-700/20 to-zinc-900/60",
    image: "/games/lucky-star.png",
  },
  {
    slug: "ace-book",
    name: "Ace Book",
    tagline: "Card classics, modern payouts",
    gradient: "from-yellow-500/30 via-amber-700/20 to-zinc-900/60",
    image: "/games/ace-book.png",
  },
  {
    slug: "fish-glory",
    name: "Fish Glory",
    tagline: "Hook the big one",
    gradient: "from-cyan-500/30 via-blue-700/20 to-zinc-900/60",
    image: "/games/fish-glory.png",
  },
  {
    slug: "galaxy-world",
    name: "Galaxy World",
    tagline: "An entire galaxy of slots",
    gradient: "from-indigo-500/30 via-violet-700/20 to-zinc-900/60",
    image: "/games/galaxy-world.png",
  },
  {
    slug: "highstake",
    name: "Highstake",
    tagline: "For the bold and the bigger",
    gradient: "from-fuchsia-500/30 via-purple-700/20 to-zinc-900/60",
    image: "/games/highstake.png",
  },
  {
    slug: "king-of-pop",
    name: "King of Pop",
    tagline: "777 pop hits & jackpots",
    gradient: "from-rose-500/30 via-red-700/20 to-zinc-900/60",
    image: "/games/king-of-pop.png",
  },
  {
    slug: "crazy-noble",
    name: "Crazy Noble",
    tagline: "Royal twists with crazy wins",
    gradient: "from-rose-500/25 via-red-700/20 to-zinc-900/60",
    image: "/games/crazy-noble.png",
  },
  {
    slug: "apollo",
    name: "Apollo",
    tagline: "Mission to the mega win",
    gradient: "from-sky-500/30 via-blue-700/20 to-zinc-900/60",
    image: "/games/apollo.png",
  },
  {
    slug: "vegas-roll",
    name: "Vegas Roll",
    tagline: "Strip vibes, big rolls",
    gradient: "from-fuchsia-500/30 via-rose-700/20 to-zinc-900/60",
    image: "/games/vegas-roll.png",
  },
  {
    slug: "mr-all-in-one",
    name: "Mr. All in One",
    tagline: "Everything in a single app",
    gradient: "from-emerald-500/25 via-cyan-700/20 to-zinc-900/60",
    image: "/games/mr-all-in-one.png",
  },
  {
    slug: "vegas-luck",
    name: "Vegas Luck",
    tagline: "Where luck meets the strip",
    gradient: "from-emerald-500/30 via-teal-700/20 to-zinc-900/60",
    image: "/games/vegas-luck.png",
  },
  {
    slug: "billion-balls",
    name: "Billion Balls",
    tagline: "Lottery-style billion wins",
    gradient: "from-rose-500/30 via-pink-700/20 to-zinc-900/60",
    image: "/games/billion-balls.png",
  },
]
