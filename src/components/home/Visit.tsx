import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function Visit() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <Reveal>
            <span className="text-[0.72rem] tracking-[0.3em] uppercase text-olive-dark">
              Nous rendre visite
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl text-teal-deep text-balance leading-tight">
              <span className="font-display">À deux pas </span>
              <span className="font-italic-display">de Bâle & de Mulhouse</span>
            </h2>
            <p className="mt-6 max-w-md text-ink-soft font-light leading-relaxed">
              Au 49 rue de la Gare à Bartenheim, l’Auberge Italienne vous accueille
              dans une atmosphère détendue, avec ses jardins et ses terrasses
              couvertes.
            </p>
            <div className="mt-8 flex flex-col gap-2 text-ink-soft">
              <span className="font-italic-display text-xl text-teal-deep">
                49 rue de la Gare — 68870 Bartenheim
              </span>
              <a
                href="tel:+33367510060"
                className="font-light hover:text-teal-deep transition"
              >
                +33 (0)3 67 51 00 60
              </a>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-teal-deep text-cream px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-teal transition-colors"
              >
                Réserver une table
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-teal/10 bg-cream-dark/50 p-8">
              <h3 className="font-italic-display text-3xl text-teal-deep">
                Nos horaires
              </h3>
              <ul className="mt-6 divide-y divide-teal/10">
                {[
                  ["Mardi", "12h–14h · 19h–22h"],
                  ["Mercredi", "12h–14h · 19h–22h"],
                  ["Jeudi", "12h–14h · 19h–22h"],
                  ["Vendredi", "12h–14h · 19h–22h30"],
                  ["Samedi", "12h–14h · 19h–22h30"],
                  ["Dimanche", "12h–14h"],
                  ["Lundi", "Fermé"],
                ].map(([d, h]) => (
                  <li
                    key={d}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className="tracking-[0.18em] uppercase text-ink-soft/80">
                      {d}
                    </span>
                    <span
                      className={`font-light ${
                        h === "Fermé" ? "text-ink-soft/50" : "text-teal-deep"
                      }`}
                    >
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
