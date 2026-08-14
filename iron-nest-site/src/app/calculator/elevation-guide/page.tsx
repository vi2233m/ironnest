import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Elevation Without the Calculator",
  description: "Learn the manual elevation formula for IRON NEST. Calculate firing solutions without the ballistic computer using distance, charges, and simple math.",
  alternates: {
    canonical: "/calculator/elevation-guide",
  },
};

export default function ElevationGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <nav className="mb-6 text-sm text-[var(--color-moon-faint)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-moon)]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/calculator" className="hover:text-[var(--color-moon)]">Calculator</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--color-moon-dim)]">Elevation Guide</span>
          </nav>
          <div className="mb-2 flex items-center gap-2">
            <span className="chip">Tutorial</span>
          </div>
          <h1 className="mt-3 text-3xl font-700 uppercase leading-tight md:text-4xl">
            How to Calculate Elevation Without the Calculator
          </h1>
          <p className="mt-3 text-sm text-[var(--color-moon-faint)]">
            By Iron Nest Wiki Team · August 2026 · 8 min read
          </p>
          <Image src="/images/screenshots/ss-08.jpg" alt="IRON NEST dual-gun elevation mechanism with angle gauge" className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] object-cover" width={1920} height={1080} loading="lazy" style={{ width: "100%", height: "auto" }} />
          <div className="prose-moon mt-10">
            <p>
              In <strong>IRON NEST: Heavy Turret Simulator</strong>, the ballistic calculator is your primary tool for determining gun elevation. 
              But what happens when the calculator is offline? Mission 7 — The Gorge — disables the ballistic computer entirely, forcing you to calculate 
              elevation manually. Even when the calculator is available, experienced operators often compute elevation mentally to increase their rate of fire 
              and operate the turret more efficiently.
            </p>
            <p>
              This tutorial teaches you the simple formula that powers the calculator, how to apply it in the heat of combat, and strategies for 
              maintaining accuracy when you cannot rely on the mechanical computer. Mastering manual calculation is one of the highest-skill techniques 
              in the game and separates veteran gun crews from beginners.
            </p>

            <h2>The Elevation Formula</h2>
            <p>
              The community has derived the exact formula the game uses for elevation calculation. It is remarkably simple:
            </p>
            <blockquote>
              <strong>Elevation = Distance × 0.012 / Number of Charges</strong>
            </blockquote>
            <p>
              Where:
            </p>
            <ul>
              <li><strong>Distance</strong> is the range from Iron Nest to the target, measured in meters</li>
              <li><strong>Number of Charges</strong> is the powder charge count (1 through 6)</li>
              <li><strong>Elevation</strong> is the gun angle in degrees</li>
            </ul>
            <p>
              An alternative way to express this, which some operators find more intuitive:
            </p>
            <blockquote>
              <strong>Elevation = Distance / (Charges / 0.012)</strong> or <strong>Elevation = (Distance × 12) / (Charges × 1000)</strong>
            </blockquote>
            <p>
              The key insight is that each charge adds a fixed amount of range capacity, and the elevation scales linearly with distance 
              while scaling inversely with charge count.
            </p>

            <h2>Maximum Range by Charge Count</h2>
            <p>
              Before calculating, you need to know how many charges your shot requires. The maximum range per charge follows a simple pattern:
            </p>
            <ul>
              <li><strong>1 charge:</strong> Maximum 5 km range</li>
              <li><strong>2 charges:</strong> Maximum 10 km range</li>
              <li><strong>3 charges:</strong> Maximum 15 km range</li>
              <li><strong>4 charges:</strong> Maximum 20 km range</li>
              <li><strong>5 charges:</strong> Maximum 25 km range</li>
              <li><strong>6 charges:</strong> Maximum 30 km range</li>
            </ul>
            <p>
              If your target is 7.98 km away, you need at least 2 charges (since 1 charge only reaches 5 km). 
              If your target is 18.59 km away, you need at least 4 charges (since 3 charges only reach 15 km). 
              The maximum elevation is 60° — if your calculated elevation exceeds 60°, you need more charges.
            </p>

            <h2>Step-by-Step Calculation Example</h2>
            <p>
              Let&apos;s walk through a typical scenario. Your target is 7,980 meters away, and you have loaded 2 powder charges.
            </p>
            <ol>
              <li><strong>Verify charge sufficiency:</strong> 2 charges reach 10 km maximum. 7.98 km is within range. ✓</li>
              <li><strong>Multiply distance by 0.012:</strong> 7,980 × 0.012 = 95.76</li>
              <li><strong>Divide by charge count:</strong> 95.76 / 2 = 47.88°</li>
              <li><strong>Check against maximum:</strong> 47.88° is less than 60°. ✓</li>
              <li><strong>Set elevation to 47.88°</strong> and fire</li>
            </ol>
            <p>
              This matches exactly what the ballistic calculator would output for the same inputs.
            </p>

            <h2>Another Example: Long-Range Shot</h2>
            <p>
              Target distance: 18,590 meters. You need at least 4 charges (3 charges max at 15 km is insufficient).
            </p>
            <ol>
              <li><strong>Verify charge sufficiency:</strong> 4 charges reach 20 km maximum. 18.59 km is within range. ✓</li>
              <li><strong>Multiply distance by 0.012:</strong> 18,590 × 0.012 = 223.08</li>
              <li><strong>Divide by charge count:</strong> 223.08 / 4 = 55.77°</li>
              <li><strong>Check against maximum:</strong> 55.77° is less than 60°. ✓</li>
              <li><strong>Set elevation to 55.77°</strong> and fire</li>
            </ol>
            <p>
              For an extreme cross-map shot of 22.24 km, you would need 5 charges (20 km is insufficient):
            </p>
            <ul>
              <li>22,240 × 0.012 = 266.88</li>
              <li>266.88 / 5 = 53.38°</li>
            </ul>
            <p>
              Even firing from one end of the map to the other only requires 5 charges, leaving 6 charges as reserve for the most extreme ranges.
            </p>

            <h2>Quick Reference: Degrees per Kilometer</h2>
            <p>
              For faster mental math, memorize the degrees per kilometer for each charge level:
            </p>
            <ul>
              <li><strong>1 charge:</strong> 12° per km (1 km = 12°, 2 km = 24°, 3 km = 36°, etc.)</li>
              <li><strong>2 charges:</strong> 6° per km (1 km = 6°, 2 km = 12°, 3 km = 18°, etc.)</li>
              <li><strong>3 charges:</strong> 4° per km (1 km = 4°, 2 km = 8°, 3 km = 12°, etc.)</li>
              <li><strong>4 charges:</strong> 3° per km (1 km = 3°, 2 km = 6°, 3 km = 9°, etc.)</li>
              <li><strong>5 charges:</strong> 2.4° per km (1 km = 2.4°, 2 km = 4.8°, etc.)</li>
              <li><strong>6 charges:</strong> 2° per km (1 km = 2°, 2 km = 4°, 3 km = 6°, etc.)</li>
            </ul>
            <p>
              For example, with 3 charges at 8 km: 8 × 4° = 32° elevation. With 2 charges at 5.5 km: 5.5 × 6° = 33° elevation.
            </p>

            <h2>Alternative Formulation</h2>
            <p>
              Some operators prefer to think in terms of the relationship between maximum range and elevation:
            </p>
            <blockquote>
              Elevation = (Distance / Maximum Range) × 60°
            </blockquote>
            <p>
              Where Maximum Range = Charges × 5 km. For example, with 2 charges at 7.98 km:
            </p>
            <ul>
              <li>Maximum range = 2 × 5 = 10 km</li>
              <li>Elevation = (7.98 / 10) × 60 = 0.798 × 60 = 47.88°</li>
            </ul>
            <p>
              This formulation is mathematically equivalent and may be more intuitive for some operators.
            </p>

            <h2>When to Calculate Manually</h2>
            <p>
              Manual calculation becomes essential or advantageous in several scenarios:
            </p>
            <ul>
              <li><strong>The Gorge mission:</strong> The calculator is explicitly disabled. Manual calculation is mandatory.</li>
              <li><strong>Speed runs:</strong> Skipping the calculator interface saves 5-10 seconds per shot.</li>
              <li><strong>Volley fire:</strong> When firing multiple shells at different targets, mental math keeps you at the gun controls.</li>
              <li><strong>Calculator verification:</strong> Double-checking the machine&apos;s output prevents errors from stale inputs.</li>
              <li><strong>Low-requisition scenarios:</strong> Faster firing means fewer shells wasted on missed shots.</li>
            </ul>

            <h2>The Gorge: Calculator-Free Operation</h2>
            <p>
              Mission 7 — The Gorge — removes the ballistic computer entirely. This is the developer&apos;s deliberate test of your manual calculation skills. 
              The mission requires you to:
            </p>
            <ol>
              <li>Measure distance to targets using the map and red pencil</li>
              <li>Determine required charges based on distance</li>
              <li>Calculate elevation using the formula</li>
              <li>Set bearing and elevation manually on the gun controls</li>
              <li>Fire and observe impact</li>
            </ol>
            <p>
              The Gorge also introduces observed-fire corrections: if your first shot misses, adjust elevation up or down based on whether the shell 
              fell short or long, and left or right based on bearing error. This is how real artillery operators adjusted fire before electronic computers existed.
            </p>

            <h2>Tips for Accurate Mental Calculation</h2>
            <ul>
              <li><strong>Round strategically:</strong> For quick estimates, round distance to the nearest 100 meters and adjust slightly up or down.</li>
              <li><strong>Memorize key values:</strong> Know that 10 km at 2 charges = 60°, 10 km at 3 charges = 40°, 10 km at 4 charges = 30°.</li>
              <li><strong>Use the 60° anchor:</strong> At maximum range for any charge level, elevation is exactly 60°. Work backwards from there.</li>
              <li><strong>Practice with the calculator:</strong> Verify your mental math against the calculator during calm moments to build confidence.</li>
              <li><strong>Write it down:</strong> Keep a notepad with pre-calculated values for common ranges in your mission sector.</li>
            </ul>

            <h2>Why the Game Uses Simplified Ballistics</h2>
            <p>
              The developer has explained that the game intentionally uses a simplified linear model rather than real projectile physics. 
              Early development referenced the Paris gun (maximum elevation 58°, rounded to 60°), and the entire system was built around that number. 
              While real-world ballistics for 800mm shells would place optimal elevation near 45°, the simplified model makes the game more approachable 
              and allows skilled players to calculate mentally — increasing the skill ceiling and rate of fire for experienced operators.
            </p>
            <p>
              The developer also noted that for shells the size of the Schwerer Gustav and the Iron Nest, atmospheric drag is minimal because 
              cross-sectional area increases at only one-eighth the rate that mass increases. So while the game&apos;s physics are not realistic, 
              the simplification is &ldquo;close enough&rdquo; for gameplay purposes and makes the game more fun by rewarding mental math skills.
            </p>

            <h2>Frequently Asked Questions</h2>
            <h3>Is manual calculation always 100% accurate?</h3>
            <p>
              Yes, if you use the exact distance and the formula correctly. The game&apos;s math is deterministic. 
              However, measurement errors on the map (reading the wrong coordinate, imprecise clicking) will produce wrong elevations even with perfect math.
            </p>
            <h3>What if my elevation is slightly off?</h3>
            <p>
              HE shells have a blast radius of 250 meters, so small elevation errors (1-2°) may still produce hits against soft targets. 
              AP shells require more precision, especially against armored or fortified targets. When in doubt, verify with the calculator.
            </p>
            <h3>Can I use this formula for all shell types?</h3>
            <p>
              The elevation formula is the same for all shell types. Shell type affects damage, penetration, and blast radius — not the trajectory calculation. 
              However, always verify you have the correct shell loaded before firing.
            </p>
            <h3>What happens if I exceed 60° elevation?</h3>
            <p>
              60° is the hard maximum. If your calculation produces more than 60°, you need more charges. 
              For example, 8 km at 1 charge would calculate to 96° — impossible. You need at least 2 charges (8 km at 2 charges = 48°).
            </p>
            <h3>Should I always use the maximum charges?</h3>
            <p>
              No. More charges mean higher elevation, which increases shell flight time. In some situations, 
              fewer charges with lower elevation may be tactically advantageous (faster impact, less time for targets to move). 
              Choose charges based on the range and tactical situation.
            </p>
          </div>
          <div className="mt-12 border-t border-[var(--color-hairline)] pt-8">
            <Link href="/calculator" className="text-[var(--color-teal)] hover:text-[var(--color-amber)] text-sm">← Back to calculator</Link>
          </div>
        </article>
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is manual calculation always 100% accurate?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, if you use the exact distance and the formula correctly. The game's math is deterministic. However, measurement errors on the map (reading the wrong coordinate, imprecise clicking) will produce wrong elevations even with perfect math."}}, {"@type": "Question", "name": "What if my elevation is slightly off?", "acceptedAnswer": {"@type": "Answer", "text": "HE shells have a blast radius of 250 meters, so small elevation errors (1-2°) may still produce hits against soft targets. AP shells require more precision, especially against armored or fortified targets. When in doubt, verify with the calculator."}}, {"@type": "Question", "name": "Can I use this formula for all shell types?", "acceptedAnswer": {"@type": "Answer", "text": "The elevation formula is the same for all shell types. Shell type affects damage, penetration, and blast radius — not the trajectory calculation. However, always verify you have the correct shell loaded before firing."}}, {"@type": "Question", "name": "What happens if I exceed 60° elevation?", "acceptedAnswer": {"@type": "Answer", "text": "60° is the hard maximum. If your calculation produces more than 60°, you need more charges. For example, 8 km at 1 charge would calculate to 96° — impossible. You need at least 2 charges (8 km at 2 charges = 48°)."}}, {"@type": "Question", "name": "Should I always use the maximum charges?", "acceptedAnswer": {"@type": "Answer", "text": "No. More charges mean higher elevation, which increases shell flight time. In some situations, fewer charges with lower elevation may be tactically advantageous (faster impact, less time for targets to move). Choose charges based on the range and tactical situation."}}]}` }}
        />
</main>
      <Footer />
    </div>
  );
}
