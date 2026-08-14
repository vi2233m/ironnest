import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "All Endings Guide",
  description: "Complete guide to all four endings in IRON NEST: Heavy Turret Simulator. Learn how to unlock A City in Celebration, A City Subdued, A City Silent, and The Road Not Taken in Mission 15.",
  alternates: {
    canonical: "/guide/endings",
  },
};

export default function EndingsPage() {
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
            <span className="text-[var(--color-moon-dim)]">All Endings</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Story</span>
            <span className="stencil text-[0.62rem] text-[var(--color-teal)]">● Confirmed</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            IRON NEST All Endings Guide
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 8, 2026 · Updated August 12, 2026 · 10 min read
          </p>
          <Image src="/images/screenshots/ss-06.jpg" alt="IRON NEST dramatic low-angle view of twin gun barrels" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              <strong>IRON NEST: Heavy Turret Simulator</strong> has four distinct endings, and every single one is decided in 
              Mission 15, &ldquo;White Shells.&rdquo; The finale drops the normal mission structure entirely. Instead of a chain of 
              mandatory target coordinates, the game asks one question: what do you load into the gun before you fire on Barcelona? 
              Your shell choice — and one special betrayal route — determines the fate of the city and the ending you see.
            </p>
            <p>
              This guide covers all four endings, exactly how to trigger each one, the recommended order to collect them, and the 
              critical preparation needed for the rarest route. All four ending achievements unlock in Mission 15, and you can 
              reload the mission to experience every outcome from a single campaign playthrough.
            </p>

            <h2>Quick overview of all four endings</h2>
            <table>
              <thead>
                <tr>
                  <th>Ending</th>
                  <th>In-game description</th>
                  <th>How to trigger</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>A City in Celebration</strong></td>
                  <td>&ldquo;A city that comes out to meet you.&rdquo;</td>
                  <td>Fire a PRPG propaganda leaflet or STAR round into Barcelona</td>
                </tr>
                <tr>
                  <td><strong>A City Subdued</strong></td>
                  <td>&ldquo;A city that kneels, and calls it peace.&rdquo;</td>
                  <td>Fire a chemical round (Phosgene PGAS or Tear Gas TGAS) into Barcelona</td>
                </tr>
                <tr>
                  <td><strong>A City Silent</strong></td>
                  <td>&ldquo;A city wiped from the map.&rdquo;</td>
                  <td>Fire the Atomic shell (ATMC) or any lethal round into Barcelona</td>
                </tr>
                <tr>
                  <td><strong>The Road Not Taken</strong></td>
                  <td>&ldquo;A city spared, and a road no one else will ever walk.&rdquo;</td>
                  <td>Attack your own High Command, then destroy every retaliating artillery position</td>
                </tr>
              </tbody>
            </table>

            <h2>How Mission 15 (White Shells) works</h2>
            <p>
              The finale positions your Iron Nest (commonly around grid A10) and waits for your choice. There is no standard 
              chain of mandatory targets to solve first. The game has spent fifteen missions teaching you to triangulate, range, 
              and fire where High Command pointed the gun. The finale is the one moment the gun answers to you.
            </p>
            <p>
              For the three city-facing endings, you need only one shell and the correct firing solution into Barcelona. For the 
              betrayal route, everything changes the moment you turn your guns on allied units. Your requisition system shuts down, 
              you can no longer reposition the Iron Nest, and a counter-battery timer begins counting down.
            </p>
            <blockquote>
              The shell choice is the whole point. For fifteen missions you have followed orders; the finale is the one moment 
              the gun answers to you.
            </blockquote>

            <h2>Ending 1: A City in Celebration (The Propaganda Route)</h2>
            <p>
              The easiest and softest ending in the game. Load a <strong>PRPG propaganda leaflet shell</strong> and fire it into 
              Barcelona. The city survives — which, as one guide put it, &ldquo;somehow makes it worse.&rdquo; The leaflet round 
              resolves the mission on impact. You do not need to clear military positions first, fire a second shell, or wait for 
              a counterattack.
            </p>
            <p>
              <strong>What you need:</strong> 1 PRPG shell (or a STAR round as an alternative route to the same ending).
            </p>
            <p>
              The PRPG isn&rsquo;t the only way in. The STAR round is a second route to the same ending, making this the cheapest 
              achievement in the game if you are short on credits after a reload. The epilogue describes Castile stopping its 
              fighting, with the two sides standing together again. Fifteen missions of teleprinter orders, ended by a shell 
              full of paper.
            </p>
            <p>
              <strong>Achievement unlocked:</strong> &ldquo;A City in Celebration&rdquo;
            </p>

            <h2>Ending 2: A City Subdued (The Chemical Route)</h2>
            <p>
              The middle path. Barcelona survives this one, but subdued rather than celebrating. A <strong>chemical round</strong> into 
              the city forces the alternate ending. Iron Nest&rsquo;s chemical shells are <strong>Phosgene (PGAS)</strong> and 
              <strong>Tear Gas (TGAS)</strong>, which are less lethal, and tear gas is the cheapest way into this ending.
            </p>
            <p>
              <strong>What you need:</strong> 1 White Phosphorous shell (WP), or Phosgene (PGAS), or Tear Gas (TGAS) shell.
            </p>
            <p>
              The setup is identical to the Atomic route: same city solution, different shell in the breach. The achievement text 
              calls it a city that kneels and calls it peace. Warning: do not lead with propaganda on this attempt. The PRPG round 
              resolves the mission the moment it lands, so if you fire it first to &ldquo;see what happens,&rdquo; you will get 
              A City in Celebration instead and have to reload.
            </p>
            <p>
              <strong>Achievement unlocked:</strong> &ldquo;A City Subdued&rdquo;
            </p>

            <h2>Ending 3: A City Silent (The Atomic Route)</h2>
            <p>
              The darkest ending. This is the Oppenheimer route — you get this ending by doing exactly what you are told. High 
              Command&rsquo;s final order points at Barcelona, and the <strong>Atomic shell (ATMC)</strong> answers it. No fanfare. 
              The city simply goes silent.
            </p>
            <p>
              <strong>What you need:</strong> 1 Atomic shell (ATMC).
            </p>
            <p>
              Reload White Shells, confirm your firing origin, pick a point inside the city, calculate, load Atomic, fire. Wait 
              for the impact and High Command reports that remaining resistance has been wiped from the map, then authorizes 
              stand down.
            </p>
            <p>
              Pro-tip: The Atomic shell isn&rsquo;t strictly required. Any lethal round into the city produces the same ending, so 
              if you only want the achievement and you are broke after a reload, you do not need to spend 666 credits on it. 
              However, the Atomic shell is the intended path and the most dramatic way to experience this ending.
            </p>
            <p>
              <strong>Achievement unlocked:</strong> &ldquo;A City Silent&rdquo;
            </p>

            <h2>Ending 4: The Road Not Taken (The Betrayal Route)</h2>
            <p>
              The rarest ending in the game — only <strong>0.42% of players</strong> have completed it. This is the hidden ending, 
              and the one everyone gets wrong. Turning your guns on your own High Command does not end the mission. It starts 
              a fight, and three things change the instant you do it:
            </p>
            <ul>
              <li>Your requisition system is gone. You cannot buy anything else.</li>
              <li>You can no longer reposition the Iron Nest. Pick your firing position before you commit.</li>
              <li>The Counter-Battery Timer starts. This becomes a timed mission.</li>
            </ul>
            <p>
              <strong>What you need (recommended loadout):</strong>
            </p>
            <ul>
              <li>1 Atomic shell (ATMC) — effective radius around 3 km</li>
              <li>5–7 Scout Planes for full map reconnaissance</li>
              <li>4–6 Armor Piercing High Explosive shells (APHE)</li>
              <li>1–3 High Capacity High Explosive shells (HCHE)</li>
              <li>At least 25 Powder Charges</li>
            </ul>

            <h3>Preparing the betrayal</h3>
            <p>
              Buy first, betray second. Whatever sits in your inventory when you get the traitor message is what you finish the 
              mission with. Use recon before committing, and work out which friendly positions can actually shoot back at a 
              stationary turret. Artillery is what ends runs, not infantry.
            </p>
            <p>
              Stock heavily against artillery positions specifically. Fire cards prepared in advance, earthquake rounds stocked 
              before firing, every artillery position gone inside ten minutes. Buy more than you think you need, because you 
              cannot add anything else once you pull the trigger.
            </p>

            <h3>Scout plane coverage</h3>
            <p>
              For 5 Scout Plane coverage: use a 0° heading from B1, D1, F1, R1, and T1. This is enough to reveal almost 
              everything you need. For 7 Scout Plane coverage (if you have plenty of credits): reveal the entire map by using 
              a 0° heading from A1, C1, E1, G1, R1, and T1, followed by a 90° heading from H9.
            </p>

            <h3>The attack sequence</h3>
            <p>
              Do the maths before you fire anything. Recon the friendly positions and identify every artillery piece and spotter. 
              Build a complete firing card for each one: bearing, range, charge plan, elevation. Buy your full loadout: APHE for 
              High Command, APHE or HCHE for the artillery, earthquake rounds if you can afford them. This is your last chance.
            </p>
            <p>
              Load both guns. Strike High Command with APHE. The teleprinter turns on you, and the Counter-Battery Timer starts. 
              Work straight down your prepared card list, artillery first, alternating guns. The ATMC shell has an effective 
              radius of around 3 km. Fire it at D5 3:5, which should destroy everything around the High Command along with most of 
              the units in the E/F column.
            </p>
            <p>
              When you use the ATMC shell, begin the main attack with at least five minutes on the counter-battery timer. That 
              gives you enough time to systematically destroy the remaining units. Continue prioritizing artillery and spotting 
              units, while using HCHE against groups of unarmored units.
            </p>

            <h3>Calculating firing angles quickly</h3>
            <p>
              You need to work quickly before the counter-battery timer expires. To save time, calculate the firing angles manually 
              with this formula:
            </p>
            <blockquote>
              Angle (°) = Distance (km) × 12 / Number of Powder Charges
            </blockquote>
            <p>Simplified calculations:</p>
            <ul>
              <li>1 powder charge: Angle = Distance × 12</li>
              <li>2 powder charges: Angle = Distance × 6</li>
              <li>3 powder charges: Angle = Distance × 4</li>
              <li>4 powder charges: Angle = Distance × 3</li>
              <li>5 powder charges: Angle = Distance × 2.4</li>
              <li>6 powder charges: Angle = Distance × 2</li>
            </ul>
            <p>
              You do not need to destroy every single unit. At some point during the attack, the ending screen appears. The exact 
              position of each unit is random, except the Iron Nest itself (always at A1 0:0) and the High Command in B4.
            </p>
            <p>
              <strong>Achievement unlocked:</strong> &ldquo;The Road Not Taken&rdquo;
            </p>

            <h2>The cheapest order to get all four endings</h2>
            <p>
              You do not need four campaign saves, but you do need to think about money. Requisition is the real problem here, 
              not skill. The Atomic shell costs 666 requisition. If you replay White Shells after finishing it once, you restart 
              the mission with roughly 700 credits — enough for the Atomic and almost nothing else. That is fine for the three city 
              endings, which only need one shell each. It is a problem for The Road Not Taken, where everything you fight with has 
              to be bought up front.
            </p>
            <p>Follow this order:</p>
            <ol>
              <li><strong>The Road Not Taken first:</strong> On your original run, while you still have campaign savings to buy a real loadout.</li>
              <li><strong>A City Silent:</strong> Reload, buy the Atomic, fire on Barcelona.</li>
              <li><strong>A City Subdued:</strong> Reload, buy a chemical round. Cheap.</li>
              <li><strong>A City in Celebration:</strong> Reload, PRPG or STAR. Cheapest of all, and it ends the mission the instant it lands.</li>
            </ol>
            <p>
              Go in the other direction, and you will reach the betrayal route with 700 credits and no way to buy your way out of 
              the fight. The Betrayal ending with 700 credits and no ATMC shell is extremely difficult and has not been reliably 
              completed by the community.
            </p>

            <h2>What does NOT count as an ending</h2>
            <p>
              Community testing confirms: destroying High Command then dying is not a hidden fifth ending. Simply moving the Iron 
              Nest into Barcelona does not trigger a separate ending either. There are exactly four endings, four triggers, no more. 
              Killing the King in Mission 2 (&ldquo;Fire and Light&rdquo;) has no ending achievement — it ends your run with Iron 
              Nest self-destructing and you dying with it. It is the fastest way to close out a campaign, but not a resolving ending.
            </p>

            <h2>Preparing for the finale</h2>
            <p>
              White Shells is short once you know the mechanic, but a few preparations make the ending runs painless:
            </p>
            <ul>
              <li>Have the shells unlocked — PRPG, chemical/White Phosphorus and Atomic all need to be available in your arsenal.</li>
              <li>Bank requisition — the finale does not require much, but do not arrive broke if you want to experiment with loadouts.</li>
              <li>Decide your ending order before you start — the recommended viewing order is Celebration → Subdued → Silent → The Road Not Taken.</li>
            </ul>
            <p>
              Because there is no mandatory target chain in Mission 15, a replay is mostly positioning and one fire command. 
              You can cycle through all four endings in an evening once you know the mechanic.
            </p>

            <h2>Frequently asked questions</h2>
            <h3>Do my earlier campaign choices change which ending I get?</h3>
            <p>
              No. The campaign is a fixed sequence of 15 missions, and clearing one unlocks the next. Your decisions change how a 
              mission plays, not which mission follows it. Only your shell choice in Mission 15 determines the ending.
            </p>
            <h3>Do I need a separate save for each ending?</h3>
            <p>
              No, but order matters. White Shells replays cleanly, so one campaign run gets you all four. The catch is money. 
              Do the betrayal route first, while you still have your campaign savings.
            </p>
            <h3>Which ending is the canon ending?</h3>
            <p>
              There is no declared canon — the four endings are equally valid and decided by your Mission 15 shell choice. The 
              developers have not indicated any single ending as the &ldquo;true&rdquo; outcome.
            </p>
            <h3>I destroyed High Command, but no ending appeared. What am I missing?</h3>
            <p>
              Artillery. The mission resolves when the retaliating positions are gone, not when command dies. Anything still 
              firing is keeping the mission open. You must survive the counter-battery retaliation to complete The Road Not Taken.
            </p>
            <h3>Can I reposition Iron Nest after attacking High Command?</h3>
            <p>
              No. Mobility goes at the same moment your requisition does. Pick your firing position before you commit, because 
              you are fighting the rest of the mission from it.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/guides" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">
              ← All guides
            </Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do my earlier campaign choices change which ending I get?", "acceptedAnswer": {"@type": "Answer", "text": "No. The campaign is a fixed sequence of 15 missions, and clearing one unlocks the next. Your decisions change how a mission plays, not which mission follows it. Only your shell choice in Mission 15 determines the ending."}}, {"@type": "Question", "name": "Do I need a separate save for each ending?", "acceptedAnswer": {"@type": "Answer", "text": "No, but order matters. White Shells replays cleanly, so one campaign run gets you all four. The catch is money. Do the betrayal route first, while you still have your campaign savings."}}, {"@type": "Question", "name": "Which ending is the canon ending?", "acceptedAnswer": {"@type": "Answer", "text": "There is no declared canon — the four endings are equally valid and decided by your Mission 15 shell choice. The developers have not indicated any single ending as the &ldquo;true&rdquo; outcome."}}, {"@type": "Question", "name": "I destroyed High Command, but no ending appeared. What am I missing?", "acceptedAnswer": {"@type": "Answer", "text": "Artillery. The mission resolves when the retaliating positions are gone, not when command dies. Anything still firing is keeping the mission open. You must survive the counter-battery retaliation to complete The Road Not Taken."}}, {"@type": "Question", "name": "Can I reposition Iron Nest after attacking High Command?", "acceptedAnswer": {"@type": "Answer", "text": "No. Mobility goes at the same moment your requisition does. Pick your firing position before you commit, because you are fighting the rest of the mission from it."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
