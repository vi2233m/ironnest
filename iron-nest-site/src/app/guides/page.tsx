import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import Image from "next/image";

export const metadata = {
  title: "Guides & Articles",
  description: "Complete guides for IRON NEST: Heavy Turret Simulator — ballistics, ammunition, missions, and more.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <nav className="mx-auto max-w-6xl px-4 pt-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--color-amber)]">Home</Link></li>
            <li className="text-[var(--color-moon-faint)]">/</li>
            <li className="text-[var(--color-moon-dim)]" aria-current="page">Guides</li>
          </ol>
        </nav>
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <span className="kicker">Operator Guides</span>
          <h1 className="mt-3 text-4xl font-700 uppercase md:text-5xl">Guides</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-moon-dim)]">
            Operator-tested guides for IRON NEST: Heavy Turret Simulator. From your first
            firing solution to advanced ballistics, mission walkthroughs, and gold medal tactics.
          </p>
          <p className="mt-4 max-w-2xl text-base text-[var(--color-moon-dim)]">
            These articles are built on verified sources — the official Steam store page, developer
            social channels, and in-game observations — and use a three-tier evidence system
            (Confirmed, Verified, Unverified) so you always know how solid a claim is. We update
            regularly to track patches and new discoveries from the field.
          </p>

          {/* Essential guides */}
          <div className="mt-12">
            <h2 className="mb-5 text-2xl font-700 uppercase">Essential guides</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <GuideCard href="/guides/first-firing-solution" chip="Beginner" date="June 16, 2026" title="IRON NEST Beginner Guide: Your First Complete Firing Solution" description="A source-led beginner walkthrough from teleprinter order and map plotting to charge selection, gun laying, firing and outcome review." image="/images/screenshots/ss-05.jpg"
              bannerHue={36} />
              <GuideCard href="/guides/everything-we-know" chip="Overview" date="June 16, 2026" title="IRON NEST Version 1.0 Overview: Release, Features and Gameplay" description="A current, source-led overview of IRON NEST after release: its August 6 launch, heavy-artillery workflow, alternate-Spain setting, story, procedural content and official features." image="/images/screenshots/ss-01.jpg"
              bannerHue={21} />
              <GuideCard href="/guides/ballistic-calculator-guide" chip="Ballistics" date="June 15, 2026" title="IRON NEST Ballistic Calculator Guide" description="A version-aware guide to entering target distance, choosing powder charges, reading elevation and transferring a complete firing solution to the guns." image="/images/screenshots/ss-08.jpg"
              bannerHue={47} />
            </div>
          </div>

          {/* Overview */}
          <div className="mt-12">
            <h2 className="mb-5 text-2xl font-700 uppercase">Overview</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <GuideCard href="/guides/iron-nest-release-date" chip="Overview" date="June 16, 2026" title="IRON NEST Release Date: Version 1.0 Is Out Now" description="IRON NEST released on August 6, 2026, for PC. This guide records the confirmed launch date, demo timeline, platform status and post-launch evidence." image="/images/screenshots/ss-10.jpg"
              bannerHue={20} />
              <GuideCard href="/guides/demo-guide" chip="Demo" date="June 16, 2026" title="IRON NEST Demo Guide: What the Free PC Demo Can Verify" description="Where to download the free IRON NEST demo, what its official listing confirms, how to use it for controls and performance testing." image="/images/screenshots/ss-09.jpg"
              bannerHue={29} />
            </div>
          </div>

          {/* Ammunition */}
          <div className="mt-12">
            <h2 className="mb-5 text-2xl font-700 uppercase">Ammunition</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <GuideCard href="/guides/ammunition-guide" chip="Ammunition" date="June 15, 2026" title="IRON NEST Ammunition Guide: Choosing Shells by Mission Effect" description="A version-aware ammunition guide based on confirmed armor-piercing, smoke and phosgene examples, plus a reliable method for evaluating unlockable shell types." image="/images/screenshots/ss-14.jpg"
              bannerHue={24} />
            </div>
          </div>

          {/* Related sections */}
          <div className="mt-16">
            <h2 className="mb-5 text-2xl font-700 uppercase">Related sections</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/calculator" className="card p-5 group flex flex-col">
                <span className="text-2xl font-700 text-[var(--color-amber)]">🧮</span>
                <h3 className="mt-2 text-lg font-600 uppercase text-[var(--color-moon)] transition-colors group-hover:text-[var(--color-amber)]">
                  Ballistic Calculator
                </h3>
                <p className="mt-1 text-sm text-[var(--color-moon-dim)]">
                  Input range and bearing to get elevation angles and powder charges.
                </p>
              </Link>
              <Link href="/arsenal" className="card p-5 group flex flex-col">
                <span className="text-2xl font-700 text-[var(--color-amber)]">🔧</span>
                <h3 className="mt-2 text-lg font-600 uppercase text-[var(--color-moon)] transition-colors group-hover:text-[var(--color-amber)]">
                  Arsenal Codex
                </h3>
                <p className="mt-1 text-sm text-[var(--color-moon-dim)]">
                  Complete shell specs, tactics, and evidence status for all 30 ammunition types.
                </p>
              </Link>
              <Link href="/guide" className="card p-5 group flex flex-col">
                <span className="text-2xl font-700 text-[var(--color-amber)]">📖</span>
                <h3 className="mt-2 text-lg font-600 uppercase text-[var(--color-moon)] transition-colors group-hover:text-[var(--color-amber)]">
                  Guide Hub
                </h3>
                <p className="mt-1 text-sm text-[var(--color-moon-dim)]">
                  Beginner walkthroughs, mission tips, gold medal tactics, and challenge strategies.
                </p>
              </Link>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-16">
            <Link href="/" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">
              ← Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
