import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { OliveDivider } from "@/components/OliveDivider";
import { Reveal } from "@/components/Reveal";
import { PlantBranch } from "@/components/PlantBranch";
import { ImageSlider } from "@/components/ImageSlider";

export const metadata: Metadata = {
  title: "Notre cuisine — L’Auberge Italienne",
  description:
    "Au sud de l’Alsace, une cuisine italienne authentique, fidèle aux saisons, portée par nos chefs et un consultant culinaire de renom.",
};

const PLATS = [
  { src: "/images/plats/001-plat1.jpg" },
  { src: "/images/plats/002-plat2.jpg" },
  { src: "/images/plats/003-plat3.jpg" },
  { src: "/images/plats/004-plat4.jpg" },
  { src: "/images/plats/005-plat5.jpg" },
  { src: "/images/plats/006-plat6.jpg" },
  { src: "/images/plats/007-plat7.jpg" },
  { src: "/images/plats/008-plat8.jpg" },
  { src: "/images/plats/plat-009.jpeg" },
  { src: "/images/plats/dessert_-_gateau_framboises.jpg" },
  { src: "/images/plats/dessert_-_gateau_jaune.jpg" },
  { src: "/images/plats/dessert_-_verrines.jpg" },
];

const PILLARS = [
  {
    title: "La carte",
    italic: "du restaurant",
    body:
      "Entrées, pâtes fraîches, pinsa, ravioles, plats signatures, desserts et boissons.",
    href: "/carte",
    cta: "Voir la carte",
  },
  {
    title: "La carte",
    italic: "des vins",
    body:
      "Sélection exclusive de vins italiens : Primitivo, Chardonnay, Nero d’Avola, Barolo, Prosecco…",
    href: "/vins",
    cta: "Voir les vins",
  },
  {
    title: "L’épicerie",
    italic: "fine",
    body:
      "Envie de retrouver les saveurs de votre repas chez vous ? Nos produits sont disponibles à l’épicerie fine Dolce Vita.",
    href: "/contact",
    cta: "Nous contacter",
  },
];

export default function NotreCuisinePage() {
  return (
    <>
      <section className="relative pt-10 md:pt-20 pb-10 text-center overflow-hidden">
        <PlantBranch
          className="absolute -top-4 -left-12 hidden md:block"
          width={380}
          tone="olive"
          opacity={0.35}
          rotate={-12}
        />
        <PlantBranch
          flip
          className="absolute -top-4 -right-12 hidden md:block"
          width={380}
          tone="olive"
          opacity={0.35}
          rotate={12}
        />
        <div className="relative mx-auto max-w-3xl px-5 md:px-10">
          <span className="text-[0.72rem] tracking-[0.32em] uppercase text-olive-dark">
            Notre cuisine
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl text-teal-deep text-balance">
            <span className="font-display">Un voyage </span>
            <span className="font-italic-display">d’exception</span>
          </h1>
          <OliveDivider className="mt-6" />
        </div>
      </section>

      {/* Section principale : texte à gauche, image portrait à droite */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <span className="block text-[0.72rem] tracking-[0.32em] uppercase text-olive-dark">
                Saveurs d’Italie en Alsace
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-teal-deep text-balance leading-[1.05]">
                <span className="font-italic-display">Chaque bouchée</span>
                <span className="font-display">, une histoire</span>
              </h2>
              <OliveDivider className="mt-7 justify-start!" />

              <div className="mt-8 space-y-5 text-ink-soft font-light leading-relaxed text-pretty">
                <p>
                  Au sud de l’Alsace, notre restaurant vous invite à un voyage
                  culinaire d’exception, où chaque plat célèbre l’authenticité
                  et la finesse de la cuisine italienne. Nous sélectionnons avec
                  le plus grand soin des produits frais en provenance directe
                  d’Italie&nbsp;: charcuteries affinées, fromages d’exception,
                  fruits et légumes gorgés de soleil, et huiles parfumées venues
                  des meilleurs producteurs.
                </p>
                <p>
                  Nos chefs, véritables artisans du goût, subliment ces
                  ingrédients dans des créations élégantes et généreuses. Leur
                  savoir-faire, nourri par la tradition et l’innovation, vous
                  transporte dans une farandole de saveurs, de l’antipasto
                  jusqu’au dessert.
                </p>
                <p>
                  Chaque bouchée raconte une histoire : celle d’une Italie
                  gourmande, raffinée, et résolument tournée vers le plaisir.
                  Que vous soyez amateur de pâtes fraîches maison, de risottos
                  crémeux ou de desserts délicats comme le tiramisù ou la panna
                  cotta, vous vivrez une expérience sensorielle inoubliable.
                </p>
                <p className="font-italic-display text-2xl text-teal-deep pt-2">
                  Bienvenue dans un lieu où la passion de la cuisine italienne
                  se savoure à chaque instant !
                </p>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/carte"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-deep text-cream px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-teal transition-colors"
                >
                  Voir la carte
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-teal-deep/30 text-teal-deep px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-teal-deep hover:text-cream transition-colors"
                >
                  Réserver
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="relative aspect-3/4 w-full rounded-3xl overflow-hidden shadow-card">
                  <Image
                    src="/images/plats/dessert_-_buffet.jpg"
                    alt="Buffet de desserts italiens à l’Auberge Italienne"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-3xl pointer-events-none" />
                </div>

                {/* Cartouche flottant desktop */}
                <div className="hidden md:flex absolute -bottom-6 -left-6 rounded-2xl bg-cream border border-teal/10 px-5 py-4 shadow-soft items-center gap-4">
                  <div>
                    <div className="font-italic-display text-2xl text-teal-deep leading-none">
                      Du salato
                    </div>
                    <div className="mt-1 text-[0.7rem] tracking-[0.2em] uppercase text-olive-dark">
                      al dolce
                    </div>
                  </div>
                  <span className="block w-px h-8 bg-teal/15" />
                  <div className="text-[0.7rem] tracking-[0.2em] uppercase text-ink-soft">
                    Faits
                    <br />
                    maison
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 piliers */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-10 grid gap-6 md:grid-cols-3">
          {PILLARS.map((c, i) => (
            <Reveal key={c.italic} delay={0.08 * i}>
              <div className="h-full flex flex-col rounded-3xl border border-teal/10 bg-cream-dark/40 p-8">
                <h3 className="text-3xl text-teal-deep leading-tight">
                  <span className="font-display">{c.title} </span>
                  <span className="font-italic-display">{c.italic}</span>
                </h3>
                <p className="mt-4 text-ink-soft font-light leading-relaxed flex-1">
                  {c.body}
                </p>
                <Link
                  href={c.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-teal-deep hover:text-olive-dark transition"
                >
                  {c.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Citation */}
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-4xl px-5 md:px-10 text-center">
          <Reveal>
            <h2 className="font-italic-display text-3xl md:text-4xl text-teal-deep leading-snug">
              « Nous mettons notre exigence et notre passion dans chaque
              assiette. »
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink-soft font-light leading-relaxed max-w-2xl mx-auto">
              Tous nos plats sont imaginés et réalisés par nos chefs,
              accompagnés d’un consultant culinaire de renom, garantissant une
              créativité et une authenticité incomparables.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Slider unique en bas — galerie complète */}
      <section className="relative pt-8 pb-24 md:pt-12 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
              <span className="text-[0.72rem] tracking-[0.32em] uppercase text-olive-dark">
                En images
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl text-teal-deep leading-tight">
                <span className="font-display">Nos </span>
                <span className="font-italic-display">créations</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ImageSlider
              slides={PLATS}
              aspect="3/2"
              showCaption={false}
              autoplayMs={4500}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
