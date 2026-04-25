import type { Dish } from "@/data/menu";

export function MenuItem({ dish }: { dish: Dish }) {
  return (
    <article className="group relative py-5 md:py-6 border-b border-teal/10 last:border-0">
      <div className="flex items-baseline gap-4 md:gap-6">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl text-teal-deep leading-tight flex items-center flex-wrap gap-2">
            <span className="font-display tracking-wide">{dish.name}</span>
            {dish.veg && (
              <span
                className="inline-flex items-center text-[0.65rem] uppercase tracking-[0.2em] text-olive-dark"
                aria-label="Option végétarienne"
                title="Option végétarienne"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" className="mr-1">
                  <path
                    d="M12 3c5 2 8 6 8 11a7 7 0 0 1-14 0c0-5 3-9 6-11Z"
                    fill="currentColor"
                    opacity="0.85"
                  />
                </svg>
                veggie
              </span>
            )}
          </h3>
          {dish.description && (
            <p className="mt-1.5 text-sm md:text-[0.95rem] text-ink-soft/85 font-light leading-relaxed">
              {dish.description}
            </p>
          )}
        </div>
        <div className="shrink-0 font-italic-display text-lg md:text-xl text-teal-deep whitespace-nowrap">
          {dish.price}
        </div>
      </div>
    </article>
  );
}
