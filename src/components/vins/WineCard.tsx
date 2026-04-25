import type { Wine } from "@/data/wines";

export function WineCard({ wine }: { wine: Wine }) {
  const rows: [string, string | undefined][] = [
    ["Cépage", wine.grape],
    ["Vieillissement", wine.aging],
    ["Caractéristiques", wine.character],
    ["Accords", wine.pairing],
    ["Alcool", wine.alcohol],
  ].filter(([, v]) => !!v) as [string, string][];

  return (
    <article className="rounded-3xl border border-teal/10 bg-cream-dark/40 p-6 md:p-8 hover:border-olive/40 transition-colors">
      <header className="flex flex-wrap items-baseline justify-between gap-3 pb-4 border-b border-teal/10">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-teal-deep leading-tight">
            {wine.name}
          </h3>
          {wine.appellation && (
            <div className="mt-1 text-[0.7rem] tracking-[0.22em] uppercase text-olive-dark">
              {wine.appellation}
            </div>
          )}
        </div>
        {wine.bottle && (
          <div className="font-italic-display text-xl md:text-2xl text-teal-deep whitespace-nowrap">
            {wine.bottle}
          </div>
        )}
      </header>

      {(wine.glass || wine.quarter || wine.half) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {wine.glass && (
            <span className="inline-flex items-center rounded-full border border-teal/15 px-3 py-1 text-xs text-ink-soft">
              Verre 12 cl · {wine.glass}
            </span>
          )}
          {wine.quarter && (
            <span className="inline-flex items-center rounded-full border border-teal/15 px-3 py-1 text-xs text-ink-soft">
              1/4 · {wine.quarter}
            </span>
          )}
          {wine.half && (
            <span className="inline-flex items-center rounded-full border border-teal/15 px-3 py-1 text-xs text-ink-soft">
              1/2 · {wine.half}
            </span>
          )}
        </div>
      )}

      <dl className="mt-5 divide-y divide-teal/10">
        {rows.map(([k, v]) => (
          <div key={k} className="py-3 first:pt-0 last:pb-0">
            <dt className="tracking-[0.2em] uppercase text-[0.62rem] text-olive-dark">
              {k}
            </dt>
            <dd className="mt-1.5 text-sm text-ink-soft font-light leading-relaxed text-pretty wrap-break-word hyphens-auto">
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
