"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PlantBranch } from "@/components/PlantBranch";
import { OliveDivider } from "@/components/OliveDivider";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  // Le hero scrolle de "start start" à "end start" : on utilise tout son
  // déroulé en sortie pour piloter les motion values du parallax.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 280]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const rotateRight = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.6, 1], [0.55, 0.4, 0.15]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[88vh] flex items-center">
      <div className="grain" />

      <PlantBranch
        className="absolute -top-16 -left-24 hidden md:block"
        width={520}
        tone="olive"
        parallaxY={yLeft}
        rotate={-15}
        opacity={0.55}
      />
      <PlantBranch
        flip
        className="absolute -top-10 -right-24 hidden md:block"
        width={560}
        tone="olive"
        parallaxY={yRight}
        rotate={20}
        opacity={0.45}
      />
      {/* Petits accents mobile */}
      <PlantBranch
        className="absolute -top-6 -left-16 md:hidden"
        width={260}
        tone="olive"
        parallaxY={yLeft}
        rotate={-15}
        opacity={0.4}
      />

      <motion.div
        style={{ opacity: opacityBg }}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div
        style={{ y: yContent }}
        className="relative mx-auto max-w-6xl px-5 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 text-center w-full"
      >
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-[0.72rem] tracking-[0.32em] uppercase text-olive-dark"
        >
          Bartenheim · Sud Alsace
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-teal-deep text-balance"
        >
          <span className="block font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Un voyage culinaire
          </span>
          <span className="block font-italic-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-1">
            au cœur de l’Italie
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <OliveDivider className="mt-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base md:text-lg text-ink-soft font-light leading-relaxed"
        >
          Nous avons à cœur de vous faire découvrir une cuisine sincère, fidèle
          aux saisons, pleine de convivialité et de générosité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/carte"
            className="inline-flex items-center gap-2 rounded-full bg-teal-deep text-cream px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-teal transition-colors"
          >
            Découvrir la carte
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-teal-deep/30 text-teal-deep px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-teal-deep hover:text-cream transition-colors"
          >
            Réserver une table
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-6 md:gap-10 max-w-2xl mx-auto"
        >
          {[
            { label: "Produits", value: "d’Italie" },
            { label: "Chefs", value: "passionnés" },
            { label: "Jardins", value: "& terrasses" },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <div className="font-italic-display text-2xl md:text-3xl text-teal-deep">
                {f.value}
              </div>
              <div className="mt-1 text-[0.7rem] tracking-[0.25em] uppercase text-olive-dark">
                {f.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll discret */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-olive-dark"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">Découvrir</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8 bg-olive-dark/60"
        />
      </motion.div>
    </section>
  );
}
