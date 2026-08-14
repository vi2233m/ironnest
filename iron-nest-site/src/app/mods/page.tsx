import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Mods & Customization",
  description: "Complete guide to mods for IRON NEST: Heavy Turret Simulator. Best mods, installation guide, mod loaders, and community creations.",
  alternates: {
    canonical: "/mods",
  },
};

export default function ModsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">Mods</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Modding</span>
            <span className="stencil text-[0.62rem] text-[var(--color-teal)]">● Confirmed</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            IRON NEST Mods Guide
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 12, 2026 · Updated August 12, 2026 · 9 min read
          </p>
          <Image src="/images/screenshots/ss-03.jpg" alt="IRON NEST upgrade screen with skill cards and requisition credits" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              <strong>IRON NEST: Heavy Turret Simulator</strong> has a thriving modding community. Despite being a relatively 
              new release, the game already has dozens of mods on Nexus Mods ranging from quality-of-life improvements to 
              full co-op multiplayer implementations. This guide covers the best mods, how to install them, the mod loaders 
              you need, and what to expect from the modding scene.
            </p>
            <p>
              Mods are useful, unofficial, and — as with any modded game — potentially fragile. Always back up your save files 
              before installing mods, and be aware that game updates may break mod functionality until the mod author updates 
              their work.
            </p>

            <h2>Mod loaders: BepInEx and MelonLoader</h2>
            <p>
              Most IRON NEST mods require a mod loader to function. The two primary loaders used by the community are:
            </p>
            <ul>
              <li><strong>BepInEx 6</strong> — The IL2CPP bleeding-edge build is required for most mods. Built and tested against version 6.0.0-be.785.</li>
              <li><strong>MelonLoader</strong> — Alternative loader used by some mods, particularly earlier ones. Version 0.8.0-ci.2548 with IL2CPP support is the current standard.</li>
            </ul>
            <p>
              Some mods are loader-specific, while newer mods like Open Nest Co-op support both loaders. The &ldquo;BepInEx 
              MelonLoader Loader&rdquo; by Tong317 even allows BepInEx 6 to run MelonLoader mods, bridging the two ecosystems.
            </p>

            <h2>Top mods by category</h2>

            <h3>Co-op & Multiplayer</h3>
            <p>
              The most popular and impactful mods for IRON NEST are co-op implementations, since the base game is single-player only.
            </p>
            <ul>
              <li><strong>Iron Nest Co-op (Jager2251)</strong> — 15 endorsements, 6,000+ downloads. The most popular co-op mod, supporting up to 5 players over Steam with host-authoritative firing and full station synchronization.</li>
              <li><strong>Synchrony (VodRackR)</strong> — 9 endorsements, 1,300+ downloads. Early co-op mod using MelonLoader. Originally for Demo v0.4.0.</li>
              <li><strong>Open Nest Co-op (Tong317)</strong> — Cross-loader support for both BepInEx and MelonLoader with full Steamworks integration.</li>
              <li><strong>VR. Co-op. PvP. (t3hBlah64)</strong> — 2 endorsements, 359 downloads. VR multiplayer with up to 3 other players in the same nest, or split between 2 nests for PvP. Crossplay with flatscreen players.</li>
            </ul>

            <h3>Automation & Quality of Life</h3>
            <p>
              These mods streamline the complex calculations and repetitive tasks that make up IRON NEST&rsquo;s core gameplay.
            </p>
            <ul>
              <li><strong>Fire Control System (svr2kos2)</strong> — 11 endorsements, 506 downloads. Automatic calculation, loading, aiming, and firing. Allows you to focus solely on measurement.</li>
              <li><strong>Fire Control System - Smart (hysonMod)</strong> — Automated fire control with queue missions, live FCS HUD, replan with F9, and optional Auto Fire.</li>
              <li><strong>Iron Nest Aide (WEEZER123)</strong> — External artillery calculator with ballistic solver (auto charge/elevation), coordinate triangulation from pasted observer reports, clipboard listener, and always-on-top Battle Report window. No memory reading, no injection.</li>
              <li><strong>Vertical Bearing Mod (kai481)</strong> — Calculates the vertical bearing on clipboard next to the distance.</li>
              <li><strong>Accurate Scouts (extraflake)</strong> — Makes scouts report bearings accurately, without the 0.5 degree error margin.</li>
            </ul>

            <h3>Gameplay Tweaks</h3>
            <ul>
              <li><strong>Artillery Speed - Adjustable Reload and Aiming Speed (N3M0T8000)</strong> — 2 endorsements, 365 downloads. Speeds up turret rotation, gun elevation and reloading. Press F8 to set your own speed multiplier from 0.1x to 10x. Default is 4x.</li>
              <li><strong>Turret Optimization (kmyuhkyuk)</strong> — Adds keyboard support for the turret console, custom animation speed, and unlocks the Elevation Slider during Reloading.</li>
              <li><strong>IronNestBearingControl (EightySixFan)</strong> — Adds a physical panel for entering an azimuth and automatically rotating the turret. Press F5 to show or hide.</li>
              <li><strong>Enemy Tracker (kevstep)</strong> — 2 endorsements, 551 downloads. Single-player quality-of-life mod that highlights enemy and ally entities.</li>
            </ul>

            <h3>Cheats & Sandbox</h3>
            <ul>
              <li><strong>Infinite Requisition Points (Pyramidyes)</strong> — 5 endorsements, 357 downloads. Gives infinite requisition points to use.</li>
              <li><strong>Atomic Annihilation (Blackworths)</strong> — 171 downloads. ATMC shells now cost only 20 req, with no 1-round restriction. Unleash the beast.</li>
              <li><strong>Iron Nest Dev Cheats (acalhoun78)</strong> — Map reveal, ally god mode, requisition points, shell spawns. For MelonLoader.</li>
            </ul>

            <h3>Cosmetic & Audio</h3>
            <ul>
              <li><strong>Custom Cat (vZVXv)</strong> — Custom cat mod for your companion.</li>
              <li><strong>Custom Records / Custom Record and Albums (svr2kos2, Kurukimyevitoz)</strong> — Play your favorite audio in-game. Create your own record or album.</li>
              <li><strong>MapDrawer (wrothmonk)</strong> — Allows saving and loading of drawings on the tactical map. Also supports importing JSON for precise art creation.</li>
            </ul>

            <h3>Utility Mods</h3>
            <ul>
              <li><strong>Deja&rsquo;s misc. mod (dejaflopper)</strong> — Previously an APHE shell mod, now includes many game-changing features with customizable settings.</li>
              <li><strong>ARCHIVED - Additional Requisitions (2MuchCastileRND)</strong> — The author is pursuing a different mod direction for the full release.</li>
            </ul>

            <h2>How to install mods</h2>
            <p>
              Most mods follow a similar installation pattern. Here is the general process:
            </p>
            <ol>
              <li>Download and install a mod loader (BepInEx 6 IL2CPP or MelonLoader).</li>
              <li>Download the mod from Nexus Mods.</li>
              <li>Open your game folder: Steam → Right-click IRON NEST → Manage → Browse local files.</li>
              <li>For BepInEx mods: Copy the mod DLL to <code>BepInEx/plugins/</code>.</li>
              <li>For MelonLoader mods: Copy the mod to the appropriate MelonLoader folder.</li>
              <li>For standalone packages: Extract the complete package contents into the game folder.</li>
              <li>Launch the game through Steam.</li>
            </ol>
            <p>
              <strong>Linux/Proton note:</strong> For BepInEx on Linux via Proton, add <code>WINEDLLOVERRIDES=&quot;winhttp.dll=n,b&quot; %command%</code> 
              to your game&rsquo;s Launch Options in Steam.
            </p>

            <h2>Mod compatibility warnings</h2>
            <p>
              The modding scene for IRON NEST has some important compatibility considerations:
            </p>
            <ul>
              <li><strong>Loader split:</strong> Some mods use BepInEx, others use MelonLoader. Do not assume they can be installed together unless explicitly stated (like Open Nest Co-op).</li>
              <li><strong>Version updates:</strong> Game patches can break mods. Check the mod page for the last update date and game version compatibility.</li>
              <li><strong>Co-op mod versions:</strong> Synchrony was built for Demo v0.4.0 and may not work with the full release. Jager2251&rsquo;s co-op mod is explicitly updated for the full release.</li>
              <li><strong>Online play:</strong> Only use mods in single-player or with friends who also have the same mods. Using mods in public multiplayer may result in bans or desync issues.</li>
            </ul>

            <h2>Where to find mods</h2>
            <p>
              The primary source for IRON NEST mods is <strong>Nexus Mods</strong>. As of August 2026, there are 25+ mods available 
              across the Miscellaneous category. The community is active, with new mods appearing daily.
            </p>
            <p>
              You can also find mod discussions and support on the IRON NEST Steam Community forums, the official Discord, 
              and GitHub repositories for open-source mods.
            </p>

            <h2>Creating your own mods</h2>
            <p>
              IRON NEST is built in Unity using IL2CPP, which means modding requires some technical knowledge. The community 
              has established tools and workflows:
            </p>
            <ul>
              <li>BepInEx 6 for IL2CPP is the standard framework for code injection.</li>
              <li>MelonLoader provides an alternative path for mod development.</li>
              <li>Many mod authors share their source code on GitHub for others to learn from.</li>
            </ul>
            <p>
              If you are interested in creating mods, start by examining existing open-source mods and the BepInEx/MelonLoader 
              documentation. The IRON NEST Discord community is also a helpful resource for aspiring modders.
            </p>

            <h2>Frequently asked questions</h2>
            <h3>Are mods safe to use?</h3>
            <p>
              Most mods from Nexus Mods are scanned for viruses and marked as safe. However, always download from trusted sources 
              and back up your saves. Mods can potentially corrupt save files or cause crashes.
            </p>
            <h3>Will mods disable achievements?</h3>
            <p>
              This depends on the mod and how it interacts with the game. Single-player quality-of-life mods typically do not 
              affect achievements, but cheat mods might. There is no official statement from the developers on this matter.
            </p>
            <h3>Can I use multiple mods at once?</h3>
            <p>
              Yes, but compatibility varies. Mods using the same loader (BepInEx or MelonLoader) generally work together, but 
              mods that modify the same game systems may conflict. Test combinations carefully.
            </p>
            <h3>Do mods work with the demo?</h3>
            <p>
              Some mods were built specifically for the demo version and may not work with the full release. Always check the 
              mod description for version compatibility. The demo is no longer available as of the full release.
            </p>
            <h3>Will official mod support be added?</h3>
            <p>
              The developers have not announced official mod support or Steam Workshop integration. The current modding scene 
              relies on community tools like BepInEx and MelonLoader.
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
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Are mods safe to use?", "acceptedAnswer": {"@type": "Answer", "text": "Most mods from Nexus Mods are scanned for viruses and marked as safe. However, always download from trusted sources and back up your saves. Mods can potentially corrupt save files or cause crashes."}}, {"@type": "Question", "name": "Will mods disable achievements?", "acceptedAnswer": {"@type": "Answer", "text": "This depends on the mod and how it interacts with the game. Single-player quality-of-life mods typically do not affect achievements, but cheat mods might. There is no official statement from the developers on this matter."}}, {"@type": "Question", "name": "Can I use multiple mods at once?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, but compatibility varies. Mods using the same loader (BepInEx or MelonLoader) generally work together, but mods that modify the same game systems may conflict. Test combinations carefully."}}, {"@type": "Question", "name": "Do mods work with the demo?", "acceptedAnswer": {"@type": "Answer", "text": "Some mods were built specifically for the demo version and may not work with the full release. Always check the mod description for version compatibility. The demo is no longer available as of the full release."}}, {"@type": "Question", "name": "Will official mod support be added?", "acceptedAnswer": {"@type": "Answer", "text": "The developers have not announced official mod support or Steam Workshop integration. The current modding scene relies on community tools like BepInEx and MelonLoader."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
