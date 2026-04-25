import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PlantBranch } from "@/components/PlantBranch";
import { OliveDivider } from "@/components/OliveDivider";

export function Events() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <div className="relative rounded-[32px] bg-teal-deep text-cream overflow-hidden">
          <PlantBranch
            className="absolute -top-10 -left-10"
            width={360}
            tone="cream"
            opacity={0.18}
            rotate={-12}
          />
          <PlantBranch
            flip
            className="absolute -bottom-10 -right-10"
            width={360}
            tone="cream"
            opacity={0.18}
            rotate={170}
          />
          <div className="relative px-8 md:px-16 py-16 md:py-24 text-center">
            <Reveal>
              <span className="text-[0.72rem] tracking-[0.32em] uppercase text-sage">
                Vos événements
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-5xl md:text-6xl lg:text-7xl text-cream text-balance">
                <span className="font-display">Célébrez </span>
                <span className="font-italic-display">à l’italienne</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <OliveDivider tone="cream" className="mt-6" />
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mx-auto mt-6 max-w-2xl text-cream/80 font-light leading-relaxed">
                Notre équipe se tient à votre entière disposition pour
                l’organisation de tous vos événements : mariages, baptêmes,
                communions, anniversaires et événements d’entreprise. Terrasses
                couvertes, jardins aménagés et espaces privatisables.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/evenements"
                  className="inline-flex items-center rounded-full bg-cream text-teal-deep px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-sage transition-colors"
                >
                  Découvrir
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-cream/40 text-cream px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-cream/10 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
