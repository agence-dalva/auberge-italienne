import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageSlider } from "@/components/ImageSlider";

const SLIDES = [
  {
    src: "/images/gallery/jardin-arche.jpg",
    title: "Le jardin & l’arche",
    subtitle: "Pour vos cérémonies en plein air",
  },
  {
    src: "/images/gallery/jardin-pergola.jpg",
    title: "La pergola",
    subtitle: "L’apéritif sous les vignes",
  },
  {
    src: "/images/gallery/jardin-truli.jpg",
    title: "Les Trulli",
    subtitle: "Un clin d’œil aux Pouilles",
  },
  {
    src: "/images/gallery/jardin-fiat-500.jpg",
    title: "La Fiat 500",
    subtitle: "Le décor italien par excellence",
  },
  {
    src: "/images/gallery/pergola-lustre.jpeg",
    title: "Le lustre",
    subtitle: "L’élégance d’une soirée italienne",
  },
  {
    src: "/images/gallery/jardin-coeur.jpeg",
    title: "Le cœur fleuri",
    subtitle: "Pour vos plus beaux souvenirs",
  },
  {
    src: "/images/gallery/terrasse-couverte-003.jpeg",
    title: "La terrasse couverte",
    subtitle: "Quel que soit le temps",
  },
  {
    src: "/images/gallery/terrasse-couverte-005.jpeg",
    title: "Une table au soleil",
    subtitle: "Lumineuse, intime",
  },
  {
    src: "/images/gallery/jardin-mirroir.jpeg",
    title: "Le miroir du jardin",
    subtitle: "Dans la fraîcheur des massifs",
  },
  {
    src: "/images/gallery/jardin-feu-artifice.jpg",
    title: "Le feu d’artifice",
    subtitle: "Pour vos grands événements",
  },
];

export function Gallery() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Notre cadre"
            title="Jardins, terrasses,"
            italicWords="ambiance italienne"
            description="Des espaces pensés pour vous transporter en Italie : pergola fleurie, trulli des Pouilles, terrasses couvertes et arche romantique."
          />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-14">
            <ImageSlider slides={SLIDES} aspect="2/1" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
