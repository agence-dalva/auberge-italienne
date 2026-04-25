import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { menuSections } from "@/data/menu";

const FEATURED = [
  { sectionId: "signatures", label: "Plats signatures", italic: "Don Filippo & Piccata" },
  { sectionId: "pates", label: "Pâtes fraîches", italic: "Don Carlo, Alfredo…" },
  { sectionId: "pinsa", label: "Pinsa Romana", italic: "sans gluten possible" },
  { sectionId: "ravioles", label: "Ravioles artisanales", italic: "Don Stefano, Truffe" },
];

export function MenuTeaser() {
  return (
    <section className="relative py-24 md:py-32 bg-cream-dark/50">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Notre carte"
            title="Une cuisine"
            italicWords="fidèle aux saisons"
            description="Entrées, pâtes fraîches, pinsa, plats signatures et desserts. Chaque plat célèbre l’authenticité et la finesse de la cuisine italienne."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((f, i) => {
            const section = menuSections.find((s) => s.id === f.sectionId);
            const sample = section?.items.slice(0, 3) ?? [];
            return (
              <Reveal key={f.sectionId} delay={0.07 * i}>
                <Link
                  href={`/carte?s=${f.sectionId}`}
                  className="group block h-full rounded-3xl border border-teal/10 bg-cream p-7 hover:border-olive/50 transition-all duration-500"
                >
                  <div className="text-[0.7rem] uppercase tracking-[0.3em] text-olive-dark">
                    {f.label}
                  </div>
                  <h3 className="mt-3 text-2xl text-teal-deep leading-tight">
                    <span className="font-italic-display">{f.italic}</span>
                  </h3>
                  <ul className="mt-5 space-y-2 text-ink-soft font-light">
                    {sample.map((s) => (
                      <li key={s.name} className="text-sm">
                        · {s.name}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-teal-deep group-hover:text-olive-dark transition">
                    Explorer
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/carte"
              className="inline-flex items-center gap-2 rounded-full bg-teal-deep text-cream px-7 py-3 text-xs tracking-[0.25em] uppercase hover:bg-teal transition-colors"
            >
              Voir toute la carte
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
