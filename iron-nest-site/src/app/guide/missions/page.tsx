import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Missions: Campaign and Skirmish Guide",
  description: "Complete mission list for IRON NEST: Heavy Turret Simulator. Campaign walkthroughs, mission mechanics, and skirmish mode details.",
  alternates: {
    canonical: "/guide/missions",
  },
  openGraph: {
    images: ["/og-guide-missions.jpg"],
  },
};

export default function MissionsPage() {
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
            <span className="text-[var(--color-moon-dim)]">Missions</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Missions</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            Iron Nest Missions: Campaign and Skirmish Guide
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 12, 2026 · 10 min read
          </p>
          <Image src="/images/screenshots/ss-10.jpg" alt="IRON NEST tactical map grid with craters and coastline" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              IRON NEST combines a handcrafted story campaign with objectives that can change between runs. The official store describes 15 regions, and the campaign takes you through a dieselpunk alternate history where the Spanish Civil War ignites a global conflict unlike our own. This guide lists all confirmed missions, their mechanics, and what makes each one unique.
            </p>
            <p>
              The missions keep changing the target problem, but the solution remains the same: locate the point first, then build the firing solution second. Every mission teaches a new variation of that principle.
            </p>

            <h2>Campaign mission overview</h2>
            <p>
              The campaign is divided into early, mid, and late operations. Early missions teach core mechanics. Mid missions add complexity with timers, moving targets, and hidden positions. Late missions combine everything and introduce moral choices that determine the ending.
            </p>

            <h3>Early campaign: Missions 1–5</h3>
            <p>These missions introduce the fundamental systems that every operator must master.</p>

            <h4>Mission 1: Calibration Fire</h4>
            <p>
              The tutorial mission. High Command provides your position and the target coordinate directly. No spotters, no timers, no hidden targets. Learn the basic Iron Nest to target to bearing and range to charges and elevation to fire loop. The habit to build here is refusing to touch the gun until the firing card is internally consistent.
            </p>

            <h4>Mission 2: Fire and Light</h4>
            <p>
              Introduces spotter references and star shells. You must triangulate the opening target using bearings from two friendly observers, clear a follow-up pair, and correct a star shell illumination shot. This is where most operators learn that a spotter bearing is not a turret bearing.
            </p>

            <h4>Mission 3: Liberation</h4>
            <p>
              Adds the underground cache and friendly protection. Rebuild the firing origin, complete P4 reconnaissance, destroy an underground AP cache, and protect friendly units. The underground cache becomes an AP problem once confirmed. Friendlies near the target make shell selection critical.
            </p>

            <h4>Mission 4: Counter-Battery</h4>
            <p>
              The counter-battery timer (CBT) is introduced. Hostile artillery fires back if you take too long. Pre-calculate opening batteries, manage the CBT, and locate the fresh artillery position after it moves. Enemy FDCs become pause buttons that temporarily stop the timer.
            </p>

            <h4>Mission 5: Iron Road</h4>
            <p>
              The first moving target mission. Intercept a train, destroy both AP emplacements, and time the War Horn safely. Moving targets require course projection. Extend the target&apos;s reported bearing along its course to predict where it will be when your shell arrives.
            </p>

            <h3>Mid campaign: Missions 6–10</h3>
            <p>These missions layer multiple mechanics together and test your ability to adapt under pressure.</p>

            <h4>Mission 6: Siege of Cartagena</h4>
            <p>
              Chained installations and the smoke-assisted breakout. Solve multiple connected targets, recover after an Emergency Move, and use SMK shells to reposition friendly forces before bombardment. Smoke is not just a screen. It is an indirect command tool that guides allied movement.
            </p>

            <h4>Mission 7: The Gorge</h4>
            <p>
              The Nest is damaged and must be restarted. Use manual observed-fire corrections until the pass is clear. This means firing, observing the miss, adjusting based on impact location, and firing again. Slow but effective when the calculator is unreliable.
            </p>

            <h4>Mission 8: Rock of Gibraltar</h4>
            <p>
              Locate HMS Rockingham without aerial recon, respect the 11:08 firing restriction, and optionally intercept a moving vessel. The restriction means do not fire before the specified time, even if your solution is ready. Teaches patience and precision planning.
            </p>

            <h4>Mission 9: Dead Reckoning</h4>
            <p>
              Hidden primary positions must be exposed with Tear gas before destruction. Fire TEAR first, read the target state from the result, then buy and load the correct destructive shell. Do not buy destructive ammunition for all positions before Tear reveals what they actually are.
            </p>

            <h4>Mission 10: Fire on Call</h4>
            <p>
              Live support calls change the battlefield dynamically. Answer calls as they arrive, reposition friendlies with Smoke, and handle danger-close shots where the enemy is only about 0.25 km from friendly positions. Sometimes a precise AP hit is safer than the larger HE blast that was requested.
            </p>

            <h3>Late campaign: Missions 11–15</h3>
            <p>These missions combine all previous mechanics and add new pressures that test mastery of the entire system.</p>

            <h4>Mission 11: High Tide</h4>
            <p>
              Multiple landing-craft intercepts across both guns. Hold the defensive line until relief arrives at 07:14. The mission feeds constant movement reports, so your bottleneck is keeping two-gun solutions organized, not finding targets. Prefer one live solution per gun.
            </p>

            <h4>Mission 12: Blind Fire</h4>
            <p>
              Locate four AA batteries through Alpha and Bravo reference points without reconnaissance or shell-impact imagery. Pure triangulation under pressure. Chained reference points mean each located target becomes the origin for the next bearing.
            </p>

            <h4>Mission 13: Phantom Battery</h4>
            <p>
              Recover your own position after an Emergency Move, locate a mobile battery, and use enemy spotters for 90-second CBT extensions. After moving, one Position Report can leave Iron Nest somewhere along an entire line. Pay for the second report if your next shot depends on exact origin.
            </p>

            <h4>Mission 14: Final Harvest</h4>
            <p>
              Pre-plan the moving train and static targets, then balance counter-battery pressure with live support calls. Some longer solutions use three or four powder charges. Replenish powder before a priority gun is loaded and waiting for a charge you no longer have.
            </p>

            <h4>Mission 15: White Shells</h4>
            <p>
              The final mission changes the question entirely. You are no longer trying to find one correct military target. You are deciding what Iron Nest does with the final order. There are four confirmed endings, each triggered by what you fire into Barcelona.
            </p>
            <ul>
              <li><strong>A City in Celebration</strong> — Fire a non-lethal shell (STAR, SMK, or PRPG) into the city. Peace through restraint.</li>
              <li><strong>A City Subdued</strong> — Fire a chemical shell (TEAR, PHGN, WP, or CYAN) into the city. Submission through fear.</li>
              <li><strong>A City Silent</strong> — Fire a destructive shell (HE, AP, HCHE, or ATMC) into the city. Annihilation.</li>
              <li><strong>The Road Not Taken</strong> — Turn against High Command. Recon allied positions, mark retaliation targets, calculate shots, buy shells and powder, then attack command and execute the prepared sequence. This is a real combat sequence after betrayal.</li>
            </ul>
            <p>
              For the betrayal route, buy everything before firing the first shot. The requisition station closes after you are labeled a traitor. The ATMC shell has an approximately 3 km radius and can eliminate most units around High Command in a single shot. Prioritize artillery and spotting units to extend the counter-battery timer.
            </p>

            <h2>Skirmish modes</h2>
            <p>
              Beyond the campaign, Iron Nest offers skirmish modes that test your skills under different constraints. The developer roadmap promises more skirmish modes in post-launch updates.
            </p>

            <h3>Challenge — Counter Battery Timer</h3>
            <p>
              A timed survival mode where you face endless waves of targets and a persistent counter-battery timer. You start with limited requisition and must balance speed with accuracy. The same firing discipline applies: locate before loading, keep firing cards organized, and buy reconnaissance only when it removes useful uncertainty.
            </p>
            <p>
              Medal requirements include kills-per-shot ratio, consecutive kill streaks, and fast first shots. The pressure is constant and there is no stand-down order. You are going to die. The question is how many you take with you.
            </p>

            <h3>Chill — Uncontested Front</h3>
            <p>
              A lower-pressure mode for practice and experimentation. No counter-battery timer. You have time to perfect your triangulation, test different shell combinations, and learn the map without the threat of incoming fire.
            </p>
            <p>
              Uniquely, the Chill skirmish wants you to spend <em>more</em> requisition, not less. The gold medal for requisition spent requires 600 or more points used. This encourages experimentation with expensive shells, recon planes, and multiple repositioning moves.
            </p>

            <h2>Mission mechanics reference</h2>

            <h3>Counter-Battery Timer (CBT)</h3>
            <p>
              Present in missions 4, 11, 13, 14, and Challenge mode. A countdown timer that represents how long until hostile artillery locates and fires back at you. Destroying an enemy FDC pauses the timer. The timer resumes when you fire again. Managing the CBT is about balancing target destruction with FDC elimination to create safety windows.
            </p>

            <h3>Emergency Move</h3>
            <p>
              Certain missions allow or force you to reposition the Iron Nest. After moving, your map position changes and all previous firing solutions become invalid. You must remeasure from the new position. Some missions provide Position Reports after movement to help you locate your new coordinates.
            </p>

            <h3>Spotter reports</h3>
            <p>
              Most missions provide target information through friendly observers rather than direct coordinates. Spotters report bearings and distances with an error of plus or minus 0.5 kilometers and degrees. Use multiple spotters to triangulate. Never trust a single report as exact.
            </p>

            <h3>Moving targets</h3>
            <p>
              Trains and vessels report their course and speed. To intercept them, project their position forward along the course line to where they will be at shell impact time. The formula is simple: extend the bearing from the current position along the reported course, then measure from Iron Nest to that projected point.
            </p>

            <h3>Hidden positions</h3>
            <p>
              Some targets are not visible on the map until revealed. Use STAR shells for illumination, TEAR gas to expose hidden infantry, or recon planes for direct observation. Each method has different costs and risks. Choose based on the mission constraints and your available requisition.
            </p>

            <h2>Frequently asked questions</h2>
            <h3>How many missions are in the campaign?</h3>
            <p>
              The official store describes 15 regions, and 15 confirmed mission names have been documented from full-release footage. The developer roadmap promises additional missions and skirmish modes in post-launch updates.
            </p>
            <h3>Can I replay missions?</h3>
            <p>
              Yes. Missions can be replayed to optimize medal performance, try different strategies, or experiment with shells unlocked in later missions. The DRIL shell, unlocked after Siege of Cartagena, makes early mission gold medals much easier to achieve.
            </p>
            <h3>What is the best mission to practice on?</h3>
            <p>
              Calibration Fire is the best for learning the firing loop. Fire and Light is best for practicing triangulation. Counter-Battery is best for learning CBT management. Replay these three until the mechanics are automatic before tackling later missions.
            </p>
            <h3>Are there difficulty settings?</h3>
            <p>
              The campaign missions have fixed difficulty. Skirmish modes offer different challenge levels. Challenge mode is the hardest test of your skills. Chill mode is for practice and experimentation.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link href="/guide/siege-of-cartagena" className="card p-5 group">
              <span className="stencil text-xs text-[var(--color-amber)]">Featured Mission</span>
              <h3 className="mt-1 font-[var(--font-display)] text-lg font-600 uppercase text-[var(--color-moon)] group-hover:text-[var(--color-amber)]">Siege of Cartagena</h3>
              <p className="mt-1 text-sm text-[var(--color-moon-dim)]">Complete walkthrough for one of the hardest siege missions in the game.</p>
            </Link>
            <Link href="/shells/phantom-battery" className="card p-5 group">
              <span className="stencil text-xs text-[var(--color-amber)]">Advanced Guide</span>
              <h3 className="mt-1 font-[var(--font-display)] text-lg font-600 uppercase text-[var(--color-moon)] group-hover:text-[var(--color-amber)]">Phantom Battery</h3>
              <p className="mt-1 text-sm text-[var(--color-moon-dim)]">Hunt the hidden enemy artillery in this advanced mission guide.</p>
            </Link>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/guide" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">← All guides</Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How many missions are in the campaign?", "acceptedAnswer": {"@type": "Answer", "text": "The official store describes 15 regions, and 15 confirmed mission names have been documented from full-release footage. The developer roadmap promises additional missions and skirmish modes in post-launch updates."}}, {"@type": "Question", "name": "Can I replay missions?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Missions can be replayed to optimize medal performance, try different strategies, or experiment with shells unlocked in later missions. The DRIL shell, unlocked after Siege of Cartagena, makes early mission gold medals much easier to achieve."}}, {"@type": "Question", "name": "What is the best mission to practice on?", "acceptedAnswer": {"@type": "Answer", "text": "Calibration Fire is the best for learning the firing loop. Fire and Light is best for practicing triangulation. Counter-Battery is best for learning CBT management. Replay these three until the mechanics are automatic before tackling later missions."}}, {"@type": "Question", "name": "Are there difficulty settings?", "acceptedAnswer": {"@type": "Answer", "text": "The campaign missions have fixed difficulty. Skirmish modes offer different challenge levels. Challenge mode is the hardest test of your skills. Chill mode is for practice and experimentation."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
