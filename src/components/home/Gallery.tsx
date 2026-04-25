"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const SLIDES = [
  {
    src: "/images/gallery/jardin-arche.jpg",
    title: "Le jardin & l’arche",
    subtitle: "Pour vos cérémonies en plein air",
  },
  {
    src: "/images/gallery/jardin-pergola.jpg",
    title: "La pergola",
    subtitle: "L’apéritif sous les vignes",
  },
  {
    src: "/images/gallery/jardin-truli.jpg",
    title: "Les Trulli",
    subtitle: "Un clin d’œil aux Pouilles",
  },
  {
    src: "/images/gallery/jardin-fiat-500.jpg",
    title: "La Fiat 500",
    subtitle: "Le décor italien par excellence",
  },
  {
    src: "/images/gallery/pergola-lustre.jpeg",
    title: "Le lustre",
    subtitle: "L’élégance d’une soirée italienne",
  },
  {
    src: "/images/gallery/jardin-coeur.jpeg",
    title: "Le cœur fleuri",
    subtitle: "Pour vos plus beaux souvenirs",
  },
  {
    src: "/images/gallery/terrasse-couverte-003.jpeg",
    title: "La terrasse couverte",
    subtitle: "Quel que soit le temps",
  },
  {
    src: "/images/gallery/terrasse-couverte-005.jpeg",
    title: "Une table au soleil",
    subtitle: "Lumineuse, intime",
  },
  {
    src: "/images/gallery/jardin-mirroir.jpeg",
    title: "Le miroir du jardin",
    subtitle: "Dans la fraîcheur des massifs",
  },
  {
    src: "/images/gallery/jardin-feu-artifice.jpg",
    title: "Le feu d’artifice",
    subtitle: "Pour vos grands événements",
  },
];

const AUTOPLAY_MS = 5000;

export function Gallery() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % SLIDES.length),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduce]);

  // Clavier
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = SLIDES[index];

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Notre cadre"
            title="Jardins, terrasses,"
            italicWords="ambiance italienne"
            description="Des espaces pensés pour vous transporter en Italie : pergola fleurie, trulli des Pouilles, terrasses couvertes et arche romantique."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="mt-14 group"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="relative aspect-[16/10] md:aspect-[2/1] w-full rounded-3xl overflow-hidden bg-teal-deep/5 shadow-card">
              {/* Drag wrapper persistant : permet de swiper sans démonter */}
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
                    // Crossfade très doux : long et linéaire pour un ressenti
                    // soyeux, exit légèrement plus longue pour superposer.
                    transition={{
                      opacity: {
                        duration: 1.2,
                        ease: "linear",
                      },
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 1100px"
                      priority={index === 0}
                      className="object-cover select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-teal-deep/65 via-teal-deep/15 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Caption */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cap-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="absolute left-5 right-5 bottom-5 md:left-10 md:bottom-10 text-cream"
                >
                  <h3 className="text-3xl md:text-5xl leading-tight text-balance">
                    <span className="font-italic-display">{slide.title}</span>
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-cream/85 font-light">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Boutons précédent/suivant */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-4">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Image précédente"
                  className="cursor-pointer h-11 w-11 md:h-12 md:w-12 rounded-full bg-cream/85 hover:bg-cream text-teal-deep backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:pr-4">
                <button
                  type="button"
                  onClick={next}
                  aria-label="Image suivante"
                  className="cursor-pointer h-11 w-11 md:h-12 md:w-12 rounded-full bg-cream/85 hover:bg-cream text-teal-deep backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Compteur */}
              <div className="absolute top-5 right-5 md:top-7 md:right-7 rounded-full bg-cream/85 text-teal-deep px-3 py-1 text-[0.7rem] tracking-[0.2em] backdrop-blur-md">
                {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </div>
            </div>

            {/* Vignettes / dots — vignettes desktop, dots mobile */}
            <div className="mt-5 hidden md:flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide">
              {SLIDES.map((s, i) => (
                <button
                  type="button"
                  key={s.src}
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
              {SLIDES.map((s, i) => (
                <button
                  type="button"
                  key={s.src}
                  onClick={() => goTo(i)}
                  aria-label={`Aller à l’image ${i + 1}`}
                  aria-current={i === index}
                  className={`cursor-pointer h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-olive" : "w-1.5 bg-teal-deep/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
