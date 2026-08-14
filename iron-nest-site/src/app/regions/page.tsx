import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Campaign Regions",
  description:
    "The 15 campaign regions of IRON NEST: Heavy Turret Simulator. Complete list with achievement names, unlock rates, and links to mission guides.",
  alternates: {
    canonical: "/regions",
  },
};

const regions = [
  {
    num: 1,
    name: "Calibration Fire",
    achievement: "Just Calibrating",
    unlockRate: "93.5%",
    desc: "Tutorial and calibration shooting. Learn the basic firing loop.",
  },
  {
    num: 2,
    name: "Fire and Light",
    achievement: "Honour Salute",
    unlockRate: "85.2%",
    desc: "Illumination and fire support. Introduces spotter triangulation.",
  },
  {
    num: 3,
    name: "Liberation",
    achievement: "For Their Own Good",
    unlockRate: "72.4%",
    desc: "Enforce liberation. Adds underground cache and friendly protection.",
  },
  {
    num: 4,
    name: "Counter-Battery",
    achievement: "First Reply",
    unlockRate: "40.7%",
    desc: "Silence hostile artillery. Introduces the counter-battery timer.",
  },
  {
    num: 5,
    name: "Iron Road",
    achievement: "All Clear",
    unlockRate: "27.8%",
    desc: "Intercept the Iron Road. First moving target mission.",
  },
  {
    num: 6,
    name: "Siege of Cartagena",
    achievement: "Breakout",
    unlockRate: "23.1%",
    desc: "Break the siege. Chained installations and smoke-assisted breakout.",
  },
  {
    num: 7,
    name: "The Gorge",
    achievement: "Cold Start",
    unlockRate: "20.9%",
    desc: "Survive the Gorge. Nest is damaged; manual observed-fire corrections.",
  },
  {
    num: 8,
    name: "Rock of Gibraltar",
    achievement: "Flying False Colours",
    unlockRate: "17.8%",
    desc: "Strike the Rock. Locate without aerial recon; time-restricted firing.",
  },
  {
    num: 9,
    name: "Dead Reckoning",
    achievement: "Steady Hands",
    unlockRate: "13.9%",
    desc: "Trust dead reckoning. Hidden positions exposed with tear gas.",
  },
  {
    num: 10,
    name: "Fire on Call",
    achievement: "The Gun Answers",
    unlockRate: "9.4%",
    desc: "Answer fire on call. Live support calls and danger-close shots.",
  },
  {
    num: 11,
    name: "High Tide",
    achievement: "Beachhead Denied",
    unlockRate: "8.5%",
    desc: "Turn the High Tide. Multiple landing-craft intercepts across both guns.",
  },
  {
    num: 12,
    name: "Blind Fire",
    achievement: "Nothing Was There",
    unlockRate: "6.4%",
    desc: "Endure Blind Fire. Pure triangulation under pressure, no recon.",
  },
  {
    num: 13,
    name: "Phantom Battery",
    achievement: "Mirror Image",
    unlockRate: "4.9%",
    desc: "Hunt the Phantom Battery. Mobile battery after Emergency Move.",
  },
  {
    num: 14,
    name: "Final Harvest",
    achievement: "In the Dark",
    unlockRate: "4.1%",
    desc: "Reap the Final Harvest. Moving train and static targets combined.",
  },
  {
    num: 15,
    name: "White Shells",
    achievement: "Unverified",
    unlockRate: "—",
    desc: "The final mission. Four confirmed endings based on shell choice.",
  },
];

export default function RegionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <nav className="mx-auto max-w-6xl px-4 pt-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--color-amber)]">Home</Link></li>
            <li className="text-[var(--color-moon-faint)]">/</li>
            <li className="text-[var(--color-moon-dim)]" aria-current="page">Regions</li>
          </ol>
        </nav>
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <span className="kicker">Campaign</span>
          <h1 className="mt-3 text-4xl font-700 uppercase md:text-5xl">
            Regions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-moon-dim)]">
            The 15 campaign regions of IRON NEST, each with unique objectives,
            terrain, and targets. All names and achievement data sourced from
            Steam Community achievements.
          </p>

          <div className="mt-8 rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-midnight)] p-6 md:p-8">
            <p className="prose-moon text-sm text-[var(--color-moon-dim)]">
              The campaign is set in{" "}
              <strong>alternate-history Spain in the late 1920s</strong>, where the
              monarchy still holds power and a republican uprising is spreading across the
              country. You command a colossal dieselpunk turret under High Command's orders —
              but every chemical weapon decision is yours alone, and the press will report
              what you've done.
            </p>
            <p className="mt-2 text-xs text-[var(--color-moon-faint)]">
              Source: Steam store page &quot;Setting&quot; section
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <Link
                key={r.num}
                href="/guide/missions"
                className="card group flex flex-col overflow-hidden p-5 transition-colors hover:border-[var(--color-amber)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-[var(--font-display)] text-3xl font-700 text-[var(--color-amber)]">
                    {String(r.num).padStart(2, "0")}
                  </span>
                  <span className="chip text-xs">{r.achievement}</span>
                </div>
                <h2 className="mt-3 font-[var(--font-display)] text-lg font-600 uppercase text-[var(--color-moon)] transition-colors group-hover:text-[var(--color-amber)]">
                  {r.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--color-moon-dim)]">
                  {r.desc}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-[var(--color-moon-faint)]">
                    Unlock rate: {r.unlockRate}
                  </span>
                  <span className="text-[var(--color-teal)] transition-transform group-hover:translate-x-1">
                    View guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <p className="text-xs text-[var(--color-moon-faint)]">
              Achievement unlock rates from Steam Community (stats/2950790/achievements)
              as of August 2026. Rates decrease sharply after mid-campaign,
              reflecting the difficulty curve. Gold medal achievements for each
              mission have unlock rates below 1%.
            </p>
            <p className="mt-2 text-xs text-[var(--color-moon-faint)]">
              Developer: Nick Nieuwoudt &amp; Dominik Latos · All data sourced
              from official Steam channels.
            </p>
          </div>

          <div className="mt-8">
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
