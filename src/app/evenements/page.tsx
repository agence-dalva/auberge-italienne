import Link from "next/link";
import type { Metadata } from "next";
import { OliveDivider } from "@/components/OliveDivider";
import { Reveal } from "@/components/Reveal";
import { PlantBranch } from "@/components/PlantBranch";

export const metadata: Metadata = {
  title: "Vos événements — L’Auberge Italienne",
  description:
    "Mariages, baptêmes, communions, anniversaires, événements d’entreprise : nos équipes organisent vos événements dans un cadre italien d’exception.",
};

const EVENTS = [
  {
    title: "Mariages",
    italic: "à l’italienne",
    body: "Jardins aménagés, terrasses couvertes et salles modulables pour célébrer votre grand jour avec élégance.",
  },
  {
    title: "Baptêmes",
    italic: "& communions",
    body: "Un cadre chaleureux et convivial pour partager ces moments de famille autour d’une cuisine généreuse.",
  },
  {
    title: "Anniversaires",
    italic: "mémorables",
    body: "Menus sur-mesure, planchettes à partager et cocktails signatures pour marquer vos célébrations.",
  },
  {
    title: "Entreprise",
    italic: "& séminaires",
    body: "Espaces privatisables, menus adaptés, cadre inspirant — idéal pour vos événements professionnels.",
  },
];

export default function EvenementsPage() {
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
            Vos événements
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl text-teal-deep text-balance">
            <span className="font-display">Célébrez </span>
            <span className="font-italic-display">chez nous</span>
          </h1>
          <OliveDivider className="mt-6" />
          <p className="mt-6 text-ink-soft font-light leading-relaxed">
            Notre équipe se tient à votre entière disposition pour
            l’organisation de tous vos événements. Mariages, baptêmes,
            communions, anniversaires, événements d’entreprise — nous mettons
            notre passion au service de votre journée.
          </p>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((e, i) => (
            <Reveal key={e.italic} delay={0.07 * i}>
              <article className="h-full rounded-3xl border border-teal/10 bg-cream-dark/40 p-7 hover:border-olive/40 transition-colors">
                <h3 className="text-2xl text-teal-deep leading-tight">
                  <span className="font-display">{e.title} </span>
                  <span className="font-italic-display">{e.italic}</span>
                </h3>
                <p className="mt-4 text-ink-soft font-light leading-relaxed">
                  {e.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <div className="relative rounded-[32px] bg-teal-deep text-cream p-10 md:p-14 text-center overflow-hidden">
            <PlantBranch
              className="absolute -top-8 -left-8"
              width={300}
              tone="cream"
              opacity={0.18}
              rotate={-15}
            />
            <PlantBranch
              flip
              className="absolute -bottom-8 -right-8"
              width={300}
              tone="cream"
              opacity={0.18}
              rotate={170}
            />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl text-cream">
                <span className="font-display">Parlons de </span>
                <span className="font-italic-display">votre événement</span>
              </h2>
              <OliveDivider tone="cream" className="mt-6" />
              <p className="mt-6 max-w-2xl mx-auto text-cream/80 font-light leading-relaxed">
                Dites-nous tout : date envisagée, nombre de convives, style
                souhaité. Nous revenons vers vous avec une proposition sur-mesure.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-cream text-teal-deep px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-sage transition-colors"
                >
                  Demander un devis
                </Link>
                <a
                  href="tel:+33367510060"
                  className="inline-flex items-center rounded-full border border-cream/40 text-cream px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-cream/10 transition-colors"
                >
                  03 67 51 00 60
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
