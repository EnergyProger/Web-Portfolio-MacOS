import gsap from "gsap";
import { useEffect, type RefObject } from "react";
import { FONT_WEIGHTS } from "@config";
import type { FontWeightType } from "@types";

/**
 * Custom hook that sets up font weight animation on hover for text elements.
 * @param ref - Reference to the container element
 * @param type - The font weight configuration type ("title" or "subtitle")
 */
export const useTextHover = (
  ref: RefObject<HTMLElement | null>,
  type: FontWeightType
) => {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (
      letter: Element,
      weight: number,
      duration: number = 0.25
    ) => {
      return gsap.to(letter, {
        duration,
        ease: "power2.out",
        fontVariationSettings: `"wght" ${weight}`,
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { left } = container.getBoundingClientRect();
      const mouseX = event.clientX - left;

      letters.forEach((letter) => {
        const { left: l, width: w } = letter.getBoundingClientRect();
        const distance = Math.abs(mouseX - (l - left + w / 2));
        const intensity = Math.exp(-(distance ** 2) / 2000);

        animateLetter(letter, min + (max - min) * intensity);
      });
    };

    const handleMouseLeave = () =>
      letters.forEach((letter) => animateLetter(letter, base, 0.3));

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, type]);
};
