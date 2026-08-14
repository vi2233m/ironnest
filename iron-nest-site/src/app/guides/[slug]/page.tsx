import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────
   Article data — one record per slug
   ────────────────────────────────────────────────────────── */

interface ArticleData {
  title: string;
  description: string;
  chip: string;
  chipClass?: string;
  dateLine: string;
  evidenceStatus: "Confirmed" | "Verified" | "Unverified";
  evidenceColor: string;
  heroHue: number; // HSL hue for the hero banner gradient
  heroIcon: React.ReactNode;
  breadcrumbLabel: string;
  body: React.ReactNode;
}

const articles: Record<string, ArticleData> = {
  /* ── 1. first-firing-solution ─────────────────────────── */
  "first-firing-solution": {
    title: "Your First Firing Solution",
    description:
      "A source-led beginner walkthrough from teleprinter order and map plotting to charge selection, gun laying, firing and outcome review.",
    chip: "Beginner",
    dateLine: "June 16, 2026 · Updated August 9, 2026 · 8 min read",
    evidenceStatus: "Confirmed",
    evidenceColor: "var(--color-teal)",
    heroHue: 36,
    breadcrumbLabel: "First Firing Solution",
    heroIcon: (
      <svg viewBox="0 0 64 64" width="120" height="120" className="opacity-20" style={{ animation: "banner-cog 60s linear infinite" }}>
        <path fill="#d8a24a" d="M28 4h8l1.6 6.4a22 22 0 0 1 6 3.5l6.2-2.3 4 6.9-4.6 4.6a22 22 0 0 1 0 7l4.6 4.6-4 6.9-6.2-2.3a22 22 0 0 1-6 3.5L36 60h-8l-1.6-6.4a22 22 0 0 1-6-3.5l-6.2 2.3-4-6.9 4.6-4.6a22 22 0 0 1 0-7l-4.6-4.6 4-6.9 6.2 2.3a22 22 0 0 1 6-3.5z" />
        <circle cx="32" cy="32" r="9" fill="#0a0908" />
      </svg>
    ),
    body: (
      <>
        <p>
          Your first successful shot in <strong>IRON NEST: Heavy Turret Simulator</strong> is not one clever
          calculation. It is a sequence of ordinary checks performed in the right order. A
          teleprinter supplies the objective, the tactical map establishes location, the
          ballistic calculator links range and powder charge to elevation, and the gun
          controls make the machine match that solution.
        </p>
        <p>
          Beginners often focus on the last lever because firing is dramatic. Most unexplained
          misses begin earlier: a bearing drawn from the wrong observer, a range measured from
          the spotter instead of the turret, or an elevation calculated for a charge that was
          never loaded. The aim of this guide is to make every handoff visible.
        </p>

        <h2>Before touching a control: identify the job</h2>
        <p>
          Read the complete directive. Record the objective or target label, target type, any
          turret coordinate, every named observer and the relationship each report describes.
          The official Steam page says one teleprinter carries top-priority directives from
          High Command while another relays frontline calls. More than one source of
          information can matter.
        </p>
        <p>
          Do not reduce the order immediately to a single number. Target type affects
          ammunition purpose. Observer bearings or distances may be clues used to locate a
          target rather than values that belong in the gun. A later warning may create time
          pressure or a secondary objective.
        </p>
        <p>
          Keep the original paper available until the outcome is confirmed. It is the first
          link in the audit trail.
        </p>

        <h2>Step 1: separate known positions from relationships</h2>
        <p>A coordinate gives a position. A bearing gives direction from an origin. A range gives distance from an origin. Label each item accordingly:</p>
        <ul>
          <li>IRON NEST position: a map coordinate.</li>
          <li>Spotter 1 position: another coordinate.</li>
          <li>Target Alpha: bearing from Spotter 1.</li>
          <li>Target Alpha: distance from Spotter 2.</li>
        </ul>
        <p>
          The labels prevent a common mistake: using the 10-kilometer observer-to-target
          distance as though it were the turret-to-target firing range. Both numbers may be
          called &ldquo;range,&rdquo; but their origins make them different measurements.
        </p>

        <h2>Step 2: locate the target on the tactical map</h2>
        <p>
          Transfer every known position to the map. If observers report bearings, draw each
          line from its named observer. If a report gives distance, apply that distance around
          the correct origin. The intersection or supported overlap identifies the target.
        </p>
        <p>
          Mark the result with the target label. Colored lines help distinguish observers,
          but the current game&apos;s controls determine which tools are available.
        </p>

        <h2>Step 3: measure from IRON NEST to the target</h2>
        <p>
          Now start the firing problem. Draw or measure one relationship from the turret&apos;s
          current position to the target marker. Record its bearing and distance together.
        </p>
        <blockquote>
          Target Alpha — bearing [value] — turret range [value]
        </blockquote>
        <p>
          Avoid unlabeled scraps such as &ldquo;8.32.&rdquo; If the turret relocates, both values become
          stale because their origin has changed. Re-establish the turret position and measure
          again.
        </p>

        <h2>Step 4: choose ammunition by required effect</h2>
        <p>
          The official store description provides clear examples of purpose: armor-piercing
          rounds breach bunkers, smoke can screen friendly withdrawals, and phosgene gas is
          presented as a morally charged specialist option. The correct shell is the one that
          produces the mission&apos;s required effect at the target.
        </p>

        <h2>Step 5: use the ballistic calculator</h2>
        <p>
          Enter the turret-to-target distance, not a reconnaissance range. Select the intended
          number of powder charges, then operate the control that returns required elevation.
          The official calculator interface makes this relationship explicit.
        </p>
        <blockquote>
          Target Alpha — charge [value] — elevation [value]
        </blockquote>
        <p>
          The pair is inseparable. If the charge changes, recalculate. If the range changes,
          recalculate. Do not keep an old elevation because it looks close.
        </p>

        <h2>Step 6: configure the physical gun</h2>
        <p>
          Move to the loading and gun-laying stations. Confirm the intended shell is selected
          or loaded and that the physical powder charge matches the calculator input. Then
          set the final turret bearing and gun elevation.
        </p>
        <p>
          Pay attention to left and right gun labels. A correct result on the wrong display
          is still a wrong machine state. Let heavy mechanisms settle before reading their
          final values.
        </p>

        <h2>Step 7: perform a pre-fire readback</h2>
        <p>Before pulling the trigger, read the complete package:</p>
        <ul>
          <li>Correct objective and target marker.</li>
          <li>Bearing measured from the current turret position.</li>
          <li>Range measured from the current turret position.</li>
          <li>Shell selected for the intended effect.</li>
          <li>Powder charge used in the calculation.</li>
          <li>Same physical charge prepared at the gun.</li>
          <li>Elevation returned for that range and charge.</li>
          <li>Bearing and elevation set on the intended gun.</li>
        </ul>
        <p>
          This takes seconds and catches errors that random correction would cost whole shots.
          The purpose is not military role-play; it is to prove that every station describes
          the same target.
        </p>

        <h2>Step 8: fire once and preserve the state</h2>
        <p>
          Operate the firing control only after the readback. Do not immediately spin wheels
          or change charges. Keep the solution intact until impact evidence arrives.
        </p>
        <p>
          IRON NEST can communicate outcome through visible impact, aerial photographs,
          frontline messages, objective updates or later newspaper reports. The Steam page
          explicitly says aerial photos reveal the outcome of actions and that the map retains
          the scars of the battlefield.
        </p>

        <h2>If the first shot misses</h2>
        <p>
          Classify before correcting. A shell at approximately the right distance but off to
          one side points first toward target plotting, bearing or traverse transfer. A shell
          on the intended line but short or long points toward range, charge or elevation. A
          hit with the wrong tactical result points toward shell selection.
        </p>
        <p>
          These patterns are clues, not guaranteed diagnoses. Walk backward through the
          recorded solution and find the first mismatch. Correct everything downstream of
          that point. Change one variable at a time so the next result teaches you something.
        </p>

        <h2>The complete loop in one sentence</h2>
        <blockquote>
          Read the order, locate the target, measure from the turret, choose the required
          effect, calculate with a named charge, make the gun match, fire and verify the
          outcome.
        </blockquote>
        <p>
          Once that sentence becomes a habit, IRON NEST stops looking like a room full of
          unrelated machinery. Every station answers one question, and your first firing
          solution succeeds when all of those answers refer to the same shot.
        </p>

        {/* FAQ */}
        <h2>Frequently asked questions</h2>
        <h3>Do I need real artillery knowledge to play IRON NEST?</h3>
        <p>
          No. The developer said the game supplies tools that make most required mathematics
          approachable. You need to follow the game&apos;s reports, map and instruments carefully
          rather than derive real-world artillery equations.
        </p>
        <h3>What information makes up a firing solution?</h3>
        <p>
          A dependable solution keeps target identity, turret-relative bearing and range,
          shell purpose, powder charge and gun elevation together through every station.
        </p>
        <h3>What should a beginner check after a miss?</h3>
        <p>
          Preserve the settings and trace the chain backward: target plot, turret origin,
          bearing, range, calculator inputs, loaded charge, shell and physical gun settings.
          Change only the first confirmed error.
        </p>

        {/* Sources */}
        <h2>Sources</h2>
        <ol>
          <li>
            <a href="https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/" target="_blank" rel="nofollow noopener">
              IRON NEST official Steam page — complete map, calculator, charge, laying and firing loop
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=ibZeDlamWuk&t=1643s" target="_blank" rel="nofollow noopener">
              Developer Q&amp;A — mathematics and observer workflow at 27:23
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=y7zFJjjyRqg" target="_blank" rel="nofollow noopener">
              Official demo trailer — teleprinter, map and firing stations
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=35hAxxPml2E" target="_blank" rel="nofollow noopener">
              Official launch trailer — version 1.0 operating sequence
            </a>
          </li>
        </ol>

        <p className="mt-8 text-sm italic text-[var(--color-moon-faint)]">
          Editorial note: IRON NEST: Heavy Turret Simulator released on August 6, 2026. Pages
          originally researched from the demo retain &ldquo;expected&rdquo; labels until their details have
          been checked against version 1.0.
        </p>
      </>
    ),
  },

  /* ── 2. everything-we-know ──────────────────────────── */
  "everything-we-know": {
    title: "IRON NEST Version 1.0 Overview: Release, Features and Gameplay",
    description:
      "A current, source-led overview of IRON NEST after release: its August 6 launch, heavy-artillery workflow, alternate-Spain setting, story, procedural content and official features.",
    chip: "Overview",
    dateLine: "June 16, 2026 · Updated August 12, 2026 · 10 min read",
    evidenceStatus: "Confirmed",
    evidenceColor: "var(--color-teal)",
    heroHue: 21,
    breadcrumbLabel: "Version 1.0 Overview",
    heroIcon: (
      <svg viewBox="0 0 64 64" width="120" height="120" className="opacity-20" style={{ animation: "banner-cog 60s linear infinite" }}>
        <path fill="#d8a24a" d="M32 2 L38 14 L50 12 L46 24 L58 30 L46 36 L50 48 L38 46 L32 58 L26 46 L14 48 L18 36 L6 30 L18 24 L14 12 L26 14 Z" />
        <circle cx="32" cy="32" r="10" fill="#0a0908" />
      </svg>
    ),
    body: (
      <>
        <p>
          <strong>IRON NEST: Heavy Turret Simulator</strong> is a single-player artillery simulation developed by
          Nick Nieuwoudt &amp; Dominik Latos. Version 1.0 released on August 6, 2026, bringing the
          full campaign, challenge modes, and a complete arsenal of shell types to Steam. This
          guide collects every confirmed feature and mechanic from official sources so you can
          plan your approach before entering the turret.
        </p>

        <h2>Release and platform status</h2>
        <p>
          The game launched on Steam on August 6, 2026, with App ID 2950790. A free demo
          remains available under App ID 4300500 for players who want to test controls and
          performance before purchase. The title is Steam Deck Verified, meaning it has been
          tested for controller compatibility and readable interface scaling on the handheld.
        </p>
        <p>
          The Steam page lists 16 supported languages including English, Simplified Chinese,
          Japanese, Korean, Spanish, Russian, French, German, and others. Interface, subtitles,
          and full audio coverage vary by language.
        </p>

        <h2>Setting and story premise</h2>
        <p>
          IRON NEST takes place in an alternate-history Spain where a prolonged conflict has
          turned heavy coastal artillery into the decisive weapon of the war. You operate a
          massive turret installation — the IRON NEST itself — receiving orders through
          teleprinter, plotting targets on a physical tactical map, and calculating firing
          solutions before loading and firing.
        </p>
        <p>
          The narrative unfolds through mission briefings, newspaper reports, and frontline
          messages. Your choices of ammunition carry moral weight: the game explicitly presents
          chemical weapons as an option with consequences that appear in the press coverage
          of your actions.
        </p>

        <h2>Core gameplay loop</h2>
        <p>The confirmed gameplay sequence follows eight stations:</p>
        <ul>
          <li><strong>Teleprinter:</strong> Receive directives from High Command and frontline observers.</li>
          <li><strong>Tactical map:</strong> Plot positions, bearings, and intersections to locate targets.</li>
          <li><strong>Ballistic calculator:</strong> Convert range and powder charge into required elevation.</li>
          <li><strong>Ammunition selection:</strong> Choose shell type by the effect required at the target.</li>
          <li><strong>Loading station:</strong> Load the selected shell and match the powder charge to the calculation.</li>
          <li><strong>Gun laying:</strong> Set turret bearing and gun elevation on the physical controls.</li>
          <li><strong>Firing:</strong> Execute the shot and preserve the solution state for analysis.</li>
          <li><strong>Outcome review:</strong> Verify results through aerial photographs, impact reports, or newspaper coverage.</li>
        </ul>
        <p>
          The Steam store description emphasizes that the game supplies tools making the
          mathematics approachable. You do not need real-world artillery training; you need
          to follow the in-game reports, map, and instruments carefully.
        </p>

        <h2>Content scope: 15 zones and 30 shells</h2>
        <p>
          Version 1.0 ships with 15 distinct operational zones. Each zone presents its own
          terrain, target types, and tactical constraints. The full arsenal contains 30 shell
          variants across 9 ammunition categories: armor-piercing (AP), high explosive (HE),
          high-capacity high explosive (HCHE), smoke (SMK), star shell (STAR), persistent gas
          (PGAS), tear gas (TGAS), incendiary (PYRO), and electromagnetic pulse (EMPT).
        </p>
        <p>
          Shells are unlocked progressively through campaign progression. Early missions limit
          you to basic AP and HE rounds; later zones introduce chemical, incendiary, and
          specialist ordnance with corresponding moral and tactical implications.
        </p>

        <h2>Challenge modes and leaderboards</h2>
        <p>
          Beyond the campaign, two challenge modes extend replayability. These modes test
          speed, accuracy, or ammunition efficiency under constraints not present in the main
          story. A global leaderboard tracks player performance, comparing completion times,
          shot accuracy, and medal achievements across the player base.
        </p>
        <p>
          The exact scoring formulas and ranking tiers have not been officially detailed.
          Players report that medals factor into leaderboard position, but the precise
          weighting remains <span className="stencil text-[var(--color-rose)]">Unverified</span>.
        </p>

        <h2>Medals, achievements, and progression</h2>
        <p>
          The game contains over 100 medals awarded for specific tactical accomplishments:
          perfect accuracy on a mission, completing a zone without chemical weapons, achieving
          a certain number of consecutive hits, and many more. These medals feed into 33 Steam
          achievements that display on your profile.
        </p>
        <p>
          Some medals are mutually exclusive — a mission completed with gas shells may earn a
          different medal than the same mission completed with conventional rounds. This
          encourages replaying zones with different tactical approaches to collect the full set.
        </p>

        <h2>Technical performance and compatibility</h2>
        <p>
          The demo serves as a reliable performance benchmark. If your system runs the demo
          smoothly at your preferred settings, the full game should perform similarly. The
          minimum and recommended specifications are listed on the Steam store page.
        </p>
        <p>
          Steam Deck Verified status means the interface has been tested for readability at
          1280×800 resolution and controller input has been mapped appropriately. Keyboard and
          mouse remain the primary input method on desktop.
        </p>

        <h2>Continue reading</h2>
        <p>
          For the step-by-step firing workflow, see the{" "}
          <Link href="/guides/first-firing-solution" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Beginner Guide: Your First Complete Firing Solution
          </Link>. For ammunition details, see the{" "}
          <Link href="/guides/ammunition-guide" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Ammunition Guide
          </Link>. For release specifics, see the{" "}
          <Link href="/guides/iron-nest-release-date" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Release Date guide
          </Link>.
        </p>

        {/* Sources */}
        <h2>Sources</h2>
        <ol>
          <li>
            <a href="https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/" target="_blank" rel="nofollow noopener">
              IRON NEST official Steam page — features, release date, and system requirements
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=35hAxxPml2E" target="_blank" rel="nofollow noopener">
              Official launch trailer — version 1.0 gameplay footage
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=ibZeDlamWuk" target="_blank" rel="nofollow noopener">
              Developer Q&amp;A — design philosophy and feature overview
            </a>
          </li>
        </ol>

        <p className="mt-8 text-sm italic text-[var(--color-moon-faint)]">
          Editorial note: All feature claims marked <span className="stencil text-[var(--color-teal)]">Confirmed</span> are sourced directly from the official Steam page or developer communications. Claims marked <span className="stencil text-[var(--color-rose)]">Unverified</span> are based on community observation and may be revised as more evidence emerges.
        </p>
      </>
    ),
  },

  /* ── 3. ballistic-calculator-guide ───────────────────── */
  "ballistic-calculator-guide": {
    title: "IRON NEST Ballistic Calculator Guide",
    description:
      "A version-aware guide to entering target distance, choosing powder charges, reading elevation and transferring a complete firing solution to the guns.",
    chip: "Ballistics",
    dateLine: "June 15, 2026 · 7 min read",
    evidenceStatus: "Confirmed",
    evidenceColor: "var(--color-teal)",
    heroHue: 47,
    breadcrumbLabel: "Ballistic Calculator",
    heroIcon: (
      <svg viewBox="0 0 64 64" width="120" height="120" className="opacity-20" style={{ animation: "banner-cog 60s linear infinite" }}>
        <circle cx="32" cy="32" r="28" fill="none" stroke="#d8a24a" strokeWidth="2" />
        <circle cx="32" cy="32" r="20" fill="none" stroke="#d8a24a" strokeWidth="1" opacity="0.5" />
        <circle cx="32" cy="32" r="12" fill="none" stroke="#d8a24a" strokeWidth="1" opacity="0.3" />
        <line x1="32" y1="4" x2="32" y2="60" stroke="#d8a24a" strokeWidth="1" opacity="0.4" />
        <line x1="4" y1="32" x2="60" y2="32" stroke="#d8a24a" strokeWidth="1" opacity="0.4" />
        <circle cx="32" cy="32" r="3" fill="#d8a24a" />
      </svg>
    ),
    body: (
      <>
        <p>
          The <strong>ballistic calculator</strong> in IRON NEST is the bridge between your map
          work and the physical gun controls. It takes two inputs — target distance and powder
          charge — and returns the elevation angle required for the shell to reach that distance.
          Understanding this tool is essential for every firing solution you will ever build.
        </p>

        <h2>What the calculator does and does not do</h2>
        <p>
          The calculator solves a single equation: given a range and a charge, what elevation
          sends the shell to that point? It does not choose your target, plot your map, select
          your ammunition, or judge the outcome. Those decisions belong to other stations.
        </p>
        <p>
          The calculator also does not compensate for wind, temperature, or barrel wear. The
          developer has stated that the game supplies tools making the mathematics approachable,
          which suggests these real-world variables are either simplified or fixed for gameplay
          clarity. Any advanced ballistic factors beyond range and charge remain{" "}
          <span className="stencil text-[var(--color-rose)]">Unverified</span>.
        </p>

        <h2>Input 1: target distance</h2>
        <p>
          The distance you enter must be measured from the turret&apos;s current position to the
          target, not from any observer or spotter. This is the most common source of calculator
          errors: players enter the 10-kilometer range reported by a forward observer instead of
          the 8.3-kilometer range from the turret itself.
        </p>
        <p>
          On the tactical map, measure from the turret marker to the target marker. Record the
          value with its origin: &ldquo;Target Alpha — turret range 8.32 km.&rdquo; This label prevents
          confusion if the turret relocates or if multiple targets share similar distances.
        </p>

        <h2>Input 2: powder charge selection</h2>
        <p>
          IRON NEST uses a discrete charge system rather than continuous propellant adjustment.
          You select a charge number (typically 1 through 5 or similar), and the calculator
          returns the elevation for that specific charge at your entered range.
        </p>
        <p>
          Higher charges send shells farther at the same elevation, or reach the same distance
          with a lower elevation. The trade-off is not explicitly documented in official sources,
          but typical artillery logic suggests higher charges may increase barrel wear or
          reduce accuracy. The exact penalty system, if any, is{" "}
          <span className="stencil text-[var(--color-rose)]">Unverified</span>.
        </p>
        <blockquote>
          Rule: the charge used in the calculator must match the charge physically loaded at
          the gun. Any mismatch invalidates the elevation reading.
        </blockquote>

        <h2>Output: reading the elevation</h2>
        <p>
          The calculator returns an elevation angle in degrees or mils, depending on the game&apos;s
          interface. Record this value immediately alongside the range and charge that produced
          it. The three values form an inseparable set:
        </p>
        <blockquote>
          Target Alpha — range 8.32 km — charge 3 — elevation 12.4°
        </blockquote>
        <p>
          If any of the three inputs change, the elevation changes. Do not reuse an old elevation
          because it &ldquo;looks close.&rdquo; Even a half-degree error at long range can place the shell
          hundreds of meters from the target.
        </p>

        <h2>Transferring the solution to the gun</h2>
        <p>
          After calculating, move to the gun-laying station. Set the turret bearing first (this
          comes from the map, not the calculator), then set the gun elevation to the calculated
          value. Confirm both values on the correct display — left gun or right gun — before
          proceeding to loading.
        </p>
        <p>
          The physical controls have inertia. Heavy mechanisms settle slowly; wait for the
          readout to stabilize before recording the final value. A premature reading captures
          a transitional state, not the true laid solution.
        </p>

        <h2>Common calculator mistakes</h2>
        <p>Based on community reports and the official demo, these errors appear most frequently:</p>
        <ul>
          <li><strong>Wrong origin:</strong> Using observer-to-target range instead of turret-to-target range.</li>
          <li><strong>Charge mismatch:</strong> Calculating with charge 3 but loading charge 2 at the gun.</li>
          <li><strong>Stale elevation:</strong> Reusing an elevation from a previous shot after the range changed.</li>
          <li><strong>Unit confusion:</strong> Entering kilometers when the calculator expects meters, or vice versa.</li>
          <li><strong>Wrong gun:</strong> Setting elevation on the left display when firing the right gun.</li>
        </ul>

        <h2>Related tools and links</h2>
        <p>
          For an interactive tool that performs the same calculation outside the game, visit the{" "}
          <Link href="/calculator" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Ballistic Calculator
          </Link>{" "}
          page on this wiki. For a detailed explanation of how elevation angles map to
          trajectories, see the{" "}
          <Link href="/calculator/elevation-guide" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Elevation Guide
          </Link>.
        </p>
        <p>
          For the complete firing workflow from teleprinter to impact, see the{" "}
          <Link href="/guides/first-firing-solution" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Beginner Guide: Your First Complete Firing Solution
          </Link>.
        </p>

        {/* Sources */}
        <h2>Sources</h2>
        <ol>
          <li>
            <a href="https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/" target="_blank" rel="nofollow noopener">
              IRON NEST official Steam page — calculator and firing loop description
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=ibZeDlamWuk&t=1643s" target="_blank" rel="nofollow noopener">
              Developer Q&amp;A — tool design and mathematics at 27:23
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=y7zFJjjyRqg" target="_blank" rel="nofollow noopener">
              Official demo trailer — calculator interface shown
            </a>
          </li>
        </ol>

        <p className="mt-8 text-sm italic text-[var(--color-moon-faint)]">
          Editorial note: Calculator mechanics marked <span className="stencil text-[var(--color-teal)]">Confirmed</span> are sourced from the official Steam page and developer Q&amp;A. Advanced ballistic factors such as wind and temperature are marked <span className="stencil text-[var(--color-rose)]">Unverified</span> pending direct evidence from version 1.0 gameplay.
        </p>
      </>
    ),
  },

  /* ── 4. iron-nest-release-date ────────────────────────── */
  "iron-nest-release-date": {
    title: "IRON NEST Release Date: Version 1.0 Is Out Now",
    description:
      "IRON NEST released on August 6, 2026, for PC. This guide records the confirmed launch date, demo timeline, platform status and post-launch evidence.",
    chip: "Overview",
    dateLine: "June 16, 2026 · Updated August 6, 2026 · 5 min read",
    evidenceStatus: "Confirmed",
    evidenceColor: "var(--color-teal)",
    heroHue: 20,
    breadcrumbLabel: "Release Date",
    heroIcon: (
      <svg viewBox="0 0 64 64" width="120" height="120" className="opacity-20" style={{ animation: "banner-cog 60s linear infinite" }}>
        <rect x="8" y="14" width="48" height="40" rx="4" fill="none" stroke="#d8a24a" strokeWidth="2" />
        <line x1="8" y1="22" x2="56" y2="22" stroke="#d8a24a" strokeWidth="1" />
        <line x1="20" y1="8" x2="20" y2="14" stroke="#d8a24a" strokeWidth="2" />
        <line x1="44" y1="8" x2="44" y2="14" stroke="#d8a24a" strokeWidth="2" />
        <text x="32" y="42" textAnchor="middle" fill="#d8a24a" fontSize="14" fontFamily="monospace">06</text>
      </svg>
    ),
    body: (
      <>
        <p>
          <strong>IRON NEST: Heavy Turret Simulator</strong> officially launched on August 6, 2026.
          Developed by Nick Nieuwoudt &amp; Dominik Latos, the game arrived on Steam after a
          publicly playable demo that allowed players to test the core turret mechanics before
          purchase. This guide records every confirmed detail about the release, pricing, and
          platform availability.
        </p>

        <h2>Launch date and Steam presence</h2>
        <p>
          Version 1.0 released on August 6, 2026, at approximately 10:00 AM Pacific Time,
          following the standard Steam new-release schedule. The game is available worldwide
          through the Steam store with no regional exclusivity confirmed.
        </p>
        <p>
          Steam App ID for the full game: <code>2950790</code>. Steam App ID for the free demo:{" "}
          <code>4300500</code>. Both can be accessed directly through Steam search or via the
          official store page URL.
        </p>

        <h2>Pricing and launch promotion</h2>
        <p>
          The standard price in China is ¥59. At launch, a 25% discount reduced the price to
          ¥44.25. This promotion runs through August 20, 2026, after which the price returns
          to the standard rate unless further sales are announced.
        </p>
        <p>
          Regional pricing for other territories follows Steam&apos;s standard regional pricing
          matrix. The exact prices in USD, EUR, GBP, and other currencies are displayed on the
          Steam store page for each user&apos;s region.
        </p>

        <h2>Reception at launch</h2>
        <p>
          Within hours of release, IRON NEST achieved &ldquo;Overwhelmingly Positive&rdquo; status on
          Steam with approximately 98% of reviews being positive. The demo, which had been
          available earlier, maintained a 99% positive rating from players who used it to
          evaluate the game before purchase.
        </p>
        <p>
          Reviewers consistently praise the tactile feel of the turret controls, the satisfaction
          of building a complete firing solution from teleprinter to impact, and the atmospheric
          presentation of the alternate-Spain setting. Common criticisms include the learning
          curve for the ballistic calculator and the lack of in-game tutorials for some advanced
          mechanics.
        </p>

        <h2>Platform and language support</h2>
        <p>
          IRON NEST is a PC-exclusive title at launch. The Steam page lists Windows as the
          supported operating system. Mac and Linux versions have not been announced.
        </p>
        <p>
          Language support covers 16 languages: English, Simplified Chinese, Japanese, Korean,
          Spanish, Russian, French, German, Portuguese, Brazilian Portuguese, Italian, Polish,
          Turkish, Dutch, Swedish, and Czech. Interface and subtitle coverage is comprehensive;
          full audio voiceover is confirmed for English only. Additional audio languages are{" "}
          <span className="stencil text-[var(--color-rose)]">Unverified</span>.
        </p>

        <h2>Steam Deck compatibility</h2>
        <p>
          The game carries Steam Deck Verified status. This means Valve has tested the title
          for controller compatibility, readable interface at 1280×800 resolution, and
          appropriate default graphics settings for the handheld hardware. The turret controls
          have been mapped to Steam Deck inputs, though keyboard and mouse remain the primary
          recommended input method.
        </p>

        <h2>Demo availability post-launch</h2>
        <p>
          The free demo remains available after the full game&apos;s release. It includes the tutorial
          and a portion of the campaign, allowing prospective buyers to verify control comfort and
          performance on their hardware. Demo progress does not carry over to the full game.
        </p>
        <p>
          For a detailed breakdown of what the demo contains and how to use it for testing, see
          the{" "}
          <Link href="/guides/demo-guide" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Demo Guide
          </Link>.
        </p>

        <h2>Continue reading</h2>
        <p>
          For a full feature overview, see the{" "}
          <Link href="/guides/everything-we-know" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Version 1.0 Overview
          </Link>. For the beginner firing workflow, see the{" "}
          <Link href="/guides/first-firing-solution" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            First Firing Solution Guide
          </Link>.
        </p>

        {/* Sources */}
        <h2>Sources</h2>
        <ol>
          <li>
            <a href="https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/" target="_blank" rel="nofollow noopener">
              IRON NEST official Steam page — release date, price, and reviews
            </a>
          </li>
          <li>
            <a href="https://store.steampowered.com/app/4300500/IRON_NEST_Heavy_Turret_Simulator_Demo/" target="_blank" rel="nofollow noopener">
              IRON NEST Demo official Steam page — App ID 4300500
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=35hAxxPml2E" target="_blank" rel="nofollow noopener">
              Official launch trailer — August 6, 2026 release announcement
            </a>
          </li>
        </ol>

        <p className="mt-8 text-sm italic text-[var(--color-moon-faint)]">
          Editorial note: Pricing and discount information is accurate as of August 6, 2026. Steam
          sales and promotions change regularly; check the official store page for current pricing.
        </p>
      </>
    ),
  },

  /* ── 5. demo-guide ─────────────────────────────────────── */
  "demo-guide": {
    title: "IRON NEST Demo Guide: What the Free PC Demo Can Verify",
    description:
      "Where to download the free IRON NEST demo, what its official listing confirms, how to use it for controls and performance testing.",
    chip: "Demo",
    dateLine: "June 16, 2026 · 6 min read",
    evidenceStatus: "Confirmed",
    evidenceColor: "var(--color-teal)",
    heroHue: 29,
    breadcrumbLabel: "Demo Guide",
    heroIcon: (
      <svg viewBox="0 0 64 64" width="120" height="120" className="opacity-20" style={{ animation: "banner-cog 60s linear infinite" }}>
        <polygon points="24,8 52,32 24,56 24,8" fill="none" stroke="#d8a24a" strokeWidth="3" />
        <line x1="12" y1="16" x2="12" y2="48" stroke="#d8a24a" strokeWidth="3" />
      </svg>
    ),
    body: (
      <>
        <p>
          The <strong>IRON NEST demo</strong> is a free, standalone download on Steam that lets you
          experience the core turret mechanics before purchasing the full game. It includes the
          tutorial and a portion of the campaign, giving you enough content to evaluate whether
          the control scheme and performance meet your expectations. This guide explains what the
          demo contains, how to download it, and what you can reliably test with it.
        </p>

        <h2>How to download the demo</h2>
        <p>
          The demo is available on Steam at App ID 4300500. You can find it by searching
          &ldquo;IRON NEST Demo&rdquo; in the Steam store or by visiting the full game&apos;s store page and
          clicking the demo download button. The demo is free to download and play with no
          time limit.
        </p>
        <p>
          The download size is smaller than the full game, though the exact size varies by
          platform and update status. Expect approximately 2–4 GB based on typical demo
          compression ratios. An internet connection is required for the initial download;
          offline play is possible after installation through Steam&apos;s offline mode.
        </p>

        <h2>What the demo includes</h2>
        <p>The demo contains the following confirmed content:</p>
        <ul>
          <li><strong>Tutorial:</strong> A guided introduction to the teleprinter, map, calculator, and firing stations.</li>
          <li><strong>Campaign portion:</strong> A subset of the full campaign missions, reportedly the first 3–5 operational zones.</li>
          <li><strong>Shell selection:</strong> Access to basic ammunition types (AP and HE confirmed; others may be limited).</li>
          <li><strong>Ballistic calculator:</strong> The full calculator interface for practicing range-to-elevation conversion.</li>
          <li><strong>Tactical map:</strong> Complete map functionality for plotting and measuring.</li>
        </ul>
        <p>
          The exact number of zones and shell types available in the demo is{" "}
          <span className="stencil text-[var(--color-rose)]">Unverified</span> — the Steam page
          confirms &ldquo;part of the campaign&rdquo; without specifying the exact cutoff point. Community
          reports suggest 3–5 zones, but this may vary with demo updates.
        </p>

        <h2>What the demo does not include</h2>
        <p>The following features are confirmed to be exclusive to the full game:</p>
        <ul>
          <li><strong>Full campaign:</strong> All 15 operational zones and the complete story progression.</li>
          <li><strong>Complete arsenal:</strong> All 30 shell variants across 9 ammunition categories.</li>
          <li><strong>Challenge modes:</strong> Both challenge modes and leaderboard access.</li>
          <li><strong>Medals and achievements:</strong> The full set of 100+ medals and 33 Steam achievements.</li>
          <li><strong>Progression carryover:</strong> Demo saves do not transfer to the full game.</li>
        </ul>

        <h2>Using the demo for control testing</h2>
        <p>
          The demo is the best way to determine whether IRON NEST&apos;s control scheme suits your
          preferences. The turret uses a combination of mouse interaction, physical dial
          manipulation, and button presses that some players find immersive and others find
          finicky. The tutorial walks you through each station, but the full tactile experience
          only becomes clear when you operate the controls yourself.
        </p>
        <p>
          Pay attention to these specific interactions during the demo: map zoom and pan
          behavior, calculator dial sensitivity, gun laying control response time, and loading
          station button sequences. If any of these feel uncomfortable in the demo, they will
          feel the same in the full game.
        </p>

        <h2>Using the demo for performance testing</h2>
        <p>
          The demo runs on the same engine and assets as the full game, making it a reliable
          performance benchmark. If your system maintains your target frame rate at your
          preferred graphics settings in the demo, expect similar performance in the full
          campaign. The later zones with more complex destruction effects may be more demanding,
          but the demo&apos;s tutorial and early zones represent the baseline load.
        </p>
        <p>
          Monitor GPU and CPU usage during the firing sequence, as this is the most visually
          intensive moment in the demo. Smoke, debris, and shell trajectory rendering all spike
          simultaneously. If your system handles this smoothly, it should handle the full game.
        </p>

        <h2>Demo reception and reviews</h2>
        <p>
          The demo maintains a 99% positive rating on Steam, even higher than the full game&apos;s
          98%. This suggests that players who try the demo before buying are almost universally
          satisfied with what it offers. Common demo reviews praise the tactile controls and
          atmospheric presentation, while noting that the learning curve is steep without
          external guidance.
        </p>

        <h2>Continue reading</h2>
        <p>
          For the full feature list and content scope, see the{" "}
          <Link href="/guides/everything-we-know" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Version 1.0 Overview
          </Link>. For the step-by-step firing workflow, see the{" "}
          <Link href="/guides/first-firing-solution" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Beginner Guide
          </Link>. For release and purchase details, see the{" "}
          <Link href="/guides/iron-nest-release-date" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Release Date guide
          </Link>.
        </p>

        {/* Sources */}
        <h2>Sources</h2>
        <ol>
          <li>
            <a href="https://store.steampowered.com/app/4300500/IRON_NEST_Heavy_Turret_Simulator_Demo/" target="_blank" rel="nofollow noopener">
              IRON NEST Demo official Steam page — App ID 4300500
            </a>
          </li>
          <li>
            <a href="https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/" target="_blank" rel="nofollow noopener">
              IRON NEST full game Steam page — demo reference and feature comparison
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=y7zFJjjyRqg" target="_blank" rel="nofollow noopener">
              Official demo trailer — tutorial and campaign footage
            </a>
          </li>
        </ol>

        <p className="mt-8 text-sm italic text-[var(--color-moon-faint)]">
          Editorial note: Demo content scope marked <span className="stencil text-[var(--color-rose)]">Unverified</span> is based on community reports. The official Steam page confirms only that the demo includes &ldquo;the tutorial and part of the campaign.&rdquo;
        </p>
      </>
    ),
  },

  /* ── 6. ammunition-guide ──────────────────────────────── */
  "ammunition-guide": {
    title: "IRON NEST Ammunition Guide: Choosing Shells by Mission Effect",
    description:
      "A version-aware ammunition guide based on confirmed armor-piercing, smoke and phosgene examples, plus a reliable method for evaluating unlockable shell types.",
    chip: "Ammunition",
    dateLine: "June 15, 2026 · 9 min read",
    evidenceStatus: "Confirmed",
    evidenceColor: "var(--color-teal)",
    heroHue: 24,
    breadcrumbLabel: "Ammunition Guide",
    heroIcon: (
      <svg viewBox="0 0 64 64" width="120" height="120" className="opacity-20" style={{ animation: "banner-cog 60s linear infinite" }}>
        <path fill="#d8a24a" d="M32 4 L36 20 L52 20 L40 30 L44 46 L32 36 L20 46 L24 30 L12 20 L28 20 Z" />
      </svg>
    ),
    body: (
      <>
        <p>
          <strong>IRON NEST</strong> contains 30 shell variants across 9 ammunition categories.
          Choosing the right shell for each target is as important as calculating the correct
          elevation. The official Steam page provides clear examples of purpose: armor-piercing
          rounds breach bunkers, smoke screens friendly withdrawals, and phosgene gas is
          presented as a morally charged specialist option. This guide organizes every confirmed
          shell type by its tactical role and provides a framework for evaluating unlockable
          variants as you progress through the campaign.
        </p>

        <h2>The nine ammunition categories</h2>
        <p>
          The full arsenal is divided into 9 families, each with distinct tactical effects and
          moral implications. The categories and their confirmed roles are:
        </p>
        <ul>
          <li><strong>AP (Armor-Piercing):</strong> Kinetic penetrator for hardened targets — bunkers, fortifications, armored vehicles.</li>
          <li><strong>HE (High Explosive):</strong> General-purpose blast fragmentation for soft targets and area suppression.</li>
          <li><strong>HCHE (High-Capacity High Explosive):</strong> Enhanced blast radius for clustered targets and structural demolition.</li>
          <li><strong>SMK (Smoke):</strong> Screening and concealment — obscures vision for friendly movements or withdrawal.</li>
          <li><strong>STAR (Star Shell / Illumination):</strong> Night and low-visibility target marking — extends operational hours.</li>
          <li><strong>PGAS (Persistent Gas):</strong> Chemical weapon with lingering area denial effect — morally charged — the press will report your choice.</li>
          <li><strong>TGAS (Tear Gas):</strong> Non-lethal chemical irritant for crowd control and suppression — less severe moral weight than PGAS.</li>
          <li><strong>PYRO (Incendiary):</strong> Fire-starting rounds for flammable structures and vegetation — area denial through combustion.</li>
          <li><strong>EMPT (Electromagnetic Pulse):</strong> Electronics disruption — disables communications, sensors, and powered equipment.</li>
        </ul>
        <p>
          The exact number of variants within each category and their unlock progression
          through the 15 campaign zones is{" "}
          <span className="stencil text-[var(--color-rose)]">Unverified</span>. The 30-shell
          total and 9-category breakdown are confirmed by the Steam store description.
        </p>

        <h2>Tier ranking by mission versatility</h2>
        <p>
          Based on confirmed utility across the campaign&apos;s target types, the shell categories
          can be roughly tiered. This ranking reflects general-purpose usefulness, not absolute
          power — the right shell for a specific target always beats a higher-tier generalist.
        </p>
        <ul>
          <li><strong>S-Tier — AP, HE:</strong> Available early, effective against the most common target types, no moral penalties.</li>
          <li><strong>A-Tier — SMK, HCHE:</strong> Situationally dominant — smoke for tactical retreats, HCHE for dense formations.</li>
          <li><strong>B-Tier — STAR, PYRO:</strong> Powerful in specific conditions (night missions, flammable environments) but map-dependent.</li>
          <li><strong>C-Tier — PGAS, TGAS, EMPT:</strong> Specialist tools with narrow optimal use cases or significant drawbacks (moral cost, limited targets).</li>
        </ul>
        <p>
          This tier list is based on community observation and the official store description.
          Individual mission design may elevate any category to S-Tier for that specific
          scenario. The tier rankings are{" "}
          <span className="stencil text-[var(--color-rose)]">Unverified</span> and should be
          treated as a starting hypothesis, not gospel.
        </p>

        <h2>Choosing ammunition by target type</h2>
        <p>The following matchups are confirmed or strongly implied by official sources:</p>
        <ul>
          <li><strong>Bunkers and fortifications:</strong> AP — kinetic penetration breaches hardened structures.</li>
          <li><strong>Troops in the open:</strong> HE — blast fragmentation covers area.</li>
          <li><strong>Troops in dense formations:</strong> HCHE — enhanced radius maximizes casualties per shell.</li>
          <li><strong>Friendly withdrawal needed:</strong> SMK — creates concealment corridor.</li>
          <li><strong>Night target acquisition:</strong> STAR — illuminates area for spotting and firing.</li>
          <li><strong>Area denial (no friendly entry planned):</strong> PGAS — persistent chemical hazard blocks passage.</li>
          <li><strong>Suppress without killing:</strong> TGAS — irritant forces evacuation without lethal casualties.</li>
          <li><strong>Flammable structures / dry terrain:</strong> PYRO — starts fires that spread and consume.</li>
          <li><strong>Communications arrays / radar:</strong> EMPT — disables electronics without structural damage.</li>
        </ul>

        <h2>Ammunition cost and supply constraints</h2>
        <p>
          The game includes a supply system where shells are not infinite. Early missions
          provide generous allocations, but later zones impose tighter budgets that force
          ammunition discipline. The exact cost per shell and budget formulas are{" "}
          <span className="stencil text-[var(--color-rose)]">Unverified</span>, but community
          reports confirm that running out of a specific shell type mid-mission is possible
          and can force suboptimal target-ammunition matches.
        </p>
        <p>
          Budget considerations add a strategic layer: using AP against soft targets wastes
          expensive penetrators, while saving HE for hardened targets that need multiple rounds
          depletes your general-purpose stock. Plan shell selection before the mission begins
          based on the expected target mix in the briefing.
        </p>

        <h2>Moral choices and the press</h2>
        <p>
          IRON NEST explicitly presents chemical weapons as a morally charged option. The Steam
          store description mentions phosgene gas by name and notes that the game tracks your
          choices through newspaper coverage. Using PGAS or TGAS in missions where alternatives
          exist produces negative press coverage that affects the narrative and possibly medal
          eligibility.
        </p>
        <p>
          The exact mechanics of the moral system — whether it affects only story text, medal
          availability, challenge mode access, or leaderboard scoring — are{" "}
          <span className="stencil text-[var(--color-rose)]">Unverified</span>. What is confirmed
          is that the choice exists and has visible consequences in the newspaper reports that
          appear between missions.
        </p>
        <blockquote>
          Tactical note: Chemical weapons may be the optimal tactical choice for some missions.
          The moral cost is a separate calculation. The game does not prevent you from making
          that trade-off; it only ensures you see the consequences.
        </blockquote>

        <h2>Related resources</h2>
        <p>
          For a complete listing of all shell variants and their statistics, visit the{" "}
          <Link href="/arsenal" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Arsenal
          </Link>{" "}
          page. For a community-curated ranking of the most effective shells by zone, see{" "}
          <Link href="/shells/best-shells" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Best Shells
          </Link>.
          For the complete firing workflow, see the{" "}
          <Link href="/guides/first-firing-solution" className="text-[var(--color-amber)] hover:text-[var(--color-moon)]">
            Beginner Guide
          </Link>.
        </p>

        {/* Sources */}
        <h2>Sources</h2>
        <ol>
          <li>
            <a href="https://store.steampowered.com/app/2950790/IRON_NEST_Heavy_Turret_Simulator/" target="_blank" rel="nofollow noopener">
              IRON NEST official Steam page — ammunition categories and moral choice description
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=35hAxxPml2E" target="_blank" rel="nofollow noopener">
              Official launch trailer — shell impact and effect footage
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=ibZeDlamWuk" target="_blank" rel="nofollow noopener">
              Developer Q&amp;A — design intent for ammunition variety and moral weight
            </a>
          </li>
        </ol>

        <p className="mt-8 text-sm italic text-[var(--color-moon-faint)]">
          Editorial note: Shell category roles marked <span className="stencil text-[var(--color-teal)]">Confirmed</span> are sourced from the official Steam page. Tier rankings, unlock progression, and exact moral system mechanics are marked <span className="stencil text-[var(--color-rose)]">Unverified</span> pending direct evidence from version 1.0 gameplay.
        </p>
      </>
    ),
  },
};

/* ──────────────────────────────────────────────────────────
   generateStaticParams
   ────────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

/* ──────────────────────────────────────────────────────────
   generateMetadata
   ────────────────────────────────────────────────────────── */

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) {
    return {
      title: "Guide Not Found",
      description: "The requested guide could not be found.",
    };
  }
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/guides/${params.slug}`,
    },
  };
}

/* ──────────────────────────────────────────────────────────
   Page component
   ────────────────────────────────────────────────────────── */

export default function GuideArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) {
    notFound();
  }

  const heroGradient = `radial-gradient(120% 120% at 20% 0%, hsl(${article.heroHue} 55% 22%), transparent 60%), radial-gradient(120% 120% at 90% 100%, hsl(${article.heroHue + 12} 40% 16%), transparent 55%), linear-gradient(160deg, #1a1611, #0a0908)`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/guides" className="hover:text-[var(--color-moon)]">Guides</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">{article.breadcrumbLabel}</span>
          </nav>

          {/* Header */}
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">{article.chip}</span>
            <span className="stencil text-[0.62rem]" style={{ color: article.evidenceColor }}>
              ● {article.evidenceStatus}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · {article.dateLine}
          </p>

          {/* Hero banner */}
          <Image src="/images/screenshots/ss-05.jpg" alt="IRON NEST turret interior wide shot" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />

          {/* Body */}
          <div className="prose-moon mt-10">
            {article.body}
          </div>

          {/* Back link */}
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/guides" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">
              ← All guides
            </Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need real artillery knowledge to play IRON NEST?", "acceptedAnswer": {"@type": "Answer", "text": "No. The developer said the game supplies tools that make most required mathematics approachable. You need to follow the game's reports, map and instruments carefully rather than derive real-world artillery equations."}}, {"@type": "Question", "name": "What information makes up a firing solution?", "acceptedAnswer": {"@type": "Answer", "text": "A dependable solution keeps target identity, turret-relative bearing and range, shell purpose, powder charge and gun elevation together through every station."}}, {"@type": "Question", "name": "What should a beginner check after a miss?", "acceptedAnswer": {"@type": "Answer", "text": "Preserve the settings and trace the chain backward: target plot, turret origin, bearing, range, calculator inputs, loaded charge, shell and physical gun settings. Change only the first confirmed error."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
