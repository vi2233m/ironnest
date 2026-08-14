import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "High-Explosive Shell (HCHE)",
  description:
    "Complete guide to the High-Capacity High-Explosive Shell (HCHE) in IRON NEST. Tier A ammunition with the widest destructive radius, confirmed HCHE label, and strategic usage patterns.",
  alternates: {
    canonical: "/arsenal/high-explosive-shell",
  },
};

export default function HighExplosiveShellPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav
            className="mb-6 text-sm text-[var(--color-moon-faint)]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[var(--color-moon)]">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/arsenal" className="hover:text-[var(--color-moon)]">
              Arsenal
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">
              High-Explosive Shell
            </span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">High-Explosive</span>
            <span className="chip text-[var(--color-amber)] border-[var(--color-amber)]">
              Confirmed
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl font-[var(--font-display)] text-glow">
            High-Explosive Shell
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 2026 · 8 min read
          </p>
          <Image src="/images/screenshots/ss-14.jpg" alt="IRON NEST artillery shell close-up in loading area" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              The <strong>High-Capacity High-Explosive Shell (HCHE)</strong> is
              the most destructive area-of-effect munition in the IRON NEST
              arsenal. With a blast radius of 30 meters — the widest of any
              lethal shell — HCHE transforms clustered enemy formations into
              smoking craters with a single well-placed salvo. It is not a
              general-purpose replacement for standard HE, nor is it a precision
              tool for hardened targets. HCHE occupies a unique tactical niche:
              the elimination of high-value grouped targets where the
              overpressure wave and fragmentation cone can decimate multiple
              objectives simultaneously.
            </p>
            <p>
              IRON NEST officially confirms the HCHE label through the firing
              card system integrated into the Ballistic Calculator. The HCHE
              task card is selectable, displays charge-specific elevation data,
              and appears in the ammunition roster alongside AP, SMK, and other
              confirmed shell types. This confirms the shell&rsquo;s existence and
              basic integration with the firing cycle. However, the exact effect
              profile — the precise damage falloff curve within the 30-meter
              radius, the interaction with different terrain types, and the
              overpressure kill threshold against various target classes —
              remains partially unverified. Community testing has established
              broad behavioral patterns, but granular damage mechanics await
              further documentation.
            </p>
            <p>
              This guide synthesizes all confirmed HCHE information with the
              best available community evidence. It covers specifications,
              strategic doctrine, charge selection, target matching, and the
              disciplined mindset required to avoid wasting this premium
              requisition asset on targets that standard HE or AP would handle
              more efficiently.
            </p>

            <h2>Specifications</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Tier
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-amber)]">
                  A (High-Capacity HE)
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Abbreviation
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  HCHE
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Blast Radius
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  30m — widest destructive radius
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Best Target
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  Clustered formations, grouped infantry, overpressure kills
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Cost
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  Premium requisition cost
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Evidence Status
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-amber)]">
                  Confirmed HCHE label
                </dd>
              </div>
            </div>

            <h2>Tactics &amp; Usage</h2>
            <h3>Strategic Deployment, Not Default Loading</h3>
            <p>
              The most common mistake with HCHE is treating it as a default
              shell. Operators unlock HCHE mid-campaign, become enamored with
              its massive blast radius, and load it for every target
              classification. This is wasteful. HCHE carries a premium requisition
              cost that depletes reserves faster than standard HE, and its
              overkill against single soft targets represents a net loss in
              mission efficiency. The correct doctrine is strategic reserve:
              identify missions with high-value clustered targets, pre-plan
              HCHE shots for those specific engagements, and revert to standard HE
              or AP for all other objectives.
            </p>
            <p>
              A &ldquo;high-value clustered target&rdquo; is any mission
              objective where the Tactical Map shows three or more enemy units
              within a 30-meter radius, or where the Teleprinter designates a
              &ldquo;grouped formation&rdquo; or &ldquo;convoy cluster.&rdquo;
              The &ldquo;Siege of Cartagena&rdquo; mission features multiple
              such clusters — infantry advancing in column formation along
              narrow corridors, supply convoys bunched at intersections, and
              artillery batteries parked in tight emplacements. These are HCHE
              scenarios. A single shell eliminates what would otherwise require
              three or four standard HE rounds, justifying the premium cost
              through ammunition savings and reduced exposure time under
              counter-battery fire.
            </p>

            <h3>Exploiting the Overpressure Wave</h3>
            <p>
              The 30-meter blast radius is not merely fragmentation spread. HCHE
              generates a massive overpressure wave that devastates anything
              within range, including targets behind light cover. Community
              testing suggests that the overpressure kill zone extends slightly
              beyond the visible blast radius, catching troops in trenches,
              behind sandbag walls, or inside lightly fortified positions that
              would survive standard HE. This makes HCHE particularly effective
              against dug-in infantry clusters where standard HE would only
              suppress without eliminating.
            </p>
            <p>
              However, the overpressure wave is not magical. Reinforced
              concrete, bunker walls, and armored vehicle hulls absorb the blast
              without significant damage. HCHE performs poorly — sometimes
              worse than standard HE — against hardened targets because the
              energy disperses across the wide radius rather than concentrating
              on penetration. Never use HCHE against bunkers, armored vehicles,
              or reinforced structures. The shell will detonate, the blast will
              look impressive, and the target will remain operational.
            </p>

            <h3>Charge Selection and Range Bands</h3>
            <p>
              HCHE follows the same ballistic calculator formula as other shell
              types: Elevation = Distance × 0.012 / Number of Charges. However,
              the optimal charge for HCHE differs from AP because the tactical
              goal is area coverage rather than precision penetration. Charge 3
              is the sweet spot for most HCHE engagements — it delivers
              sufficient range for typical clustered targets (4-8 km) while
              keeping the elevation angle moderate and the flight time short.
              Shorter flight time means less wind drift and faster impact,
              reducing the chance that the cluster disperses before the shell
              arrives.
            </p>
            <p>
              Charge 4 extends the effective range to 10 km and beyond, but the
              steeper elevation angle increases flight time and wind
              sensitivity. Reserve charge 4 for distant convoys or artillery
              batteries that cannot be engaged at closer range. Charge 5 and 6
              are rarely justified for HCHE because the extreme range
              engagement of clustered targets is uncommon — by the time
              targets are visible at 12+ km, they are usually dispersed enough
              that the 30-meter radius no longer covers multiple objectives.
            </p>

            <h3>Coordination with Smoke and Spotting</h3>
            <p>
              HCHE missions benefit enormously from pre-engagement spotting. A
              star shell fired before the HCHE salvo illuminates the target
              cluster, confirms the exact centroid for aiming, and reveals any
              last-second dispersion. In cooperative missions, one operator can
              spot with a star shell while the other calculates and fires HCHE.
              The 15-second illumination window of a star shell aligns well with
              the HCHE loading and calculation cycle.
            </p>
            <p>
              Smoke shells (SMK) also complement HCHE tactics, but in a
              counterintuitive way. Rather than smoking the target, smoke the
              approach routes or observation positions. This prevents enemy
              spotters from calling in counter-battery fire while your HCHE
              salvo is in flight. The 15-second smoke duration covers the
              flight time of most HCHE shots at charge 3, buying a window of
              safety that standard HE engagements cannot justify due to their
              lower per-shot value.
            </p>

            <h2>Evidence Status</h2>
            <div className="mt-4 rounded-lg border border-[var(--color-amber)]/30 bg-[var(--color-amber)]/5 p-4">
              <p className="text-sm font-700 text-[var(--color-amber)]">
                Confirmed HCHE Label — Exact Effect Profile Requires
                Verification
              </p>
              <p className="mt-2 text-sm text-[var(--color-moon-dim)]">
                The HCHE shell type is selectable in the Ballistic Calculator and
                appears in official ammunition task cards. Its existence and
                basic integration with the firing cycle are confirmed.
                However, the following aspects remain subject to community
                verification and testing:
              </p>
              <ul className="mt-2 text-sm text-[var(--color-moon-dim)]">
                <li>
                  Precise damage falloff curve within the 30-meter blast radius
                </li>
                <li>
                  Overpressure kill threshold against various target classes
                  (infantry, light vehicles, dug-in positions)
                </li>
                <li>
                  Interaction with terrain types (urban rubble, forest canopy,
                  open field)
                </li>
                <li>
                  Performance against hardened targets compared to standard HE
                </li>
                <li>
                  Exact requisition cost multiplier relative to standard HE
                </li>
              </ul>
            </div>

            <h2>Related Guides</h2>
            <ul>
              <li>
                <Link
                  href="/shells/best-shells"
                  className="text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  Best Shells Tier List
                </Link>{" "}
                — Compare HCHE against AP, chemical, and incendiary rounds
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  Ballistic Calculator Guide
                </Link>{" "}
                — Master charge-elevation coupling for HCHE firing solutions
              </li>
              <li>
                <Link
                  href="/guide/tips-and-tricks"
                  className="text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  Tips and Tricks
                </Link>{" "}
                — Advanced area-effect tactics and dual-gun coordination
              </li>
              <li>
                <Link
                  href="/arsenal/smoke-shell"
                  className="text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  Smoke Shell (SMK)
                </Link>{" "}
                — Screen HCHE engagements and cover turret repositioning
              </li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>Is HCHE better than standard HE for all targets?</h3>
            <p>
              No. HCHE is specifically designed for clustered formations where
              the 30-meter blast radius eliminates multiple targets per shot.
              Against single soft targets, standard HE is more cost-effective.
              Against hardened targets like bunkers or armored vehicles, AP is
              the correct choice. HCHE is a specialist round, not a default
              replacement.
            </p>
            <h3>What is the exact requisition cost of HCHE?</h3>
            <p>
              The official cost is listed as &ldquo;premium&rdquo; in the
              ammunition roster, but the exact point value relative to standard
              HE remains unverified. Community estimates suggest 15-20
              requisition points per shell compared to 10 for standard HE, but
              this should be confirmed through in-game testing on your specific
              platform build.
            </p>
            <h3>Does HCHE damage friendly units?</h3>
            <p>
              Yes. The 30-meter blast radius does not discriminate. Friendly
              infantry, allied vehicles, and even your own turret if positioned
              too close can suffer damage from HCHE detonation. Always verify
              friendly positions on the Tactical Map before firing HCHE, and
              use smoke shells to screen allied advances before launching
              area-effect salvos.
            </p>
            <h3>Can HCHE destroy bunkers?</h3>
            <p>
              No. HCHE disperses its energy across a wide radius rather than
              concentrating on penetration. Against reinforced concrete bunkers,
              HCHE may suppress occupants through overpressure but will not
              achieve structural destruction. Use AP for bunker-breaching, or
              standard HE for suppression if AP is unavailable.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link
              href="/arsenal"
              className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm"
            >
              ← Back to arsenal
            </Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is HCHE better than standard HE for all targets?", "acceptedAnswer": {"@type": "Answer", "text": "No. HCHE is specifically designed for clustered formations where the 30-meter blast radius eliminates multiple targets per shot. Against single soft targets, standard HE is more cost-effective. Against hardened targets like bunkers or armored vehicles, AP is the correct choice. HCHE is a specialist round, not a default replacement."}}, {"@type": "Question", "name": "What is the exact requisition cost of HCHE?", "acceptedAnswer": {"@type": "Answer", "text": "The official cost is listed as &ldquo;premium&rdquo; in the ammunition roster, but the exact point value relative to standard HE remains unverified. Community estimates suggest 15-20 requisition points per shell compared to 10 for standard HE, but this should be confirmed through in-game testing on your specific platform build."}}, {"@type": "Question", "name": "Does HCHE damage friendly units?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The 30-meter blast radius does not discriminate. Friendly infantry, allied vehicles, and even your own turret if positioned too close can suffer damage from HCHE detonation. Always verify friendly positions on the Tactical Map before firing HCHE, and use smoke shells to screen allied advances before launching area-effect salvos."}}, {"@type": "Question", "name": "Can HCHE destroy bunkers?", "acceptedAnswer": {"@type": "Answer", "text": "No. HCHE disperses its energy across a wide radius rather than concentrating on penetration. Against reinforced concrete bunkers, HCHE may suppress occupants through overpressure but will not achieve structural destruction. Use AP for bunker-breaching, or standard HE for suppression if AP is unavailable."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
