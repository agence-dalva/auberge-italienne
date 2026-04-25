import { Suspense } from "react";
import type { Metadata } from "next";
import { WineExplorer } from "@/components/vins/WineExplorer";
import { OliveDivider } from "@/components/OliveDivider";

export const metadata: Metadata = {
  title: "La carte des vins — L’Auberge Italienne",
  description:
    "Sélection exclusive de vins italiens : Primitivo, Chardonnay, Nero d’Avola, Barolo, Amarone, Prosecco… À découvrir par catégorie.",
};

export default function VinsPage() {
  return (
    <>
      <section className="relative pt-10 md:pt-20 pb-4 text-center">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <span className="text-[0.72rem] tracking-[0.32em] uppercase text-olive-dark">
            Carte des vins
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl text-teal-deep text-balance">
            <span className="font-display">Un patrimoine </span>
            <span className="font-italic-display">millénaire</span>
          </h1>
          <OliveDivider className="mt-6" />
          <p className="mt-6 max-w-2xl mx-auto text-ink-soft font-light leading-relaxed">
            Depuis l’Antiquité, les vignobles italiens offrent une incroyable
            diversité de terroirs. Notre sélection en exclusivité, à découvrir
            par catégorie.
          </p>
          <p className="mt-3 text-xs tracking-[0.2em] uppercase text-olive-dark">
            Disponible à la bouteille ou au carton à l’épicerie fine Dolce Vita
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="py-24 text-center text-ink-soft font-light">
            Chargement de la cave…
          </div>
        }
      >
        <WineExplorer />
      </Suspense>
    </>
  );
}
