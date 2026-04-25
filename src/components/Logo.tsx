type Props = {
  className?: string;
  showWordmark?: boolean;
  tone?: "dark" | "light";
};

/**
 * Logo : un cercle, à l'intérieur un olivier stylisé (tronc + petite couronne
 * de feuilles d'olivier lancéolées), et une wordmark en italique.
 */
export function Logo({
  className = "",
  showWordmark = true,
  tone = "dark",
}: Props) {
  const stroke = tone === "dark" ? "var(--color-teal-deep)" : "var(--color-cream)";
  const leaf = tone === "dark" ? "var(--color-olive)" : "var(--color-sage)";
  const text = tone === "dark" ? "var(--color-teal-deep)" : "var(--color-cream)";

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="L’Auberge Italienne"
    >
      <svg
        viewBox="0 0 64 64"
        width="44"
        height="44"
        className="shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke={stroke}
          strokeWidth="1.2"
          opacity="0.85"
        />
        {/* Tronc */}
        <path
          d="M32 50 C 32 44, 30 40, 30 36"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Branches */}
        <path
          d="M30 36 C 24 32, 20 30, 18 26"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 36 C 36 30, 42 28, 46 24"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 36 C 30 30, 32 24, 32 18"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
        {/* Feuilles lancéolées (forme classique d'olivier) */}
        <g fill={leaf}>
          {/* gauche basse */}
          <path
            d="M16 28 C 13 23, 19 20, 21 25 C 22 28, 18 30, 16 28 Z"
            transform="rotate(-15 18 26)"
          />
          {/* gauche haute */}
          <path
            d="M22 22 C 19 17, 25 14, 27 19 C 28 22, 24 24, 22 22 Z"
            transform="rotate(-25 24 20)"
          />
          {/* centre */}
          <path
            d="M30 16 C 27 11, 33 8, 35 13 C 36 16, 32 18, 30 16 Z"
            transform="rotate(-5 32 14)"
          />
          {/* droite haute */}
          <path
            d="M40 18 C 37 13, 43 10, 45 15 C 46 18, 42 20, 40 18 Z"
            transform="rotate(20 42 16)"
          />
          {/* droite basse */}
          <path
            d="M44 26 C 41 21, 47 18, 49 23 C 50 26, 46 28, 44 26 Z"
            transform="rotate(35 46 24)"
          />
        </g>
        {/* Olive */}
        <ellipse cx="34" cy="28" rx="1.6" ry="2.4" fill={leaf} opacity="0.85" />
        {/* Sol */}
        <line
          x1="22"
          y1="50"
          x2="42"
          y2="50"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      {showWordmark && (
        <span
          className="font-italic-display leading-none text-[1.35rem] md:text-[1.55rem] tracking-tight"
          style={{ color: text }}
        >
          l’Auberge Italienne
        </span>
      )}
    </span>
  );
}
