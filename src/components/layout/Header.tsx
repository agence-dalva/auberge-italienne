"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/notre-cuisine", label: "Notre cuisine" },
  { href: "/carte", label: "La carte" },
  { href: "/vins", label: "Les vins" },
  { href: "/evenements", label: "Événements" },
  { href: "/livre-dor", label: "Livre d’or" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-cream/85 border-b border-teal/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm tracking-wide text-ink-soft hover:text-teal-deep transition-colors"
              >
                <span
                  className={
                    active ? "text-teal-deep" : ""
                  }
                >
                  {item.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-px bg-olive transition-all duration-500 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+33367510060"
            className="text-xs uppercase tracking-[0.18em] text-teal-deep"
          >
            03 67 51 00 60
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-teal-deep text-cream px-4 py-2 text-xs tracking-widest uppercase hover:bg-teal transition-colors"
          >
            Réserver
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex flex-col items-center justify-center w-10 h-10 rounded-full border border-teal/20 text-teal-deep"
          aria-label="Ouvrir la navigation"
        >
          <span
            className={`block h-px w-5 bg-current transition-all ${
              open ? "translate-y-[3px] rotate-45" : "-translate-y-[3px]"
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-all ${
              open ? "-translate-y-0 -rotate-45" : "translate-y-[3px]"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-cream/95 backdrop-blur-md border-t border-teal/10"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV.map((item, i) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 border-b border-teal/10 font-italic-display text-2xl ${
                        active ? "text-teal-deep" : "text-ink-soft"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="mt-6 flex items-center justify-between">
                <a
                  href="tel:+33367510060"
                  className="text-sm tracking-widest uppercase text-teal-deep"
                >
                  03 67 51 00 60
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-deep text-cream px-4 py-2 text-xs tracking-widest uppercase"
                >
                  Réserver
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
