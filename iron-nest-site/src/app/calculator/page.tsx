import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Ballistic Calculator Guide",
  description: "Complete guide to IRON NEST's ballistic calculator system. Learn how to calculate firing solutions, understand charge-elevation coupling, and troubleshoot calculator errors.",
  alternates: {
    canonical: "/calculator",
  },
  openGraph: {
    images: ["/og-calculator.jpg"],
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/systems" className="hover:text-[var(--color-moon)]">Systems</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">Ballistic Calculator</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Tool</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            Ballistic Calculator Guide
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 2026 · 10 min read
          </p>
          <Image src="/images/screenshots/ss-01.jpg" alt="IRON NEST control panel with powder charge selection and distance input" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              <strong>IRON NEST&apos;s ballistic calculator</strong> is a physical fire-control station that connects map measurement to gun elevation. 
              It processes the relationship among ammunition type, target distance, propellant charge, and required gun elevation. 
              Understanding this system is essential for every operator who wants to move beyond guesswork and achieve consistent first-round hits.
            </p>
            <p>
              The calculator can process numbers, but it cannot verify that you measured the correct target, chose the right shell for the job, 
              or loaded the physical gun correctly. Think of it as a transformation stage inside a longer chain — not as an oracle. 
              This guide explains the complete calculator cycle, common failure modes, and how to troubleshoot when solutions that look correct still produce misses.
            </p>

            <h2>What the Calculator Does</h2>
            <p>
              The ballistic calculator transforms three inputs into one output:
            </p>
            <ul>
              <li><strong>Shell type:</strong> AP, HE, SMK, HCHE, or other available ammunition</li>
              <li><strong>Target distance:</strong> The range from Iron Nest to the target (not observer-to-target)</li>
              <li><strong>Powder charge:</strong> Numbered charge positions that determine muzzle velocity</li>
            </ul>
            <p>
              <strong>Output:</strong> Required gun elevation in degrees.
            </p>
            <p>
              The official interface visibly includes a SHELL TYPE field, a target-distance input, charge selector lamps, and a mechanical counter 
              labeled CALCULATED REQUIRED ELEVATION. Different shell cards display different charges and angles for the same target context, 
              confirming that the calculator is shell-specific.
            </p>

            <blockquote>
              The calculator processes a relationship among ammunition, target distance, propellant charge and required gun elevation. 
              It does not locate the target, choose the morally or tactically correct shell, traverse the turret or verify the physical loader.
            </blockquote>

            <h2>Input 1: Shell Type</h2>
            <p>
              Set the exact current-build label before accepting an elevation. The calculator footage shows ammunition task cards labeled 
              PGAS, TGAS, SMK, AP, STAR, and HCHE. If the field reads EMPTY or retains the previous shell, the rest of the output is not ready for use.
            </p>
            <p>
              Community reports confirm that shell types appear in the calculator in alphabetical order, except EMPT which is first. 
              HCHE appears just before HE. When changing shell type, archive the old solution and set the new type explicitly — 
              cross-shell reuse is unsafe even without knowing the hidden formula.
            </p>

            <h2>Input 2: Target Distance</h2>
            <p>
              Distance must come from the <strong>current Iron Nest position</strong> to the accepted target point. 
              It is not an observer-to-target range copied directly from a report. The tactical map system establishes the target from coordinates, 
              bearings, or distance arcs — then you measure the final gun range from the turret.
            </p>
            <p>
              <strong>Critical rule:</strong> If the turret relocates, remeasure. A world target can remain fixed while its range from the gun changes. 
              Copy units and precision exactly as the current calculator expects.
            </p>

            <h2>Input 3: Powder Charge</h2>
            <p>
              The calculator shows numbered charge positions with indicator lamps. Higher and lower charges alter the trajectory, 
              and the exact charge must match the elevation output. Do not reduce this relationship to &ldquo;longer always means maximum charge.&rdquo; 
              A given range may support more than one arc or mission-specific option.
            </p>
            <p>
              When changing charge, obtain or verify a new elevation. When changing shell, repeat both. 
              The powder charges and elevation form an inseparable pair.
            </p>

            <h2>Output: Required Gun Elevation</h2>
            <p>
              The mechanical counter labeled CALCULATED REQUIRED ELEVATION is the calculator&apos;s primary visible output. 
              Copy it to the correct gun&apos;s elevation control with the displayed precision. Do not confuse required elevation with current gun elevation — 
              one is a computed instruction, the other is a physical state.
            </p>
            <p>
              If left and right guns have independent controls, verify each side. A correct calculator output applied to the wrong gun is still an execution error.
            </p>

            <h2>The Complete Calculator Cycle</h2>
            <p>Follow this sequence for every shot:</p>
            <ol>
              <li>Confirm the active target and current turret position</li>
              <li>Copy the map-derived range with units</li>
              <li>Set the exact shell type</li>
              <li>Enter the target distance</li>
              <li>Select a valid charge according to the current system</li>
              <li>Run or read the calculation</li>
              <li>Record shell, range, charge and elevation together</li>
              <li>Apply charge and elevation to the same physical gun</li>
              <li>Recheck before firing</li>
            </ol>

            <h2>Why Calculator Solutions Can Still Miss</h2>
            <p>
              The calculator only knows its inputs. A precise elevation can be wrong for the operation because:
            </p>
            <ul>
              <li>The range came from a bad map plot</li>
              <li>The shell field is stale (wrong type selected)</li>
              <li>The physical gun carries another round</li>
              <li>The selected charge does not match the loader</li>
              <li>Incorrect elevation setting on the physical gun</li>
              <li>Wrong traverse or bearing</li>
              <li>Incomplete loading state</li>
              <li>Movement after calculation</li>
            </ul>
            <p>
              Diagnose the chain in order rather than turning the calculator controls until a miss disappears. 
              Classify the error first: lateral misses point to target plotting or bearing; range misses point to distance, charge, or elevation; 
              wrong effect points to shell selection.
            </p>

            <h2>Movement and Stale Solutions</h2>
            <p>
              Turret movement invalidates the range and bearing measured from the old position. The shell type and target may remain unchanged, 
              but the calculator input must be refreshed after the new location is known. Mark pre-movement solutions invalid rather than leaving them beside current values.
            </p>
            <p>
              If emergency repositioning temporarily hides the new location, no reliable ballistic calculation can begin until position is re-established. 
              This is an upstream geometry issue, not a calculator malfunction.
            </p>

            <h2>Precision and Rounding</h2>
            <p>
              Use the precision displayed by the current interface. Do not invent extra decimals from an external formula, 
              and do not discard displayed precision casually. Physical controls may have their own readable increments. 
              Record what was actually set — a later impact can only reveal a rounding pattern if the initial setting is known.
            </p>

            <h2>Pre-Fire Calculator Checksum</h2>
            <p>Before leaving the station, read back:</p>
            <ul>
              <li>Target identifier</li>
              <li>Current turret position or solution version</li>
              <li>Shell type</li>
              <li>Target distance and units</li>
              <li>Selected powder charge</li>
              <li>Required elevation</li>
              <li>Gun side that will receive the settings</li>
            </ul>
            <p>
              Then confirm the physical gun matches. The checksum connects computation to machinery.
            </p>

            <h2>Understanding the Underlying Math</h2>
            <p>
              The developer has confirmed that the game uses a simplified linear formula rather than real ballistic physics. 
              The community has derived the working relationship:
            </p>
            <blockquote>
              Elevation = Distance × 0.012 / Number of Charges
            </blockquote>
            <p>
              Where distance is in meters. For example, at 6,470 meters with 2 charges: 6470 × 0.012 = 77.64, then 77.64 / 2 = 38.82° elevation.
            </p>
            <p>
              This simplified model means shells travel in a straight line for a fixed time based on charge count, rather than following a ballistic arc. 
              The developer explained this choice: early development used the Paris gun as a base (55° maximum elevation, rounded to 60° for simplicity), 
              and the system was built around that number. While real-world physics would place optimal range near 45° for shells of this size, 
              the game&apos;s linear formula makes mental calculation possible and increases the skill ceiling for experienced operators.
            </p>
            <p>
              The maximum range per charge follows a simple pattern: 1 charge = 5 km max, 2 charges = 10 km max, 3 charges = 15 km max, and so on. 
              The maximum elevation is 60°. If your calculated elevation exceeds 60°, you need more charges.
            </p>

            <h2>Shell Type Availability</h2>
            <p>
              Shell types unlock through campaign progression. The calculator shows all available shells in alphabetical order (except EMPT first). 
              You start with basic shells and unlock new types as you complete story missions. The shell type field is primarily for display and record-keeping — 
              the calculator only needs distance and charge count to compute elevation. However, keeping the correct shell type selected ensures your firing cards 
              contain complete information for rapid execution.
            </p>

            <h2>Frequently Asked Questions</h2>
            <h3>Do I need to use the calculator for every shot?</h3>
            <p>
              No. Experienced operators can calculate elevation mentally using the formula above. The developer introduced the Gorge mission 
              specifically to challenge players to operate without the calculator. However, the calculator remains the safest tool for precise shots under time pressure.
            </p>
            <h3>Why does 60° give more range than 45°?</h3>
            <p>
              Because the game uses a linear formula, not real ballistics. The developer admits this was a research mistake baked into the build — 
              the Paris gun source claimed 58° maximum elevation, which was rounded to 60°. At this point, with the system already built, 
              a full redesign is not feasible, so 60° stays.
            </p>
            <h3>Can I plan multiple shots in advance?</h3>
            <p>
              Yes. The calculator supports setting up multiple shell cards with different configurations. You can place cards of already-fired shots on the map 
              for reference, and pre-plan up to six shots in advance. This is especially useful during volleys where you don&apos;t want to touch the map between shots.
            </p>
            <h3>What happens if I change charges after calculating?</h3>
            <p>
              You must recalculate. Charge and elevation are a coupled pair — one cannot change without the other. 
              Firing with a different charge than the one used in calculation will produce a miss.
            </p>
            <h3>Does shell weight affect the calculation?</h3>
            <p>
              The pre-release Q&A discussed shell weight as a possible variable, but current official imagery does not confirm it as a visible input. 
              Treat shell-weight handling as unverified unless the released build shows it explicitly.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/systems" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">← All systems</Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need to use the calculator for every shot?", "acceptedAnswer": {"@type": "Answer", "text": "No. Experienced operators can calculate elevation mentally using the formula above. The developer introduced the Gorge mission specifically to challenge players to operate without the calculator. However, the calculator remains the safest tool for precise shots under time pressure."}}, {"@type": "Question", "name": "Why does 60° give more range than 45°?", "acceptedAnswer": {"@type": "Answer", "text": "Because the game uses a linear formula, not real ballistics. The developer admits this was a research mistake baked into the build — the Paris gun source claimed 58° maximum elevation, which was rounded to 60°. At this point, with the system already built, a full redesign is not feasible, so 60° stays."}}, {"@type": "Question", "name": "Can I plan multiple shots in advance?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The calculator supports setting up multiple shell cards with different configurations. You can place cards of already-fired shots on the map for reference, and pre-plan up to six shots in advance. This is especially useful during volleys where you don't want to touch the map between shots."}}, {"@type": "Question", "name": "What happens if I change charges after calculating?", "acceptedAnswer": {"@type": "Answer", "text": "You must recalculate. Charge and elevation are a coupled pair — one cannot change without the other. Firing with a different charge than the one used in calculation will produce a miss."}}, {"@type": "Question", "name": "Does shell weight affect the calculation?", "acceptedAnswer": {"@type": "Answer", "text": "The pre-release Q&A discussed shell weight as a possible variable, but current official imagery does not confirm it as a visible input. Treat shell-weight handling as unverified unless the released build shows it explicitly."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
