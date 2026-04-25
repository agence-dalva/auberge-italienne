import { Hero } from "@/components/home/Hero";
import { Welcome } from "@/components/home/Welcome";
import { Signature } from "@/components/home/Signature";
import { Gallery } from "@/components/home/Gallery";
import { MenuTeaser } from "@/components/home/MenuTeaser";
import { Saveurs } from "@/components/home/Saveurs";
import { Events } from "@/components/home/Events";
import { Visit } from "@/components/home/Visit";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Signature />
      <Gallery />
      <MenuTeaser />
      <Saveurs />
      <Events />
      <Visit />
    </>
  );
}
