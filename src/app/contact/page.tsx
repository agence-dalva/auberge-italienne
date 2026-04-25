import type { Metadata } from "next";
import { OliveDivider } from "@/components/OliveDivider";
import { Reveal } from "@/components/Reveal";
import { PlantBranch } from "@/components/PlantBranch";

export const metadata: Metadata = {
  title: "Contact — L’Auberge Italienne",
  description:
    "Réservez une table ou contactez-nous pour l’organisation de votre événement à l’Auberge Italienne, Bartenheim.",
};

export default function ContactPage() {
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
            Contact
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl text-teal-deep text-balance">
            <span className="font-display">On vous </span>
            <span className="font-italic-display">attend</span>
          </h1>
          <OliveDivider className="mt-6" />
          <p className="mt-6 text-ink-soft font-light leading-relaxed">
            Réservez une table, posez-nous une question ou confiez-nous
            l’organisation de votre événement — nous revenons vers vous très vite.
          </p>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 md:px-10 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-teal/10 bg-cream-dark/40 p-7 md:p-9 h-full">
              <h2 className="font-italic-display text-3xl text-teal-deep">
                L’Auberge Italienne
              </h2>
              <address className="not-italic mt-4 space-y-1 text-ink-soft font-light">
                <p>49 rue de la Gare</p>
                <p>F-68870 Bartenheim</p>
              </address>
              <div className="mt-6 space-y-2">
                <a
                  href="tel:+33367510060"
                  className="block text-teal-deep text-lg hover:text-olive-dark transition"
                >
                  +33 (0)3 67 51 00 60
                </a>
                <a
                  href="mailto:contact@auberge-italienne-bartenheim.fr"
                  className="block text-ink-soft font-light hover:text-teal-deep transition"
                >
                  contact@auberge-italienne-bartenheim.fr
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-teal/10">
                <h3 className="text-[0.7rem] tracking-[0.25em] uppercase text-olive-dark">
                  Horaires
                </h3>
                <ul className="mt-4 text-sm divide-y divide-teal/10">
                  {[
                    ["Mardi — Samedi", "12h–14h · 19h–22h"],
                    ["Dimanche", "12h–14h"],
                    ["Lundi", "Fermé"],
                  ].map(([d, h]) => (
                    <li
                      key={d}
                      className="flex justify-between items-center py-3"
                    >
                      <span className="tracking-[0.15em] uppercase text-ink-soft/80 text-xs">
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
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form className="rounded-3xl border border-teal/10 bg-cream p-7 md:p-9 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Prénom & nom" name="name" required />
                <Field label="Téléphone" name="phone" type="tel" />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Date souhaitée" name="date" type="date" />
                <Field
                  label="Nombre de convives"
                  name="guests"
                  type="number"
                  min={1}
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-[0.7rem] tracking-[0.2em] uppercase text-olive-dark">
                    Type de demande
                  </span>
                  <select
                    name="type"
                    className="rounded-xl border border-teal/15 bg-cream px-4 py-3 text-ink focus:border-olive focus:outline-none transition"
                    defaultValue="reservation"
                  >
                    <option value="reservation">Réservation</option>
                    <option value="evenement">Événement privé</option>
                    <option value="entreprise">Événement d’entreprise</option>
                    <option value="question">Autre question</option>
                  </select>
                </label>
                <Field label="Service" name="service" placeholder="Déjeuner ou dîner" />
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-[0.7rem] tracking-[0.2em] uppercase text-olive-dark">
                  Votre message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  className="rounded-xl border border-teal/15 bg-cream px-4 py-3 text-ink placeholder-ink-soft/40 focus:border-olive focus:outline-none transition resize-none"
                  placeholder="Dites-nous en un peu plus…"
                />
              </label>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <p className="text-xs text-ink-soft/60">
                  Nous revenons vers vous sous 24 heures.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-teal-deep text-cream px-7 py-3 text-xs tracking-[0.25em] uppercase hover:bg-teal transition-colors"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
};

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  min,
}: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[0.7rem] tracking-[0.2em] uppercase text-olive-dark">
        {label}
        {required && <span className="ml-1 text-terracotta">·</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        className="rounded-xl border border-teal/15 bg-cream px-4 py-3 text-ink placeholder-ink-soft/40 focus:border-olive focus:outline-none transition"
      />
    </label>
  );
}
