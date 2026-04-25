import { OliveDivider } from "./OliveDivider";

type Props = {
  eyebrow?: string;
  title: string;
  italicWords?: string;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  italicWords,
  description,
  align = "center",
  tone = "dark",
}: Props) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = tone === "light" ? "text-cream" : "text-teal-deep";
  const eyebrowColor = tone === "light" ? "text-sage" : "text-olive-dark";
  const descColor = tone === "light" ? "text-cream/80" : "text-ink-soft";

  return (
    <div className={`flex flex-col gap-5 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-[0.72rem] tracking-[0.3em] uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] ${titleColor}`}
      >
        {title}{" "}
        {italicWords && (
          <span className="font-italic-display">{italicWords}</span>
        )}
      </h2>
      {align === "center" && (
        <OliveDivider tone={tone === "light" ? "cream" : "olive"} className="mt-1" />
      )}
      {description && (
        <p
          className={`max-w-2xl text-pretty font-light text-base md:text-lg leading-relaxed ${descColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
