import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About This Wiki",
  description:
    "About Iron Nest Wiki — an independent strategy resource for IRON NEST: Heavy Turret Simulator. Editorial standards, content sources, and official links.",
  alternates: {
    canonical: "/about",
  },
};

const officialLinks = [
  {
    label: "Linktree",
    url: "https://linktr.ee/IRONNEST",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/ironnestgame/",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/people/IRON-NEST-Heavy-Turret-Simulator/61580334181449",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@IRONNESTgame",
  },
  {
    label: "Discord",
    url: "https://discord.gg/E92DaqgnZv",
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@ironnestgame",
  },
  {
    label: "Bilibili",
    url: "https://space.bilibili.com/3690974968547579",
  },
  {
    label: "X (Twitter)",
    url: "https://x.com/IRONNESTgame",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <nav className="mx-auto max-w-6xl px-4 pt-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--color-amber)]">Home</Link></li>
            <li className="text-[var(--color-moon-faint)]">/</li>
            <li className="text-[var(--color-moon-dim)]" aria-current="page">About</li>
          </ol>
        </nav>
        <section className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <span className="kicker">About</span>
          <h1 className="mt-3 text-4xl font-700 uppercase md:text-5xl text-glow">
            About Iron Nest Wiki
          </h1>

          <div className="prose-moon mt-8">
            {/* About This Wiki */}
            <h2>About This Wiki</h2>
            <p>
              Iron Nest Wiki is an <strong>independent strategy resource</strong>, news
              archive, and guide companion for{" "}
              <em>IRON NEST: Heavy Turret Simulator</em>. We are an{" "}
              <strong>independent fan site</strong> — not affiliated with,
              endorsed by, or connected to the developers or publishers of IRON
              NEST.
            </p>
            <p>
              Our mission is to document every confirmed aspect of the game with
              evidence-aware precision. We distinguish between what official
              sources confirm and what remains to be verified in the released
              game. No speculation, no fabricated details.
            </p>

            {/* Editorial Standards */}
            <h2>Editorial Standards</h2>
            <p>
              Every claim on this site is graded according to a three-tier
              evidence system:
            </p>
            <ul>
              <li>
                <strong>Confirmed</strong> — Directly stated by official sources
                (Steam store page, developer communications, in-game text, or
                official patch notes).
              </li>
              <li>
                <strong>Verified</strong> — Community-tested and reproducible in
                the released game, but not explicitly documented by the
                developers.
              </li>
              <li>
                <strong>Unverified</strong> — Rumors, datamine findings, or
                community theories that have not been independently confirmed.
                These are clearly labeled as such.
              </li>
            </ul>
            <p>
              When a detail is unverified, we say so explicitly rather than
              filling gaps with speculation. Every guide, table, and statistic
              cites its source or notes the verification level.
            </p>

            {/* Content Sources */}
            <h2>Content Sources</h2>
            <p>
              We source all information exclusively from official and
              verifiable channels:
            </p>
            <ul>
              <li>
                <strong>Steam Official Store Page</strong> — Game features,
                system requirements, pricing, supported languages, and
                developer information.
              </li>
              <li>
                <strong>Steam Community &amp; News API</strong> — Official patch
                notes, announcements, and developer updates.
              </li>
              <li>
                <strong>Developer Social Media</strong> — Direct communications
                from Nick Nieuwoudt &amp; Dominik Latos via their official
                channels.
              </li>
              <li>
                <strong>In-Game Verification</strong> — Mechanics, shell
                stats, and mission details tested and recorded from the released
                game.
              </li>
            </ul>
            <p>
              We <strong>do not</strong> use data from other fan wikis,
              unverified leaks, or speculative forum posts as primary sources.
            </p>

            {/* Update Frequency */}
            <h2>Update Frequency</h2>
            <p>
              The wiki follows the game&apos;s patch cycle. During the launch
              window (August 2026), we check for new Steam announcements and
              patch notes <strong>daily</strong>. After the initial release
              period, we update on a weekly basis or whenever a new patch is
              published.
            </p>
            <p>
              Major content additions (new guides, tool updates, shell
              comparisons) are published as they are verified and written.
            </p>

            {/* Developer Credit */}
            <h2>Developer Credit</h2>
            <p>
              <em>IRON NEST: Heavy Turret Simulator</em> is a two-person
              passion project from{" "}
              <strong>Nick Nieuwoudt &amp; Dominik Latos</strong>. With{" "}
              <strong>20+ years of combined experience</strong> and a lifelong
              obsession with artillery, interwar machinery, and dieselpunk,
              they built this heavy-artillery simulator from the ground up.
            </p>
            <p>
              The game released on <strong>August 6, 2026</strong> on PC via
              Steam, priced at $15.99 USD (20% launch discount; standard price
              $19.99 USD). It features 33 Steam achievements, 16 languages, and
              a free demo (App ID 4300500).
            </p>

            {/* Official Links */}
            <h2>Official Links</h2>
            <p>
              Follow the developers and the game through their official
              channels:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {officialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  rel="nofollow noopener"
                  target="_blank"
                  className="card flex items-center gap-3 p-4 transition-colors hover:border-[var(--color-amber)]"
                >
                  <span className="text-lg">🔗</span>
                  <span className="text-sm font-500 text-[var(--color-moon)]">
                    {link.label}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-auto text-[var(--color-moon-dim)]"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Disclaimer */}
            <h2>Disclaimer</h2>
            <p>
              Iron Nest Wiki is an <strong>unofficial fan site</strong>. We are
              not affiliated with, endorsed by, or connected to Nick Nieuwoudt,
              Dominik Latos, or any publisher of IRON NEST. All trademarks,
              game content, and intellectual property related to{" "}
              <em>IRON NEST: Heavy Turret Simulator</em> belong to their
              respective owners.
            </p>
            <p>
              This site operates under a fan-site fair-use policy. If you are a
              rights holder and have concerns about content on this site, please
              contact us via the channels below.
            </p>

            {/* Contact */}
            <h2>Contact</h2>
            <p>
              For corrections, suggestions, or collaboration inquiries, reach out
              through the official community channels:
            </p>
            <ul>
              <li>
                <a
                  href="https://discord.gg/E92DaqgnZv"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  IRON NEST Official Discord
                </a>{" "}
                — Community discussion and direct developer interaction
              </li>
              <li>
                <a
                  href="https://steamcommunity.com/app/2950790/discussions/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Steam Community Discussions
                </a>{" "}
                — Official forums for bug reports, guides, and feedback
              </li>
            </ul>
            <p>
              Visit our <Link href="/guide">guides</Link>,{" "}
              <Link href="/arsenal">arsenal</Link>, or{" "}
              <Link href="/news">news</Link> sections for the full content
              catalog.
            </p>
          </div>

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
