import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import type { RefObject } from "react";

interface UseWindowDraggableOptions {
  ref: RefObject<HTMLElement | null>;
  onFocus: () => void;
}

/**
 * Hook to make a window element draggable using GSAP Draggable
 */
export const useWindowDraggable = ({
  ref,
  onFocus,
}: UseWindowDraggableOptions) => {
  useGSAP(() => {
    const element = ref.current;
    if (!element) return;

    const [draggableInstance] = Draggable.create(element, {
      onPress: onFocus,
    });

    return () => draggableInstance.kill();
  }, []);
};
