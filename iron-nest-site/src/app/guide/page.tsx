import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Complete Operator's Manual",
  description: "The definitive guide to IRON NEST: Heavy Turret Simulator. Learn the firing loop, map triangulation, shell selection, and every station inside the turret.",
  alternates: {
    canonical: "/guide",
  },
  openGraph: {
    images: ["/og-guide.jpg"],
  },
};

export default function GuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">Guide</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Guide</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            Iron Nest Guide: Complete Operator&apos;s Manual
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 12, 2026 · 12 min read
          </p>
          <Image src="/images/screenshots/ss-05.jpg" alt="IRON NEST turret interior wide shot with control stations" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              <strong>IRON NEST: Heavy Turret Simulator</strong> is a brutal dieselpunk heavy-artillery game where you dominate the battlefield through a colossal war machine. As the operator stationed inside a naval-like turret with two 800mm barrels, your job is to carry out orders from High Command: measure distances on a tactical map, calculate firing solutions, load the correct ammunition, and deliver devastating blows on every coordinated target.
            </p>
            <p>
              This guide is the complete operator&apos;s manual. It covers everything from your first steps inside the turret to advanced battlefield tactics. Whether you are calibrating your first shot or planning a multi-target bombardment under counter-battery fire, the principles here will keep your shells on target and your machine intact.
            </p>

            <h2>Inside the turret: know your stations</h2>
            <p>
              The Iron Nest is not a single weapon. It is a room full of interconnected machinery, and every station answers one question. Before you touch a control, know where you are and what that station does.
            </p>

            <h3>The map table</h3>
            <p>
              The map table is where you will spend most of your time. It displays a 20-kilometer battlefield divided into lettered and numbered grids. Each full grid is 1000 by 1000 meters, and each grid square is further divided into sub-grids from 0,0 to 9,9, with each sub-grid representing 100 by 100 meters. This is where you plot positions, draw bearings, measure ranges, and triangulate enemy locations.
            </p>

            <h3>The teleprinters</h3>
            <p>
              Two teleprinters stand near the map table. The one circled in red receives orders from High Command. The one circled in blue receives field reports and intel from friendly spotters. Left-click any highlighted information to copy it to your clipboard for easier map marking. Read every page before loading a shell. A later paragraph can completely change what the mission is asking you to do.
            </p>

            <h3>The requisition station</h3>
            <p>
              To the left of the teleprinters is the requisition station. Here you purchase shells, powder charges, repositions, intel, and recon planes using requisition points. In challenge mode you start with only 100 points, so spend wisely. You earn more points by destroying priority targets marked with stars, each worth 10 requisition points. Points do not carry over between sessions.
            </p>

            <h3>The ballistic calculator</h3>
            <p>
              The ballistic calculator converts range and powder charge count into the gun elevation required to hit the target. Working from top to bottom, you enter the bearing, select the target icon, choose the shell type, dial in the range, and select the powder charge. A red light means you need more charges; green lights indicate acceptable amounts. Pull the calculate lever to receive a finalized target card on your clipboard.
            </p>

            <h3>The gun controls</h3>
            <p>
              The left and right magazines each hold up to six shells. After selecting ammunition at the requisition station, cycle through the rack with the hand switch, drive the shell into the barrel with the loading handle, then dispense and drive in the powder charges. The front-right turret controls handle bearing rotation, while the front-left controls handle barrel elevation. Each side has a fast lever and a slow wheel for coarse and fine adjustment.
            </p>

            <h2>The firing loop: six steps to every shot</h2>
            <p>
              Every successful shot in Iron Nest follows the same six-step loop. The missions keep changing the target problem, but the loop never changes. Master it once, and you master every mission.
            </p>

            <ol>
              <li><strong>Read</strong> — Read the complete order. Identify the current Iron Nest position, target clues, shell requirement, timer trigger, support condition, and stand-down condition.</li>
              <li><strong>Locate</strong> — Use coordinates, spotter bearings, distances, reconnaissance, corrections, or movement data to establish the target and firing origin on the map.</li>
              <li><strong>Calculate</strong> — Draw one final line from the current Iron Nest position to the confirmed target. Record bearing, range, charges, and elevation.</li>
              <li><strong>Prepare</strong> — Load the required shell and charges, rotate the turret, set elevation, and confirm the correct left or right gun is armed.</li>
              <li><strong>Fire</strong> — Pull the firing cord. Wait for impact or the next report.</li>
              <li><strong>Confirm</strong> — Treat every correction, movement, new target, or phase change as new information. Return to step one.</li>
            </ol>

            <blockquote>
              The most important stopping point is between Locate and Calculate. If you still have two believable target positions, do not buy an expensive shell and hope the blast radius solves your uncertainty. Solve the location problem first.
            </blockquote>

            <h2>Map tools and how to use them</h2>

            <h3>Marking tools</h3>
            <p>
              You have three colored pencils and a drafting compass. Select a tool by left-clicking it, then click and drag to make your mark.
            </p>
            <ul>
              <li><strong>Red pencil</strong> — Provides bearing and range and copies the data to your clipboard. Use this when you are sure of the target and ready to execute the shot.</li>
              <li><strong>Yellow pencil</strong> — Provides bearing and range but does NOT copy to clipboard. Use this for pre-planning, triangulation, and testing intersections without polluting your clipboard.</li>
              <li><strong>White pencil</strong> — Only draws a line. No range or bearing. Use this to track spotter movement or sketch reference lines.</li>
              <li><strong>Drafting compass</strong> — Creates circles and gives a range. Useful when you are given a distance from a known point but no bearing.</li>
            </ul>

            <h3>The iris</h3>
            <p>
              The iris tool on the right side of the map table determines the kill radius of various shells. Adjust it by clicking and dragging the red portion to open or close the iris. This shows you exactly how much damage each shell type can cause, helping you decide whether a near-miss will still destroy the target.
            </p>

            <h3>Marker icons</h3>
            <p>
              Click and drag markers to label your map. Use red for enemy and FDC locations, green for reference points, and blue for spotters and friendly units. Keeping your map organized prevents confusion when multiple targets and observers are in play.
            </p>

            <h2>Triangulation: finding hidden targets</h2>
            <p>
              Most targets are not given as direct coordinates. You must find them using spotter reports. This is the core puzzle of Iron Nest, and it works like real artillery observation.
            </p>
            <p>
              When a spotter reports a bearing, draw a line from that spotter&apos;s known position along the reported bearing. When a spotter reports a distance, draw a circle around that spotter with the reported distance as the radius. The intersection of two or more lines or circles reveals the target. Remember that spotters have an error of plus or minus 0.5 kilometers and degrees, so the intersection is approximate. The only way to know a position exactly is to fire a star shell or send a recon plane over the area.
            </p>
            <p>
              Once you have triangulated the target, mark it with a red icon. Then draw a fresh red line from the Iron Nest to that target. This final line gives you the bearing and range that go into the ballistic calculator. Never use a spotter bearing directly as your turret bearing. The spotter bearing locates the target. The turret bearing fires at it. They are different measurements from different origins.
            </p>

            <h2>Shell types and their battlefield roles</h2>
            <p>
              Iron Nest includes multiple ammunition types, each designed for a specific tactical situation. Using the wrong shell can ruin an otherwise perfect shot.
            </p>
            <ul>
              <li><strong>AP (Armor Piercing)</strong> — A solid steel slug with no explosive filler. Used for underground targets, armored positions, and situations where friendlies are too close for HE. Blast radius: 0.14 km.</li>
              <li><strong>HE (High Explosive)</strong> — Standard burst shell for surface targets, infantry, and artillery batteries. Good balance of damage and area. Blast radius: 0.27 km.</li>
              <li><strong>HCHE (High Capacity High Explosive)</strong> — Massive blast radius for clustered enemies. Ideal when multiple targets fit safely inside the larger effect area. Blast radius: 0.63 km.</li>
              <li><strong>STAR</strong> — Illumination flare that reveals a large area around the impact point. Used for reconnaissance and correction missions. Illumination radius: 12.74 km.</li>
              <li><strong>SMK (Smoke)</strong> — Screening cloud that forces friendly units to reposition. Use it to move allies away from danger zones before bombardment.</li>
              <li><strong>TEAR</strong> — Non-lethal irritant that exposes hidden positions. Use before a destructive follow-up.</li>
              <li><strong>PHOSGENE</strong> — Toxic gas for civil riots and infantry. Does not work on armored targets.</li>
            </ul>

            <h2>Loading and firing: the final sequence</h2>
            <p>
              Once your firing card is complete, move to the loading station. Select the correct shell type from the rack, drive it into the barrel, then dispense and drive in the calculated number of powder charges. Remember: shells and powder charges <strong>cannot be unloaded</strong>. If you make a mistake, you must either fire the wrong load or recalculate with the new charge count.
            </p>
            <p>
              While the gun loads, rotate the turret to the correct bearing. The lever moves quickly but imprecisely; the wheel is slow but accurate. Use the lever for coarse movement and the wheel for fine-tuning. Once loading is complete and the breech is sealed, elevate the barrel to the calculated angle. Again, use the lever to get close and the wheel to dial in the final value.
            </p>
            <p>
              Before firing, run the checklist on the bottom console. Confirm your fire mission, range, shell type, bearing, and that the gun is armed. Then pull the firing cord. Watch the shell&apos;s trajectory on the ballistic arm, and wait for impact confirmation through aerial photos, frontline messages, or newspaper reports.
            </p>

            <h2>Challenge mode and skirmish operations</h2>
            <p>
              Challenge mode uses the same firing loop with less room for waste. You start with limited requisition, face a counter-battery timer, and must balance speed with accuracy. The same principles apply: locate before loading, keep firing cards organized, buy reconnaissance only when it removes useful uncertainty, and use safe multi-target effects when they genuinely save time.
            </p>
            <p>
              The campaign remains the best preparation. Learn how to build a correct firing solution quickly, then learn when not to spend another thirty seconds perfecting one.
            </p>

            <h2>Frequently asked questions</h2>
            <h3>Do I need real artillery knowledge to play Iron Nest?</h3>
            <p>
              No. The developer has stated that the game supplies tools that make most required mathematics approachable. You need to follow the game&apos;s reports, map, and instruments carefully rather than derive real-world artillery equations.
            </p>
            <h3>What is the most common beginner mistake?</h3>
            <p>
              Copying a spotter bearing directly into the turret. Spotter bearings locate the target. The turret bearing is measured from the Iron Nest to the target. They are different lines from different origins.
            </p>
            <h3>Can I move the Iron Nest during a mission?</h3>
            <p>
              Yes. The Iron Nest has four legs and can reposition using a move card from the requisition station. After moving, your position changes and all previous firing solutions become invalid. You must remeasure from the new position.
            </p>
            <h3>What happens if I fire at friendly units?</h3>
            <p>
              Friendly fire counts against your mission score and can prevent gold medal requirements. Some missions have strict ally-kill limits. Always check your target markers before firing.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/guides" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">← All guides</Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need real artillery knowledge to play Iron Nest?", "acceptedAnswer": {"@type": "Answer", "text": "No. The developer has stated that the game supplies tools that make most required mathematics approachable. You need to follow the game's reports, map, and instruments carefully rather than derive real-world artillery equations."}}, {"@type": "Question", "name": "What is the most common beginner mistake?", "acceptedAnswer": {"@type": "Answer", "text": "Copying a spotter bearing directly into the turret. Spotter bearings locate the target. The turret bearing is measured from the Iron Nest to the target. They are different lines from different origins."}}, {"@type": "Question", "name": "Can I move the Iron Nest during a mission?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The Iron Nest has four legs and can reposition using a move card from the requisition station. After moving, your position changes and all previous firing solutions become invalid. You must remeasure from the new position."}}, {"@type": "Question", "name": "What happens if I fire at friendly units?", "acceptedAnswer": {"@type": "Answer", "text": "Friendly fire counts against your mission score and can prevent gold medal requirements. Some missions have strict ally-kill limits. Always check your target markers before firing."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
