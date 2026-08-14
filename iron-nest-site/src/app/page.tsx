import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import ArsenalCard from "@/components/ArsenalCard";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IRON NEST Wiki — Guides, Calculator & Shell Tier List",
  description:
    "Complete IRON NEST: Heavy Turret Simulator resource — ballistic calculator, shell tier list, full walkthrough, gold medal guides, mission tips & more.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        {/* ── Section 1: Hero ─────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/og-default.png"
              alt="IRON NEST Heavy Turret Simulator"
              className="h-full w-full object-cover opacity-20"
            />
            <div
              className="absolute inset-0 h-full w-full"
              style={{
                background:
                  "linear-gradient(180deg, #0b0b0d99 0%, #0b0b0d55 28%, #0b0b0dcc 72%, #0b0b0d 97%)",
              }}
            />
          </div>
          <div
            className="blueprint absolute inset-0"
            style={{
              maskImage: "radial-gradient(120% 90% at 50% 0, #000 30%, transparent 78%)",
              WebkitMaskImage: "radial-gradient(120% 90% at 50% 0, #000 30%, transparent 78%)",
            }}
          />
          <div className="moonbeams absolute inset-0" />

          <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-16 text-center md:px-6 md:pt-24">
            <span
              className="chip mx-auto"
              style={{ borderColor: "#d8a24a55", color: "var(--color-amber)" }}
            >
              Strategy Hub & Ballistic Calculator · Steam Launch Aug 6, 2026
            </span>

            <h1 className="mx-auto mt-6 max-w-4xl uppercase leading-[0.95]">
              <span
                className="block text-glow text-6xl font-700 md:text-8xl"
                style={{ letterSpacing: "0.02em" }}
              >
                IRON NEST
              </span>
              <span className="mt-2 block text-amber-glow text-2xl font-600 tracking-[0.18em] md:text-4xl">
                Heavy Turret Simulator
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-moon-dim)] md:text-xl">
              The operator&rsquo;s hub for <em>IRON NEST: Heavy Turret Simulator</em> &mdash; a
              dieselpunk first-person artillery sim set in alternate 1920s Spain. Calculate
              elevation, compare 30 shell types, master every mission, and chase gold medals
              across all 15 campaign regions.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/guide" className="btn-primary">
                Start Beginner Guide
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="/shells/best-shells" className="btn-ghost">
                Compare Ammo Types
              </Link>
              <Link href="/calculator" className="btn-ghost">
                Ballistic Calculator
              </Link>
            </div>

            {/* Stat cards */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "Aug 6, 2026", label: "Release Date" },
                { value: "Steam", label: "Platform" },
                { value: "800K+", label: "Wishlists" },
                { value: "98% Positive", label: "3,411 Reviews" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass flex flex-col items-center gap-1 px-4 py-4 text-center rounded-[var(--radius-xl)]"
                >
                  <span className="text-lg font-700 text-[var(--color-moon)] md:text-xl">
                    {stat.value}
                  </span>
                  <span className="stencil text-xs tracking-[0.12em] text-[var(--color-moon-dim)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: Latest Updates ───────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="kicker">Latest Updates</span>
              <h2 className="mt-2 text-3xl font-700 uppercase md:text-4xl">
                Latest dispatches from the nest
              </h2>
            </div>
            <Link
              href="/guide"
              className="hidden shrink-0 text-sm font-500 text-[var(--color-teal)] hover:text-[var(--color-amber)] sm:inline-flex sm:items-center sm:gap-1.5"
            >
              All guides
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <GuideCard
              href="/guide/tips-and-tricks"
              chip="Update"
              date="Aug 9, 2026"
              title="Patch 1.0 (1558): Elevation Fixes & Cat Glitch Resolved"
              description="Iron Nest crosses 200,000 players as Patch 1558 fixes crucial elevation lever mechanics and save issues."
              bannerHue={23}
              image="/images/screenshots/ss-06.jpg"
            />
            <GuideCard
              href="/guide/gold-medal"
              chip="Guide"
              date="Aug 2026"
              title="Gold Medal Requirements: Advanced Tactics for High Scores"
              description="Complete gold medal guide — every mission&apos;s medal requirements, tips for achieving them and unlock rewards."
              bannerHue={47}
              image="/images/screenshots/ss-02.jpg"
            />
            <GuideCard
              href="/guide/walkthrough"
              chip="Walkthrough"
              date="Aug 2026"
              title="Full Campaign Walkthrough: All 15 Regions & Missions"
              description="Step-by-step campaign guide covering all 15 regions, mission objectives and story choices."
              bannerHue={34}
              image="/images/screenshots/ss-04.jpg"
            />
          </div>
        </section>

        {/* ── Section 3: Start Here Journey ─────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="text-center">
            <span className="kicker mx-auto justify-center">Start Here</span>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-700 uppercase md:text-4xl">
              Your IRON NEST journey
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[var(--color-moon-dim)]">
              New to IRON NEST? Follow these steps to get started with your turret operator training
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                num: "01",
                title: "Beginner Firing Guide",
                desc: "Master the 6-step fire mission loop from teleprinter orders to recon corrections. Trust the procedure, not your gut.",
                href: "/guide",
              },
              {
                num: "02",
                title: "Ballistic Calculator",
                desc: "Learn how to convert range and bearing into elevation angles and powder charges — the most important instrument in IRON NEST.",
                href: "/calculator",
              },
              {
                num: "03",
                title: "All Ammo Types",
                desc: "From AP bunker-busters to phosgene gas — know which shell solves which problem and when to use HCHE over HE.",
                href: "/shells/best-shells",
              },
              {
                num: "04",
                title: "Tactical Map Mastery",
                desc: "Plot coordinates, triangulate with spotters, and avoid the map mistakes that cause confident misses downstream.",
                href: "/guide/missions",
              },
              {
                num: "05",
                title: "Challenge Strategies",
                desc: "Score higher with efficiency over perfection — learn FDC pause timing, batch targeting, and leaderboard discipline.",
                href: "/guide/tips-and-tricks",
              },
            ].map((step) => (
              <div key={step.num} className="card p-6">
                <span className="font-[var(--font-display)] text-4xl font-700 text-[var(--color-amber)]">
                  {step.num}
                </span>
                <h3 className="mt-3 font-[var(--font-display)] text-lg font-600 uppercase text-[var(--color-moon)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-moon-dim)]">{step.desc}</p>
                <Link
                  href={step.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-500 text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4: Guides & Tools Grid ──────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="text-center">
            <span className="kicker mx-auto justify-center">Explore</span>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-700 uppercase md:text-4xl">
              Guides &amp; tools
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                emoji: "📖",
                title: "Guides",
                desc: "Master the 6-step fire mission loop, calibration procedures, and operator strategies for heavy-artillery simulation.",
                stat: "10",
                statLabel: "Key Topics",
                href: "/guide",
              },
              {
                emoji: "💥",
                title: "Ammo Types",
                desc: "30 unlockable shell types from AP bunker-busters to phosgene gas. Each shell has unique blast radius, penetration, and moral weight.",
                stat: "30",
                statLabel: "Shell Types",
                href: "/shells/best-shells",
              },
              {
                emoji: "🧮",
                title: "Ballistic Calculator",
                desc: "The most important instrument in IRON NEST. Input range and bearing to get elevation angles and powder charges.",
                stat: "±0.1°",
                statLabel: "Precision",
                href: "/calculator",
              },
              {
                emoji: "⚙️",
                title: "Turret Controls",
                desc: "Hand-operated traverse, elevation handwheels, and a 5-step loading sequence — no auto-aim, no shortcuts.",
                stat: "5",
                statLabel: "Step Sequence",
                href: "/guide/walkthrough",
              },
              {
                emoji: "🗺️",
                title: "Tactical Map",
                desc: "Plot coordinates on the 20×10 grid, use red/yellow/white pencils, draft bearing lines, and triangulate with spotters.",
                stat: "20×10",
                statLabel: "Grid System",
                href: "/guide/missions",
              },
              {
                emoji: "🏆",
                title: "Challenge Modes",
                desc: "8 challenge modes with leaderboard scoring. Master FDC pause timing and batch target processing to climb the ranks.",
                stat: "8",
                statLabel: "Modes",
                href: "/guide/tips-and-tricks",
              },
              {
                emoji: "🎖️",
                title: "Gold Medal Guide",
                desc: "100+ medals to unlock. Every mission&apos;s medal requirements, tips for achieving them and unlock rewards.",
                stat: "100+",
                statLabel: "Medals",
                href: "/guide/gold-medal",
              },
              {
                emoji: "📰",
                title: "Story &amp; Lore",
                desc: "Four endings shaped by your chemical weapon choices. Alternate-history 1920s Spain, monarchs vs republicans.",
                stat: "15",
                statLabel: "Regions",
                href: "/guide/endings",
              },
              {
                emoji: "🔧",
                title: "Arsenal",
                desc: "Complete shell codex with specs and tactics for all 30 unlockable ammunition types.",
                stat: "30",
                statLabel: "Shells",
                href: "/arsenal",
              },
              {
                emoji: "📚",
                title: "Articles",
                desc: "In-depth articles covering ballistics, release info, and ammunition strategy.",
                stat: "6",
                statLabel: "Articles",
                href: "/guides",
              },
              {
                emoji: "🤝",
                title: "Co-op",
                desc: "Independent co-op game planned for late 2027. Here's what we know so far.",
                stat: "2027",
                statLabel: "Planned",
                href: "/coop",
              },
              {
                emoji: "🎮",
                title: "Demo",
                desc: "Free demo on Steam. 99% positive — try before you buy.",
                stat: "99%",
                statLabel: "Positive",
                href: "/demo",
              },
              {
                emoji: "🔌",
                title: "Mods",
                desc: "Modding potential, customization options, and community tools.",
                stat: "—",
                statLabel: "Community",
                href: "/mods",
              },
              {
                emoji: "🔑",
                title: "Codes",
                desc: "Access codes, Discord keys, and redemption guide.",
                stat: "—",
                statLabel: "Codes",
                href: "/codes/key",
              },
              {
                emoji: "📰",
                title: "News",
                desc: "Patch notes, milestones, and official announcements.",
                stat: "3",
                statLabel: "Patches",
                href: "/news",
              },
              {
                emoji: "⚙️",
                title: "Systems",
                desc: "Fire control, ammunition, turret mechanics, medals, and cat companion.",
                stat: "8",
                statLabel: "Systems",
                href: "/systems",
              },
              {
                emoji: "🗺️",
                title: "Regions",
                desc: "15 campaign regions from calibration fire to final harvest.",
                stat: "15",
                statLabel: "Regions",
                href: "/regions",
              },
              {
                emoji: "🛠️",
                title: "Tools",
                desc: "Calculators, elevation guides, and shell comparison tools.",
                stat: "5",
                statLabel: "Tools",
                href: "/tools",
              },
            ].map((card) => (
              <Link key={card.title} href={card.href} className="card group flex flex-col p-6">
                <div className="text-3xl">{card.emoji}</div>
                <h3 className="mt-3 font-[var(--font-display)] text-xl font-600 uppercase text-[var(--color-moon)] transition-colors group-hover:text-[var(--color-amber)]">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-[var(--color-moon-dim)]">{card.desc}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-700 text-[var(--color-amber)]">{card.stat}</span>
                  <span className="stencil text-xs text-[var(--color-moon-dim)]">{card.statLabel}</span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-500 text-[var(--color-teal)] transition-transform group-hover:translate-x-1">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Section 5: Ammo Type Comparison Table ─────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="text-center">
            <span className="kicker mx-auto justify-center">Ammunition</span>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-700 uppercase md:text-4xl">
              Ammo type comparison
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[var(--color-moon-dim)]">
              Every shell in IRON NEST has unique blast radius, penetration, and moral weight. Compare all 9 core ammunition types.
            </p>
          </div>

          <div className="prose-moon mx-auto mt-10 max-w-none">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Shell</th>
                    <th>Tier</th>
                    <th>Best Target</th>
                    <th>Blast Radius</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { shell: "HE — High-Explosive", tier: "S", tierColor: "var(--color-amber)", target: "Soft targets, infantry, corrections", radius: "15m", cost: "Standard" },
                    { shell: "AP — Armor-Piercing", tier: "A", tierColor: "var(--color-teal)", target: "Bunkers, hardened structures", radius: "5m", cost: "Standard" },
                    { shell: "HCHE — High-Capacity HE", tier: "A", tierColor: "var(--color-teal)", target: "Clustered formations, grouped enemies", radius: "30m", cost: "Premium" },
                    { shell: "STAR — Illumination", tier: "B", tierColor: "var(--color-moon-dim)", target: "Night observation, correction", radius: "40m (no dmg)", cost: "Low" },
                    { shell: "SMK — Smoke", tier: "C", tierColor: "var(--color-moon-faint)", target: "Sightline denial, screening", radius: "40m (no dmg)", cost: "Low" },
                    { shell: "PGAS — Phosgene Gas", tier: "B", tierColor: "var(--color-moon-dim)", target: "Area denial, entrenched infantry", radius: "25m", cost: "High" },
                    { shell: "TGAS — Tear Gas", tier: "C", tierColor: "var(--color-moon-faint)", target: "Non-lethal suppression, dispersal", radius: "15m", cost: "Low" },
                    { shell: "PYRO — Incendiary", tier: "A", tierColor: "var(--color-teal)", target: "Wooden fortifications, burning", radius: "15m", cost: "Standard" },
                    { shell: "EMPT — Training Round", tier: "C", tierColor: "var(--color-moon-faint)", target: "Calibration, zero-cost practice", radius: "None", cost: "Free" },
                  ].map((row) => (
                    <tr key={row.shell}>
                      <td><strong>{row.shell}</strong></td>
                      <td>
                        <span
                          className="inline-block rounded px-2 py-0.5 text-xs font-700"
                          style={{ color: row.tierColor.replace(")", ""), background: `${row.tierColor.replace(")", "")}15` }}
                        >
                          {row.tier}
                        </span>
                      </td>
                      <td>{row.target}</td>
                      <td>{row.radius}</td>
                      <td>{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/shells/best-shells"
              className="inline-flex items-center gap-1.5 text-sm font-500 text-[var(--color-teal)] hover:text-[var(--color-amber)]"
            >
              View full tier list
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── Section 6: Turret Operation Sequence ────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="text-center">
            <span className="kicker mx-auto justify-center">Operations</span>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-700 uppercase md:text-4xl">
              Turret operation sequence
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[var(--color-moon-dim)]">
              The 5-step loading and gunlaying sequence is the physical core of IRON NEST. Every lever, dial, and handwheel must be operated in strict order.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "Step 1",
                title: "Shell Selector",
                desc: "Pull the lever to cycle through available ammunition types — HE, AP, HCHE, smoke, star, and specialty shells.",
              },
              {
                step: "Step 2",
                title: "Shell Rammer",
                desc: "Pull the rammer handle to push the shell into the chamber. Wait for hydraulic pressure to stabilize before proceeding.",
              },
              {
                step: "Step 3",
                title: "Powder Charges",
                desc: "Pull down 1 to 6 powder charge levers matching the ballistic calculator output. Too few fall short; too many overshoot.",
              },
              {
                step: "Step 4",
                title: "Traverse",
                desc: "Rotate the traverse handwheel until the bearing indicator matches the calculated bearing from the tactical map.",
              },
              {
                step: "Step 5",
                title: "Elevation",
                desc: "Adjust the elevation handwheel until the barrel angle matches the calculator output. Fractional-degree errors compound at long range.",
              },
            ].map((s) => (
              <div key={s.step} className="card p-6">
                <span className="stencil text-xs text-[var(--color-amber)]">{s.step}</span>
                <h3 className="mt-2 font-[var(--font-display)] text-lg font-600 uppercase text-[var(--color-moon)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-moon-dim)]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/calculator/elevation-guide"
              className="inline-flex items-center gap-1.5 text-sm font-500 text-[var(--color-teal)] hover:text-[var(--color-amber)]"
            >
              Learn the full firing solution
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── Section 7: What is IRON NEST ──────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="text-center">
            <span className="kicker mx-auto justify-center">About</span>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-700 uppercase md:text-4xl">
              What is IRON NEST?
            </h2>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {/* Left: description */}
            <div className="prose-moon">
              <p>
                <em>IRON NEST: Heavy Turret Simulator</em> drops you into the seat of a
                5,000-ton war machine in alternate-history 1920s Spain. As the sole gunner,
                you translate teleprinter orders into firing solutions — measuring range on
                a paper tactical map, calculating elevation on a mechanical calculator, and
                manually loading shells into dual barrels.
              </p>
              <p>
                The campaign spans 15 regions with 30 unlockable shell types, from
                armor-piercing rounds to chemical agents. Every shot carries weight:
                the press turns your actions into front-page stories, and High Command&rsquo;s
                chemical weapon orders force a moral choice that shapes which of four
                endings you earn.
              </p>
            </div>

            {/* Right: fact sheet grid */}
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-hairline)] text-left">
              {[
                { label: "Developer", value: "Nick Nieuwoudt & Dominik Latos" },
                { label: "Platform", value: "PC (Steam)" },
                { label: "Genre", value: "Dieselpunk Artillery Sim" },
                { label: "Release", value: "August 6, 2026" },
                { label: "Demo", value: "Free, on Steam now" },
                { label: "Campaign", value: "15 regions · 30 shells" },
              ].map((item) => (
                <div key={item.label} className="bg-[var(--color-midnight)] px-5 py-4">
                  <dt className="stencil text-xs text-[var(--color-amber)]">{item.label}</dt>
                  <dd className="mt-1 text-sm text-[var(--color-moon)]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Section 7.5: Official Launch Trailer ────────────────── */}
        <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
          <div className="text-center">
            <span className="kicker mx-auto justify-center">Watch</span>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-700 uppercase md:text-4xl">
              Official Launch Trailer
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[var(--color-moon-dim)]">
              See the 5,000-ton war machine in action. Two minutes of dieselpunk artillery,
              from loading platform to impact.
            </p>
          </div>
          <div className="mt-8 relative aspect-video overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-midnight)]">
            <iframe
              src="https://www.youtube.com/embed/35hAxxPml2E?rel=0&modestbranding=1"
              title="IRON NEST: Heavy Turret Simulator - Official Launch Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </section>

        {/* ── Section 8: CTA ────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-4 pb-8 md:px-6">
          <div className="glass relative overflow-hidden p-10 text-center md:p-14 rounded-[var(--radius-xl)]">
            <div
              className="blueprint absolute inset-0"
              style={{
                maskImage: "radial-gradient(120% 90% at 50% 0, #000 30%, transparent 78%)",
                WebkitMaskImage: "radial-gradient(120% 90% at 50% 0, #000 30%, transparent 78%)",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-700 uppercase md:text-4xl text-glow">
                Be ready when the order comes
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[var(--color-moon-dim)]">
                Bookmark the wiki and check back as we map the released machine. New
                guides now track version 1.0, patches and discoveries from the field.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/guide" className="btn-primary">
                  Explore guides
                </Link>
                <a
                  href="https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  className="btn-ghost"
                >
                  View on Steam
                </a>
                <Link href="/about" className="btn-ghost">
                  About this wiki
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
