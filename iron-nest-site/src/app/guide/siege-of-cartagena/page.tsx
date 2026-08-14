import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Siege of Cartagena Walkthrough",
  description: "Complete mission guide for Operation 6: Siege of Cartagena. Learn how to locate three concealed installations, destroy two coastal batteries, and support the garrison breakout with smoke shells.",
  alternates: {
    canonical: "/guide/siege-of-cartagena",
  },
};

export default function SiegeOfCartagenaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/guides" className="hover:text-[var(--color-moon)]">Guides</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">Siege of Cartagena</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Mission Guide</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            Siege of Cartagena Walkthrough
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 2026 · 12 min read
          </p>
          <Image src="/images/screenshots/ss-13.jpg" alt="IRON NEST firing scene with skull targets and HCHE shell" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              <strong>Operation 6: Siege of Cartagena</strong> is one of the most complex missions in <strong>IRON NEST: Heavy Turret Simulator</strong>. 
              Cartagena&apos;s garrison remains encircled by anti-monarchist forces, and its breakout is stalled by concealed coastal batteries. 
              Command of the operation passes to Vice Admiral Mendoza, who tasks you with clearing the way for the garrison to break free.
            </p>
            <p>
              This mission combines chained intelligence gathering, timed coastal battery destruction, urban clearing, and live smoke support for the final breakout. 
              One inaccurate marker in the early chain can damage several later shots, making precision essential from the first bearing to the final smoke round.
            </p>

            <h2>Mission Overview</h2>
            <p>
              The Siege of Cartagena requires four distinct phases. First, use field reports to locate three concealed installations: 
              the enemy signal station, assembly area, and field command. These targets are hidden from aerial photography, 
              so you must solve them entirely from spotter bearings and distance measurements.
            </p>
            <p>
              After destroying all three installations, locate two coastal batteries from listening-post reports. 
              These batteries activate a Counter-Battery Timer (CBT) when they come online, adding time pressure to an already complex mission. 
              Destroy both batteries before the timer expires, then clear eight additional enemy units, prepare smoke support, and sound the War Horn to commence the breakout.
            </p>

            <blockquote>
              Your primary targets are three high-value installations which are concealed from aerial photography. 
              Field intelligence will provide their positions. Be prepared: Two Vickers 580mm Coastal Batteries hold the cliffs overlooking the harbour.
            </blockquote>

            <h2>Phase 1: Mark Reference Points</h2>
            <p>
              The opening briefing warns that field bearings can carry an error of up to 0.5°. 
              Place all four reference markers before drawing any target measurements:
            </p>
            <ul>
              <li><strong>Iron Nest:</strong> Your turret position (e.g., D10 4:6)</li>
              <li><strong>Spotter 1:</strong> First observation post (e.g., K7 0:2)</li>
              <li><strong>Spotter 2:</strong> Second observation post (e.g., L7 9:2)</li>
              <li><strong>Spotter 3:</strong> Third observation post (e.g., D7 2:5)</li>
            </ul>
            <p>
              Your operation may use different values, but the methodology remains the same. 
              Delete any old Iron Road lines at this point — old railway and AP lines can look like part of the Cartagena chain and cause confusion.
            </p>

            <h2>Phase 2: Locate the Three Concealed Installations</h2>
            <p>
              The three opening installations are hidden from aerial photography, so you must solve them from field reports in order. 
              Do not continue to the next target until the current one is confirmed.
            </p>

            <h3>1. Enemy Signal Station</h3>
            <p>
              Locate the signal station first. Its reports include several distances from different spotters that converge on the same small area. 
              Place the marker at the most credible common intersection rather than at the edge of one measurement circle.
            </p>
            <p>
              <strong>Stop and verify when:</strong>
            </p>
            <ul>
              <li>The reports do not meet in one compact area</li>
              <li>The marker falls outside the enemy backline</li>
              <li>One distance was drawn from the wrong spotter</li>
              <li>The point was chosen because it &ldquo;looks right&rdquo; rather than because the reports agree</li>
            </ul>

            <h3>2. Enemy Assembly Area</h3>
            <p>
              The assembly area uses chained measurements from the confirmed signal station:
            </p>
            <ul>
              <li>Approximately 221° from the enemy signal station</li>
              <li>Approximately 229° from Spotter 2</li>
            </ul>
            <p>
              The target belongs near the crossing of those two lines. 
              This is the first point where signal-station error can carry forward, so zoom in before placing the assembly-area marker.
            </p>

            <h3>3. Enemy Field Command</h3>
            <p>
              The field command uses:
            </p>
            <ul>
              <li>Approximately 235° from the enemy signal station</li>
              <li>Approximately 2.41 km from the enemy assembly area</li>
            </ul>
            <p>
              <strong>Critical:</strong> The 2.41 km measurement begins at the assembly area, not at the signal station. 
              Do not replace the reported location with a point that seems more logical for a command post. 
              The mission tests whether the intelligence chain was constructed correctly.
            </p>

            <h2>Phase 3: Prepare and Fire Opening Shots</h2>
            <p>
              After all three installation markers are confirmed, draw separate final firing lines from Iron Nest to each target. 
              One documented operation produced these solutions:
            </p>
            <ul>
              <li>Signal Station: 149.9° / 6.64 km / ~39.84° elevation</li>
              <li>Assembly Area: 135.5° / 8.16 km / ~48.96° elevation</li>
              <li>Field Command: 98.4° / 9.67 km / ~58.02° elevation</li>
            </ul>
            <p>
              <strong>Important:</strong> These values are examples from one operation, not fixed Cartagena answers. 
              Use H shells for all three opening installations. Number every target marker and firing card before loading — 
              similar-looking cards become easy to reverse once the coastal batteries activate.
            </p>
            <p>
              Before firing, preserve enough requisition for two AP shells and possible movement recovery. 
              Fire one confirmed solution at a time, and read the destruction report before deleting each marker. 
              When the third installation is destroyed, clear the completed construction lines and return to the teleprinter immediately.
            </p>

            <h2>Phase 4: Locate the Coastal Batteries</h2>
            <p>
              The coastal-battery report identifies a listening post and describes the batteries relative to it. 
              In one documented operation:
            </p>
            <ul>
              <li>Listening post: approximately K7 7:8</li>
              <li>First battery: approximately 5.25 km south</li>
              <li>Second battery: approximately 5.27 km southeast</li>
            </ul>
            <p>
              <strong>The real trap:</strong> Treating &ldquo;south&rdquo; and &ldquo;southeast&rdquo; as exact firing bearings (180° and 135°) 
              produces points in implausible locations and wastes precious CBT time. Use each report to define a <em>search sector</em> instead:
            </p>
            <ol>
              <li>Mark the listening post</li>
              <li>Draw the reported distance</li>
              <li>Inspect the southern or southeastern part of that radius</li>
              <li>Check the latest developed reconnaissance covering the coastal strip</li>
              <li>Confirm the actual battery icon</li>
              <li>Only then draw the final Iron Nest-to-battery line</li>
            </ol>
            <p>
              In documented operations, both coastal-battery icons were already visible in developed reconnaissance, 
              but they were noticed only after several incorrect shots. Do not fire at the center of the directional estimate 
              when the actual battery icon is available elsewhere on the map.
            </p>

            <h2>Phase 5: Destroy Both Coastal Batteries</h2>
            <p>
              Once both coastal-battery icons are confirmed, prepare both AP solutions before firing. 
              Cartagena punishes three common mistakes here:
            </p>
            <ul>
              <li>Using broad-direction endpoints instead of the confirmed icons</li>
              <li>Loading H shells instead of AP</li>
              <li>Reversing the left and right firing cards</li>
            </ul>
            <p>
              Write the gun side directly on both cards. Do not start the first AP shot while the second battery is still only a guess — 
              the first confirmed hostile action can leave too little time to stop, remeasure, procure another shell, and reload. 
              If both targets are confirmed from the original Iron Nest position, calculate both before committing the volley. 
              If the timer is already too low, use Emergency Move rather than forcing another uncertain attempt.
            </p>

            <h2>Phase 6: Emergency Move and Recovery</h2>
            <p>
              Emergency Move is a recovery tool, not an automatic failure. Use it when:
            </p>
            <ul>
              <li>The battery markers are still uncertain</li>
              <li>The previous AP volley clearly missed</li>
              <li>The two cards were reversed</li>
              <li>The remaining time cannot cover a full corrected sequence</li>
              <li>The next shell would be another guess</li>
            </ul>
            <p>
              After movement, keep the confirmed coastal-battery markers, delete the old Iron Nest marker and firing lines, 
              discard old bearings/ranges/charges/elevations, and request <strong>two Position Reports</strong> before firing again. 
              One report creates a line of possible positions — two reports provide the intersection needed for a precise new firing origin.
            </p>
            <p>
              In one recovery, two reports produced:
            </p>
            <ul>
              <li>Approximately 336° from A9 4:7</li>
              <li>Approximately 303° from B9 7:5</li>
            </ul>
            <p>
              Their intersection gave the new Iron Nest position. From there, recalculate both ranges, charge counts, and elevations. 
              A corrected volley was fired with only about 26 seconds remaining, and the second battery was confirmed destroyed with approximately 11 seconds left.
            </p>

            <h2>Phase 7: Clear Eight Additional Enemy Units</h2>
            <p>
              After both coastal batteries are destroyed, the Counter-Battery pressure ends and the mission moves to the city-clearing stage. 
              You must destroy at least <strong>eight additional enemy units</strong> around Cartagena before the garrison can begin its breakout. 
              The same order warns that units will request supporting smoke after the War Horn is sounded.
            </p>
            <p>
              Group safe targets that can be covered without touching friendly positions. Use smaller individual shots where enemy icons are separated 
              or close to the breakout route. Do not continue clearing the entire map by habit — only eight kills are required. 
              Continue firing until eight additional kills are confirmed, the breakout indicator turns green, and the War Horn becomes the next required action.
            </p>

            <h2>Phase 8: Smoke Support and Breakout</h2>
            <p>
              Buy <strong>two Smoke Shells</strong> after the eight-unit requirement is confirmed. Do not buy four as insurance — 
              extra smoke contributed to inefficient resource results in documented runs. Before sounding the horn:
            </p>
            <ul>
              <li>Confirm both coastal batteries are destroyed</li>
              <li>Confirm the eight-unit requirement</li>
              <li>Clear old destructive firing lines</li>
              <li>Keep the current Iron Nest marker</li>
              <li>Load or stage two Smoke Shells</li>
              <li>Preserve enough charges for two shots around 11 km</li>
            </ul>
            <p>
              Sound the War Horn to commence the breakout. Do not precompute the Smoke Shell solutions — the exact coordinates arrive only after the advance begins.
            </p>

            <h3>First Smoke Request: K6 8:5</h3>
            <p>
              One documented breakout request was:
            </p>
            <ul>
              <li>Coordinate: K6 8:5</li>
              <li>Bearing: 110.8°</li>
              <li>Range: 11.55 km</li>
              <li>Charges: 3</li>
              <li>Elevation: 46.20°</li>
            </ul>
            <p>
              Draw a fresh line from the current Iron Nest position to K6 8:5, calculate the shot, and verify that SMK is physically loaded. 
              After impact, wait for the advancing marine unit to confirm it is pushing through. Do not immediately repeat the same shot — the second unit sends a different coordinate.
            </p>

            <h3>Second Smoke Request: K8 5:1</h3>
            <p>
              The second documented request was:
            </p>
            <ul>
              <li>Coordinate: K8 5:1</li>
              <li>Bearing: 103.5°</li>
              <li>Range: 10.80 km</li>
              <li>Elevation: 43.20°</li>
            </ul>
            <p>
              Do not reuse the first Smoke Shell firing card merely because both requests belong to the same breakout. 
              After the second impact, wait for Mendoza&apos;s final report rather than returning to destructive fire.
            </p>

            <h2>Mission Completion</h2>
            <p>
              The completion order confirms: <strong>&ldquo;Breakout successful. The city held. You may stand down.&rdquo;</strong> 
              Once the breakout succeeds, remaining enemies are optional while friendly units are already moving through the field. 
              Stand down immediately on the safe route.
            </p>
            <p>
              Continuing to fire after this message can consume ammunition that no longer advances the objective, 
              endanger the units that just completed the breakout, and weaken the minimum-assets result. 
              The mission-completion achievement is <strong>Breakout</strong>. The separate Naval Commendation requires Gold on every Cartagena medal.
            </p>

            <h2>Resource Planning</h2>
            <p>
              Cartagena is one of the few missions where resource planning deserves its own check. The operation may require:
            </p>
            <ul>
              <li>Three opening H shells</li>
              <li>Two AP shells</li>
              <li>Reconnaissance over the coastal search area</li>
              <li>Emergency Move</li>
              <li>Two Position Reports after moving</li>
              <li>Replacement AP shells after an incorrect volley</li>
              <li>Destructive shells for eight additional units</li>
              <li>Two Smoke Shells</li>
            </ul>
            <p>
              Do not spend the opening budget on speculative AP for concealed installations, repeated shells at broad directional estimates, 
              overlapping reconnaissance flights, more than two Smoke Shells, or optional targets after breakout success.
            </p>

            <h2>Common Mistakes to Avoid</h2>
            <ul>
              <li><strong>Continuing the chain from an uncertain signal station:</strong> Verify the first marker before continuing — errors compound with each link.</li>
              <li><strong>Measuring 2.41 km from the wrong point:</strong> The field command uses distance from the assembly area, not the signal station.</li>
              <li><strong>Treating south/southeast as exact bearings:</strong> Use them to define search sectors, then confirm battery icons.</li>
              <li><strong>Using H shells against coastal batteries:</strong> Battery targets require precise AP hits.</li>
              <li><strong>Reversing left and right AP cards:</strong> Write the gun side directly on both firing cards before loading.</li>
              <li><strong>Waiting too long to use Emergency Move:</strong> Move when another reliable volley cannot be completed before CBT impact.</li>
              <li><strong>Firing after only one Position Report:</strong> One report gives a line of possible positions, not a precise origin.</li>
              <li><strong>Reusing pre-move ranges and elevations:</strong> Keep battery markers, but recalculate every firing value from the new Nest.</li>
              <li><strong>Clearing every enemy before the War Horn:</strong> Only eight additional units are required.</li>
              <li><strong>Buying more than two Smoke Shells:</strong> The documented route generated exactly two support requests.</li>
              <li><strong>Reusing the first smoke solution:</strong> K6 8:5 and K8 5:1 require separate firing cards.</li>
              <li><strong>Continuing after Mendoza authorizes stand-down:</strong> Remaining enemies are optional once the breakout succeeds.</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>What makes Cartagena different from other missions?</h3>
            <p>
              Cartagena combines chained intelligence (where errors compound), timed coastal batteries (CBT pressure), 
              urban clearing with a specific kill threshold, and live smoke support for a friendly breakout. 
              Most other missions isolate these mechanics; Cartagena demands all of them in sequence.
            </p>
            <h3>How do I know when to use Emergency Move?</h3>
            <p>
              Use Emergency Move when the remaining CBT time is insufficient for a full corrected firing sequence: 
              diagnosis, remeasurement, shell procurement, loading, and impact. Do not wait until the CBT impact is already arriving.
            </p>
            <h3>Can I get all Gold medals on the first attempt?</h3>
            <p>
              The exact Gold thresholds for Cartagena medals (Measured Fire Star, No Quarter Cross, Unaided Fire Distinction, Austere Service Medal) 
              were not confirmed in available documentation. Focus on completing the mission cleanly first, then optimize for specific medals on repeat runs.
            </p>
            <h3>What happens if I sound the War Horn early?</h3>
            <p>
              Mendoza warns: &ldquo;You sounded the horn before the ground was clear. They walked into guns still standing. 
              Confirm the perimeter before you call them forward again.&rdquo; Sounding the horn before eight enemy units are destroyed 
              causes friendly casualties and may fail the mission.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/guides" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">← All guides</Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What makes Cartagena different from other missions?", "acceptedAnswer": {"@type": "Answer", "text": "Cartagena combines chained intelligence (where errors compound), timed coastal batteries (CBT pressure), urban clearing with a specific kill threshold, and live smoke support for a friendly breakout. Most other missions isolate these mechanics; Cartagena demands all of them in sequence."}}, {"@type": "Question", "name": "How do I know when to use Emergency Move?", "acceptedAnswer": {"@type": "Answer", "text": "Use Emergency Move when the remaining CBT time is insufficient for a full corrected firing sequence: diagnosis, remeasurement, shell procurement, loading, and impact. Do not wait until the CBT impact is already arriving."}}, {"@type": "Question", "name": "Can I get all Gold medals on the first attempt?", "acceptedAnswer": {"@type": "Answer", "text": "The exact Gold thresholds for Cartagena medals (Measured Fire Star, No Quarter Cross, Unaided Fire Distinction, Austere Service Medal) were not confirmed in available documentation. Focus on completing the mission cleanly first, then optimize for specific medals on repeat runs."}}, {"@type": "Question", "name": "What happens if I sound the War Horn early?", "acceptedAnswer": {"@type": "Answer", "text": "Mendoza warns: &ldquo;You sounded the horn before the ground was clear. They walked into guns still standing. Confirm the perimeter before you call them forward again.&rdquo; Sounding the horn before eight enemy units are destroyed causes friendly casualties and may fail the mission."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
