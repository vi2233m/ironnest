import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Free Demo Guide",
  description: "Everything about the IRON NEST: Heavy Turret Simulator demo. Features, gameplay, how to download, system requirements, and what to expect.",
  alternates: {
    canonical: "/demo",
  },
  openGraph: {
    images: ["/og-demo.jpg"],
  },
};

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">Demo</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Demo</span>
            <span className="stencil text-[0.62rem] text-[var(--color-teal)]">● Confirmed</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            IRON NEST Demo Guide
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · June 15, 2026 · Updated August 12, 2026 · 7 min read
          </p>
          <Image src="/images/screenshots/ss-09.jpg" alt="IRON NEST paused menu with pressure gauges and map book" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              The <strong>IRON NEST: Heavy Turret Simulator Demo</strong> was released on June 15, 2026, as part of Steam Next Fest. 
              It offered players their first hands-on experience with the dieselpunk heavy-artillery simulator that would become 
              one of the most talked-about indie releases of the year. The demo remained publicly available on Steam after the 
              festival ended, giving players ample time to experience the unique gameplay before the full launch on August 6, 2026.
            </p>
            <p>
              This guide covers everything you need to know about the demo: what it includes, how to download it, system 
              requirements, gameplay features, and how it compares to the full release.
            </p>

            <h2>Demo overview</h2>
            <p>
              The IRON NEST demo is a free-to-play sampler of the full game&rsquo;s core mechanics. It introduces players to 
              the complex, tactile experience of operating a massive dieselpunk artillery turret in an alternate-history 1920s 
              Spain. The demo received overwhelmingly positive reviews, with 4,207 English reviews rating it &ldquo;Overwhelmingly 
              Positive&rdquo; and a total of 7,634 reviews across all languages.
            </p>
            <blockquote>
              &ldquo;Every operation in IRON NEST feels tactile and absurdly meticulous, but god does it feel satisfying.&rdquo; — Kotaku
            </blockquote>
            <blockquote>
              &ldquo;You were getting bored of turrets in war games? Fools! You have never experienced one from the inside.&rdquo; — Rock Paper Shotgun
            </blockquote>
            <blockquote>
              &ldquo;Possibly the most intense turret simulator game ever.&rdquo; — IGN
            </blockquote>

            <h2>What the demo includes</h2>
            <p>
              The demo provides a substantial taste of the full game&rsquo;s mechanics and atmosphere:
            </p>
            <ul>
              <li><strong>Heavy-artillery simulator gameplay</strong> — Full operation of the turret&rsquo;s stations including map plotting, ballistic calculation, shell loading, and firing.</li>
              <li><strong>Dieselpunk aesthetics</strong> — The complete visual and audio experience of the 1920s alternate-history setting.</li>
              <li><strong>Interactive tactical map</strong> — Grid system, marking tools, triangulation, and firing solution plotting.</li>
              <li><strong>Hands-on massive mechanisms</strong> — Physical lever and dial operation for turret rotation, gun elevation, and shell loading.</li>
              <li><strong>Manual control of a 5,000-ton turret</strong> — The full weight and deliberate pace of the massive machine.</li>
              <li><strong>Procedurally generated objectives</strong> — Missions with varied targets and conditions.</li>
              <li><strong>2x Challenge Modes</strong> — Extended gameplay beyond the tutorial missions.</li>
              <li><strong>Multiple mission types</strong> — From calibration tests to counter-battery duels.</li>
              <li><strong>Customizable cat companion</strong> — Your in-nest companion is present in the demo.</li>
              <li><strong>Full controller support</strong> — Xbox and PlayStation controllers supported.</li>
            </ul>

            <h2>How to download the demo</h2>
            <p>
              The IRON NEST demo is available exclusively through Steam:
            </p>
            <ol>
              <li>Visit the Steam store page for <strong>IRON NEST: Heavy Turret Simulator Demo</strong>.</li>
              <li>Click the &ldquo;Install Demo&rdquo; button.</li>
              <li>The demo will download and install through your Steam client.</li>
              <li>Launch the game normally through Steam.</li>
            </ol>
            <p>
              The demo is free to play and does not require purchasing the full game. It remained available on Steam after 
              Steam Next Fest concluded, though availability is at the developers&rsquo; discretion and may be removed in the future.
            </p>

            <h2>System requirements</h2>
            <p>
              The demo shares the same system requirements as the full game:
            </p>
            <h3>Minimum requirements</h3>
            <ul>
              <li><strong>OS:</strong> 64-bit processor and operating system</li>
              <li><strong>Processor:</strong> Intel Core i5-4460 / AMD FX-8350</li>
              <li><strong>Memory:</strong> 4 GB RAM</li>
              <li><strong>Graphics:</strong> Intel UHD / AMD Vega 8</li>
              <li><strong>Storage:</strong> 5 GB available space</li>
            </ul>
            <p>
              Minimum specs target an average of 30 FPS at 720p with low settings. A dedicated GPU is recommended for a smoother 
              experience. Performance may vary significantly depending on system configuration and thermal conditions.
            </p>
            <h3>Recommended requirements</h3>
            <ul>
              <li><strong>Processor:</strong> Intel Core i5-8400 / AMD Ryzen 5 2600</li>
              <li><strong>Memory:</strong> 8 GB RAM</li>
              <li><strong>Graphics:</strong> NVIDIA GTX 1060 6GB / AMD RX 580 8GB</li>
              <li><strong>Storage:</strong> 5 GB available space</li>
            </ul>

            <h2>Gameplay in the demo</h2>
            <p>
              The demo introduces players to IRON NEST&rsquo;s unique gameplay loop through a series of calibration test missions 
              that gradually increase in complexity. Here is what you can expect:
            </p>

            <h3>Starting out: the overwhelming first impression</h3>
            <p>
              New players are greeted with a bewildering array of buttons, levers, dials, and information sources. There is a 
              big war table with movable counters, compasses, different colored pens, and even a cat. At first glance, it looks 
              completely overwhelming. But the game eases you in with basic calibration test missions that teach the fundamentals.
            </p>
            <p>
              As one reviewer noted: &ldquo;You start off not knowing what the hell you&rsquo;re doing. There&rsquo;s so many 
              buttons and levers and dials and information coming in. But it isn&rsquo;t overwhelming. The game eases you in 
              with basic calibration test missions to start with. And you sharp pick it up.&rdquo;
            </p>

            <h3>The core gameplay loop</h3>
            <p>
              Each mission follows a structured sequence:
            </p>
            <ol>
              <li><strong>Receive orders</strong> — High Command sends objectives via teleprinter. Your job for the day varies from taking out enemies to supporting infantry attacks, taking out trains, or engaging in artillery duels.</li>
              <li><strong>Plot the target</strong> — Use the tactical map, spotter bearings, and triangulation to locate enemy positions. Draw lines from spotters, find intersections, and mark targets.</li>
              <li><strong>Calculate the solution</strong> — Use the ballistic calculator to determine bearing, elevation, and powder charges needed for the shot.</li>
              <li><strong>Load the gun</strong> — Select the correct shell type, load it, and add the required powder charges.</li>
              <li><strong>Aim and fire</strong> — Set the turret bearing and gun elevation, then pull the trigger and feel the entire structure shudder beneath your feet.</li>
              <li><strong>Verify the outcome</strong> — Watch the shell trace in real-time on the map, review aerial photographs, and read newspaper reports between missions.</li>
            </ol>

            <h3>Counter-battery pressure</h3>
            <p>
              One of the demo&rsquo;s most intense features is the counter-battery system. When you draw attention to yourself 
              by firing, enemy artillery begins tracking a fire solution on you. A red alert goes off, a clock starts ticking 
              down in your Iron Nest, and when it reaches zero — you get hit. You must quickly locate the enemy artillery, 
              plot solutions, and return fire before they destroy you.
            </p>
            <p>
              This creates genuine time pressure and panic. As one player described: &ldquo;You&rsquo;ve gotta be cool when 
              you&rsquo;re playing this game, or you&rsquo;ll screw up and die on the later missions.&rdquo;
            </p>

            <h3>Between missions</h3>
            <p>
              The demo includes the full experience of life inside the Iron Nest. You can grab coffee in your quarters, read 
              the newspaper handed to you after missions, look out the window, and enjoy the atmosphere. The cat companion 
              provides a small moment of comfort in the grim dieselpunk setting.
            </p>

            <h2>Demo vs. full game</h2>
            <p>
              The demo provides a substantial experience, but the full game expands on it significantly:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Demo</th>
                  <th>Full Game</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Campaign missions</td>
                  <td>Subset of early missions</td>
                  <td>15 full campaign missions</td>
                </tr>
                <tr>
                  <td>Challenge modes</td>
                  <td>2</td>
                  <td>2+ with leaderboards</td>
                </tr>
                <tr>
                  <td>Shell types</td>
                  <td>Limited selection</td>
                  <td>30+ unlockable ammo types</td>
                </tr>
                <tr>
                  <td>Regions</td>
                  <td>Few</td>
                  <td>15 regions</td>
                </tr>
                <tr>
                  <td>Medals</td>
                  <td>Some</td>
                  <td>100+ unlockable medals</td>
                </tr>
                <tr>
                  <td>Story endings</td>
                  <td>Not available</td>
                  <td>4 distinct endings</td>
                </tr>
                <tr>
                  <td>Progression</td>
                  <td>Limited</td>
                  <td>Full unlock system</td>
                </tr>
              </tbody>
            </table>

            <h2>Community response</h2>
            <p>
              The demo generated enormous interest in the IRON NEST community. Many players discovered the game through 
              content creator videos and immediately wishlisted the full release. The developers ran Discord playtests before 
              the public demo, with the &ldquo;NEST FEST&rdquo; playtest running from February 23 to March 2, 2026.
            </p>
            <p>
              Content creators played a significant role in building hype. The developers granted early access to selected 
              creators for promotional purposes, which led to some community discussion about fairness. However, the developers 
              clarified that these were playtest builds, not the final demo, and that the public demo would be available to 
              everyone during Steam Next Fest.
            </p>

            <h2>Is the demo still available?</h2>
            <p>
              As of the full game&rsquo;s release on August 6, 2026, the demo&rsquo;s availability is at the developers&rsquo; 
              discretion. The demo page may still be accessible on Steam, but players who enjoyed the demo are encouraged to 
              purchase the full game for the complete experience. The full game is priced at $14.99 (regularly $19.99), making 
              it an affordable upgrade for demo players.
            </p>

            <h2>Frequently asked questions</h2>
            <h3>Does the demo save carry over to the full game?</h3>
            <p>
              There is no official confirmation of save transfer between the demo and full game. Given the demo&rsquo;s limited 
              scope, it is likely that full game progress starts fresh.
            </p>
            <h3>Can I mod the demo?</h3>
            <p>
              Some early community mods were built specifically for the demo version (v0.4.0). However, most mods have been 
              updated for the full release. Mod compatibility depends on the specific mod and game version.
            </p>
            <h3>How long is the demo?</h3>
            <p>
              The demo includes several missions and challenge modes. Depending on your learning curve and how thoroughly you 
              explore the mechanics, expect 2-4 hours of gameplay. The challenge modes provide additional replayability.
            </p>
            <h3>Does the demo have controller support?</h3>
            <p>
              Yes, the demo includes full controller support for Xbox and PlayStation controllers. Steam Deck compatibility 
              was listed as &ldquo;Unknown&rdquo; at release.
            </p>
            <h3>What languages are supported?</h3>
            <p>
              The demo supports 15 languages including English, German, French, Spanish, and Simplified Chinese. Note that 
              interface text is translated, but audio remains in English.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">
              ← Back to home
            </Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Does the demo save carry over to the full game?", "acceptedAnswer": {"@type": "Answer", "text": "There is no official confirmation of save transfer between the demo and full game. Given the demo&rsquo;s limited scope, it is likely that full game progress starts fresh."}}, {"@type": "Question", "name": "Can I mod the demo?", "acceptedAnswer": {"@type": "Answer", "text": "Some early community mods were built specifically for the demo version (v0.4.0). However, most mods have been updated for the full release. Mod compatibility depends on the specific mod and game version."}}, {"@type": "Question", "name": "How long is the demo?", "acceptedAnswer": {"@type": "Answer", "text": "The demo includes several missions and challenge modes. Depending on your learning curve and how thoroughly you explore the mechanics, expect 2-4 hours of gameplay. The challenge modes provide additional replayability."}}, {"@type": "Question", "name": "Does the demo have controller support?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, the demo includes full controller support for Xbox and PlayStation controllers. Steam Deck compatibility was listed as &ldquo;Unknown&rdquo; at release."}}, {"@type": "Question", "name": "What languages are supported?", "acceptedAnswer": {"@type": "Answer", "text": "The demo supports 15 languages including English, German, French, Spanish, and Simplified Chinese. Note that interface text is translated, but audio remains in English."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
