import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlider } from "@/components/ImageSlider";

const SLIDES = [
  { src: "/images/plats/001-plat1.jpg" },
  { src: "/images/plats/002-plat2.jpg" },
  { src: "/images/plats/003-plat3.jpg" },
  { src: "/images/plats/004-plat4.jpg" },
  { src: "/images/plats/005-plat5.jpg" },
  { src: "/images/plats/006-plat6.jpg" },
  { src: "/images/plats/007-plat7.jpg" },
  { src: "/images/plats/008-plat8.jpg" },
  { src: "/images/plats/plat-009.jpeg" },
  { src: "/images/plats/dessert_-_buffet.jpg" },
  { src: "/images/plats/dessert_-_gateau_framboises.jpg" },
  { src: "/images/plats/dessert_-_gateau_jaune.jpg" },
  { src: "/images/plats/dessert_-_verrines.jpg" },
];

export function Saveurs() {
  return (
    <section className="relative py-24 md:py-32 bg-cream-dark/50">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Saveurs d’Italie en Alsace"
            title="Chaque bouchée"
            italicWords="raconte une histoire"
            description="Celle d’une Italie gourmande, raffinée, et résolument tournée vers le plaisir. Nos chefs, véritables artisans du goût, subliment des ingrédients d’exception dans des créations élégantes et généreuses."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14">
            <ImageSlider
              slides={SLIDES}
              aspect="3/2"
              showCaption={false}
              autoplayMs={4500}
            />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="font-italic-display text-2xl md:text-3xl text-teal-deep max-w-2xl text-balance">
              Bienvenue dans un lieu où la passion de la cuisine italienne se
              savoure à chaque instant.
            </p>
            <Link
              href="/carte"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-teal-deep text-cream px-7 py-3 text-xs tracking-[0.25em] uppercase hover:bg-teal transition-colors"
            >
              Découvrir la carte
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
