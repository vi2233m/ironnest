import Link from "next/link";
import Image from "next/image";

interface GuideCardProps {
  href: string;
  chip: string;
  date: string;
  title: string;
  description: string;
  bannerHue?: number;
  image?: string;
}

export default function GuideCard({ href, chip, date, title, description, bannerHue = 36, image }: GuideCardProps) {
  return (
    <Link href={href} className="card group flex flex-col overflow-hidden">
      {/* Banner */}
      <div
        className="relative w-full overflow-hidden aspect-[16/9]"
        style={{
          backgroundImage: `radial-gradient(120% 120% at 20% 0%, hsl(${bannerHue} 55% 22%), transparent 60%), radial-gradient(120% 120% at 90% 100%, hsl(${bannerHue + 12} 40% 16%), transparent 55%), linear-gradient(160deg, #1a1611, #0a0908)`,
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <svg
            className="absolute inset-0 m-auto opacity-10"
            viewBox="0 0 64 64"
            width="80"
            height="80"
            aria-hidden="true"
            style={{ animation: "banner-cog 60s linear infinite" }}
          >
            <path
              fill="#d8a24a"
              d="M28 4h8l1.6 6.4a22 22 0 0 1 6 3.5l6.2-2.3 4 6.9-4.6 4.6a22 22 0 0 1 0 7l4.6 4.6-4 6.9-6.2-2.3a22 22 0 0 1-6 3.5L36 60h-8l-1.6-6.4a22 22 0 0 1-6-3.5l-6.2 2.3-4-6.9 4.6-4.6a22 22 0 0 1 0-7l-4.6-4.6 4-6.9 6.2 2.3a22 22 0 0 1 6-3.5z"
            />
            <circle cx="32" cy="32" r="9" fill="#0a0908" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="chip">{chip}</span>
          <span className="text-xs text-[var(--color-moon-faint)]">{date}</span>
        </div>
        <h3 className="text-xl font-600 leading-snug text-[var(--color-moon)] transition-colors group-hover:text-[var(--color-amber)]">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-[var(--color-moon-dim)]">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-500 text-[var(--color-teal)]">
          Read guide
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
