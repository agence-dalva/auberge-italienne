import Link from "next/link";
import type { Metadata } from "next";
import { OliveDivider } from "@/components/OliveDivider";
import { Reveal } from "@/components/Reveal";
import { PlantBranch } from "@/components/PlantBranch";

export const metadata: Metadata = {
  title: "Notre cuisine — L’Auberge Italienne",
  description:
    "Au sud de l’Alsace, une cuisine italienne authentique, fidèle aux saisons, portée par nos chefs et un consultant culinaire de renom.",
};

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
          <p className="mt-6 text-ink-soft font-light leading-relaxed">
            Au sud de l’Alsace, notre restaurant vous invite à un voyage
            culinaire d’exception, où chaque plat célèbre l’authenticité et la
            finesse de la cuisine italienne. Nos chefs, véritables artisans du
            goût, subliment des ingrédients rigoureusement sélectionnés dans des
            créations élégantes et généreuses.
          </p>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-10 grid gap-10 md:grid-cols-3">
          {[
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
          ].map((c, i) => (
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

      <section className="relative py-16 md:py-24">
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
              créativité et une authenticité incomparables. Chaque ingrédient
              est rigoureusement sélectionné parmi les meilleurs producteurs
              italiens, afin d’offrir des saveurs uniques et raffinées.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
