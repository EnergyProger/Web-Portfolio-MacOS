import { useLayoutEffect } from "react";
import type { RefObject } from "react";

interface UseWindowVisibilityOptions {
  ref: RefObject<HTMLElement | null>;
  isOpen: boolean;
}

/**
 * Hook to handle window visibility (display property) based on open state
 */
export const useWindowVisibility = ({
  ref,
  isOpen,
}: UseWindowVisibilityOptions) => {
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.style.display = isOpen ? "block" : "none";
  }, [ref, isOpen]);
};
