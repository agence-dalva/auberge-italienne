"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { wineSections } from "@/data/wines";
import { WineCard } from "./WineCard";
import { SectionFilters } from "@/components/SectionFilters";
import { OliveDivider } from "@/components/OliveDivider";

export function WineExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reduce = useReducedMotion();

  const initialFromUrl = useMemo(() => {
    const raw = searchParams.get("s") ?? "";
    if (!raw) return [];
    return raw
      .split(",")
      .map((s) => s.trim())
      .filter((id) => wineSections.some((sec) => sec.id === id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [active, setActive] = useState<string[]>(initialFromUrl);
  const isFirstRender = useRef(true);

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
      ? wineSections
      : wineSections.filter((s) => active.includes(s.id));

  return (
    <div>
      <SectionFilters
        options={wineSections.map((s) => ({ id: s.id, label: s.title }))}
        active={active}
        onToggle={onToggle}
        onClear={onClear}
        noun="la cave"
      />

      <div className="mx-auto max-w-6xl px-5 md:px-10 pt-12 md:pt-16 pb-24">
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
              <header className="text-center mb-8">
                <h2 className="font-display text-4xl md:text-5xl text-teal-deep">
                  {section.title}
                </h2>
                <OliveDivider className="mt-4" />
                {section.subtitle && (
                  <p className="mt-4 font-italic-display text-lg text-ink-soft/90">
                    {section.subtitle}
                  </p>
                )}
              </header>
              <div className="grid gap-5 md:grid-cols-2">
                {section.wines.map((w, i) => (
                  <WineCard key={`${section.id}-${i}-${w.name}`} wine={w} />
                ))}
              </div>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
