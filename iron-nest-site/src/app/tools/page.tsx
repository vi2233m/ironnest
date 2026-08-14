import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tools & Calculators",
  description:
    "Interactive operator tools for IRON NEST: Heavy Turret Simulator — ballistic calculators, elevation guides, shell tier lists, and more.",
  alternates: {
    canonical: "/tools",
  },
};

interface ToolCard {
  emoji: string;
  title: string;
  description: string;
  href: string;
  stat: string;
  statLabel: string;
}

const tools: ToolCard[] = [
  {
    emoji: "🧮",
    title: "Ballistic Calculator",
    description:
      "The most important instrument in IRON NEST. Input range and bearing to compute elevation angles and powder charges for accurate fire solutions.",
    href: "/calculator",
    stat: "±0.1°",
    statLabel: "Precision",
  },
  {
    emoji: "📐",
    title: "Elevation Guide",
    description:
      "Step-by-step reference for elevation handwheel adjustments, linkage calibration, and angle verification before every shot.",
    href: "/calculator/elevation-guide",
    stat: "5-Step",
    statLabel: "Sequence",
  },
  {
    emoji: "💥",
    title: "Best Shells Tier List",
    description:
      "Ranked comparison of all ammunition types — from HE and AP to phosgene gas and incendiaries. Know which shell solves which problem.",
    href: "/shells/best-shells",
    stat: "30",
    statLabel: "Shell Types",
  },
  {
    emoji: "📖",
    title: "Arsenal Codex",
    description:
      "Complete ammunition encyclopedia. Blast radius, penetration values, cost, and unlock conditions for every shell in the game.",
    href: "/arsenal",
    stat: "9+",
    statLabel: "Core Types",
  },
  {
    emoji: "⌨️",
    title: "Key Codes Guide",
    description:
      "Reference for all keyboard controls, turret lever bindings, and console commands. Essential for mastering manual operation.",
    href: "/codes/key",
    stat: "Full",
    statLabel: "Reference",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <nav className="mx-auto max-w-6xl px-4 pt-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--color-amber)]">Home</Link></li>
            <li className="text-[var(--color-moon-faint)]">/</li>
            <li className="text-[var(--color-moon-dim)]" aria-current="page">Tools</li>
          </ol>
        </nav>
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <span className="kicker">Operator Tools</span>
          <h1 className="mt-3 text-4xl font-700 uppercase md:text-5xl text-glow">
            Tools
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-moon-dim)]">
            Interactive tools for IRON NEST operators — ballistic calculators,
            shell comparison tables, and reference guides to keep your turret
            running at peak efficiency.
          </p>

          {/* Tool cards grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="card group flex flex-col p-6"
              >
                <div className="text-3xl">{tool.emoji}</div>
                <h3 className="mt-3 font-[var(--font-display)] text-xl font-600 uppercase text-[var(--color-moon)] transition-colors group-hover:text-[var(--color-amber)]">
                  {tool.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-[var(--color-moon-dim)]">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-700 text-[var(--color-amber)]">
                    {tool.stat}
                  </span>
                  <span className="stencil text-xs text-[var(--color-moon-dim)]">
                    {tool.statLabel}
                  </span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-500 text-[var(--color-teal)] transition-transform group-hover:translate-x-1">
                  Open tool
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
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
