import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Signature() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Notre maison"
            title="Notre exigence,"
            italicWords="notre passion"
            description="Tous nos plats sont imaginés et réalisés par nos chefs, accompagnés d’un consultant culinaire de renom. Chaque ingrédient est rigoureusement sélectionné parmi les meilleurs producteurs italiens, pour offrir des saveurs uniques et raffinées."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Produits d’Italie",
              italic: "haut de gamme",
              body:
                "Burrata, stracciatella, grana padano, huile d’olive des Pouilles, San Daniele… nos ingrédients viennent directement des meilleurs producteurs italiens.",
            },
            {
              title: "Créations",
              italic: "de nos chefs",
              body:
                "Des pâtes fraîches aux pinsa romaines, chaque recette est pensée avec créativité et authenticité, pour une expérience sensorielle complète.",
            },
            {
              title: "Une table,",
              italic: "un voyage",
              body:
                "Plus qu’un simple repas, nous vous proposons un voyage gourmand où qualité, excellence et émotions se rencontrent pour vous faire rêver.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <article className="h-full rounded-3xl border border-teal/10 bg-cream-dark/40 backdrop-blur-sm p-8 hover:border-olive/40 hover:bg-cream-dark/60 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl text-teal-deep leading-tight">
                  {item.title}{" "}
                  <span className="font-italic-display">{item.italic}</span>
                </h3>
                <p className="mt-4 text-ink-soft font-light leading-relaxed">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
