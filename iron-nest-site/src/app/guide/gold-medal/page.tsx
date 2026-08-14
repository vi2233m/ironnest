import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Gold Medal Requirements: All Missions",
  description: "Complete gold medal requirements for every IRON NEST campaign mission and skirmish mode. Medal clarifications, thresholds, and strategies.",
  alternates: {
    canonical: "/guide/gold-medal",
  },
};

export default function GoldMedalPage() {
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
            <span className="text-[var(--color-moon-dim)]">Gold Medal</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Gold Medal</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            Iron Nest Gold Medal Requirements: All Missions
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 12, 2026 · 12 min read
          </p>
          <Image src="/images/screenshots/ss-11.jpg" alt="IRON NEST leaderboard and map of Spain on wall" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              High Command has defined different requirements to earn Gold Medals on every mission, though the exact thresholds are kept hidden from operators. This guide compiles the verified medal requirements for each campaign mission and skirmish mode, along with clarifications on how each medal is measured and strategies for achieving them.
            </p>
            <blockquote>
              Note: At the time of writing, you currently need to get all 4 gold medals at once to receive the Steam achievement for all gold medals on a given mission. This has been verified as a bug and will likely be fixed in a future update.
            </blockquote>

            <h2>Medal clarifications</h2>
            <p>
              Before diving into mission-specific requirements, here is how each medal category is measured:
            </p>
            <ul>
              <li><strong>Allies killed</strong> — The number of allied units that die during the mission, whether by your hand or other circumstances. Aim for zero.</li>
              <li><strong>Average accuracy</strong> — The average impact distance from the nearest target in kilometers. Hitting enemies dead center is better. Killing multiple enemies on the edge of the effect radius is considered poor marksmanship. This mostly affects HCHE and Flechette shells.</li>
              <li><strong>Consecutive kill shots</strong> — The number of killing shots landed in a row. Non-lethal shells or misses reset the streak to zero.</li>
              <li><strong>Counter-battery time left</strong> — The remaining time on the counter above the paper rolls during missions with counter batteries. Higher remaining time gives better medals.</li>
              <li><strong>Enemies killed</strong> — Total enemy casualties during the mission. Gold is often at or near the maximum number of enemies.</li>
              <li><strong>Kills-per-shot ratio</strong> — The average number of kills per impact. Basically enemies killed divided by number of shots fired.</li>
              <li><strong>Kills with a single shell</strong> — Currently unique to the Chill skirmish. Requires at least one shot that kills the specified number of enemies.</li>
              <li><strong>Recons requisitioned</strong> — Complete the mission without buying any aerial recon from scout planes. Also requires meeting the enemies killed threshold.</li>
              <li><strong>Requisition spent</strong> — Spend as little requisition as possible. It is wise to ignore this medal until you have unlocked cheaper shells, particularly the DRIL shell which costs only 3 requisition.</li>
              <li><strong>Seconds until first shot</strong> — Time from getting out of bed to firing, or from receiving the order to firing. Pre-load when possible and aim during the loading animation.</li>
              <li><strong>Triple kill time window</strong> — The time between the first shot impact and the third shot impact (needs verification). At the time of writing, the gold requirement checks for 10 seconds or longer, making it essentially a free gold medal due to a typo.</li>
            </ul>

            <h2>Campaign mission requirements</h2>

            <h3>Calibration Fire</h3>
            <p>Only one medal: <strong>shots_fired_1to3</strong></p>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Shots fired (equal to or less than)</td><td>3</td><td>2</td><td>1</td></tr>
              </tbody>
            </table>

            <h3>Fire and Light</h3>
            <p>Only one medal: <strong>shots_fired_4to8</strong></p>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Shots fired (equal to or less than)</td><td>8</td><td>6</td><td>4</td></tr>
              </tbody>
            </table>

            <h3>Liberation</h3>
            <p>Four medals. The first mission where optimization becomes complex.</p>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Allies killed (equal to or less than)</td><td>2</td><td>1</td><td>0</td></tr>
                <tr><td>Average accuracy (equal to or less than, km)</td><td>3</td><td>1</td><td>0.3</td></tr>
                <tr><td>Consecutive kill shots (equal to or greater than)</td><td>3</td><td>5</td><td>6</td></tr>
                <tr><td>Requisition spent (equal to or less than)</td><td>100</td><td>65</td><td>30</td></tr>
              </tbody>
            </table>
            <p>
              The 30-or-less requisition requirement seems impossible when you first reach this mission because cheaper shells have not been authorized yet. Return after unlocking the DRIL shell from Siege of Cartagena. One verified strategy: use a Star shell to locate the battery, kill it with AP (12 requisition), then use five precise DRIL shots on infantry (15 requisition, totaling 27).
            </p>

            <h3>Counter-Battery</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Triple kill time window (seconds)</td><td>90 or less</td><td>45 or more</td><td>10 or more</td></tr>
                <tr><td>Counter-battery time left (equal to or higher)</td><td>100</td><td>200</td><td>260</td></tr>
                <tr><td>Requisition spent (equal to or less than)</td><td>100</td><td>65</td><td>30</td></tr>
                <tr><td>Enemies killed (equal to or more)</td><td>6</td><td>8</td><td>9</td></tr>
              </tbody>
            </table>
            <p>
              The triple-kill medal currently has a typo: Bronze requires equal or less time, while Silver and Gold require equal or more. This makes gold essentially free. The enemy kills requirement is 9 rather than the 10 expected from the medal ID.
            </p>

            <h3>Iron Road</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Allies killed (equal to or less than)</td><td>2</td><td>1</td><td>0</td></tr>
                <tr><td>Consecutive kill shots (equal to or greater than)</td><td>5</td><td>10</td><td>20</td></tr>
                <tr><td>Kills-per-shot ratio (equal to or greater than, 10+ enemies)</td><td>0.8</td><td>1.5</td><td>2</td></tr>
                <tr><td>Kills without recon</td><td colSpan={3}>See Enemies killed medal</td></tr>
              </tbody>
            </table>
            <p>
              It appears impossible to get 20 consecutive kill shots because only 19 enemies have been identified. Some players report that hitting the train tracks before the locomotive arrives can force passengers to disembark, adding 5 more hostiles. This may allow the 20-kill streak to be achievable.
            </p>

            <h3>Siege of Cartagena</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Allies killed (equal to or less than)</td><td>2</td><td>1</td><td>0</td></tr>
                <tr><td>Enemies killed (equal to or greater than)</td><td>6</td><td>11</td><td>15</td></tr>
                <tr><td>Kills without recon</td><td colSpan={3}>See Enemies killed medal</td></tr>
                <tr><td>Requisition spent (equal to or less than)</td><td>180</td><td>100</td><td>50</td></tr>
              </tbody>
            </table>

            <h3>The Gorge</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Allies killed (equal to or less than)</td><td>2</td><td>1</td><td>0</td></tr>
                <tr><td>Consecutive kill shots (equal to or greater than)</td><td>4</td><td>7</td><td>10</td></tr>
                <tr><td>Enemies killed (equal to or greater than)</td><td>10</td><td>20</td><td>30</td></tr>
                <tr><td>Kills-per-shot ratio (equal to or greater than, 10+ enemies)</td><td>0.8</td><td>1.5</td><td>2</td></tr>
              </tbody>
            </table>

            <h3>Rock of Gibraltar</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Allies killed (equal to or less than)</td><td>2</td><td>1</td><td>0</td></tr>
                <tr><td>Enemies killed (equal to or greater than)</td><td>0</td><td>1</td><td>2</td></tr>
                <tr><td>Kills without recon</td><td colSpan={3}>See Enemies killed medal</td></tr>
                <tr><td>Requisition spent (equal to or less than)</td><td>30</td><td>20</td><td>10</td></tr>
              </tbody>
            </table>
            <p>
              The no-recon medal currently appears to be bugged on this mission. There is also no known way to get all 4 gold medals in the same attempt.
            </p>

            <h3>Dead Reckoning</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Allies killed (equal to or less than)</td><td>2</td><td>1</td><td>0</td></tr>
                <tr><td>Consecutive kill shots (equal to or greater than)</td><td>3</td><td>5</td><td>6</td></tr>
                <tr><td>Enemies killed (equal to or greater than)</td><td>6</td><td>11</td><td>15</td></tr>
                <tr><td>Requisition spent (equal to or less than)</td><td>100</td><td>65</td><td>30</td></tr>
              </tbody>
            </table>
            <p>
              Some players report that only 13 enemies spawn in total (3 main targets and 10 optional), making the 15-enemy gold medal potentially impossible. This may be a bug.
            </p>

            <h3>Fire on Call</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Allies killed (equal to or less than)</td><td>2</td><td>1</td><td>0</td></tr>
                <tr><td>Enemies killed (equal to or greater than)</td><td>10</td><td>20</td><td>30</td></tr>
                <tr><td>Kills-per-shot ratio (equal to or greater than, 10+ enemies)</td><td>0.8</td><td>1.5</td><td>2</td></tr>
                <tr><td>Kills without recon</td><td colSpan={3}>See Enemies killed medal</td></tr>
              </tbody>
            </table>

            <h3>High Tide</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Consecutive kill shots (equal to or greater than)</td><td>3</td><td>5</td><td>6</td></tr>
                <tr><td>Triple kill time window (seconds)</td><td>90 or less</td><td>45 or more</td><td>10 or more</td></tr>
                <tr><td>Average accuracy (equal to or less than, km)</td><td>3</td><td>1</td><td>0.3</td></tr>
                <tr><td>Consecutive kill shots (equal to or greater than)</td><td>3</td><td>5</td><td>6</td></tr>
              </tbody>
            </table>
            <p>
              Yes, this mission currently has two kill streak medals. Until High Command fixes this, you effectively have one fewer requirement to complete.
            </p>

            <h3>Blind Fire</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Requisition spent (equal to or less than)</td><td>180</td><td>100</td><td>50</td></tr>
                <tr><td>Consecutive kill shots (equal to or greater than)</td><td>3</td><td>5</td><td>6</td></tr>
                <tr><td>Enemies killed (equal to or greater than)</td><td>5</td><td>10</td><td>20</td></tr>
                <tr><td>Kills without recon</td><td colSpan={3}>See Enemies killed medal</td></tr>
              </tbody>
            </table>

            <h3>Phantom Battery</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Kills without recon</td><td colSpan={3}>See Enemies killed medal</td></tr>
                <tr><td>Enemies killed (equal to or more)</td><td>6</td><td>8</td><td>9</td></tr>
                <tr><td>Average accuracy (equal to or less than, km)</td><td>3</td><td>1</td><td>0.3</td></tr>
                <tr><td>Counter-battery time left (equal to or higher)</td><td>100</td><td>200</td><td>260</td></tr>
              </tbody>
            </table>

            <h3>Final Harvest</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Allies killed (equal to or less than)</td><td>2</td><td>1</td><td>0</td></tr>
                <tr><td>Kills without recon</td><td colSpan={3}>See Enemies killed medal</td></tr>
                <tr><td>Enemies killed (equal to or greater than)</td><td>10</td><td>20</td><td>30</td></tr>
                <tr><td>Seconds until first shot (equal to or less than)</td><td>120</td><td>80</td><td>50</td></tr>
              </tbody>
            </table>

            <h3>White Shells</h3>
            <p>
              Medal requirements are still under investigation. Each of the four endings appears to have its own medal, making it impossible to get all 4 gold medals in a single run. This is likely related to the all-gold achievement bug mentioned above.
            </p>

            <h2>Skirmish mode requirements</h2>

            <h3>Challenge — Counter Battery Timer</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Kills without recon</td><td>?</td><td>?</td><td>?</td></tr>
                <tr><td>Seconds until first shot (equal to or less than)</td><td>120</td><td>80</td><td>50</td></tr>
                <tr><td>Kills-per-shot ratio (equal to or greater than, 20+ enemies)</td><td>0.8</td><td>1.2</td><td>1.5</td></tr>
                <tr><td>Consecutive kill shots (equal to or greater than)</td><td>5</td><td>10</td><td>20</td></tr>
              </tbody>
            </table>

            <h3>Chill — Uncontested Front</h3>
            <table>
              <thead>
                <tr><th>Medal</th><th>Bronze</th><th>Silver</th><th>Gold</th></tr>
              </thead>
              <tbody>
                <tr><td>Kills-per-shot ratio (equal to or greater than, 20+ enemies)</td><td>0.8</td><td>1.2</td><td>1.5</td></tr>
                <tr><td>Consecutive kill shots (equal to or greater than)</td><td>5</td><td>10</td><td>20</td></tr>
                <tr><td>Requisition spent (equal to or greater than)</td><td>150</td><td>350</td><td>600</td></tr>
                <tr><td>Kills with a single shell (equal to or greater than)</td><td>2</td><td>3</td><td>5</td></tr>
              </tbody>
            </table>
            <p>
              Unlike most requisition medals, this skirmish wants you to spend <em>more</em> requisition, not less. Use expensive shells and reconnaissance freely.
            </p>

            <h2>General strategies for gold medals</h2>
            <ul>
              <li>Return to earlier missions after unlocking cheaper shells. The DRIL shell (3 requisition) makes requisition-spent medals achievable.</li>
              <li>Pre-load shells before receiving the order to save time on seconds-until-first-shot medals.</li>
              <li>Use the loading animation time to adjust bearing and elevation. Do not wait for loading to finish before starting gun laying.</li>
              <li>For consecutive kill streaks, plan your target order so each shot kills at least one enemy. Non-lethal shells and misses reset the streak.</li>
              <li>For average accuracy, aim for the center of targets rather than trying to catch multiple enemies on the edge of blast radius.</li>
              <li>Destroy FDCs early in counter-battery missions to maximize the timer remaining for the medal.</li>
            </ul>

            <h2>Frequently asked questions</h2>
            <h3>Why can&apos;t I get all gold medals on White Shells?</h3>
            <p>
              Each ending appears to have its own medal, making a single-run all-gold impossible. This is likely a bug that will be patched.
            </p>
            <h3>Do I need to get all 4 golds in one run for the achievement?</h3>
            <p>
              Currently yes, due to a verified bug. The developers have acknowledged this and a fix is expected.
            </p>
            <h3>What is the best shell for requisition-spent medals?</h3>
            <p>
              The DRIL shell, unlocked after Siege of Cartagena, costs only 3 requisition and has a tiny blast radius. It is ideal for precise kills on soft targets when you need to minimize spending.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/guide" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">← All guides</Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Why can't I get all gold medals on White Shells?", "acceptedAnswer": {"@type": "Answer", "text": "Each ending appears to have its own medal, making a single-run all-gold impossible. This is likely a bug that will be patched."}}, {"@type": "Question", "name": "Do I need to get all 4 golds in one run for the achievement?", "acceptedAnswer": {"@type": "Answer", "text": "Currently yes, due to a verified bug. The developers have acknowledged this and a fix is expected."}}, {"@type": "Question", "name": "What is the best shell for requisition-spent medals?", "acceptedAnswer": {"@type": "Answer", "text": "The DRIL shell, unlocked after Siege of Cartagena, costs only 3 requisition and has a tiny blast radius. It is ideal for precise kills on soft targets when you need to minimize spending."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
