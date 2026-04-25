"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { menuSections } from "@/data/menu";
import { MenuItem } from "./MenuItem";
import { SectionFilters } from "@/components/SectionFilters";
import { OliveDivider } from "@/components/OliveDivider";

export function MenuExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reduce = useReducedMotion();

  // Source de vérité au premier rendu (URL → état). Ensuite, l'utilisateur
  // pilote l'état localement, et un effet propage l'état vers l'URL.
  const initialFromUrl = useMemo(() => {
    const raw = searchParams.get("s") ?? "";
    if (!raw) return [];
    return raw
      .split(",")
      .map((s) => s.trim())
      .filter((id) => menuSections.some((sec) => sec.id === id));
    // On ne dépend volontairement PAS de searchParams pour éviter les boucles —
    // c'est l'effet plus bas qui sync l'URL après chaque changement local.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [active, setActive] = useState<string[]>(initialFromUrl);
  const isFirstRender = useRef(true);

  // Sync URL ← état (jamais pendant le render, jamais dans un setState updater).
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (active.length === 0) params.delete("s");
    else params.set("s", active.join(","));
    const qs = params.toString();
    router.replace(qs ? `?${qs}` : "?", { scroll: false });
    // searchParams omis volontairement pour éviter de réagir aux changements
    // d'URL externes (sinon boucle). On lit searchParams au moment de l'effet,
    // ce qui suffit pour préserver les autres params éventuels.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const onToggle = useCallback((id: string) => {
    setActive((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const onClear = useCallback(() => setActive([]), []);

  const visible =
    active.length === 0
      ? menuSections
      : menuSections.filter((s) => active.includes(s.id));

  return (
    <div className="relative">
      <SectionFilters
        options={menuSections.map((s) => ({
          id: s.id,
          label: s.title.replace(/^Nos?\s+/i, "").replace(/^Les\s+/i, ""),
        }))}
        active={active}
        onToggle={onToggle}
        onClear={onClear}
        noun="la carte"
      />

      <div className="mx-auto max-w-4xl px-5 md:px-10 pt-10 md:pt-16 pb-24">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((section, idx) => (
            <motion.section
              key={section.id}
              layout={reduce ? false : "position"}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: Math.min(idx * 0.03, 0.2),
              }}
              className="pt-10 first:pt-0 md:pt-14"
            >
              <header className="text-center mb-6 md:mb-8">
                <h2 className="font-display text-4xl md:text-5xl text-teal-deep leading-tight">
                  {section.title}
                </h2>
                <OliveDivider className="mt-4" />
                {section.subtitle && (
                  <p className="mt-4 mx-auto max-w-xl font-italic-display text-lg text-ink-soft/90 leading-snug">
                    {section.subtitle}
                  </p>
                )}
                {section.note && (
                  <p className="mt-2 text-xs tracking-[0.2em] uppercase text-olive-dark">
                    {section.note}
                  </p>
                )}
              </header>

              <div className="rounded-3xl border border-teal/10 bg-cream-dark/40 px-5 md:px-8 py-2">
                {section.items.map((dish, i) => (
                  <MenuItem key={`${section.id}-${i}-${dish.name}`} dish={dish} />
                ))}
              </div>
            </motion.section>
          ))}
        </AnimatePresence>

        {visible.length === 0 && (
          <div className="text-center py-24 text-ink-soft font-light">
            Aucune section sélectionnée.
          </div>
        )}
      </div>
    </div>
  );
}
