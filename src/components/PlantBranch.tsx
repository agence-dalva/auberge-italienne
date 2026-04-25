"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { CSSProperties } from "react";

type Tone = "olive" | "olive-dark" | "teal" | "teal-deep" | "sage" | "cream";

const TONE_VAR: Record<Tone, string> = {
  olive: "var(--color-olive)",
  "olive-dark": "var(--color-olive-dark)",
  teal: "var(--color-teal)",
  "teal-deep": "var(--color-teal-deep)",
  sage: "var(--color-sage)",
  cream: "var(--color-cream)",
};

type Props = {
  className?: string;
  flip?: boolean;
  tone?: Tone;
  opacity?: number;
  parallaxY?: MotionValue<number>;
  rotate?: number;
  /** Largeur en px du conteneur (la branche est ratio 1:1 environ) */
  width?: number;
};

// Le PNG sert de masque alpha (luminance) : son fond blanc devient
// transparent et son tracé noir prend la couleur du background.
export function PlantBranch({
  className = "",
  flip = false,
  tone = "olive",
  opacity = 0.55,
  parallaxY,
  rotate = 0,
  width = 320,
}: Props) {
  const color = TONE_VAR[tone];

  // Style du masque isolé du wrapper motion pour éviter les conflits
  // avec les types restrictifs de framer-motion.
  const maskStyle: CSSProperties = {
    width,
    height: width,
    backgroundColor: color,
    WebkitMaskImage: "url('/images/plant.png')",
    maskImage: "url('/images/plant.png')",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{
        y: parallaxY,
        rotate,
        opacity,
        scaleX: flip ? -1 : 1,
      }}
    >
      <div style={maskStyle} />
    </motion.div>
  );
}

/** Hook : MotionValue qui se déplace en Y selon le scroll de la section ciblée. */
export function useParallax(
  targetRef: React.RefObject<HTMLElement | null>,
  distance = 120,
) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  return useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [-distance / 2, distance / 2],
  );
}
