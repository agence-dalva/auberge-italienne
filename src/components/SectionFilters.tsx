"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type FilterOption = {
  id: string;
  label: string;
};

type Props = {
  options: FilterOption[];
  active: string[];
  onToggle: (id: string) => void;
  onClear: () => void;
  /** Texte court pour le label "Filtrer la …" */
  noun?: string;
};

/**
 * UI de filtre par sections, multi-sélection.
 * - Desktop : chips en wrap, centrés, avec un container max-w-3xl.
 * - Mobile  : dropdown ouvrant une liste à cocher (+ "Tout afficher").
 *   Aucune sélection ⇒ "Tout" affiché.
 */
export function SectionFilters({
  options,
  active,
  onToggle,
  onClear,
  noun = "la carte",
}: Props) {
  const allActive = active.length === 0;
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown au clic extérieur / Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const summary = allActive
    ? "Toute la carte"
    : active.length === 1
    ? options.find((o) => o.id === active[0])?.label ?? "1 sélection"
    : `${active.length} sélections`;

  return (
    <div className="sticky top-20 z-30 bg-cream/85 backdrop-blur-md border-b border-teal/10">
      <div className="mx-auto max-w-5xl px-5 md:px-10 py-4 md:py-5">
        {/* MOBILE — dropdown */}
        <div className="md:hidden" ref={wrapRef}>
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={open}
              className="cursor-pointer flex-1 flex items-center justify-between gap-3 rounded-full border border-teal/20 bg-cream px-5 py-3 text-left transition hover:border-teal/40"
            >
              <span className="flex items-center gap-2 min-w-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 text-olive-dark">
                  <path
                    d="M4 6h16M7 12h10M10 18h4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[0.68rem] tracking-[0.22em] uppercase text-olive-dark shrink-0">
                  Filtrer
                </span>
                <span className="truncate text-sm text-teal-deep">
                  · {summary}
                </span>
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className={`shrink-0 text-teal-deep transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="relative mt-2"
              >
                <div
                  role="listbox"
                  aria-multiselectable
                  className="rounded-2xl border border-teal/15 bg-cream shadow-card overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => {
                      onClear();
                      setOpen(false);
                    }}
                    className={`cursor-pointer w-full text-left px-4 py-3 text-sm flex items-center justify-between transition ${
                      allActive
                        ? "bg-teal-deep text-cream"
                        : "text-ink hover:bg-cream-dark/40"
                    }`}
                    aria-selected={allActive}
                  >
                    <span className="tracking-[0.04em]">Tout afficher</span>
                    {allActive && (
                      <Check className="text-cream" />
                    )}
                  </button>
                  <ul className="max-h-[60vh] overflow-y-auto divide-y divide-teal/10">
                    {options.map((opt) => {
                      const on = active.includes(opt.id);
                      return (
                        <li key={opt.id}>
                          <button
                            type="button"
                            onClick={() => onToggle(opt.id)}
                            aria-selected={on}
                            className={`cursor-pointer w-full text-left px-4 py-3 text-sm flex items-center justify-between transition ${
                              on ? "bg-olive/10 text-teal-deep" : "text-ink-soft hover:bg-cream-dark/40"
                            }`}
                          >
                            <span className="pr-3">{opt.label}</span>
                            <span
                              className={`relative shrink-0 inline-flex items-center justify-center h-5 w-5 rounded border transition ${
                                on
                                  ? "bg-olive border-olive"
                                  : "bg-cream border-teal/25"
                              }`}
                              aria-hidden="true"
                            >
                              {on && <Check className="text-cream" />}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DESKTOP — chips en wrap */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.25em] uppercase text-olive-dark">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M7 12h10M10 18h4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              Filtrer {noun}
            </div>
            {!allActive && (
              <button
                type="button"
                onClick={onClear}
                className="cursor-pointer text-[0.68rem] tracking-[0.2em] uppercase text-teal-deep hover:text-terracotta transition"
              >
                Tout afficher · {active.length} sélection{active.length > 1 ? "s" : ""}
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={onClear}
              className={`cursor-pointer shrink-0 rounded-full px-4 py-2 text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 border ${
                allActive
                  ? "bg-teal-deep text-cream border-teal-deep"
                  : "bg-cream text-ink-soft border-teal/15 hover:border-teal/40"
              }`}
            >
              Tout
            </button>
            {options.map((opt) => {
              const on = active.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onToggle(opt.id)}
                  aria-pressed={on}
                  className={`cursor-pointer shrink-0 rounded-full px-4 py-2 text-[0.78rem] tracking-[0.04em] transition-all duration-300 border ${
                    on
                      ? "bg-olive text-cream border-olive shadow-[0_6px_18px_-6px_rgba(138,154,91,0.6)]"
                      : "bg-cream text-ink-soft border-teal/15 hover:border-olive/60 hover:text-olive-dark"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 12l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
