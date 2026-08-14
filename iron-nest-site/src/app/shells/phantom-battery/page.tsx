import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Phantom Battery Walkthrough",
  description: "Complete guide to Mission 13: Phantom Battery. Learn how to survive the opening strike, relocate Iron Nest, find the mobile battery, and survive the Counter-Battery Timer.",
  alternates: {
    canonical: "/shells/phantom-battery",
  },
};

export default function PhantomBatteryPage() {
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
            <span className="text-[var(--color-moon-dim)]">Phantom Battery</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Special</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            Phantom Battery Walkthrough
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 2026 · 12 min read
          </p>
          <Image src="/images/screenshots/ss-13.jpg" alt="IRON NEST firing scene with target engagement panel" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              <strong>Mission 13: Phantom Battery</strong> is widely regarded as the most difficult mission in <strong>IRON NEST: Heavy Turret Simulator</strong>. 
              Unlike previous operations where you hunt static targets, the Phantom Battery hunts you. The mission opens with Iron Nest already under fire, 
              your engine disabled, and a Counter-Battery Timer (CBT) ticking down before the next enemy salvo arrives. 
              You must restart your engine, execute an Emergency Move to an unknown location, find your own position from scratch, 
              locate a mobile enemy battery that relocates after every hit, and destroy it before time runs out.
            </p>
            <p>
              This guide provides a reliable route through the chaos. It covers the opening damage state, engine restart, unknown-location recovery, 
              listening-post bearings, enemy spotter management, 90-second timer extensions, the mobile battery&apos;s repositioning behavior, 
              and the final AP engagement that neutralizes the threat.
            </p>

            <blockquote>
              Something out there is answering shot for shot with Iron Nest. We are about to be destroyed. 
              Emergency Move. Execute an Emergency Move immediately. How do we even know how to do that? 
              Move Iron Nest. A distance in a specific direction. I don&apos;t even know where I am. How do I move?
            </blockquote>

            <h2>Mission Overview</h2>
            <p>
              Phantom Battery gives you two separate problems at once: find the Phantom Battery, and keep rebuilding Iron Nest&apos;s own firing position after movement. 
              The enemy battery is mobile, repositioning after each hit. Your own position changes after every Emergency Move. 
              Both ends of the firing line can change, making this fundamentally different from the fixed-target Counter-Battery mission.
            </p>
            <p>
              The mission deploys three fixed listening posts in your sector that collect bearings on the Phantom Battery when it fires. 
              Enemy spotters scattered across the map provide a crucial resource: each destroyed spotter adds 90 seconds to the Counter-Battery Timer. 
              Managing these spotters as time extensions is often the difference between success and failure.
            </p>

            <h2>Route at a Glance</h2>
            <ol>
              <li>Restart the engine correctly (do not leave controls on starter position)</li>
              <li>Execute the required Emergency Move</li>
              <li>Read the new coarse relocation area</li>
              <li>Request enough Position Reports to recover Iron Nest&apos;s actual position</li>
              <li>Mark all three fixed listening posts</li>
              <li>Wait for the Phantom Battery to fire and generate fresh bearing reports</li>
              <li>Intersect those reports to get a current battery position</li>
              <li>Decide whether the timer allows a battery shot immediately</li>
              <li>If the timer is too low, destroy an enemy spotter for 90 more seconds</li>
              <li>Use AP once the battery position is confirmed</li>
              <li>Move again whenever the CBT becomes unsafe</li>
              <li>Delete every old Iron Nest firing line after movement</li>
              <li>Watch for mobile repositioning before firing at an old battery marker</li>
              <li>Rebuild both positions when necessary</li>
              <li>Finish the current battery position with a fresh AP solution</li>
              <li>Stop after the threat is neutralized</li>
            </ol>

            <h2>Phase 1: Restart the Engine</h2>
            <p>
              The opening attack puts Iron Nest into a damaged state immediately. On your first attempt, you may spend too long fighting the restart controls 
              and then try to execute the move without being certain the engine is actually running. That run ends almost immediately.
            </p>
            <p>
              The correct sequence is:
            </p>
            <ol>
              <li>Use the starter</li>
              <li>Get the engine operating normally</li>
              <li>Move the engine controls out of the start state and into RUN</li>
              <li>Confirm the Nest is actually running</li>
              <li>Then execute Emergency Move</li>
            </ol>
            <p>
              <strong>Do not</strong> start repairing every minor damaged system before moving. The hostile battery is already engaging you. 
              Your first priority is engine → movement → position, not engine → repair everything → organize ammunition → eventually move. 
              The engine controls are the same system encountered in The Gorge mission, so experienced operators will recognize the interface.
            </p>

            <h2>Phase 2: First Emergency Move and Position Recovery</h2>
            <p>
              After the successful restart, your first move relocates Iron Nest somewhere inside a coarse grid area (e.g., R2). 
              This is not an exact coordinate — it is only a coarse area. This distinction matters because you can already receive useful information 
              about the Phantom Battery while still not knowing exactly where you are.
            </p>
            <p>
              <strong>Critical rule:</strong> Knowing the enemy position alone is not enough to fire. You still need a valid Iron Nest-to-target line. 
              After moving, immediately treat every old firing value as dead:
            </p>
            <ul>
              <li>Old turret bearing</li>
              <li>Old range</li>
              <li>Old charge choice</li>
              <li>Old elevation</li>
              <li>Old red firing line</li>
            </ul>
            <p>
              You can keep fixed listening-post markers. You cannot keep a firing solution built from a firing origin that no longer exists.
            </p>

            <h3>Using Position Reports</h3>
            <p>
              A Position Report gives you a reference coordinate, a bearing from that reference toward Iron Nest, and a broad grid containing the Nest. 
              One report creates a line of possible positions. Two reports provide the intersection needed for a precise new firing origin.
            </p>
            <p>
              In one documented recovery, two independent Position Reports produced:
            </p>
            <ul>
              <li>Approximately 336° from A9 4:7</li>
              <li>Approximately 303° from B9 7:5</li>
            </ul>
            <p>
              Their intersection gave a workable new Iron Nest position. <strong>Do not try to save requisition by choosing an arbitrary point and hoping the AP radius forgives it.</strong> 
              The entire mission is built around precise counter-battery fire. A guessed firing origin defeats that purpose.
            </p>
            <p>
              If the relocation data puts Iron Nest somewhere you cannot map reliably (e.g., near the map edge), do not pretend the edge is an exact firing origin. 
              A short controlled move plus new reports is safer than spending another AP round from a guessed point.
            </p>

            <h2>Phase 3: Mark the Listening Posts</h2>
            <p>
              The mission deploys three listening posts in the sector. They are fixed reference points. Their job is to give you bearings when the Phantom Battery re-engages. 
              Mark all three on the map before you start interpreting any battery report.
            </p>
            <p>
              You do not need all three bearings every time. A clean pair of useful bearings can be enough. 
              The mistake is drawing a battery bearing from Iron Nest — listening-post bearings begin at the listening post named in the report. 
              That is the same origin rule used everywhere else in the campaign, but Phantom Battery makes mistakes much more expensive because the CBT is running while you solve them.
            </p>

            <h2>Phase 4: Locate the Phantom Battery</h2>
            <p>
              Let the listening posts find the battery before you guess. In one engagement, the battery re-opened fire and the listening posts began producing fresh bearings. 
              One report included a bearing around 258° from its listening post. Once another useful constraint was added, the two lines produced a believable crossing.
            </p>
            <p>
              This is where you make the first big mission decision:
            </p>
            <ul>
              <li><strong>If the battery point is clean and you have enough time:</strong> Build the firing solution immediately</li>
              <li><strong>If the battery point is still weak:</strong> Wait for another useful report instead of spending AP on a guess</li>
              <li><strong>If the timer is already too low:</strong> Switch priorities and kill an enemy spotter for more time</li>
            </ul>
            <p>
              That last option is what makes Phantom Battery different from a simple &ldquo;find the intersection and shoot&rdquo; puzzle. 
              Time management is as important as geometry.
            </p>

            <h2>Phase 5: First Battery Shot and AP Requirement</h2>
            <p>
              One first confident battery solution produced approximately:
            </p>
            <ul>
              <li>287.5° bearing</li>
              <li>3 charges</li>
              <li>Approximately 42.54° elevation</li>
            </ul>
            <p>
              The shot reached the suspected Phantom Battery position. It did not finish the mission. Instead, the target state made it clear that 
              the position required a precise armor-piercing follow-up. Once the target is confirmed as an AP problem, stop experimenting with wider destructive shells 
              and prepare the precise follow-up.
            </p>
            <p>
              <strong>Buy AP when you have:</strong>
            </p>
            <ul>
              <li>A current battery location</li>
              <li>A current Iron Nest location</li>
              <li>Enough time to construct the final shot</li>
            </ul>
            <p>
              Do not buy AP when the mission starts, when you first see a vague bearing, or while you still have two possible intersections. 
              That ordering matters because the Phantom Battery can move before you use the shell.
            </p>

            <h2>Phase 6: Enemy Spotters as Time Extensions</h2>
            <p>
              The opening orders give one of the most useful numbers in the mission: <strong>each destroyed enemy spotter adds 90 seconds to the Counter-Battery Timer.</strong> 
              Treat those spotters as a time resource. Do not automatically clear every spotter before touching the Phantom Battery — that wastes the information advantage 
              you already have when the battery itself is well located.
            </p>
            <p>
              <strong>Shoot a spotter when:</strong>
            </p>
            <ul>
              <li>The battery has repositioned and you need time to find it again</li>
              <li>Emergency Move forced you to rebuild your own position</li>
              <li>The timer is too short for another full AP calculation</li>
              <li>A spotter is already well located and cheap to remove</li>
            </ul>
            <p>
              During one recovery, two known spotters were prepared across the two guns so they could be removed quickly rather than handling them one at a time. 
              The purpose was not simply extra kills — it was buying enough time to solve the moving battery again. 
              This is the decision that keeps the mission under control: Battery position certain + enough time → shoot battery. Battery uncertain + timer collapsing → shoot a spotter.
            </p>

            <h2>Phase 7: The Mobile Battery Trap</h2>
            <p>
              This is the biggest trap in the mission. After you finally have a good battery position, prepared AP, moved, rebuilt your own position, and fired again, 
              the expected target may no longer be there. The reason: <strong>the Phantom Battery is mobile.</strong> Later reports explicitly describe it as repositioning.
            </p>
            <p>
              One attempted follow-up used approximately:
            </p>
            <ul>
              <li>300.2° bearing</li>
              <li>4.04 km range</li>
              <li>2 charges</li>
              <li>24.24° elevation</li>
            </ul>
            <p>
              The card itself was internally consistent. The problem was the target — the battery was still moving. 
              When a well-built AP shot misses a mobile Phantom Battery, do not immediately assume calculator error, wrong charges, wrong AP shell, or broken gun. 
              First ask: <em>Was the target still at that marker when I fired?</em> If the latest message says repositioning, stop using the old target point.
            </p>

            <h3>When to Wait Instead of Firing</h3>
            <p>
              Once the battery is mobile, firing faster is not automatically better. <strong>Wait when:</strong>
            </p>
            <ul>
              <li>The last report explicitly says the battery is repositioning</li>
              <li>Only one fresh listening-post bearing is available</li>
              <li>Your target marker is still based on the previous firing position</li>
              <li>You just executed Emergency Move and have not recovered your own location</li>
              <li>The AP shot would be based on two stale assumptions at once</li>
            </ul>
            <p>
              <strong>Fire when:</strong>
            </p>
            <ul>
              <li>Iron Nest&apos;s position is current</li>
              <li>The battery&apos;s latest position is supported by fresh information</li>
              <li>No mobile update has invalidated it</li>
              <li>The timer still covers loading and shell flight</li>
            </ul>
            <p>
              The expensive mistake is trying to solve uncertainty by firing more AP rounds. Phantom Battery rewards current information, not volume of fire.
            </p>

            <h2>Phase 8: Final AP Engagement</h2>
            <p>
              The final successful engagement only happened after stopping the practice of carrying old solutions forward. 
              You need a current Iron Nest position, a current battery point, AP loaded, and enough time left to finish the setup.
            </p>
            <p>
              In one documented final engagement:
            </p>
            <ul>
              <li>277.4° bearing</li>
              <li>2 powder charges</li>
              <li>27.72° elevation</li>
            </ul>
            <p>
              Both gun controls were prepared around the same confirmed solution before the shot. 
              Reusing either stale endpoint had already caused misses earlier in the mission. 
              The hit destroyed the Phantom Battery and command confirmed the threat was neutralized.
            </p>
            <p>
              That is the point where you stop. Do not continue clearing every remaining hostile icon simply because extra targets may still exist. 
              The mission is about hunting the opposing battery. Once it is gone, the required problem is solved.
            </p>

            <h2>Phase 9: Controlled Movement When Lost</h2>
            <p>
              One later Emergency Move created a strange problem: the reports put Iron Nest somewhere around M1, but plotting the information made the position appear 
              to fall beyond the useful map edge. Rather than build a firing solution from a point you do not trust, use a controlled movement.
            </p>
            <p>
              Move Iron Nest roughly 2 km in a known direction (e.g., north). That brings the firing origin back into a part of the map you can work with. 
              Then request fresh positional information. One recovery used distance constraints around 3.72 km from P1 9:5 and 1.36 km from L1 7:9, 
              which converged on the new firing position.
            </p>
            <p>
              The reusable lesson: If the relocation data puts Iron Nest somewhere you cannot map reliably, do not pretend the edge of the map is an exact firing origin. 
              A short controlled move plus new reports is safer than spending another AP round from a guessed point.
            </p>

            <h2>Common Mistakes That Cost Entire Attempts</h2>
            <ul>
              <li><strong>Starting Emergency Move before the engine is actually running:</strong> Finish the restart and leave controls in the running state first.</li>
              <li><strong>Treating the coarse grid as an exact coordinate:</strong> R2 is an area, not a point.</li>
              <li><strong>Trying to solve only the enemy position:</strong> A perfect battery marker still cannot produce a firing solution when you do not know your own current position.</li>
              <li><strong>Drawing listening-post bearings from Iron Nest:</strong> Each bearing begins at the named listening post.</li>
              <li><strong>Buying AP before the battery position is defensible:</strong> The battery can relocate while you are still solving the map.</li>
              <li><strong>Chasing spotters while the battery is already exposed:</strong> Spotters buy time. They are most useful when you actually need more time.</li>
              <li><strong>Ignoring the 90-second extension:</strong> When the timer is too low for another full solution, a known spotter can be more valuable than a rushed battery shot.</li>
              <li><strong>Firing at the previous battery marker after a mobile update:</strong> The old point can be mathematically perfect and tactically useless.</li>
              <li><strong>Assuming a missed AP means AP is wrong:</strong> In one attempted shot, the battery had simply moved away from the solved point.</li>
              <li><strong>Keeping old firing lines after Emergency Move:</strong> The target may remain valid, but the bearing and range from Iron Nest do not.</li>
              <li><strong>Guessing an off-map firing origin:</strong> If positional reports produce a point you cannot reliably use, reposition and request new information.</li>
              <li><strong>Waiting until the last few seconds to move:</strong> Emergency Move is useful only if you survive long enough to execute it.</li>
            </ul>

            <h2>Speedrun and Advanced Strategies</h2>
            <p>
              Experienced operators have developed several advanced techniques for Phantom Battery:
            </p>
            <ul>
              <li><strong>Double volley technique:</strong> Load both barrels with AP and fire simultaneously. The CBT timer pauses while shells are in flight, 
                giving you time to prepare the next solution.</li>
              <li><strong>Forward Observer exploitation:</strong> Each destroyed Forward Observer nets 50 requisition points — nearly enough for one Emergency Escape. 
                Two quick Observer kills can fund an escape plus AP shells.</li>
              <li><strong>Recon plane timing:</strong> Send a recon plane from F1 to F10 (or along the big red ? path) immediately after the first Emergency Move. 
                This can reveal the Phantom Battery&apos;s location before listening posts generate bearings.</li>
              <li><strong>Manual move verification:</strong> After Emergency Move, use a regular manual move (0.5 km at bearing 0.00°). 
                The typewriter will report your new position, giving you a verified starting point for calculations.</li>
            </ul>

            <h2>Known Bugs and Workarounds</h2>
            <p>
              The developer has confirmed a bug affecting mission replays: if you replay the same mission, timers involved can get corrupted, 
              making the mission go from &ldquo;hard but achievable&rdquo; to &ldquo;impossible.&rdquo; A fix exists on the test branch and should be pushed to live. 
              To access the fix: open Steam library, right-click IRON NEST, select Properties, click the Betas tab, and choose &ldquo;Testing.&rdquo;
            </p>

            <h2>Completion and Achievements</h2>
            <p>
              The mission-completion achievement is <strong>Mirror Image — Hunt the Phantom Battery.</strong> The all-Gold achievement is <strong>Master Gunner — Earn gold on all medals in Phantom Battery.</strong>
            </p>
            <p>
              Useful repeat-run priorities:
            </p>
            <ul>
              <li>Restart cleanly</li>
              <li>Avoid unnecessary Emergency Moves</li>
              <li>Use spotters as timer extensions rather than random side targets</li>
              <li>Do not waste AP on a repositioning battery</li>
              <li>Rebuild your own position correctly after every move</li>
              <li>Stop as soon as the Phantom Battery is confirmed destroyed</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            <h3>Why is Phantom Battery so much harder than other missions?</h3>
            <p>
              Phantom Battery combines every difficulty mechanic in the game: damaged opening state, unknown self-position, mobile enemy, 
              Counter-Battery Timer, time extensions through spotter kills, and the requirement to rebuild both ends of the firing line repeatedly. 
              No other mission demands this level of simultaneous problem-solving under time pressure.
            </p>
            <h3>How many hits does the Phantom Battery take to destroy?</h3>
            <p>
              Community reports suggest 4 AP hits are required. Using both barrels simultaneously (double volley) reduces this to two firing cycles. 
              HE shells are ineffective — the battery requires armor-piercing rounds.
            </p>
            <h3>Should I use Emergency Move after every shot?</h3>
            <p>
              Not necessarily. If the timer is safe and your position is current, stay and fire again. 
              Move only when the CBT timer becomes unsafe or when you have stale coordinates. Unnecessary moves waste time and requisition.
            </p>
            <h3>What if I can&apos;t find the Phantom Battery at all?</h3>
            <p>
              Send recon planes along the path where the big red ? marker appears. If listening posts are not generating bearings, 
              the battery may not have fired recently — wait for it to engage. Some players report the mission can bug and not provide intel; 
              if this happens, restart the mission (not just the checkpoint).
            </p>
            <h3>Is there a minimum requisition strategy?</h3>
            <p>
              Yes. Buy only 2 AP shells initially. Use Forward Observers to generate requisition (50 points per kill). 
              This funds additional AP shells and Emergency Moves without spending starting requisition. 
              One documented successful run used this &ldquo;cheese&rdquo; strategy to overcome the tight budget.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/guides" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">← All guides</Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Why is Phantom Battery so much harder than other missions?", "acceptedAnswer": {"@type": "Answer", "text": "Phantom Battery combines every difficulty mechanic in the game: damaged opening state, unknown self-position, mobile enemy, Counter-Battery Timer, time extensions through spotter kills, and the requirement to rebuild both ends of the firing line repeatedly. No other mission demands this level of simultaneous problem-solving under time pressure."}}, {"@type": "Question", "name": "How many hits does the Phantom Battery take to destroy?", "acceptedAnswer": {"@type": "Answer", "text": "Community reports suggest 4 AP hits are required. Using both barrels simultaneously (double volley) reduces this to two firing cycles. HE shells are ineffective — the battery requires armor-piercing rounds."}}, {"@type": "Question", "name": "Should I use Emergency Move after every shot?", "acceptedAnswer": {"@type": "Answer", "text": "Not necessarily. If the timer is safe and your position is current, stay and fire again. Move only when the CBT timer becomes unsafe or when you have stale coordinates. Unnecessary moves waste time and requisition."}}, {"@type": "Question", "name": "What if I can't find the Phantom Battery at all?", "acceptedAnswer": {"@type": "Answer", "text": "Send recon planes along the path where the big red ? marker appears. If listening posts are not generating bearings, the battery may not have fired recently — wait for it to engage. Some players report the mission can bug and not provide intel; if this happens, restart the mission (not just the checkpoint)."}}, {"@type": "Question", "name": "Is there a minimum requisition strategy?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Buy only 2 AP shells initially. Use Forward Observers to generate requisition (50 points per kill). This funds additional AP shells and Emergency Moves without spending starting requisition. One documented successful run used this &ldquo;cheese&rdquo; strategy to overcome the tight budget."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
