import { useRef } from "react";
import type { ComponentType } from "react";
import useWindowStore from "@store/window";
import { useWindowAnimation } from "@hooks/useWindowAnimation";
import { useWindowDraggable } from "@hooks/useWindowDraggable";
import { useWindowVisibility } from "@hooks/useWindowVisibility";

type InjectedProps = { isOpen: boolean };
type WindowWrapperComponent<P extends Record<string, unknown>> = ComponentType<
  P & InjectedProps
>;

const WindowWrapper = <P extends Record<string, unknown>>(
  Component: WindowWrapperComponent<P>,
  windowKey: string
) => {
  const Wrapped = (props: P) => {
    const { windows, focusWindow } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement>(null);

    useWindowAnimation({ ref, isOpen });
    useWindowDraggable({
      ref,
      onFocus: () => focusWindow(windowKey),
      dependencies: [isOpen],
    });
    useWindowVisibility({ ref, isOpen });

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} isOpen={isOpen} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
