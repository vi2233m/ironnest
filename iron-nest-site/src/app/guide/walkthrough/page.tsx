import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Walkthrough: All 15 Campaign Missions",
  description: "Complete mission-by-mission walkthrough for IRON NEST: Heavy Turret Simulator. From Calibration Fire to White Shells, with triangulation help and firing solutions.",
  alternates: {
    canonical: "/guide/walkthrough",
  },
};

export default function WalkthroughPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/guide" className="hover:text-[var(--color-moon)]">Guide</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">Walkthrough</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Walkthrough</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            Iron Nest Walkthrough: All 15 Campaign Missions
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 12, 2026 · 15 min read
          </p>
          <Image src="/images/screenshots/ss-02.jpg" alt="IRON NEST tactical map with clipboard and reconnaissance photos" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              This walkthrough covers the full IRON NEST campaign from <strong>Mission 1 — Calibration Fire</strong> through <strong>Mission 15 — White Shells</strong>. Each mission builds on the same core firing loop, but introduces new mechanics that change how you locate targets, manage time, and choose ammunition. The key principle throughout: <em>separate finding the target from firing at the target.</em>
            </p>
            <p>
              Exact coordinates, bearings, ranges, and elevations can change between operations. The values shown here are examples from verified runs. The reusable answer is the route that produced those numbers, not the numbers themselves.
            </p>

            <h2>The shared firing loop</h2>
            <p>
              Every mission uses the same six-step process. What changes is the information you receive and the constraints you face.
            </p>
            <ol>
              <li><strong>Read</strong> the complete order before touching any control.</li>
              <li><strong>Locate</strong> the target using coordinates, bearings, distances, or reconnaissance.</li>
              <li><strong>Calculate</strong> a fresh firing solution from the current Iron Nest position.</li>
              <li><strong>Prepare</strong> the correct shell, charges, bearing, and elevation.</li>
              <li><strong>Fire</strong> and wait for impact confirmation.</li>
              <li><strong>Confirm</strong> the result and treat every correction as new information.</li>
            </ol>

            <blockquote>
              A spotter bearing locates the target. A turret bearing fires at the target. They are different measurements from different origins. If your turret bearing matches a spotter report, stop before firing.
            </blockquote>

            <h2>Mission 1: Calibration Fire</h2>
            <p>
              The tutorial mission strips away almost every later complication. There is no moving target, counter-battery timer, hidden garrison, or emergency move. High Command provides your position and the target coordinate directly.
            </p>
            <p>
              <strong>Your route:</strong> Mark the supplied Iron Nest position and target. Draw the final line from Iron Nest to the target and record bearing and range. Use that range to choose charges and elevation. Load the same shell and charge count shown on the firing card. Rotate, elevate, fire, and wait for confirmation.
            </p>
            <p>
              The habit to build here is not speed. It is refusing to touch the gun until the firing card is internally consistent. Every later mission adds pressure that makes this discipline harder to maintain, so practice it now.
            </p>

            <h2>Mission 2: Fire and Light</h2>
            <p>
              This mission introduces spotter references and star shells. You must triangulate the opening target using bearings from two friendly observers, then clear a follow-up pair, and finally correct a star shell illumination shot.
            </p>
            <p>
              <strong>Triangulation example:</strong> Spotter 1 reports bearing 96°. Spotter 2 reports bearing 53°. Draw both lines from their known positions. The intersection is the hostile position. The final line from Iron Nest to that intersection gives approximately 65.7° bearing and 12.91 km range. Those are the values that go into the calculator.
            </p>
            <p>
              The final sequence is an illumination and observer-correction problem. STAR is the actual mission tool here, not just a reconnaissance convenience.
            </p>

            <h2>Mission 3: Liberation</h2>
            <p>
              Liberation adds the underground cache and friendly protection. You must rebuild the firing origin after initial positioning, complete P4 reconnaissance, destroy an underground AP cache, and protect friendly units from your own fire.
            </p>
            <p>
              The underground cache becomes an AP problem once its target state is confirmed. Use the yellow pencil to triangulate its position, then switch to the red pencil for the final firing line. If friendlies are near the target, AP is safer than HE because its blast radius is smaller and produces almost no fragmentation.
            </p>

            <h2>Mission 4: Counter-Battery</h2>
            <p>
              The counter-battery timer (CBT) is introduced here. Hostile artillery will fire back at you if you take too long. You must pre-calculate the opening batteries, manage the CBT, and then locate the fresh artillery position after it moves.
            </p>
            <p>
              <strong>Key insight:</strong> Enemy Fire Direction Centers (FDCs) are not just targets. They are pause buttons. Destroying one stops the counter-battery timer temporarily, giving you time to restock and replan. There are only three FDCs in challenge mode, so use them strategically. Do not destroy all three immediately. Hit as many regular targets as possible between FDC kills to maximize your safety windows.
            </p>

            <h2>Mission 5: Iron Road</h2>
            <p>
              A moving target mission. You must intercept a train, destroy both AP emplacements, and time the War Horn safely. Moving targets require course projection. Extend the target&apos;s reported bearing along its course to predict where it will be when your shell arrives.
            </p>
            <p>
              Pre-calculate multiple solutions before firing. The less time you spend turning the turret between shots, the better. Group targets on similar bearings when possible.
            </p>

            <h2>Mission 6: Siege of Cartagena</h2>
            <p>
              Chained installations and the smoke-assisted breakout. You must solve multiple connected targets, recover after an Emergency Move, and use SMK shells to reposition friendly forces before bombardment.
            </p>
            <p>
              Smoke is not just a screen. It is an indirect command tool. Friendly units move toward the center of the smoke. Fire smoke near allies but away from the enemy target. Once they have repositioned, carry out the destructive bombardment with HE or HCHE.
            </p>

            <h2>Mission 7: The Gorge</h2>
            <p>
              The Nest is damaged and must be restarted. You will use manual observed-fire corrections until the pass is clear. This means firing, observing the miss, adjusting based on the impact location, and firing again. It is slow but effective when the ballistic calculator is unreliable.
            </p>

            <h2>Mission 8: Rock of Gibraltar</h2>
            <p>
              You must locate HMS Rockingham without aerial recon, respect the 11:08 firing restriction, and optionally intercept a moving vessel. The restriction means do not fire before the specified time, even if your solution is ready.
            </p>
            <p>
              If The Mole to Dockmaster&apos;s House to Rockingham chain already converges cleanly, you do not need a Forward Observer. Only buy reconnaissance when it removes a specific uncertainty.
            </p>

            <h2>Mission 9: Dead Reckoning</h2>
            <p>
              Hidden primary positions must be exposed with Tear gas before destruction. Fire TEAR first, read the target state from the result, then buy and load the correct destructive shell. Do not buy destructive ammunition for all three primary positions before Tear has revealed what those targets actually are.
            </p>

            <h2>Mission 10: Fire on Call</h2>
            <p>
              Live support calls change the battlefield dynamically. You must answer calls as they arrive, reposition friendlies with Smoke, and handle danger-close shots where the enemy is only about 0.25 km from friendly positions. In one documented case, a precise AP hit was safer than the larger HE blast that was requested.
            </p>

            <h2>Mission 11: High Tide</h2>
            <p>
              Multiple landing-craft intercepts across both guns. You must hold the defensive line until relief arrives at 07:14. The mission feeds constant movement reports, so your bottleneck is keeping two-gun solutions organized, not finding targets.
            </p>
            <p>
              Prefer one live landing-craft solution per gun. New contacts stay on the map until a gun becomes free. Do not overwrite a loaded gun&apos;s solution with a new target until the first shot is away.
            </p>

            <h2>Mission 12: Blind Fire</h2>
            <p>
              Locate four AA batteries through Alpha and Bravo reference points without reconnaissance or shell-impact imagery. This is pure triangulation under pressure. Chained reference points mean each located target becomes the origin for the next bearing.
            </p>

            <h2>Mission 13: Phantom Battery</h2>
            <p>
              Recover your own position after an Emergency Move, locate a mobile battery, and use enemy spotters for 90-second CBT extensions. After moving, one Position Report can leave Iron Nest somewhere along an entire line. If your next AP shot depends on the exact firing origin, pay for the second report rather than guessing.
            </p>

            <h2>Mission 14: Final Harvest</h2>
            <p>
              Pre-plan the moving train and static targets, then balance counter-battery pressure with live support calls. Some longer solutions use three or four powder charges. Replenish powder before a priority gun is loaded and waiting for a charge you no longer have.
            </p>

            <h2>Mission 15: White Shells</h2>
            <p>
              The final mission changes the question. You are no longer trying to find one correct military target. You are deciding what Iron Nest does with the final order. There are four confirmed endings, each triggered by what you fire into Barcelona.
            </p>
            <ul>
              <li><strong>A City in Celebration</strong> — Fire a non-lethal shell (STAR, SMK, or PRPG) into the city center.</li>
              <li><strong>A City Subdued</strong> — Fire a chemical shell (TEAR, PHGN, WP, or CYAN) into the city center.</li>
              <li><strong>A City Silent</strong> — Fire a destructive shell (HE, AP, HCHE, or ATMC) into the city center.</li>
              <li><strong>The Road Not Taken</strong> — Turn against High Command. Recon allied positions, mark retaliation targets, calculate shots, buy shells and powder, then attack command and execute the prepared sequence.</li>
            </ul>
            <p>
              For the betrayal route, buy everything before firing the first shot. The requisition station closes after you are labeled a traitor. Prioritize artillery and spotting units to extend the counter-battery timer. The ATMC shell has an effective range of approximately 3 km radius and can eliminate most units around High Command in a single shot.
            </p>

            <h2>Frequently asked questions</h2>
            <h3>Do mission values change between runs?</h3>
            <p>
              Yes. Exact coordinates, bearings, and ranges can vary. The mission structure and required tactics remain consistent, but the numbers must be recalculated each time.
            </p>
            <h3>What if I fail a gold medal requirement?</h3>
            <p>
              Most missions can be replayed to optimize medal performance. Some medals, like requisition spent, are easier to achieve after unlocking cheaper shells like DRIL in later missions.
            </p>
            <h3>How do I handle the counter-battery timer?</h3>
            <p>
              Destroy FDCs to pause the timer. Plan multiple shots between FDC kills. Keep an eye on shell flight time. If you destroy an FDC and another shell is still in the air, the timer will resume when the second shell lands.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/guide" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">← All guides</Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do mission values change between runs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Exact coordinates, bearings, and ranges can vary. The mission structure and required tactics remain consistent, but the numbers must be recalculated each time."}}, {"@type": "Question", "name": "What if I fail a gold medal requirement?", "acceptedAnswer": {"@type": "Answer", "text": "Most missions can be replayed to optimize medal performance. Some medals, like requisition spent, are easier to achieve after unlocking cheaper shells like DRIL in later missions."}}, {"@type": "Question", "name": "How do I handle the counter-battery timer?", "acceptedAnswer": {"@type": "Answer", "text": "Destroy FDCs to pause the timer. Plan multiple shots between FDC kills. Keep an eye on shell flight time. If you destroy an FDC and another shell is still in the air, the timer will resume when the second shell lands."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
