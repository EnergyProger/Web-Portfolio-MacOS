import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

interface UseWindowAnimationOptions {
  ref: RefObject<HTMLElement | null>;
  isOpen: boolean;
}

/**
 * Hook to handle window open/close animations using GSAP
 */
export const useWindowAnimation = ({
  ref,
  isOpen,
}: UseWindowAnimationOptions) => {
  useGSAP(() => {
    const element = ref.current;
    if (!element || !isOpen) return;

    element.style.display = "block";
    gsap.fromTo(
      element,
      {
        scale: 0.8,
        opacity: 0,
        y: 40,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      }
    );
  }, [isOpen]);
};
