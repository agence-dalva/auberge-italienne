type Props = {
  className?: string;
  tone?: "olive" | "teal" | "cream";
};

export function OliveDivider({ className = "", tone = "olive" }: Props) {
  const color =
    tone === "teal"
      ? "var(--color-teal)"
      : tone === "cream"
      ? "var(--color-cream)"
      : "var(--color-olive)";
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span
        className="block h-px w-10 md:w-16"
        style={{ background: color, opacity: 0.5 }}
      />
      <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
        <path
          d="M2 7 C 6 2, 10 2, 14 7 C 18 12, 22 12, 26 7"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <ellipse cx="14" cy="7" rx="2" ry="3" fill={color} opacity="0.9" />
      </svg>
      <span
        className="block h-px w-10 md:w-16"
        style={{ background: color, opacity: 0.5 }}
      />
    </div>
  );
}
