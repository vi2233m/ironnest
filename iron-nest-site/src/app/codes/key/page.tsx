import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Key & Access Codes",
  description: "Complete guide to controls, keybindings, and keyboard shortcuts for IRON NEST: Heavy Turret Simulator. Master every station and control.",
  alternates: {
    canonical: "/codes/key",
  },
};

export default function KeyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/codes" className="hover:text-[var(--color-moon)]">Codes</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">Key Guide</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Codes</span>
            <span className="stencil text-[0.62rem] text-[var(--color-teal)]">● Confirmed</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            IRON NEST Key Guide
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 12, 2026 · Updated August 12, 2026 · 8 min read
          </p>
          <Image src="/images/screenshots/ss-15.jpg" alt="IRON NEST control panel with red levers and green status lights" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              <strong>IRON NEST: Heavy Turret Simulator</strong> is a game built around physical interaction with a massive 
              dieselpunk artillery turret. Every lever, every dial, and every shot is under your control. Understanding the 
              controls, keybindings, and keyboard shortcuts is essential for efficient operation under pressure — especially 
              when the counter-battery timer is counting down and enemy shells are incoming.
            </p>
            <p>
              This guide covers the default controls for every station in the Iron Nest, from the map table and teleprinters 
              to the gun loading bays and firing controls. Master these controls, and the machine becomes an extension of your 
              will. Fumble them, and Barcelona may survive while you do not.
            </p>

            <h2>Movement and interaction basics</h2>
            <p>
              IRON NEST is a first-person station-based simulator. You move between stations within the turret and interact 
              with controls using the mouse and keyboard.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Key / Control</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Move</td>
                  <td>W, A, S, D</td>
                  <td>Walk around the interior of the turret between stations</td>
                </tr>
                <tr>
                  <td>Look</td>
                  <td>Mouse</td>
                  <td>Look around and aim your cursor at interactive elements</td>
                </tr>
                <tr>
                  <td>Interact / Use</td>
                  <td>Left Click</td>
                  <td>Grab levers, click buttons, select tools, stamp cards</td>
                </tr>
                <tr>
                  <td>Release / Drop</td>
                  <td>Right Click or release Left Click</td>
                  <td>Let go of held objects and levers</td>
                </tr>
                <tr>
                  <td>Crouch</td>
                  <td>Ctrl</td>
                  <td>Crouch to access lower controls or viewports</td>
                </tr>
                <tr>
                  <td>Sprint</td>
                  <td>Shift</td>
                  <td>Move faster between stations when time is critical</td>
                </tr>
              </tbody>
            </table>

            <h2>Map table controls</h2>
            <p>
              The map table is where you will spend most of your time. It is the nerve center of your operations, where 
              intelligence becomes firing solutions.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Control</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Select red pencil</td>
                  <td>Click on red pencil</td>
                  <td>Draws bearing and range lines from the Iron Nest. Copies data to clipboard.</td>
                </tr>
                <tr>
                  <td>Select yellow pencil</td>
                  <td>Click on yellow pencil</td>
                  <td>Draws bearing and range lines without copying to clipboard. For pre-planning.</td>
                </tr>
                <tr>
                  <td>Select white pencil</td>
                  <td>Click on white pencil</td>
                  <td>Draws plain lines only. No range or bearing data. For tracking spotters or drawing shapes.</td>
                </tr>
                <tr>
                  <td>Select drafting compass</td>
                  <td>Click on compass</td>
                  <td>Creates circles and gives range from a center point.</td>
                </tr>
                <tr>
                  <td>Draw line</td>
                  <td>Click and drag</td>
                  <td>Draw lines on the map with the selected tool.</td>
                </tr>
                <tr>
                  <td>Place marker</td>
                  <td>Click and drag marker icons</td>
                  <td>Red for enemy/FDC, green for reference points, blue for spotters/friendlies.</td>
                </tr>
                <tr>
                  <td>Use iris tool</td>
                  <td>Click and drag red portion</td>
                  <td>Adjust to show kill/splash radius of various shells.</td>
                </tr>
                <tr>
                  <td>Copy teleprinter text</td>
                  <td>Left click on highlighted text</td>
                  <td>Copy information to clipboard for easier map marking.</td>
                </tr>
              </tbody>
            </table>
            <blockquote>
              <strong>Critical tip:</strong> When drawing lines from the Iron Nest, always draw from the spike at the bottom 
              of the model. Marking from anywhere else will cause your firing solutions to be inaccurate and you will probably miss.
            </blockquote>

            <h2>Ballistic calculator controls</h2>
            <p>
              The ballistic calculator translates your map measurements into gun settings. Working from top to bottom:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Control</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Set bearing</td>
                  <td>Rotate top dial / wheel</td>
                  <td>Enter the bearing from your clipboard (red pencil measurement).</td>
                </tr>
                <tr>
                  <td>Select target type</td>
                  <td>Rotate target wheel</td>
                  <td>Optional. Shows target icon on the final firing card.</td>
                </tr>
                <tr>
                  <td>Select shell type</td>
                  <td>Rotate shell wheel</td>
                  <td>AP for underground targets, HE for surface targets.</td>
                </tr>
                <tr>
                  <td>Set range</td>
                  <td>Rotate range wheel</td>
                  <td>Enter distance from Iron Nest to target (from red pencil).</td>
                </tr>
                <tr>
                  <td>Set powder charges</td>
                  <td>Rotate charge knob</td>
                  <td>Red light = need more charges. Green = acceptable amount.</td>
                </tr>
                <tr>
                  <td>Calculate elevation</td>
                  <td>Pull calculate lever</td>
                  <td>Generates finalized target card placed on clipboard.</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Important:</strong> The bearing and shell type wheels are optional for player clarification and are not 
              required for calculation. Only range and powder charges are mathematically necessary. This can save valuable 
              seconds when under counter-battery pressure.
            </p>

            <h2>Gun loading and aiming controls</h2>
            <p>
              Once you have a firing solution, you must physically prepare the guns. The turret has two guns (left and right) 
              that can be operated independently.
            </p>
            <h3>Loading station</h3>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Control</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cycle shell magazine</td>
                  <td>Click magazine controls</td>
                  <td>Rotate through available shell types to select the correct one.</td>
                </tr>
                <tr>
                  <td>Load shell</td>
                  <td>Click load controls</td>
                  <td>Move selected shell into loading position.</td>
                </tr>
                <tr>
                  <td>Add powder charges</td>
                  <td>Click charge controls</td>
                  <td>Add the number of charges specified on your firing card.</td>
                </tr>
                <tr>
                  <td>Ram shell home</td>
                  <td>Click ram lever</td>
                  <td>Push loaded shell into the firing chamber.</td>
                </tr>
              </tbody>
            </table>
            <blockquote>
              <strong>Warning:</strong> Shells and powder charges CANNOT BE UNLOADED. Make sure you load the correct type 
              and amount, or you will have to rerun the ballistic calculator with the new charge amount.
            </blockquote>

            <h3>Turret rotation</h3>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Control</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fast rotation</td>
                  <td>Pull rotation lever</td>
                  <td>Moves the turret quickly but inaccurately. Good for large adjustments.</td>
                </tr>
                <tr>
                  <td>Precise rotation</td>
                  <td>Turn rotation wheel</td>
                  <td>Slow but accurate. Use for fine-tuning bearing.</td>
                </tr>
                <tr>
                  <td>Emergency stop</td>
                  <td>Click on wheel while spinning</td>
                  <td>Forcefully stops rotation/elevation. Opens pressure valve — tighten it back immediately.</td>
                </tr>
              </tbody>
            </table>

            <h3>Gun elevation</h3>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Control</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fast elevation</td>
                  <td>Pull elevation lever</td>
                  <td>Quick but less precise elevation changes.</td>
                </tr>
                <tr>
                  <td>Precise elevation</td>
                  <td>Turn elevation wheel</td>
                  <td>Slow but accurate. Use for final dialing.</td>
                </tr>
                <tr>
                  <td>Independent gun elevation</td>
                  <td>Use separate elevation controls</td>
                  <td>Each gun can be elevated differently for two targets on the same bearing.</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Pro tip:</strong> Turn the turret to the correct bearing while the gun is still loading. You cannot 
              elevate the guns until the breech is fully sealed and locked, so use that time for rotation.
            </p>

            <h2>Firing controls</h2>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Control</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Arm gun</td>
                  <td>Pull arming levers</td>
                  <td>Left and right arming levers must be pulled to enable firing.</td>
                </tr>
                <tr>
                  <td>Fire</td>
                  <td>Pull firing cord / trigger</td>
                  <td>Let thousands of tons of machinery answer your call.</td>
                </tr>
                <tr>
                  <td>Fire left gun only</td>
                  <td>Arm left, fire</td>
                  <td>Fire only the left gun for ammunition conservation or staggered shots.</td>
                </tr>
                <tr>
                  <td>Fire right gun only</td>
                  <td>Arm right, fire</td>
                  <td>Fire only the right gun.</td>
                </tr>
              </tbody>
            </table>

            <h2>Requisition station controls</h2>
            <p>
              The requisition station is where you purchase shells, powder charges, reconnaissance planes, and repositioning 
              orders using requisition points earned by destroying priority targets.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Control</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Select item</td>
                  <td>Click on item in catalog</td>
                  <td>Choose shells, charges, planes, or repositioning.</td>
                </tr>
                <tr>
                  <td>Confirm purchase</td>
                  <td>Click purchase button / stamp</td>
                  <td>Spend requisition points to add items to inventory.</td>
                </tr>
                <tr>
                  <td>Order recon plane</td>
                  <td>Place card in stamper, enter coordinates and bearing</td>
                  <td>Plane flies the specified path, revealing map and targets.</td>
                </tr>
              </tbody>
            </table>

            <h2>Teleprinter controls</h2>
            <p>
              Two teleprinters provide mission-critical information. The left teleprinter (circled in blue) relays intel 
              from spotters. The right teleprinter (circled in red) carries top-priority directives from High Command.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Control</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Copy text to clipboard</td>
                  <td>Left click on highlighted text</td>
                  <td>Copy coordinates, bearings, or orders for map marking.</td>
                </tr>
                <tr>
                  <td>Read new messages</td>
                  <td>Wait for teleprinter to finish typing</td>
                  <td>Messages print in real-time. Do not miss critical updates.</td>
                </tr>
              </tbody>
            </table>

            <h2>Quick reference: powder charge to range</h2>
            <p>
              Each powder charge adds 5 km of maximum range. The relationship between charges, max range, and elevation 
              multiplier is:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Charges</th>
                  <th>Max Range</th>
                  <th>Elevation Multiplier</th>
                  <th>Example (12 km target)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>5 km</td>
                  <td>× 12</td>
                  <td>Out of range</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>10 km</td>
                  <td>× 6</td>
                  <td>72°</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>15 km</td>
                  <td>× 4</td>
                  <td>48°</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>20 km</td>
                  <td>× 3</td>
                  <td>36°</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>25 km</td>
                  <td>× 2.4</td>
                  <td>28.8°</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>30 km</td>
                  <td>× 2</td>
                  <td>24°</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Formula:</strong> Elevation = (Target Distance / Max Range) × 60°
            </p>
            <p>
              Using these multipliers allows you to quickly calculate elevation mentally and fire without the calculator 
              when under time pressure.
            </p>

            <h2>Controller support</h2>
            <p>
              IRON NEST supports full controller input including Xbox and PlayStation controllers. The game is designed 
              primarily for mouse and keyboard given the precision required for map marking and dial manipulation, but 
              controller support is available for players who prefer it. Steam Deck compatibility was listed as 
              &ldquo;Unknown&rdquo; at the demo release.
            </p>

            <h2>Mod-added controls</h2>
            <p>
              Some popular mods add additional keyboard shortcuts:
            </p>
            <ul>
              <li><strong>F5</strong> — IronNestBearingControl: Show/hide azimuth input panel (mod by EightySixFan)</li>
              <li><strong>F8</strong> — Artillery Speed: Set speed multiplier for turret rotation, elevation, and reloading (mod by N3M0T8000)</li>
              <li><strong>F9</strong> — Fire Control System - Smart: Replan fire mission (mod by hysonMod)</li>
            </ul>

            <h2>Frequently asked questions</h2>
            <h3>Can I rebind keys?</h3>
            <p>
              IRON NEST does not currently offer extensive key rebinding through the in-game menu. Controls are largely 
              tied to the physical interaction model of the game. Check the options menu for any available customization.
            </p>
            <h3>What is the most important control to master?</h3>
            <p>
              The map table&rsquo;s red pencil. Accurate measurement from the Iron Nest to the target is the foundation 
              of every successful shot. A small measurement error at the map table translates to a miss by kilometers at 
              the target.
            </p>
            <h3>How do I work faster under pressure?</h3>
            <p>
              Pre-calculate multiple firing solutions before firing your first shot. Queue cards on the map table. Use the 
              mental elevation multipliers to bypass the calculator for emergency shots. And most importantly: stay calm. 
              Panic causes more misses than any enemy artillery.
            </p>
            <h3>Can both guns fire at different targets?</h3>
            <p>
              Yes. The two elevation controls allow each gun to be set to a different elevation while sharing the same 
              bearing. This lets you fire at two different targets on the same azimuth, which is invaluable when facing 
              multiple threats.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/codes" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">
              ← All codes
            </Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I rebind keys?", "acceptedAnswer": {"@type": "Answer", "text": "IRON NEST does not currently offer extensive key rebinding through the in-game menu. Controls are largely tied to the physical interaction model of the game. Check the options menu for any available customization."}}, {"@type": "Question", "name": "What is the most important control to master?", "acceptedAnswer": {"@type": "Answer", "text": "The map table&rsquo;s red pencil. Accurate measurement from the Iron Nest to the target is the foundation of every successful shot. A small measurement error at the map table translates to a miss by kilometers at the target."}}, {"@type": "Question", "name": "How do I work faster under pressure?", "acceptedAnswer": {"@type": "Answer", "text": "Pre-calculate multiple firing solutions before firing your first shot. Queue cards on the map table. Use the mental elevation multipliers to bypass the calculator for emergency shots. And most importantly: stay calm. Panic causes more misses than any enemy artillery."}}, {"@type": "Question", "name": "Can both guns fire at different targets?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The two elevation controls allow each gun to be set to a different elevation while sharing the same bearing. This lets you fire at two different targets on the same azimuth, which is invaluable when facing multiple threats."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
