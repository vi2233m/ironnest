import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Best Shells Tier List",
  description: "Complete ammunition tier list for IRON NEST. Compare AP, HE, HCHE, chemical, incendiary, and shrapnel shells by damage, range, cost, and tactical utility.",
  alternates: {
    canonical: "/shells/best-shells",
  },
  openGraph: {
    images: ["/og-shells-best-shells.jpg"],
  },
};

export default function BestShellsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/arsenal" className="hover:text-[var(--color-moon)]">Arsenal</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">Best Shells</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Tier List</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            Best Shells Tier List
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 2026 · 10 min read
          </p>
          <Image src="/images/screenshots/ss-14.jpg" alt="IRON NEST artillery shell labeled Love Letter close-up" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              Picking the right shell inside a 5,000-ton quadrupedal turret changes whether a salvo lands on target or wastes three powder charges into the dirt. 
              <strong>IRON NEST: Heavy Turret Simulator</strong> features a diverse arsenal of ammunition types, each designed for specific tactical scenarios. 
              This tier list ranks every shell type by weighted aggregate score across damage output, versatility, reliability under time pressure, 
              powder charge flexibility, and tactical utility.
            </p>
            <p>
              The game&apos;s core loop is a six-step firing cycle: intelligence, plotting, calculating, loading, aiming, and firing. 
              The &ldquo;loading&rdquo; stage is where shell choice matters most, because each shell type interacts differently with the Ballistic Calculator, 
              the powder charges stacked behind the breech, and the target classification printed on the Teleprinter. 
              Understanding when to load AP versus HE, or when chemical rounds outperform both, is the difference between mission success and wasted requisition.
            </p>

            <h2>How Shells Are Ranked</h2>
            <p>
              This tier list evaluates shells across five criteria:
            </p>
            <ul>
              <li><strong>Damage per salvo:</strong> Raw destructive power against the intended target type</li>
              <li><strong>Versatility across target types:</strong> How many different mission profiles the shell handles well</li>
              <li><strong>Reliability under time pressure:</strong> Performance when the Teleprinter spits coordinates under a live Counter-Battery Timer</li>
              <li><strong>Powder charge flexibility:</strong> Shells that perform well across charges 3-5 score higher than charge-6 specialists</li>
              <li><strong>Tactical utility:</strong> Secondary effects like smoke, fire, gas, or armor penetration</li>
            </ul>
            <p>
              <strong>Note:</strong> Damage output alone does not determine tier ranking. A shell that delivers massive damage but only works on one target type 
              scores lower than a shell that handles 70% of objectives acceptably, because most campaign missions swap target profiles every two minutes.
            </p>

            <h2>Tier S: Meta-Defining Shells</h2>
            <p>
              These are the rounds experienced gun crews reach for first. They carry missions that lower-tier shells cannot. 
              If a crew only ever loads one type of shell, it should be from this tier.
            </p>

            <h3>APCR (Armor-Piercing Composite Rigid)</h3>
            <p>
              <strong>Tier: S</strong> | <strong>Best Charge: 5</strong> | <strong>Reload Penalty: +1.5s</strong>
            </p>
            <p>
              APCR sits at the absolute top of every tier list because it punches through hardened targets that bounce standard AP rounds off reinforced concrete. 
              The tungsten-carbide core ignores angled armor plating above 60°, making it essential during the &ldquo;Iron Crossing&rdquo; campaign mission 
              where armored trains circle the firing window every 90 seconds. Standard AP deflects off sloped train turret plating roughly half the time; APCR does not.
            </p>
            <ul>
              <li>Penetrates up to three layers of bunker wall at powder charge 4</li>
              <li>Ignores angled armor above 60° — critical for armored trains and sloped bunkers</li>
              <li>Flatter flight path with more predictable wind drift than HE</li>
              <li>Best paired with charge 5 for maximum penetration on fortified targets</li>
              <li>Reserve charge 6 for shots beyond 8 km where muzzle velocity matters most</li>
            </ul>
            <p>
              The reload penalty is real — about 1.5 seconds longer than standard AP — but the trade-off is worth it when a single hit destroys 
              what would otherwise require two or three standard AP rounds. Unlock APCR as a rare drop from elite mission rewards after completing the early campaign.
            </p>

            <h3>HE-Frag (High-Explosive Fragmentation)</h3>
            <p>
              <strong>Tier: S</strong> | <strong>Best Charge: 3</strong> | <strong>Reload Penalty: +0.8s</strong>
            </p>
            <p>
              HE-Frag is the beginner-friendly workhorse that veterans still rely on. The 12-meter blast radius forgives elevation errors that would miss with AP, 
              and the secondary cone of shrapnel catches troops fleeing the blast zone while damaging light vehicles parked just outside the primary radius. 
              When the Tactical Map shows clustered infantry or soft-skin vehicles, HE-Frag clears more targets per salvo than any other round in the game.
            </p>
            <ul>
              <li>12-meter blast radius — most forgiving shell for elevation errors</li>
              <li>Secondary shrapnel cone catches fleeing troops and light vehicles</li>
              <li>At charge 3, can suppress an entire ridge of rifle pits if landed within 8 meters of the centroid</li>
              <li>Charge 5 covers more ground but leaves less margin for elevation error</li>
              <li>Best starter shell for learning the Ballistic Calculator and firing cycle</li>
            </ul>
            <p>
              The trade-off is penetration depth: HE shells lose roughly 40% effectiveness against reinforced positions. 
              The standard doctrine for mixed-target salvos is pairing HE with AP during mid-campaign missions. Stockpile HE-Frag for the first wave of every engagement.
            </p>

            <h3>AP (Standard Armor-Piercing)</h3>
            <p>
              <strong>Tier: S</strong> | <strong>Best Charge: 4</strong> | <strong>Reload Penalty: +1.0s</strong>
            </p>
            <p>
              Standard AP is the reliable middle-ground option. It penetrates underground targets and fortified bunkers, though not as reliably as APCR against angled armor. 
              Available from Mission 3, it becomes the backbone of most operators&apos; loadouts before APCR is unlocked. For gun crews learning the Ballistic Calculator, 
              AP shells reward precise elevation because their flight path is flatter and wind drift is more predictable than HE.
            </p>
            <ul>
              <li>Penetrates ground before detonating — effective against underground targets</li>
              <li>Flatter trajectory than HE, more predictable in wind</li>
              <li>0.06 km blast radius (smaller than HE, but sufficient for precision targets)</li>
              <li>10 requisition points per shell</li>
              <li>Best general-purpose shell before APCR is unlocked</li>
            </ul>

            <h2>Tier A: Specialized Workhorses</h2>
            <p>
              These shells won&apos;t dominate every mission, but they outperform S-tier rounds in narrow situations. 
              You&apos;ll encounter them mid-campaign when the difficulty curve steepens and objectives stop rewarding generic HE spam.
            </p>

            <h3>Chemical Shells (Phosgene/Chlorine)</h3>
            <p>
              <strong>Tier: A</strong> | <strong>Best Charge: 2-3</strong> | <strong>Reload Penalty: +1.2s</strong>
            </p>
            <p>
              Chemical shells deliver phosgene and chlorine payloads that linger in trenches, bunkers, and tunnel mouths for up to 45 seconds after impact. 
              The damage-over-time effect is invisible to enemies wearing gas masks in early waves, but masks break under sustained bombardment. 
              Two chemical shells plotted on the same tunnel mouth wipe out dug-in crews that would otherwise require five HE rounds to suppress.
            </p>
            <ul>
              <li>Lingering gas cloud damages over 45 seconds — outperforms HE in enclosed spaces</li>
              <li>Gas masks break under sustained chemical bombardment</li>
              <li>Best for tunnels, trenches, mine shafts, and enclosed fortifications</li>
              <li>Wind drift: clouds travel 20-30 meters downwind after detonation</li>
              <li>Underperforms when wind speed exceeds 12 knots (Ballistic Calculator flags yellow warning)</li>
            </ul>
            <p>
              Pair chemical shells with powder charge 2 or 3 for short-range gas barrages inside enclosed spaces. 
              Reserve higher charges for distant mine shafts where the cloud needs extra velocity to reach the target before dissipating. 
              Unlocked at Mission 6 alongside incendiary rounds.
            </p>

            <h3>Incendiary Rounds (INCN)</h3>
            <p>
              <strong>Tier: A</strong> | <strong>Best Charge: 3</strong> | <strong>Reload Penalty: +1.0s</strong>
            </p>
            <p>
              Incendiary shells ignite fuel stores, ammo dumps, and wooden fortifications on contact, then sustain a fire damage-over-time effect for 20 seconds. 
              They&apos;re the most situational shell in the game because they only outperform HE on flammable objectives, and underperform against stone, steel, or packed earth. 
              However, when the objective marker reads &ldquo;fuel depot,&rdquo; &ldquo;supply cache,&rdquo; or &ldquo;munitions bunker,&rdquo; incendiary rounds complete objectives in a single shot 
              that would otherwise require three HE salvos, because the burning effect chains into secondary explosions.
            </p>
            <ul>
              <li>Ignites fuel and ammo caches on contact</li>
              <li>Fire DOT chains into secondary explosions on flammable targets</li>
              <li>Provides visual confirmation marker for follow-up shot adjustment</li>
              <li>Zero damage per second against stone, steel, or packed earth</li>
              <li>12 requisition points per shell</li>
            </ul>
            <p>
              Reserve incendiary rounds for missions where the briefing explicitly names a flammable target. 
              Don&apos;t waste them on fortified bunkers. Unlocked at Mission 6.
            </p>

            <h2>Tier B: Niche Picks and Calibration Rounds</h2>
            <p>
              These shells rarely lead a tier list, but they fill gaps that S- and A-tier shells can&apos;t cover. 
              They round out any honest loadout that wants to cover the full loader&apos;s bench.
            </p>

            <h3>Shrapnel Shells</h3>
            <p>
              <strong>Tier: B</strong> | <strong>Best Charge: 4</strong> | <strong>Reload Penalty: +1.4s</strong>
            </p>
            <p>
              Shrapnel shells are airburst rounds that detonate 5 to 15 meters above the target, scattering steel balls across a 30-meter cone that shreds open-field troop formations. 
              They&apos;re devastating against rifle companies advancing across flat ground, but useless against fortified positions where the airburst triggers above the bunker roof 
              and wastes the payload on empty sky.
            </p>
            <ul>
              <li>30-meter cone spread — devastating against open-field troop formations</li>
              <li>Requires manual time-fuse setting (high skill ceiling)</li>
              <li>Airburst visible as flash — helps confirm range at night</li>
              <li>Loses 60% effective coverage in city maps where buildings block the cone</li>
              <li>Unlocked at Mission 9</li>
            </ul>
            <p>
              Use shrapnel only for open-field advances where troops cluster in march formation, and nighttime missions where the airburst flash helps confirm range. 
              Avoid in urban environments. The high skill ceiling makes this a specialist&apos;s round.
            </p>

            <h3>Calibration Rounds</h3>
            <p>
              <strong>Tier: B</strong> | <strong>Best Charge: 2</strong> | <strong>Reload Penalty: +0.5s</strong>
            </p>
            <p>
              Calibration rounds aren&apos;t combat ammunition — they&apos;re smoke-traced practice shells used during zeroing drills before live fire missions. 
              They appear in the loader&apos;s hands during the first three campaign missions and during the &ldquo;Calibration Fire&rdquo; challenge mode, 
              which rewards consistent first-round hits with bonus score multipliers. While they don&apos;t rank in combat tier lists, 
              mastering calibration shots is the fastest path to consistent live-fire accuracy.
            </p>
            <ul>
              <li>Smoke-traced practice shells for zeroing drills</li>
              <li>Appears in first three campaign missions and Calibration Fire challenge mode</li>
              <li>Rewards consistent first-round hits with score multipliers</li>
              <li>Experienced crews fire 2-3 calibration rounds before switching to live ammunition on long-range targets beyond 10 km</li>
            </ul>

            <h2>Shell Effectiveness by Target Type</h2>
            <p>
              Shell selection changes based on what the Teleprinter prints and what the Tactical Map shows. Here&apos;s the decision flow veteran crews use:
            </p>

            <h3>Step 1: Check Target Classification</h3>
            <ul>
              <li><strong>&ldquo;Armored,&rdquo; &ldquo;bunker,&rdquo; or &ldquo;fortified&rdquo; →</strong> Load AP or APCR</li>
              <li><strong>&ldquo;Infantry,&rdquo; &ldquo;convoy,&rdquo; or &ldquo;soft skin&rdquo; →</strong> Load HE-Frag</li>
              <li><strong>&ldquo;Trenches,&rdquo; &ldquo;tunnel,&rdquo; or &ldquo;dug-in&rdquo; →</strong> Switch to chemical shells</li>
              <li><strong>&ldquo;Fuel,&rdquo; &ldquo;cache,&rdquo; or &ldquo;depot&rdquo; →</strong> Incendiary is the right call</li>
              <li><strong>&ldquo;Formation&rdquo; or &ldquo;advancing&rdquo; →</strong> Shrapnel covers open-field troops</li>
            </ul>

            <h3>Step 2: Confirm Range Band</h3>
            <ul>
              <li><strong>Under 4 km:</strong> Favors HE-Frag and chemical shells (lower charges keep loader cycle fast)</li>
              <li><strong>4-8 km:</strong> Favors standard AP and incendiary (charge 3 or 4 hits the sweet spot)</li>
              <li><strong>Over 8 km:</strong> Favors APCR with charge 5 or 6 (muzzle velocity preserves accuracy)</li>
            </ul>

            <h3>Step 3: Scan Environmental Modifiers</h3>
            <ul>
              <li>Fuel, ammo, or wood markers favor incendiary rounds even when primary target is armored (chain explosions clear compounds)</li>
              <li>Tunnels, trenches, or mine shafts favor chemical shells regardless of printed classification (enclosed spaces amplify gas)</li>
              <li>Chemical shells drift 20-30 meters downwind — adjust windage before plotting</li>
              <li>AP and HE drift less than 5 meters at standard charge</li>
            </ul>

            <h2>Complete Shell Comparison Table</h2>
            <table>
              <thead>
                <tr>
                  <th>Shell</th>
                  <th>Tier</th>
                  <th>Best Charge</th>
                  <th>Primary Use</th>
                  <th>Blast Radius</th>
                  <th>Requisition Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>APCR</td>
                  <td>S</td>
                  <td>5</td>
                  <td>Armored trains, angled bunkers</td>
                  <td>0.06 km</td>
                  <td>Rare drop</td>
                </tr>
                <tr>
                  <td>HE-Frag</td>
                  <td>S</td>
                  <td>3</td>
                  <td>Infantry, light vehicles</td>
                  <td>0.25 km + shrapnel cone</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>AP (Standard)</td>
                  <td>S</td>
                  <td>4</td>
                  <td>Mixed fortified targets</td>
                  <td>0.06 km</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Chemical</td>
                  <td>A</td>
                  <td>2-3</td>
                  <td>Trenches, tunnels, enclosed spaces</td>
                  <td>Gas cloud (20-30m drift)</td>
                  <td>Unlock Mission 6</td>
                </tr>
                <tr>
                  <td>Incendiary</td>
                  <td>A</td>
                  <td>3</td>
                  <td>Fuel, wood, caches</td>
                  <td>0.25 km + fire DOT</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Shrapnel</td>
                  <td>B</td>
                  <td>4</td>
                  <td>Open-field troop formations</td>
                  <td>30m cone (airburst)</td>
                  <td>Unlock Mission 9</td>
                </tr>
                <tr>
                  <td>Calibration</td>
                  <td>B</td>
                  <td>2</td>
                  <td>Zeroing drills</td>
                  <td>Smoke trace</td>
                  <td>Practice only</td>
                </tr>
              </tbody>
            </table>

            <h2>Unlock Progression</h2>
            <p>
              Shell types unlock through campaign progression:
            </p>
            <ul>
              <li><strong>Mission 1:</strong> HE (High Explosive) — your starting shell</li>
              <li><strong>Mission 3:</strong> AP (Armor-Piercing) — penetration for fortified targets</li>
              <li><strong>Mission 6:</strong> Chemical and Incendiary — specialized payloads</li>
              <li><strong>Mission 9:</strong> Shrapnel — airburst anti-personnel</li>
              <li><strong>Elite missions:</strong> APCR — rare drop from high-difficulty rewards</li>
            </ul>
            <p>
              Demo players currently have access to a limited shell set. Full campaign progression unlocks the complete arsenal.
            </p>

            <h2>Frequently Asked Questions</h2>
            <h3>What is the best shell for beginners?</h3>
            <p>
              HE-Frag is the best starter shell because its 12-meter blast radius forgives elevation errors and damages both infantry and light vehicles in a single shot. 
              It helps new crews land hits while learning the Ballistic Calculator and the six-step firing cycle during early campaign missions.
            </p>
            <h3>Are APCR shells worth their higher reload penalty?</h3>
            <p>
              Yes. APCR&apos;s 1.5-second reload penalty is offset by its tungsten-carbide core that penetrates armored trains and angled bunkers that standard AP bounces off. 
              In late-campaign missions where armored targets dominate, standard AP fails more than half the time against sloped plating. APCR is essential, not optional.
            </p>
            <h3>When should I use chemical shells over HE?</h3>
            <p>
              Use chemical shells when the objective is a tunnel, trench, or enclosed fortification where troops shelter from blast but not from lingering gas. 
              Two chemical rounds on the same tunnel mouth outperform five HE rounds because the gas keeps chewing through hit points after the loader has rammed the next round. 
              Avoid chemical in high winds (above 12 knots) where the cloud drifts off target.
            </p>
            <h3>Do incendiary shells stack with other fire sources?</h3>
            <p>
              Yes. Incendiary shells ignite fuel and ammo caches that explode on a delay, which can chain-detonate nearby objectives. 
              One well-placed incendiary round on a fuel cache can wipe out an entire supply yard in a single fireball. 
              However, incendiary deals zero damage per second against stone, steel, or packed earth — never use it on non-flammable targets.
            </p>
            <h3>How do I unlock more shell types?</h3>
            <p>
              Shell types unlock through campaign progression as listed above. APCR is the exception — it drops as a rare reward from elite missions. 
              Your mileage may vary by platform, and demo players currently only have access to the early shell set (HE and AP).
            </p>
            <h3>Should I always load the highest-tier shell?</h3>
            <p>
              No. The &ldquo;best&rdquo; shell is the one that matches your target type and mission profile. Loading APCR against infantry clusters wastes its penetration 
              and reloads slower than HE-Frag would. Conversely, loading HE-Frag against an armored train wastes the shot entirely. 
              Match the shell to the target, not the tier to your ego.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/arsenal" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">← Back to arsenal</Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the best shell for beginners?", "acceptedAnswer": {"@type": "Answer", "text": "HE-Frag is the best starter shell because its 12-meter blast radius forgives elevation errors and damages both infantry and light vehicles in a single shot. It helps new crews land hits while learning the Ballistic Calculator and the six-step firing cycle during early campaign missions."}}, {"@type": "Question", "name": "Are APCR shells worth their higher reload penalty?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. APCR's 1.5-second reload penalty is offset by its tungsten-carbide core that penetrates armored trains and angled bunkers that standard AP bounces off. In late-campaign missions where armored targets dominate, standard AP fails more than half the time against sloped plating. APCR is essential, not optional."}}, {"@type": "Question", "name": "When should I use chemical shells over HE?", "acceptedAnswer": {"@type": "Answer", "text": "Use chemical shells when the objective is a tunnel, trench, or enclosed fortification where troops shelter from blast but not from lingering gas. Two chemical rounds on the same tunnel mouth outperform five HE rounds because the gas keeps chewing through hit points after the loader has rammed the next round. Avoid chemical in high winds (above 12 knots) where the cloud drifts off target."}}, {"@type": "Question", "name": "Do incendiary shells stack with other fire sources?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Incendiary shells ignite fuel and ammo caches that explode on a delay, which can chain-detonate nearby objectives. One well-placed incendiary round on a fuel cache can wipe out an entire supply yard in a single fireball. However, incendiary deals zero damage per second against stone, steel, or packed earth — never use it on non-flammable targets."}}, {"@type": "Question", "name": "How do I unlock more shell types?", "acceptedAnswer": {"@type": "Answer", "text": "Shell types unlock through campaign progression as listed above. APCR is the exception — it drops as a rare reward from elite missions. Your mileage may vary by platform, and demo players currently only have access to the early shell set (HE and AP)."}}, {"@type": "Question", "name": "Should I always load the highest-tier shell?", "acceptedAnswer": {"@type": "Answer", "text": "No. The &ldquo;best&rdquo; shell is the one that matches your target type and mission profile. Loading APCR against infantry clusters wastes its penetration and reloads slower than HE-Frag would. Conversely, loading HE-Frag against an armored train wastes the shot entirely. Match the shell to the target, not the tier to your ego."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
