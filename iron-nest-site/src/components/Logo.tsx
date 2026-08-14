"use client";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Iron Nest Turret Logo"
    >
      {/* Turret base */}
      <path
        d="M8 40h32v4H8z"
        fill="#7e745d"
      />
      {/* Turret body */}
      <path
        d="M12 28h24v12H12z"
        fill="#b4a98f"
      />
      {/* Turret top */}
      <path
        d="M16 20h16v8H16z"
        fill="#ece3d0"
      />
      {/* Barrel */}
      <rect
        x="20"
        y="8"
        width="8"
        height="16"
        rx="1"
        fill="#d8a24a"
      />
      {/* Barrel tip */}
      <rect
        x="21"
        y="4"
        width="6"
        height="4"
        rx="1"
        fill="#a9762a"
      />
      {/* Detail lines */}
      <line x1="18" y1="24" x2="30" y2="24" stroke="#7e745d" strokeWidth="1" />
      <line x1="14" y1="32" x2="34" y2="32" stroke="#7e745d" strokeWidth="1" />
      <circle cx="24" cy="24" r="2" fill="#d8a24a" />
    </svg>
  );
}
