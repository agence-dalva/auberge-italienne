"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export type Slide = {
  src: string;
  title?: string;
  subtitle?: string;
};

type Props = {
  slides: Slide[];
  /** Délai entre 2 slides (ms). 0 ou false = pas d'autoplay. */
  autoplayMs?: number;
  /** Ratio du conteneur image. */
  aspect?: "16/10" | "2/1" | "4/3" | "3/2" | "1/1";
  /** Affiche le caption (titre + sous-titre) sur l'image. */
  showCaption?: boolean;
  /** Affiche les vignettes desktop / dots mobile. */
  showThumbs?: boolean;
  /** Affiche le compteur en haut à droite. */
  showCounter?: boolean;
  className?: string;
};

const ASPECT_CLASS: Record<NonNullable<Props["aspect"]>, string> = {
  "16/10": "aspect-16/10",
  "2/1": "aspect-2/1",
  "4/3": "aspect-4/3",
  "3/2": "aspect-3/2",
  "1/1": "aspect-square",
};

export function ImageSlider({
  slides,
  autoplayMs = 5000,
  aspect = "16/10",
  showCaption = true,
  showThumbs = true,
  showCounter = true,
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (n: number) => setIndex(((n % slides.length) + slides.length) % slides.length),
    [slides.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused || reduce || !autoplayMs) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      autoplayMs,
    );
    return () => clearInterval(id);
  }, [paused, reduce, autoplayMs, slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = slides[index];

  return (
    <div
      className={`group ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className={`relative ${ASPECT_CLASS[aspect]} w-full rounded-3xl overflow-hidden bg-teal-deep/5 shadow-card`}
      >
        <motion.div
          className="absolute inset-0 touch-pan-y"
          drag={!reduce ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) next();
            else if (info.offset.x > 50) prev();
          }}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1.2, ease: "linear" } }}
              className="absolute inset-0"
            >
              <Image
                src={slide.src}
                alt={slide.title ?? ""}
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                priority={index === 0}
                className="object-cover select-none pointer-events-none"
              />
              {showCaption && (slide.title || slide.subtitle) && (
                <div className="absolute inset-0 bg-linear-to-t from-teal-deep/65 via-teal-deep/15 to-transparent" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {showCaption && (slide.title || slide.subtitle) && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`cap-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute left-5 right-5 bottom-5 md:left-10 md:bottom-10 text-cream"
            >
              {slide.title && (
                <h3 className="text-3xl md:text-5xl leading-tight text-balance">
                  <span className="font-italic-display">{slide.title}</span>
                </h3>
              )}
              {slide.subtitle && (
                <p className="mt-2 text-sm md:text-base text-cream/85 font-light">
                  {slide.subtitle}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        <div className="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Image précédente"
            className="cursor-pointer h-11 w-11 md:h-12 md:w-12 rounded-full bg-cream/85 hover:bg-cream text-teal-deep backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
          >
            <Chevron dir="left" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:pr-4">
          <button
            type="button"
            onClick={next}
            aria-label="Image suivante"
            className="cursor-pointer h-11 w-11 md:h-12 md:w-12 rounded-full bg-cream/85 hover:bg-cream text-teal-deep backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
          >
            <Chevron dir="right" />
          </button>
        </div>

        {showCounter && (
          <div className="absolute top-5 right-5 md:top-7 md:right-7 rounded-full bg-cream/85 text-teal-deep px-3 py-1 text-[0.7rem] tracking-[0.2em] backdrop-blur-md">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </div>
        )}
      </div>

      {showThumbs && (
        <>
          <div className="mt-5 hidden md:flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide">
            {slides.map((s, i) => (
              <button
                type="button"
                key={s.src + i}
                onClick={() => goTo(i)}
                aria-label={`Aller à l’image ${i + 1}`}
                aria-current={i === index}
                className={`cursor-pointer relative shrink-0 h-14 w-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  i === index
                    ? "border-olive shadow-[0_6px_18px_-8px_rgba(138,154,91,0.7)]"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={s.src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          <div className="mt-5 flex md:hidden items-center justify-center gap-1.5">
            {slides.map((s, i) => (
              <button
                type="button"
                key={s.src + i}
                onClick={() => goTo(i)}
                aria-label={`Aller à l’image ${i + 1}`}
                aria-current={i === index}
                className={`cursor-pointer h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-olive" : "w-1.5 bg-teal-deep/20"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
