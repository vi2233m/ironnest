import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "News & Patch Notes",
  description:
    "Latest dispatches from IRON NEST: Heavy Turret Simulator — official patch notes, player milestones, and Steam community updates.",
  alternates: {
    canonical: "/news",
  },
};

interface NewsItem {
  date: string;
  chip: string;
  title: string;
  summary: string;
  steamUrl: string;
}

const newsItems: NewsItem[] = [
  {
    date: "Aug 9, 2026",
    chip: "Patch",
    title: "PATCH 1.0 (1577) — 250,000 Copies Sold",
    summary:
      "Four days after launch, IRON NEST crosses 250,000 copies sold. This patch fixes mouse cursor loss, mission event resets, turret position resets, log spam, and localization errors in Russian, Spanish, and Polish. Also fixes observer offset in Blindfire. Improvements include better error detection, reduced random crashes, lower RAM and VRAM usage, and enhanced crater visuals. New: ultrawide stopwatch horizontal offset setting. Removed: chromatic aberration from pause menu. Developers note Skirmish Modes are in development.",
    steamUrl:
      "https://steamcommunity.com/games/2950790/announcements/detail/",
  },
  {
    date: "Aug 7, 2026",
    chip: "Patch",
    title: "PATCH 1.0 (1558) — 200,000 Players Milestone",
    summary:
      "Two days post-launch, over 200,000 players have entered the Nest. Patch 1558 fixes save corruption, cat eyes disappearing on lowest quality settings, elevation and elevation linkage lever not resetting, duplicate barrel engravings, cat still being carried after mission completion, and engine control lights not working. Also improves mouse movement issues and Discord code generation / account linking. New: motion blur toggle.",
    steamUrl:
      "https://steamcommunity.com/games/2950790/announcements/detail/",
  },
  {
    date: "Aug 6, 2026",
    chip: "Patch",
    title: "PATCH 1.0 (1547) — Day-One Report",
    summary:
      "Launch day patch. Fixes Czech and French localization errors, cat drop hints, coffee machine interaction, pause menu submit button, and duplicate newspaper issue in the High Tide mission. Thousands of players reported for duty on day one.",
    steamUrl:
      "https://steamcommunity.com/games/2950790/announcements/detail/",
  },
  {
    date: "Aug 4–11, 2026",
    chip: "Milestone",
    title: "Steam Global Top Sellers — Ranked #4",
    summary:
      "IRON NEST: Heavy Turret Simulator debuted at #4 on the Steam Global Top Sellers chart for the week of August 4–11, 2026. The two-person dieselpunk artillery sim from Nick Nieuwoudt & Dominik Latos reached this milestone within days of its August 6 release.",
    steamUrl:
      "https://store.steampowered.com/charts/topselling/global",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <nav className="mx-auto max-w-6xl px-4 pt-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--color-amber)]">Home</Link></li>
            <li className="text-[var(--color-moon-faint)]">/</li>
            <li className="text-[var(--color-moon-dim)]" aria-current="page">News</li>
          </ol>
        </nav>
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <span className="kicker">Dispatches</span>
          <h1 className="mt-3 text-4xl font-700 uppercase md:text-5xl text-glow">
            News
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-moon-dim)]">
            The latest dispatches from the Nest — official patches, player
            milestones, and community updates sourced directly from Steam.
          </p>

          {/* News cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="card flex flex-col p-6 md:p-7"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`chip ${
                      item.chip === "Patch"
                        ? "chip-amber"
                        : item.chip === "Milestone"
                        ? "chip-teal"
                        : ""
                    }`}
                  >
                    {item.chip}
                  </span>
                  <span className="stencil text-xs text-[var(--color-moon-faint)]">
                    {item.date}
                  </span>
                </div>
                <h2 className="font-[var(--font-display)] text-xl font-600 uppercase text-[var(--color-moon)] md:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-moon-dim)] md:text-base">
                  {item.summary}
                </p>
                <a
                  href={item.steamUrl}
                  rel="nofollow noopener"
                  target="_blank"
                  className="btn-ghost mt-5 inline-flex w-fit items-center gap-2 text-sm"
                >
                  Read on Steam
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </article>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/"
              className="text-sm text-[var(--color-teal)] hover:text-[var(--color-amber)]"
            >
              ← Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
