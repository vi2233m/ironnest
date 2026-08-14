import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Armor-Piercing Shell (AP)",
  description:
    "Complete guide to the Armor-Piercing Shell in IRON NEST. Tier A bunker-breaching ammunition with confirmed penetration mechanics, blast radius, and tactical usage.",
  alternates: {
    canonical: "/arsenal/armor-piercing-shell",
  },
};

export default function ArmorPiercingShellPage() {
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
              Armor-Piercing Shell
            </span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Armor-Piercing</span>
            <span className="chip text-[var(--color-amber)] border-[var(--color-amber)]">
              Confirmed
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl font-[var(--font-display)] text-glow">
            Armor-Piercing Shell
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 2026 · 8 min read
          </p>
          <Image src="/images/screenshots/ss-00.jpg" alt="IRON NEST turret interior with HE shell loaded" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              The <strong>Armor-Piercing Shell (AP)</strong> is one of the most
              tactically significant munitions in the IRON NEST arsenal. Designed
              for concentrated penetration against hardened targets, AP rounds
              trade splash damage for surgical precision and structural
              breaching capability. Unlike High-Explosive shells that blanket an
              area with fragmentation and overpressure, the AP round focuses all
              kinetic energy into a narrow channel, punching through reinforced
              concrete, steel plating, and layered armor that would shrug off
              conventional explosive impacts.
            </p>
            <p>
              IRON NEST officially confirms the existence and behavior of AP
              ammunition through the firing-card system visible in the
              Ballistic Calculator. The AP task card is selectable, displays
              charge-specific elevation data, and integrates with the full
              six-step firing cycle. This places AP firmly in the
              &ldquo;Confirmed&rdquo; evidence tier — the shell exists, its
              mechanics are observable, and its tactical role is well-documented
              by the community. However, certain edge-case penetration scenarios,
              such as multi-layer concrete sandwich structures or angled armor
              above 60 degrees, remain subject to community testing rather than
              official documentation.
            </p>
            <p>
              For operators transitioning from High-Explosive spam to precision
              artillery, AP represents a paradigm shift. The margin for error
              collapses from meters to centimeters. A near-miss with HE still
              inflicts damage through splash; a near-miss with AP inflicts
              nothing. This guide covers every confirmed aspect of AP behavior,
              from blast radius interpretation to charge selection, target
              matching, and the disciplined mindset required to wield
              armor-piercing ammunition effectively.
            </p>

            <h2>Specifications</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Tier
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-amber)]">
                  A
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Abbreviation
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  AP
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Blast Radius
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  5m concentrated penetration
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Best Target
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  Bunkers, armored vehicles, reinforced concrete
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Cost
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-moon)]">
                  Standard
                </dd>
              </div>
              <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-midnight)]/50 p-4">
                <dt className="text-xs uppercase tracking-wider text-[var(--color-moon-faint)]">
                  Evidence Status
                </dt>
                <dd className="mt-1 text-lg font-700 text-[var(--color-amber)]">
                  Confirmed
                </dd>
              </div>
            </div>

            <h2>Tactics &amp; Usage</h2>
            <h3>Reserve AP for Hardened Targets Only</h3>
            <p>
              The cardinal rule of armor-piercing ammunition is conservation. AP
              shells are not general-purpose rounds, and treating them as such
              drains requisition points while delivering suboptimal results.
              Never waste AP on soft targets — infantry in the open, wooden
              structures, light vehicles, or unfortified positions — where a
              standard High-Explosive shell would deliver equal or superior
              results at lower cost and with greater forgiveness for elevation
              error.
            </p>
            <p>
              The 5-meter blast radius of AP is deceptive. It does not describe
              an area-of-effect damage zone in the traditional sense. Instead, it
              represents the concentrated penetration footprint: the physical
              channel through which the shell breaches the target. A direct hit
              on a bunker wall triggers the penetration sequence. A miss by even
              two meters results in zero damage, because the round embeds in
              earth or detonates harmlessly against the outer surface without
              achieving the structural breach. This is fundamentally different
              from HE, where a 5-meter miss still inflicts partial splash
              damage.
            </p>

            <h3>Precision Aim Is Non-Negotiable</h3>
            <p>
              Because AP requires direct impact, precision aim using the
              traverse and elevation handwheels becomes absolutely mandatory.
              Experienced operators develop a pre-fire checklist specifically
              for AP shots: confirm target classification reads
              &ldquo;fortified&rdquo; or &ldquo;armored,&rdquo; verify the
              Ballistic Calculator output against the current shell card,
              double-check that the physical breech contains AP and not HE,
              and only then commit to the firing sequence. Rushing any of these
              steps turns a precision tool into an expensive paperweight.
            </p>
            <p>
              The traverse handwheel controls azimuth; the elevation handwheel
              controls the vertical angle. Both must be set to the exact values
              displayed by the calculator. A one-degree elevation error at 6,000
              meters translates to roughly 100 meters of impact deviation — well
              outside the AP penetration window. Operators who rely on
              &ldquo;eyeballing&rdquo; the target through the sighting reticle,
              rather than trusting the calculator and handwheel scales, will
              miss consistently with AP.
            </p>

            <h3>Charge Selection for Maximum Penetration</h3>
            <p>
              AP shells benefit from higher powder charges in a way that HE does
              not. While HE relies on blast radius to forgive range errors, AP
              relies on impact velocity to achieve penetration depth. Community
              testing suggests that charge 4 or 5 delivers optimal penetration
              against standard fortified targets, while charge 6 may be warranted
              for extreme-range armored vehicles or multi-layer concrete
              structures. Charge 3 and below underperform against hardened
              targets, not because the shell misses, but because impact
              velocity drops below the threshold required to initiate the
              penetration sequence.
            </p>
            <p>
              When facing a mission with mixed target types — some fortified,
              some soft — the disciplined approach is to load AP in one barrel
              and HE in the other. Fire AP at the hardened target first, then
              rotate the turret and fire HE at the soft target without
              reloading. This dual-gun rhythm, described in the Tips &amp;
              Tricks guide, maximizes ammunition efficiency while minimizing
              the reload cycle penalty.
            </p>

            <h3>Target Prioritization in Multi-Objective Missions</h3>
            <p>
              In campaign missions where the Teleprinter spits multiple
              objectives in rapid succession, AP targets should be prioritized
              based on threat level and structural hardness. Enemy Fire
              Direction Centers (FDCs) housed in reinforced bunkers are prime AP
              targets, because destroying them temporarily halts
              counter-battery fire. Armored trains, which appear during the
              &ldquo;Iron Crossing&rdquo; mission, also demand AP — though
              community reports note that standard AP occasionally deflects off
              sloped train plating, suggesting APCR (Armor-Piercing Composite
              Rigid) may be preferable when available.
            </p>
            <p>
              Underground targets present a unique AP use case. The shell
              penetrates the surface layer before detonating, making it
              effective against subterranean bunkers and tunnel mouths where HE
              would merely collapse the entrance without reaching the interior.
              However, the exact depth penetration remains unverified —
              community estimates range from 3 to 8 meters of packed earth,
              depending on charge and soil type.
            </p>

            <h2>Evidence Status</h2>
            <div className="mt-4 rounded-lg border border-[var(--color-amber)]/30 bg-[var(--color-amber)]/5 p-4">
              <p className="text-sm font-700 text-[var(--color-amber)]">
                Confirmed — Official Firing Card Exists
              </p>
              <p className="mt-2 text-sm text-[var(--color-moon-dim)]">
                The AP shell type is selectable in the Ballistic Calculator,
                displays charge-specific elevation data, and appears in the
                official ammunition task cards. Its existence, basic behavior,
                and integration with the firing cycle are confirmed by in-game
                imagery. However, the following aspects remain subject to
                community verification:
              </p>
              <ul className="mt-2 text-sm text-[var(--color-moon-dim)]">
                <li>
                  Exact penetration depth against multi-layer concrete
                  sandwich structures
                </li>
                <li>
                  Deflection behavior against angled armor above 60 degrees
                </li>
                <li>
                  Performance against subterranean targets beyond 5 meters of
                  packed earth
                </li>
                <li>
                  Interaction with the &ldquo;Iron Crossing&rdquo; armored train
                  sloped plating
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
                — Compare AP against HE, HCHE, chemical, and incendiary rounds
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  Ballistic Calculator Guide
                </Link>{" "}
                — Master the calculator for precision AP firing solutions
              </li>
              <li>
                <Link
                  href="/guide/tips-and-tricks"
                  className="text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  Tips and Tricks
                </Link>{" "}
                — Advanced dual-gun rhythm and loading discipline for AP
                operators
              </li>
              <li>
                <Link
                  href="/arsenal/high-explosive-shell"
                  className="text-[var(--color-teal)] hover:text-[var(--color-amber)]"
                >
                  High-Explosive Shell (HCHE)
                </Link>{" "}
                — The soft-target counterpart to AP; know when to switch
              </li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>What happens if AP misses the target?</h3>
            <p>
              Unlike High-Explosive shells, AP deals zero splash damage on a
              miss. The round either embeds in the ground, detonates against the
              target surface without penetrating, or passes through empty space.
              There is no partial damage. This is why precision aim is
              mandatory — a miss is a complete waste of a requisition point.
            </p>
            <h3>Should I use AP against armored trains?</h3>
            <p>
              Standard AP works against armored trains, but community reports
              suggest occasional deflections off sloped plating. If APCR
              (Armor-Piercing Composite Rigid) is available, it is the superior
              choice for the &ldquo;Iron Crossing&rdquo; mission. If only
              standard AP is unlocked, aim for flat surfaces — the train hull
              rather than the angled turret mantlet — and use charge 5 for
              maximum impact velocity.
            </p>
            <h3>How does AP compare to HE against bunkers?</h3>
            <p>
              HE damages the bunker exterior and suppresses occupants through
              overpressure, but rarely destroys the structure in one hit. AP
              penetrates the wall and detonates inside, achieving structural
              kill with a single well-placed round. Against reinforced concrete
              bunkers, AP is the definitive choice. Against wooden or
              earthen bunkers, HE is more cost-effective.
            </p>
            <h3>What charge should I use for AP?</h3>
            <p>
              Charge 4 is the baseline for standard fortified targets within 8
              km. Charge 5 increases penetration depth and is recommended for
              armored vehicles, multi-layer concrete, or targets beyond 8 km.
              Charge 6 is reserved for extreme-range precision shots or
              heavily angled armor. Charges 1-3 underperform against hardened
              targets due to insufficient impact velocity.
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
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What happens if AP misses the target?", "acceptedAnswer": {"@type": "Answer", "text": "Unlike High-Explosive shells, AP deals zero splash damage on a miss. The round either embeds in the ground, detonates against the target surface without penetrating, or passes through empty space. There is no partial damage. This is why precision aim is mandatory — a miss is a complete waste of a requisition point."}}, {"@type": "Question", "name": "Should I use AP against armored trains?", "acceptedAnswer": {"@type": "Answer", "text": "Standard AP works against armored trains, but community reports suggest occasional deflections off sloped plating. If APCR (Armor-Piercing Composite Rigid) is available, it is the superior choice for the &ldquo;Iron Crossing&rdquo; mission. If only standard AP is unlocked, aim for flat surfaces — the train hull rather than the angled turret mantlet — and use charge 5 for maximum impact velocity."}}, {"@type": "Question", "name": "How does AP compare to HE against bunkers?", "acceptedAnswer": {"@type": "Answer", "text": "HE damages the bunker exterior and suppresses occupants through overpressure, but rarely destroys the structure in one hit. AP penetrates the wall and detonates inside, achieving structural kill with a single well-placed round. Against reinforced concrete bunkers, AP is the definitive choice. Against wooden or earthen bunkers, HE is more cost-effective."}}, {"@type": "Question", "name": "What charge should I use for AP?", "acceptedAnswer": {"@type": "Answer", "text": "Charge 4 is the baseline for standard fortified targets within 8 km. Charge 5 increases penetration depth and is recommended for armored vehicles, multi-layer concrete, or targets beyond 8 km. Charge 6 is reserved for extreme-range precision shots or heavily angled armor. Charges 1-3 underperform against hardened targets due to insufficient impact velocity."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
