import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[var(--color-hairline)]">
      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/favicon-32x32.png" width={30} height={30} alt="Iron Nest Wiki logo" className="h-[30px] w-[30px] rounded-md" />
              <span className="font-[var(--font-display)] text-lg font-600 uppercase text-glow">
                Iron Nest Wiki
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-[var(--color-moon-faint)]">
              An independent strategy resource, news and guide companion for the dieselpunk
              heavy-artillery sim <em>IRON NEST: Heavy Turret Simulator</em>. Independent editorial writing —
              a fan site, not affiliated with Nick Nieuwoudt &amp; Dominik Latos.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--color-teal)]">Explore</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">Guide</Link></li>
              <li><Link href="/guide/walkthrough" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">Walkthrough</Link></li>
              <li><Link href="/calculator" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">Calculator</Link></li>
              <li><Link href="/shells/best-shells" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">Best Shells</Link></li>
              <li><Link href="/coop" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">Coop</Link></li>
              <li><Link href="/mods" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">Mods</Link></li>
              <li><Link href="/demo" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">Demo</Link></li>
              <li><Link href="/arsenal" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">Arsenal</Link></li>
              <li><Link href="/news" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">News</Link></li>
              <li><Link href="/about" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">About</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--color-teal)]">Site</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">About &amp; Editorial</Link></li>
              <li><Link href="/systems" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">Systems</Link></li>
              <li><Link href="/regions" className="text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]">Regions</Link></li>
            </ul>
          </div>
        </div>
        <div className="rule-moon my-8 text-xs">
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" className="mx-auto">
            <circle cx="12" cy="12" r="6" fill="none" stroke="#7e745d" strokeWidth="2" />
            <circle cx="12" cy="12" r="1.6" fill="#7e745d" />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-[var(--color-moon-faint)] sm:flex-row">
          <p>© 2026 Iron Nest Wiki. Original content under a fan-site fair-use policy.</p>
          <p>IRON NEST: Heavy Turret Simulator released August 6, 2026.</p>
        </div>
      </div>
    </footer>
  );
}
