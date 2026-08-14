import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Game Systems Overview",
  description:
    "Complete system overview for IRON NEST: Heavy Turret Simulator. Fire control, ammunition, turret mechanics, procedural objectives, challenge modes, medals, newspaper reports, and cat companion.",
  alternates: {
    canonical: "/systems",
  },
};

const systems = [
  {
    id: "fire-control",
    title: "Fire Control System",
    status: "Confirmed",
    description:
      "The command-and-control loop begins with the teleprinter receiving orders from High Command and frontline calls. You translate intelligence into a firing plan, confirm results with aerial reconnaissance photographs, measure distances on the tactical map, and use the ballistic calculator to compute the firing solution. Powder charges and elevation are adjusted manually before the round is loaded and fired.",
    source: "Steam store page 'About This Game'",
  },
  {
    id: "ammunition",
    title: "Ammunition System",
    status: "Confirmed",
    description:
      "30 unlockable ammunition types and abilities. Each shell has a single purpose — no all-purpose rounds. Confirmed types include armor-piercing (AP) for bunker-breaching, smoke for screening and retreat cover, and phosgene gas (PGAS) for area denial with moral weight. The full 30-type roster is unlockable through campaign progression.",
    source: "Steam Key Features + 'About This Game'",
  },
  {
    id: "turret",
    title: "Turret Mechanics",
    status: "Confirmed",
    description:
      "Manual control of a 5,000-ton turret. Nothing is automated — no shortcuts, no fake systems. Reloading requires physically pulling each handle, engaging the loading bridge, locking the chamber, and feeding each powder charge manually. Traverse and elevation are controlled by handwheels. Every lever, valve, and mechanism has a purpose.",
    source: "Steam FAQ 'What does simulator mean?'",
  },
  {
    id: "objectives",
    title: "Procedural Objectives",
    status: "Confirmed",
    description:
      "Objectives are procedurally generated, creating endless replayability. Each run changes the target problem while the solution method remains the same: locate the point first, then build the firing solution. The campaign combines handcrafted story beats with procedural mission variation.",
    source: "Steam Key Features",
  },
  {
    id: "challenges",
    title: "Challenge Modes",
    status: "Confirmed",
    description:
      "2 challenge modes with leaderboard scoring. Challenge mode features a persistent counter-battery timer and endless waves. Chill mode removes the timer for practice and experimentation. Both modes track medal performance and global rankings.",
    source: "Steam Key Features + Patch 1.0 (1577) notes",
  },
  {
    id: "medals",
    title: "Medal System",
    status: "Confirmed",
    description:
      "100+ unlockable medals. Every mission has a 'Earn gold on all medals' achievement (e.g., Marksman's Honour, Duty Fulfilled, Iron Discipline). Medal requirements include kills-per-shot ratio, consecutive kill streaks, fast first shots, and requisition efficiency.",
    source: "Steam Achievements (33 total, gold medal achievements per mission)",
  },
  {
    id: "newspaper",
    title: "Newspaper System",
    status: "Confirmed",
    description:
      "Newspaper reports track your actions and moral choices. Using phosgene gas triggers the headline: 'It never happened if there are no witnesses.' The newspaper system shapes the story outcome based on your obedience or defiance of chemical weapon orders.",
    source: "Steam 'About This Game' + Key Features",
  },
  {
    id: "cat",
    title: "Cat Companion",
    status: "Confirmed",
    description:
      "A customizable cat companion is part of the base game — not DLC. Originally planned as paid DLC, the developers decided not to lock gameplay content behind a paywall. The cat appears in the turret interior and can be carried between missions. Patch 1558 fixed a bug where the cat would still be carried after mission completion.",
    source: "Steam FAQ 'Will the cat be separate DLC?' + Patch 1.0 (1558)",
  },
];

export default function SystemsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <nav className="mx-auto max-w-6xl px-4 pt-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--color-amber)]">Home</Link></li>
            <li className="text-[var(--color-moon-faint)]">/</li>
            <li className="text-[var(--color-moon-dim)]" aria-current="page">Systems</li>
          </ol>
        </nav>
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <span className="kicker">Machine Systems</span>
          <h1 className="mt-3 text-4xl font-700 uppercase md:text-5xl">
            Systems
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-moon-dim)]">
            The mechanical and informational systems that make IRON NEST&apos;s turret
            operate. Every system below is sourced from official Steam channels.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((sys) => (
              <div
                key={sys.id}
                className="card flex flex-col overflow-hidden p-6"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="chip"
                    style={{
                      borderColor:
                        sys.status === "Confirmed"
                          ? "var(--color-teal)"
                          : "var(--color-amber)",
                      color:
                        sys.status === "Confirmed"
                          ? "var(--color-teal)"
                          : "var(--color-amber)",
                    }}
                  >
                    {sys.status}
                  </span>
                </div>
                <h2 className="mt-3 font-[var(--font-display)] text-xl font-600 uppercase text-[var(--color-moon)]">
                  {sys.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-[var(--color-moon-dim)]">
                  {sys.description}
                </p>
                <p className="mt-4 text-xs text-[var(--color-moon-faint)]">
                  Source: {sys.source}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-moon-dim)]">
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: "var(--color-teal)" }}
                />
                Confirmed — directly stated in official Steam sources
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: "var(--color-amber)" }}
                />
                Verified — inferred from multiple official sources
              </span>
            </div>
            <p className="mt-4 text-xs text-[var(--color-moon-faint)]">
              Developer: Nick Nieuwoudt &amp; Dominik Latos · All data sourced
              from store.steampowered.com/app/2950790 and associated Steam
              Community pages. No information from third-party wikis.
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
