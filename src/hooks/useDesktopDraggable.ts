import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import type { IFile } from "@types";

interface UseDesktopDraggableProps {
  items: IFile[];
}

/**
 * A custom hook that enables draggable functionality for desktop icons using GSAP.
 * It handles:
 * 1. Restoring saved positions from localStorage on mount.
 * 2. initializing Draggable on .folder elements.
 * 3. Saving the new position to localStorage when dragging ends.
 *
 * @param items - The list of file items (desktop icons) to manage.
 */
export const useDesktopDraggable = ({ items }: UseDesktopDraggableProps) => {
  useGSAP(() => {
    const savedPositions = JSON.parse(
      localStorage.getItem("desktop_positions") || "{}"
    );

    items.forEach((item) => {
      const pos = savedPositions[item.id];
      if (pos) {
        gsap.set(`.folder[data-id="${item.id}"]`, { x: pos.x, y: pos.y });
      }
    });

    Draggable.create(".folder", {
      onDragEnd: function () {
        const id = this.target.getAttribute("data-id");
        if (id) {
          const savedPositions = JSON.parse(
            localStorage.getItem("desktop_positions") || "{}"
          );
          savedPositions[id] = { x: this.x, y: this.y };
          localStorage.setItem(
            "desktop_positions",
            JSON.stringify(savedPositions)
          );
        }
      },
    });
  }, [items]);
};
