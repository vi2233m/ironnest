import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Smoke Shell (SMK)",
  description:
    "Complete guide to the Smoke Shell in IRON NEST. Tier C screening ammunition with confirmed smoke mechanics, tactical deployment strategies, and undocumented wind behavior.",
  alternates: {
    canonical: "/arsenal/smoke-shell",
  },
};

export default function SmokeShellPage() {
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
            <span className="text-[var(--color-moon-dim)]">Smoke Shell</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Smoke</span>
            <span className="chip text-[var(--color-amber)] border-[var(--color-amber)]">
              Confirmed
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl font-[var(--font-display)] text-glow">
            Smoke Shell
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 2026 · 8 min read
          </p>
          <Image src="/images/screenshots/ss-07.jpg" alt="IRON NEST turret interior with firing controls and pipework" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              The <strong>Smoke Shell (SMK)</strong> is the only non-lethal
              ammunition in the IRON NEST arsenal, yet it is arguably one of
              the most tactically significant. With a 40-meter deployment radius
              and a 20-meter smoke cloud, SMK does not destroy targets — it
              denies the enemy the ability to see, track, and engage. In a game
              where every second of counter-battery exposure can end a mission,
              the ability to blind enemy observers, screen infantry advances,
              and cover turret repositioning is not merely useful; it is
              frequently mission-critical. Operators who dismiss smoke as a
              novelty or waste it on decorative battlefield effects are
              operators who have not yet experienced the betrayal of a
              well-placed enemy observer calling in precision fire.
            </p>
            <p>
              IRON NEST officially confirms the existence and basic behavior of
              smoke ammunition through the firing-card system. The SMK task card
              is selectable in the Ballistic Calculator, displays charge-specific
              elevation data, and integrates with the full loading and firing
              cycle. This confirms SMK as a legitimate, functional shell type with
              observable in-game mechanics. However, significant aspects of
              smoke behavior remain undocumented by the developers and subject
              to community testing. The exact duration of the smoke cloud per
              charge, the interaction between wind speed and smoke drift, the
              visibility reduction percentage for enemy AI, and the behavior of
              smoke in enclosed spaces versus open terrain are all active areas
              of community investigation without official confirmation.
            </p>
            <p>
              This guide presents all confirmed SMK mechanics alongside the best
              available community evidence. It covers specifications, tactical
              doctrine, timing strategies, coordination with other shell types,
              and the critical mindset shift required to treat smoke as a
              movement order rather than a defensive curtain. Mastering SMK
              separates competent operators from those who dominate the
              battlefield through control of visibility itself.
            </p>

            <h2>Specifications</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Tier
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-teal)]">
                  C
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Abbreviation
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  SMK
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Blast Radius
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  40m (no damage) — 20m smoke cloud
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Best Target
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  Sightline denial, screening infantry advances
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Cost
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  Low
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Duration
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  15 seconds per charge (community estimate)
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4 sm:col-span-2">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Evidence Status
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-teal)]">
                  Confirmed screening ammunition
                </dd>
              </div>
            </div>

            <h2>Tactics &amp; Usage</h2>
            <h3>Smoke as a Movement Order</h3>
            <p>
              The most profound tactical insight for SMK deployment is reframing
              its purpose. Smoke is not a defensive curtain to hide behind. It
              is an indirect command tool that forces battlefield movement. When
              you fire smoke near allied infantry positions, the AI interprets
              the smoke cloud as a signal to reposition — moving away from the
              smoked area and toward safer ground. This transforms a single SMK
              round into a force-multiplier that simultaneously protects allies
              and creates separation between friendly and enemy forces.
            </p>
            <p>
              The practical application is elegant: identify an allied unit that
              is dangerously close to an upcoming bombardment zone, fire SMK
              between the allies and the target (not on the target itself), wait
              for the repositioning to complete, and then engage the target
              with lethal ammunition. This sequence eliminates friendly-fire
              risk while maintaining tactical initiative. Operators who fire
              smoke directly on enemy positions expecting the cloud to
              &ldquo;blind&rdquo; the enemy often miss this allied-repositioning
              mechanic entirely, wasting the shell&rsquo;s secondary effect.
            </p>

            <h3>Screening Infantry Advances</h3>
            <p>
              In missions where the objective includes advancing allied infantry
              across open ground under enemy observation, SMK is the difference
              between a successful push and a massacre. The doctrine is simple:
              fire a smoke barrage along the advance axis, timed so that the
              smoke cloud is fully developed when the infantry begins moving. The
              15-second duration (community estimate) provides a narrow window
              — enough for a sprint across 50-80 meters of open terrain, but not
              enough for a leisurely stroll. Coordinate with the Tactical Map to
              identify the exact advance route, then place smoke at 30-meter
              intervals along that route.
            </p>
            <p>
              For longer advances, chain multiple SMK rounds in sequence. The
              first shell creates the initial screen; the second extends it
              before the first dissipates. This requires precise timing and
              pre-calculation of both shells before the first is fired, because
              the reloading cycle must begin immediately after the first shot to
              maintain the screen. In cooperative missions, one operator can
              dedicate an entire barrel to smoke screening while the other
              handles lethal fire — a division of labor that maximizes both
              survival and offensive output.
            </p>

            <h3>Blinding Enemy Observers</h3>
            <p>
              Enemy Forward Observers (FOs) and artillery spotters are
              high-priority SMK targets. These units do not appear on the Tactical
              Map as direct threats, but they enable the counter-battery fire
              that ends missions. When the Teleprinter reports enemy observation
              posts or when counter-battery fire begins without an obvious
              source, firing SMK on suspected observer positions can blind the
              enemy&rsquo;s targeting chain. The 20-meter smoke cloud is large
              enough to obscure multiple observation positions if they are
              clustered, and the low requisition cost makes this an efficient
              trade even when the exact observer location is uncertain.
            </p>
            <p>
              The key is predictive placement, not reactive. Once counter-battery
              fire begins, it is often too late to smoke the observer — the
              firing solution is already transmitted. Instead, identify likely
              observer positions during the intelligence phase: hilltops,
              church towers, tall structures, and positions with clear line of
              sight to your turret. Pre-emptively smoking these positions before
              engaging primary targets denies the enemy the observation window
              needed to call in accurate return fire.
            </p>

            <h3>Covering Turret Repositioning</h3>
            <p>
              Turret repositioning is one of the most vulnerable moments in the
              IRON NEST firing cycle. While the traverse and elevation systems
              are in motion, the turret cannot fire, and the movement is visible
              to enemy observers. A well-timed SMK round fired before
              repositioning begins creates a 15-second window of invisibility
              during which the turret can rotate to a new firing angle without
              drawing counter-battery fire. The smoke does not need to obscure
              the turret itself — it only needs to obscure the line of sight from
              the most likely enemy observer positions.
            </p>
            <p>
              This tactic is especially critical during the betrayal ending,
              where the requisition station closes after the first shot and every
              subsequent movement must be calculated without resupply. A single
              pre-planned SMK round can cover the repositioning needed to engage
              a second target, effectively doubling the turret&rsquo;s offensive
              output in a resource-starved scenario. The low cost of SMK makes
              this a high-return investment even in missions with tight
              requisition budgets.
            </p>

            <h3>Timing and Wind Considerations</h3>
            <p>
              The 15-second smoke duration is a community estimate, not an
              official value. Operators should verify this timing on their
              specific platform build, as duration may vary with charge level or
              patch version. More critically, wind behavior affects smoke
              deployment in ways that remain completely undocumented. Community
              observations suggest that smoke clouds drift downwind at
              approximately 2-3 meters per second in moderate wind conditions,
              but the exact drift rate, the effect of wind speed on cloud
              density, and the behavior in gusting conditions are all unknown.
            </p>
            <p>
              Until official documentation clarifies wind-smoke interaction, the
              conservative approach is to place smoke upwind of the target area
              by roughly 20-30 meters, allowing the drift to carry the cloud over
              the intended coverage zone. In high-wind missions (wind speed above
              12 knots, where the Ballistic Calculator flags yellow warnings),
              smoke effectiveness may degrade significantly — the cloud may
              dissipate faster or drift beyond the target area before achieving
              useful density. In such conditions, consider multiple overlapping
              smoke rounds or alternative tactics such as star-shell
              illumination to maintain battlefield control.
            </p>

            <h2>Evidence Status</h2>
            <div className="mt-4 rounded-lg border border-[var(--color-teal)]/30 bg-[var(--color-teal)]/5 p-4">
              <p className="text-sm font-700 text-[var(--color-teal)]">
                Confirmed Screening Ammunition — Duration, Wind and Visibility
                Mechanics Remain Undocumented
              </p>
              <p className="mt-2 text-sm text-[var(--color-moon-dim)]">
                The SMK shell type is selectable in the Ballistic Calculator,
                appears in official ammunition task cards, and produces visible
                smoke clouds in-game. Its existence and basic screening function
                are confirmed. However, the following critical mechanics remain
                subject to community testing and lack official documentation:
              </p>
              <ul className="mt-2 text-sm text-[var(--color-moon-dim)]">
                <li>
                  Exact smoke cloud duration per charge level (community estimate:
                  15 seconds)
                </li>
                <li>
                  Wind drift rate and direction effect on smoke cloud movement
                </li>
                <li>
                  Visibility reduction percentage for enemy AI within the smoke
                  cloud
                </li>
                <li>
                  Smoke behavior in enclosed spaces (tunnels, buildings) versus
                  open terrain
                </li>
                <li>
                  Interaction between multiple overlapping smoke clouds (stacking
                  or diminishing returns)
                </li>
                <li>
                  Effect of smoke on allied AI repositioning trigger radius and
                  priority
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
                — Understand SMK&rsquo;s tactical niche alongside lethal
                ammunition
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  Ballistic Calculator Guide
                </Link>{" "}
                — Calculate precise SMK firing solutions for screening
                placement
              </li>
              <li>
                <Link
                  href="/guide/tips-and-tricks"
                  className="text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  Tips and Tricks
                </Link>{" "}
                — Advanced smoke-as-movement-order tactics and timing
                strategies
              </li>
              <li>
                <Link
                  href="/arsenal/high-explosive-shell"
                  className="text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  High-Explosive Shell (HCHE)
                </Link>{" "}
                — The lethal counterpart to SMK; coordinate smoke screening
                with area-effect bombardment
              </li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>Does smoke deal any damage?</h3>
            <p>
              No. Smoke shells are purely non-lethal. The 40-meter deployment
              radius and 20-meter smoke cloud produce zero damage to any target
              class. Their purpose is sightline denial, allied repositioning
              signaling, and turret movement screening. Do not expect SMK to
              suppress, damage, or kill enemy units — that is the role of HE,
              HCHE, and AP.
            </p>
            <h3>How long does the smoke last?</h3>
            <p>
              The community estimates approximately 15 seconds per charge, but
              this is not officially documented. Duration may vary with charge
              level, wind conditions, or platform patch version. Operators should
              verify timing through in-game observation and report findings to
              the community wiki for aggregation.
            </p>
            <h3>Can enemies see through smoke?</h3>
            <p>
              The exact visibility reduction for enemy AI remains undocumented.
              Community observations suggest that enemies within the smoke cloud
              have significantly reduced accuracy and targeting speed, but may
              still fire blindly toward last-known positions. The smoke cloud
              does not appear to completely block enemy vision — it degrades it.
              For maximum protection, combine smoke with turret repositioning
              rather than remaining stationary within the cloud.
            </p>
            <h3>Should I smoke the enemy or my own position?</h3>
            <p>
              Neither, ideally. Smoke the space between allies and threats, or
              the approach routes you want allies to take. Smoking enemy
              positions directly is less effective than smoking the observation
              positions that enable enemy targeting. Smoking your own turret
              provides minimal benefit since the enemy can still fire at your
              last-known coordinates. The optimal SMK placement is predictive
              and interpositional, not defensive.
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
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Does smoke deal any damage?", "acceptedAnswer": {"@type": "Answer", "text": "No. Smoke shells are purely non-lethal. The 40-meter deployment radius and 20-meter smoke cloud produce zero damage to any target class. Their purpose is sightline denial, allied repositioning signaling, and turret movement screening. Do not expect SMK to suppress, damage, or kill enemy units — that is the role of HE, HCHE, and AP."}}, {"@type": "Question", "name": "How long does the smoke last?", "acceptedAnswer": {"@type": "Answer", "text": "The community estimates approximately 15 seconds per charge, but this is not officially documented. Duration may vary with charge level, wind conditions, or platform patch version. Operators should verify timing through in-game observation and report findings to the community wiki for aggregation."}}, {"@type": "Question", "name": "Can enemies see through smoke?", "acceptedAnswer": {"@type": "Answer", "text": "The exact visibility reduction for enemy AI remains undocumented. Community observations suggest that enemies within the smoke cloud have significantly reduced accuracy and targeting speed, but may still fire blindly toward last-known positions. The smoke cloud does not appear to completely block enemy vision — it degrades it. For maximum protection, combine smoke with turret repositioning rather than remaining stationary within the cloud."}}, {"@type": "Question", "name": "Should I smoke the enemy or my own position?", "acceptedAnswer": {"@type": "Answer", "text": "Neither, ideally. Smoke the space between allies and threats, or the approach routes you want allies to take. Smoking enemy positions directly is less effective than smoking the observation positions that enable enemy targeting. Smoking your own turret provides minimal benefit since the enemy can still fire at your last-known coordinates. The optimal SMK placement is predictive and interpositional, not defensive."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
