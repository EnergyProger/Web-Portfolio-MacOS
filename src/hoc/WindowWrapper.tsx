import { useRef } from "react";
import type { ComponentType } from "react";
import useWindowStore from "@store/window";
import { useWindowAnimation } from "@hooks/useWindowAnimation";
import { useWindowDraggable } from "@hooks/useWindowDraggable";
import { useWindowVisibility } from "@hooks/useWindowVisibility";

type WindowWrapperProps = Record<string, unknown>;
type WindowWrapperComponent<P extends WindowWrapperProps> = ComponentType<P>;

const WindowWrapper = <P extends WindowWrapperProps>(
  Component: WindowWrapperComponent<P>,
  windowKey: string
) => {
  const Wrapped = (props: P) => {
    const { windows, focusWindow } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement>(null);

    useWindowAnimation({ ref, isOpen });
    useWindowDraggable({ ref, onFocus: () => focusWindow(windowKey) });
    useWindowVisibility({ ref, isOpen });

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
