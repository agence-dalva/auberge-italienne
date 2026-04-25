import type { Metadata } from "next";
import { OliveDivider } from "@/components/OliveDivider";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Livre d’or — L’Auberge Italienne",
};

const TESTIMONIALS = [
  {
    quote:
      "Une cuisine sincère et généreuse, les pâtes fraîches sont à tomber. L’accueil est à la hauteur de la table — on reviendra.",
    author: "Camille & Alexandre",
    context: "Dîner en tête-à-tête",
  },
  {
    quote:
      "Nous avons célébré notre mariage dans leurs jardins. Une organisation impeccable, un menu raffiné, et des souvenirs pour toujours.",
    author: "Famille Rizzo",
    context: "Mariage de 120 personnes",
  },
  {
    quote:
      "La Piccata de l’Auberge, un vrai moment. Service attentif, cadre très chaleureux, parfait pour une soirée entre amis.",
    author: "Julien",
    context: "Dîner entre amis",
  },
  {
    quote:
      "On a pris la mega planchette pour l’anniversaire de maman, tout le monde s’est régalé. Les burrata sont exceptionnelles.",
    author: "Sophia",
    context: "Anniversaire en famille",
  },
  {
    quote:
      "Très belle carte des vins italiens, avec des conseils précis. Le Primitivo maison est une excellente découverte.",
    author: "Marc",
    context: "Amateur de vins",
  },
  {
    quote:
      "Une adresse qui mérite le détour. On sent la passion derrière chaque plat, les produits sont d’une qualité rare.",
    author: "Nadia",
    context: "Déjeuner d’affaires",
  },
];

export default function LivreDorPage() {
  return (
    <>
      <section className="relative pt-10 md:pt-20 pb-10 text-center">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <span className="text-[0.72rem] tracking-[0.32em] uppercase text-olive-dark">
            Livre d’or
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl text-teal-deep text-balance">
            <span className="font-display">Vos mots, </span>
            <span className="font-italic-display">notre fierté</span>
          </h1>
          <OliveDivider className="mt-6" />
          <p className="mt-6 text-ink-soft font-light leading-relaxed">
            Ce que nos convives racontent, après leur passage à l’Auberge.
          </p>
        </div>
      </section>

      <section className="relative py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={0.06 * i}>
              <figure className="h-full rounded-3xl border border-teal/10 bg-cream-dark/40 p-7 flex flex-col">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="text-olive-dark/60"
                >
                  <path
                    d="M7 8c-2 1-3 3-3 5v5h5v-5H6c0-2 1-3 3-4V8H7zm10 0c-2 1-3 3-3 5v5h5v-5h-3c0-2 1-3 3-4V8h-2z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="mt-3 font-italic-display text-lg md:text-xl text-teal-deep leading-snug flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="text-teal-deep">{t.author}</div>
                  <div className="text-[0.7rem] tracking-[0.2em] uppercase text-olive-dark mt-1">
                    {t.context}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
