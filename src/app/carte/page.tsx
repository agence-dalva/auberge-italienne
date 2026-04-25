import { Suspense } from "react";
import type { Metadata } from "next";
import { MenuExplorer } from "@/components/carte/MenuExplorer";
import { OliveDivider } from "@/components/OliveDivider";

export const metadata: Metadata = {
  title: "La carte — L’Auberge Italienne",
  description:
    "Entrées, pâtes fraîches, pinsa romaine, ravioles, plats signatures. Sélectionnez une section pour ne voir que ce qui vous intéresse.",
};

export default function CartePage() {
  return (
    <>
      <section className="relative pt-10 md:pt-20 pb-4 text-center">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <span className="text-[0.72rem] tracking-[0.32em] uppercase text-olive-dark">
            Notre carte
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl text-teal-deep text-balance">
            <span className="font-display">Une cuisine </span>
            <span className="font-italic-display">sincère</span>
          </h1>
          <OliveDivider className="mt-6" />
          <p className="mt-6 max-w-2xl mx-auto text-ink-soft font-light leading-relaxed">
            Tapez sur une section pour filtrer la carte. Sans sélection, tout
            s’affiche — entrées, pâtes, pinsa, ravioles, plats signatures et
            cocktails.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="py-24 text-center text-ink-soft font-light">
            Chargement de la carte…
          </div>
        }
      >
        <MenuExplorer />
      </Suspense>
    </>
  );
}
