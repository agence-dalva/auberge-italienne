import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PlantBranch } from "@/components/PlantBranch";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-teal-deep text-cream overflow-hidden">
      <PlantBranch
        className="absolute -top-6 -left-10"
        width={420}
        tone="cream"
        opacity={0.15}
        rotate={-10}
      />
      <PlantBranch
        flip
        className="absolute -bottom-6 -right-10"
        width={420}
        tone="cream"
        opacity={0.15}
        rotate={170}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-cream/70 font-light leading-relaxed">
            Au sud de l’Alsace, notre restaurant vous invite à un voyage
            culinaire d’exception, où chaque plat célèbre l’authenticité et la
            finesse de la cuisine italienne.
          </p>
        </div>

        <div>
          <h3 className="font-italic-display text-2xl text-cream">Nous trouver</h3>
          <address className="not-italic mt-4 space-y-1 text-cream/80 font-light">
            <p>49 rue de la Gare</p>
            <p>F-68870 Bartenheim</p>
            <p className="pt-3">
              <a href="tel:+33367510060" className="hover:text-sage transition">
                +33 (0)3 67 51 00 60
              </a>
            </p>
          </address>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/auberge.italienne.bartenheim"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 hover:border-sage hover:text-sage transition"
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 hover:border-sage hover:text-sage transition"
              aria-label="Facebook"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 7h2.5V4H14c-2.2 0-4 1.8-4 4v2H7.5v3H10v7h3v-7h2.5l.5-3H13V8c0-.6.4-1 1-1z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-italic-display text-2xl text-cream">Horaires</h3>
          <ul className="mt-4 space-y-1 text-cream/80 font-light">
            <li className="flex justify-between gap-6">
              <span>Mardi – Samedi</span>
              <span>12h–14h · 19h–22h</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Dimanche</span>
              <span>12h–14h</span>
            </li>
            <li className="flex justify-between gap-6 text-cream/50">
              <span>Lundi</span>
              <span>Fermé</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-cream text-teal-deep px-5 py-2 text-xs tracking-widest uppercase hover:bg-sage transition-colors"
            >
              Réserver
            </Link>
            <Link
              href="/evenements"
              className="inline-flex items-center rounded-full border border-cream/40 text-cream px-5 py-2 text-xs tracking-widest uppercase hover:bg-cream/10 transition-colors"
            >
              Un événement
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream/15">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} L’Auberge Italienne — Bartenheim</p>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="hover:text-sage">
              Mentions légales
            </Link>
            <Link href="/plan-du-site" className="hover:text-sage">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
