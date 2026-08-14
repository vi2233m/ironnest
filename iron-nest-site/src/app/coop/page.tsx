import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Co-op & Multiplayer",
  description: "Everything about co-op and multiplayer in IRON NEST: Heavy Turret Simulator. Official plans, community co-op mods, and how to play with friends.",
  alternates: {
    canonical: "/coop",
  },
  openGraph: {
    images: ["/og-coop.jpg"],
  },
};

export default function CoopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">Co-op</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Multiplayer</span>
            <span className="stencil text-[0.62rem] text-[var(--color-teal)]">● Confirmed</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            IRON NEST Co-op & Multiplayer
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 8, 2026 · Updated August 12, 2026 · 8 min read
          </p>
          <Image src="/images/screenshots/ss-15.jpg" alt="IRON NEST control panel with red levers and pressure gauges" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              <strong>IRON NEST: Heavy Turret Simulator</strong> is designed as a fully single-player experience, but the 
              game&rsquo;s multi-station turret operation has inspired one of the most frequently asked questions in the community: 
              when is co-op coming? The answer is nuanced — official co-op is planned for a future standalone title, while 
              community mods have already brought multiplayer to the current game.
            </p>
            <p>
              This guide covers the official developer roadmap for multiplayer, the community co-op mods available now, how 
              they work, and what the future holds for crew-based turret operations in the IRON NEST universe.
            </p>

            <h2>Official multiplayer status</h2>
            <p>
              The first IRON NEST (launching mid-2026) is single-player only. Developer Nick Nieuwoudt has confirmed that official 
              co-op is planned for the next IRON NEST game, not this first one. The target for that multiplayer title is around 
              2027.
            </p>
            <blockquote>
              &ldquo;I&rsquo;m a solo dev, so I split my &lsquo;dream game&rsquo; into multiple releases, each one adding major 
              new systems. That way I can actually finish things and avoid a 5+ year early-access hell hole that would absolutely 
              burn me out.&rdquo; — Nick Nieuwoudt, developer
            </blockquote>
            <p>
              Nick has stated he might try to retroactively add co-op to IRON NEST 1 later, but makes no promises. It would 
              require basically rewriting most of the game&rsquo;s code and systems from scratch. For day one, treat IRON NEST: 
              Heavy Turret Simulator as a single-player operation.
            </p>

            <h2>The original co-op vision</h2>
            <p>
              Back when Nick and co-developer Dominik Latos first made the deal to build IRON NEST, the plan was simple: release 
              the game on Steam, gather player feedback, gain experience from developing the NEST, and then create a new game in 
              the same universe — not a DLC, not an expansion, but a fully standalone multiplayer title. Co-op for sure, and 
              they have even talked about PvP.
            </p>
            <p>
              The developers&rsquo; original vision for co-op is exactly what players imagine:
            </p>
            <ul>
              <li>One player responsible for reconnaissance and calling out coordinates</li>
              <li>Another handling calculations and planning on the map</li>
              <li>A third managing rotation, elevation, and the mechanical operation of the cannon</li>
            </ul>
            <p>
              Imagine all of this connected through field radios, with the roar of the battlefield constantly in the background — 
              sometimes breaking, distorting, or drowning out your communication. The developers themselves have described this 
              as their dream scenario.
            </p>
            <p>
              The fire mission printout cards were designed with eventual co-op in mind. As Nick has said, the goal is to test 
              out and refine the core game mechanics in a single-player environment first, because the final vision is 
              cooperative. Many of the features will fit well into a multi-crew setup.
            </p>

            <h2>Community co-op mods</h2>
            <p>
              While official co-op is still in development, the community has not waited. Multiple co-op mods are available on 
              Nexus Mods, bringing multiplayer functionality to IRON NEST right now.
            </p>

            <h3>Iron Nest Co-op by Jager2251</h3>
            <p>
              The most popular community co-op mod, with 15 endorsements and 6,000+ downloads. This mod brings multiplayer to 
              IRON NEST with up to 5 players over Steam. Players can man the guns, load shells, and work the artillery computer 
              as a crew in the Iron Nest.
            </p>
            <p><strong>What is synchronized:</strong></p>
            <ul>
              <li><strong>Mission:</strong> When the host starts a mission, every guest loads the same one and spawns in. Ending a mission returns everyone to the menu.</li>
              <li><strong>Turret / guns:</strong> Aiming (rotation + elevation) both ways; levers and handles move along.</li>
              <li><strong>Station actions:</strong> Change magazine, load shell, powder charges, reload lever.</li>
              <li><strong>Firing:</strong> Host-authoritative — the host distributes exact firing values (angle, elevation, charge, shell) so impacts are identical for everyone.</li>
              <li><strong>Doors, firing stand and hatches:</strong> Synchronized.</li>
              <li><strong>Shell paint:</strong> Paint applied to a shell before loading is shown to other players.</li>
              <li><strong>Artillery computer / clipboard:</strong> Calculated fire-mission cards appear for all players with identical data (distance, bearing, elevation, charge, shell, target-type image). Any player can calculate cards.</li>
              <li><strong>Supply console:</strong> Ammunition, powder charges, requisition points, repositioning, and reconnaissance planes. Purchases take effect for everyone.</li>
              <li><strong>Map-table drawings:</strong> The host can turn this off in Options if players prefer local drawings.</li>
              <li><strong>Players:</strong> Soldier avatar with name tag, up to 5 players per lobby.</li>
            </ul>
            <p><strong>What is NOT synchronized (intentionally):</strong></p>
            <ul>
              <li>Music — each player can decide whether to listen.</li>
              <li>Artillery computer inputs — only generated cards are synced, so several players can work independently.</li>
            </ul>
            <p><strong>Known limitations:</strong></p>
            <ul>
              <li>No mid-session join — guests must join before the host starts a mission.</li>
              <li>Typewriter texts from High Command appear in the host&rsquo;s language for all players.</li>
            </ul>

            <h3>Other co-op mods</h3>
            <p>
              <strong>Synchrony by VodRackR</strong> — A separate co-op mod using MelonLoader. Originally for Demo v0.4.0, 
              this was an early community effort that proved the concept.
            </p>
            <p>
              <strong>Open Nest Co-op by Tong317</strong> — Enables cross-loader online co-op supporting both BepInEx and 
              MelonLoader, with full Steamworks integration and complete game synchronization. Updated for Game Patch 1.0.
            </p>
            <p>
              <strong>VR. Co-op. PvP. by t3hBlah64</strong> — Lets players play in VR and cooperative or competitive 
              multiplayer with up to 3 other players in the same nest for co-op, or split between 2 nests for PvP. Crossplay 
              supported with flatscreen players.
            </p>

            <h2>How to install the co-op mod</h2>
            <p>
              The recommended installation method uses the standalone package from Jager2251&rsquo;s mod, which includes 
              everything you need:
            </p>
            <ol>
              <li>Download the mod from Nexus Mods.</li>
              <li>Open the game folder: in Steam, right-click IRON NEST → Manage → Browse local files.</li>
              <li>Copy the complete contents of the package into that folder.</li>
              <li>Start the game normally through Steam. On first launch, wait a few minutes while BepInEx generates its files.</li>
            </ol>
            <p>
              For Linux/Proton users: Add <code>WINEDLLOVERRIDES=&quot;winhttp.dll=n,b&quot; %command%</code> to your 
              game&rsquo;s Launch Options in Steam.
            </p>

            <h2>How to play co-op</h2>
            <p>
              In-game, a small panel appears at the top-left (&ldquo;IronNest Coop&rdquo;). Everything is done from that panel:
            </p>
            <ol>
              <li>Click <strong>Create Lobby</strong>.</li>
              <li>The panel shows an ID (Hex) — that is your lobby code.</li>
              <li>Share that short code with the players who want to join.</li>
              <li>Joining players type the host&rsquo;s lobby code into the Lobby ID field and click Join ID (or press Enter).</li>
            </ol>
            <p>
              The host has moderation controls: Kick removes a player for the current lobby session, while Ban removes them 
              permanently (saved to config file).
            </p>

            <h2>Developer response to community mods</h2>
            <p>
              The developers have been supportive of community efforts. When t3hBlah64 created a basic VR mod with co-op 
              functionality, Nick&rsquo;s response was: &ldquo;This is absolutely amazing! I saw your video in the Discord 
              and I am so hyped. I love what you&rsquo;re doing! Please keep it up and share your progress!&rdquo;
            </p>
            <p>
              Nick has also expressed plans for native VR support, though he has no personal experience with VR development 
              and is actively looking for good VR developers to partner with.
            </p>

            <h2>Why the delay for official co-op?</h2>
            <p>
              The developers are a two-person studio: Nick handles programming and design, Dominik manages marketing and community. They 
              have to choose their battles carefully. From experience, they know that trying to do &ldquo;everything at once&rdquo; 
              in a tiny team can kill both the quality and the project.
            </p>
            <p>
              Their vision is to ship indie games in a steady pipeline (roughly one per year, if things go well), each one 
              expanding the IRON NEST universe — not only with multiplayer, but also with other machines/vehicles and new ways 
              to experience this world. They are self-funded with no publisher, which is why the pipeline is structured as 
              single-player first, then multiplayer later, once they can afford to do it at the level they would be proud of.
            </p>
            <blockquote>
              &ldquo;We prefer to promise less, keep the dates, and surprise you later... not the other way around.&rdquo; — 
              Scream_Wattson, developer
            </blockquote>

            <h2>Future of the IRON NEST universe</h2>
            <p>
              The developers&rsquo; dream is to slowly build a whole universe of games in this niche. IRON NEST: Heavy Turret 
              Simulator is simply the first game in that universe. If things go well, a third title would naturally build on 
              the experience and resources earned from the first two, and so on.
            </p>
            <p>
              Nobody should feel pressured to buy one game &ldquo;for the hope&rdquo; of another. If you decide to buy IRON NEST, 
              it should be because this game looks fun to you. The developers appreciate everyone watching, testing, and sharing 
              feedback while waiting for the second multiplayer game in this universe.
            </p>

            <h2>Frequently asked questions</h2>
            <h3>Is IRON NEST co-op officially supported?</h3>
            <p>
              Not in the base game. The first IRON NEST is single-player only. Official co-op is planned for a future standalone 
              title in the IRON NEST universe, targeted for around 2027. Community mods currently provide co-op functionality.
            </p>
            <h3>How many players can play co-op?</h3>
            <p>
              The most popular community mod (Jager2251&rsquo;s Iron Nest Co-op) supports up to 5 players per lobby. The 
              developers&rsquo; original vision described 3 specialized roles, but community mods allow more flexible crew sizes.
            </p>
            <h3>Can I play co-op in VR?</h3>
            <p>
              Yes, through community mods. The &ldquo;VR. Co-op. PvP.&rdquo; mod by t3hBlah64 supports VR multiplayer with 
              crossplay between VR and flatscreen players. Native VR support is also on the developer roadmap, but with no 
              confirmed timeline.
            </p>
            <h3>Will co-op be added to IRON NEST 1 later?</h3>
            <p>
              The developer has said he might try to retroactively add co-op to IRON NEST 1 later, but makes no promises. 
              It would require rewriting most of the game&rsquo;s code from scratch. The current plan is to release multiplayer 
              as a separate standalone title.
            </p>
            <h3>Is there PvP multiplayer?</h3>
            <p>
              The developers have discussed PvP as a possibility for the future multiplayer title. Community mods like 
              &ldquo;VR. Co-op. PvP.&rdquo; already support competitive multiplayer with two nests facing each other.
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
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is IRON NEST co-op officially supported?", "acceptedAnswer": {"@type": "Answer", "text": "Not in the base game. The first IRON NEST is single-player only. Official co-op is planned for a future standalone title in the IRON NEST universe, targeted for around 2027. Community mods currently provide co-op functionality."}}, {"@type": "Question", "name": "How many players can play co-op?", "acceptedAnswer": {"@type": "Answer", "text": "The most popular community mod (Jager2251&rsquo;s Iron Nest Co-op) supports up to 5 players per lobby. The developers&rsquo; original vision described 3 specialized roles, but community mods allow more flexible crew sizes."}}, {"@type": "Question", "name": "Can I play co-op in VR?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, through community mods. The &ldquo;VR. Co-op. PvP.&rdquo; mod by t3hBlah64 supports VR multiplayer with crossplay between VR and flatscreen players. Native VR support is also on the developer roadmap, but with no confirmed timeline."}}, {"@type": "Question", "name": "Will co-op be added to IRON NEST 1 later?", "acceptedAnswer": {"@type": "Answer", "text": "The developer has said he might try to retroactively add co-op to IRON NEST 1 later, but makes no promises. It would require rewriting most of the game&rsquo;s code from scratch. The current plan is to release multiplayer as a separate standalone title."}}, {"@type": "Question", "name": "Is there PvP multiplayer?", "acceptedAnswer": {"@type": "Answer", "text": "The developers have discussed PvP as a possibility for the future multiplayer title. Community mods like &ldquo;VR. Co-op. PvP.&rdquo; already support competitive multiplayer with two nests facing each other."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
