"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { OliveDivider } from "@/components/OliveDivider";

export function Welcome() {
  const reduce = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const fadeDown = (delay = 0) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: -24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-15% 0px -10% 0px" } as const,
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* Texte à gauche */}
          <div className="order-2 lg:order-1 max-w-xl">
            <motion.span
              {...fadeDown(0)}
              className="block text-[0.72rem] tracking-[0.32em] uppercase text-olive-dark"
            >
              Bienvenue
            </motion.span>

            <motion.h2
              {...fadeDown(0.08)}
              className="mt-5 text-4xl md:text-5xl lg:text-6xl text-teal-deep text-balance leading-[1.05]"
            >
              <span className="font-italic-display">Comme à la maison</span>
              <span className="font-display">, en Italie</span>
            </motion.h2>

            <motion.div {...fadeDown(0.16)}>
              <OliveDivider className="mt-7 justify-start!" />
            </motion.div>

            <motion.p
              {...fadeDown(0.22)}
              className="mt-7 text-ink-soft font-light leading-relaxed text-pretty"
            >
              Nous avons à cœur de vous faire découvrir une cuisine sincère,
              fidèle aux saisons, pleine de convivialité et de générosité. Notre
              intention&nbsp;? Vous emmener en Italie le temps d’un repas, à
              travers les parfums et les goûts emblématiques de sa gastronomie.
            </motion.p>
            <motion.p
              {...fadeDown(0.3)}
              className="mt-4 text-ink-soft font-light leading-relaxed text-pretty"
            >
              Nous mettons tout en œuvre pour vous recevoir dans une atmosphère
              détendue et chaleureuse, comme à la maison — un lieu de partage et
              de plaisir. Pour agrémenter votre visite, un jardin paisible vous
              attend aux beaux jours, ainsi que plusieurs espaces extérieurs
              modulables, disponibles à la privatisation pour vos événements
              privés ou professionnels.
            </motion.p>
            <motion.p
              {...fadeDown(0.38)}
              className="mt-4 font-italic-display text-xl text-teal-deep"
            >
              Nous vous souhaitons un agréable moment !
            </motion.p>

            <motion.div
              {...fadeDown(0.46)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-teal-deep text-cream px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-teal transition-colors"
              >
                Je réserve ma table
              </Link>
              <a
                href="tel:+33367510060"
                className="inline-flex items-center font-italic-display text-2xl text-olive-dark hover:text-teal-deep transition-colors"
              >
                03 67 51 00 60
              </a>
            </motion.div>
          </div>

          {/* Image à droite */}
          <motion.div
            {...fadeDown(0.1)}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-4/3 md:aspect-5/4 w-full rounded-3xl overflow-hidden shadow-card">
              <Image
                src="/images/interieur/salle.jpeg"
                alt="La salle du restaurant l’Auberge Italienne"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              {/* halo subtil au coin */}
              <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-3xl pointer-events-none" />
            </div>

            {/* Petit cartouche flottant */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:flex absolute -bottom-6 -left-6 rounded-2xl bg-cream border border-teal/10 px-5 py-4 shadow-soft items-center gap-4"
            >
              <div>
                <div className="font-italic-display text-2xl text-teal-deep leading-none">
                  Bartenheim
                </div>
                <div className="mt-1 text-[0.7rem] tracking-[0.2em] uppercase text-olive-dark">
                  49 rue de la Gare
                </div>
              </div>
              <span className="block w-px h-8 bg-teal/15" />
              <div className="text-[0.7rem] tracking-[0.2em] uppercase text-ink-soft">
                Sud
                <br />
                Alsace
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
