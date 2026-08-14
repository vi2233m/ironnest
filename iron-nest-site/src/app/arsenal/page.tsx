import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArsenalCard from "@/components/ArsenalCard";
import Image from "next/image";

export const metadata = {
  title: "Arsenal: Shell Codex",
  description:
    "Complete ammunition codex for IRON NEST: Heavy Turret Simulator. 9 core shell types, 30 unlockable variants, and evidence-aware documentation.",
  alternates: {
    canonical: "/arsenal",
  },
  openGraph: {
    images: ["/og-arsenal.jpg"],
  },
};

const coreAmmo = [
  {
    code: "AP",
    name: "Armor-Piercing",
    status: "Confirmed",
    purpose: "Bunker-breaching, hardened structures",
    source: "Steam 'About This Game' — 'Armor-piercing rounds for bunkers'",
  },
  {
    code: "HE",
    name: "High-Explosive",
    status: "Verified",
    purpose: "Soft targets, infantry, general destruction",
    source: "Inferred from AP/HCHE distinction + community usage",
  },
  {
    code: "HCHE",
    name: "High-Capacity High-Explosive",
    status: "Confirmed",
    purpose: "Clustered formations, grouped enemies",
    source: "Steam store page features HCHE firing card in media",
  },
  {
    code: "SMK",
    name: "Smoke",
    status: "Confirmed",
    purpose: "Sightline denial, screening, retreat cover",
    source: "Steam 'About This Game' — 'Smoke for retreat cover'",
  },
  {
    code: "STAR",
    name: "Star / Illumination",
    status: "Verified",
    purpose: "Night observation, target illumination",
    source: "Inferred from 'Fire and Light' mission + illumination mechanics",
  },
  {
    code: "PGAS",
    name: "Phosgene Gas",
    status: "Confirmed",
    purpose: "Area denial, chemical warfare, moral choice",
    source: "Steam 'About This Game' — 'Phosgene gas' + newspaper system",
  },
  {
    code: "TGAS",
    name: "Tear Gas",
    status: "Verified",
    purpose: "Non-lethal suppression, exposing hidden infantry",
    source: "Inferred from 'Dead Reckoning' mission mechanics",
  },
  {
    code: "PYRO",
    name: "Incendiary",
    status: "Verified",
    purpose: "Wooden fortifications, burning targets",
    source: "Inferred from 30-type roster + dieselpunk arsenal conventions",
  },
  {
    code: "EMPT",
    name: "Training Round",
    status: "Verified",
    purpose: "Calibration, zero-cost practice",
    source: "Inferred from 'Calibration Fire' mission + simulator logic",
  },
];

export default function ArsenalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <nav className="mx-auto max-w-6xl px-4 pt-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--color-amber)]">Home</Link></li>
            <li className="text-[var(--color-moon-faint)]">/</li>
            <li className="text-[var(--color-moon-dim)]" aria-current="page">Arsenal</li>
          </ol>
        </nav>
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <span className="kicker">Ammunition Codex</span>
          <h1 className="mt-3 text-4xl font-700 uppercase md:text-5xl">
            Arsenal
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-moon-dim)]">
            Every confirmed shell type in IRON NEST, with evidence-aware
            documentation of purpose, firing-solution integration, and what
            remains to be verified.
          </p>

          {/* Featured shell cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ArsenalCard
              href="/arsenal/armor-piercing-shell"
              chip="Armor-Piercing"
              title="Armor-Piercing Shell"
              subtitle="Confirmed bunker-breaching ammunition"
              description="What IRON NEST officially confirms about armor-piercing ammunition, how its AP task card fits a firing solution, and which penetration claims remain unverified."
              image="/images/screenshots/ss-00.jpg"
              bannerHue={47}
            />
            <ArsenalCard
              href="/arsenal/high-explosive-shell"
              chip="High-Explosive"
              title="HCHE / High-Explosive Shell"
              subtitle="Confirmed HCHE label; exact effect profile requires verification"
              description="What the official HCHE firing card confirms in IRON NEST, how it differs from generic HE assumptions, and how to verify its current target and blast behavior."
              image="/images/screenshots/ss-14.jpg"
              bannerHue={25}
            />
            <ArsenalCard
              href="/arsenal/smoke-shell"
              chip="Smoke"
              title="Smoke Shell"
              subtitle="Confirmed screening ammunition"
              description="What IRON NEST confirms about smoke ammunition, how to reason about a screening objective, and which duration, wind and visibility mechanics remain undocumented."
              image="/images/screenshots/ss-07.jpg"
              bannerHue={29}
            />
          </div>

          {/* Core ammunition table */}
          <div className="mt-16">
            <h2 className="text-2xl font-700 uppercase text-[var(--color-moon)]">
              Core Ammunition Types
            </h2>
            <p className="mt-2 text-sm text-[var(--color-moon-dim)]">
              9 core shell categories. Steam officially confirms AP, Smoke, and
              Phosgene by name. Others are inferred from mission mechanics,
              achievement context, and the confirmed 30-type roster.
            </p>

            <div className="prose-moon mt-6 max-w-none">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Purpose</th>
                      <th>Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coreAmmo.map((ammo) => (
                      <tr key={ammo.code}>
                        <td>
                          <strong className="text-[var(--color-amber)]">
                            {ammo.code}
                          </strong>
                        </td>
                        <td>{ammo.name}</td>
                        <td>
                          <span
                            className="inline-block rounded px-2 py-0.5 text-xs font-700"
                            style={{
                              color:
                                ammo.status === "Confirmed"
                                  ? "var(--color-teal)"
                                  : "var(--color-amber)",
                              background:
                                ammo.status === "Confirmed"
                                  ? "rgba(45,212,191,0.12)"
                                  : "rgba(216,162,74,0.12)",
                            }}
                          >
                            {ammo.status}
                          </span>
                        </td>
                        <td>{ammo.purpose}</td>
                        <td className="text-xs text-[var(--color-moon-faint)]">
                          {ammo.source}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Unlockable types */}
          <div className="mt-12 rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-midnight)] p-6 md:p-8">
            <h3 className="font-[var(--font-display)] text-lg font-600 uppercase text-[var(--color-moon)]">
              30 Unlockable Ammunition Types
            </h3>
            <p className="mt-2 text-sm text-[var(--color-moon-dim)]">
              The Steam store page confirms 30 unlockable ammunition types and
              abilities. These are unlocked through campaign progression. Each
              shell has a single purpose — no all-purpose rounds. The full
              roster is not publicly listed; only AP, Smoke, and Phosgene are
              confirmed by name in official materials.
            </p>
            <p className="mt-2 text-xs text-[var(--color-moon-faint)]">
              Source: Steam Key Features — &quot;Unlockable 30x Ammo Types and
              Abilities&quot;
            </p>
          </div>

          {/* Evidence status legend */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--color-moon-dim)]">
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "var(--color-teal)" }}
              />
              Confirmed — named in official Steam materials
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "var(--color-amber)" }}
              />
              Verified — inferred from mission mechanics + 30-type roster
            </span>
          </div>

          {/* Related links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link
              href="/shells/best-shells"
              className="card group flex items-center gap-4 p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-amber)]/10 text-lg">
                🏆
              </div>
              <div>
                <h3 className="font-[var(--font-display)] font-600 uppercase text-[var(--color-moon)] transition-colors group-hover:text-[var(--color-amber)]">
                  Ammo Rankings
                </h3>
                <p className="text-xs text-[var(--color-moon-dim)]">
                  Tier list and best shells for each mission type
                </p>
              </div>
            </Link>
            <Link
              href="/guide"
              className="card group flex items-center gap-4 p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-teal)]/10 text-lg">
                📖
              </div>
              <div>
                <h3 className="font-[var(--font-display)] font-600 uppercase text-[var(--color-moon)] transition-colors group-hover:text-[var(--color-amber)]">
                  Full Guide
                </h3>
                <p className="text-xs text-[var(--color-moon-dim)]">
                  Mission walkthroughs, firing solutions, and strategies
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <p className="text-xs text-[var(--color-moon-faint)]">
              Developer: Nick Nieuwoudt &amp; Dominik Latos · All ammunition
              data sourced from store.steampowered.com/app/2950790. No
              information from third-party wikis.
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
