import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import type { RefObject } from "react";

interface UseWindowDraggableOptions {
  ref: RefObject<HTMLElement | null>;
  onFocus: () => void;
  dependencies?: unknown[];
}

/**
 * Hook to make a window element draggable using GSAP Draggable
 */
export const useWindowDraggable = ({
  ref,
  onFocus,
  dependencies = [],
}: UseWindowDraggableOptions) => {
  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      const trigger = element.querySelector(".window-header");

      if (!trigger) return;

      const [draggableInstance] = Draggable.create(element, {
        trigger,
        onPress: onFocus,
      });

      return () => draggableInstance.kill();
    },
    { dependencies }
  );
};
