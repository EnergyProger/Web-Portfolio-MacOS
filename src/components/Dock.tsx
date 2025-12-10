import { dockApps } from "@config";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import type { IDockApp } from "@types";
import { useDockAnimation } from "@hooks/useDockAnimation";
import { DOCK_APP_ICON_DATA_TOOLTIP_DELAY_SHOW } from "@constants";
import useWindowStore from "@store/window";

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef<HTMLDivElement>(null);

  useDockAnimation(dockRef);

  const handleToggleApp = (app: IDockApp) => {
    if (!app.canOpen) return;

    const appWindow = windows[app.id];

    if (!appWindow) {
      console.error(`Window ${app.id} not found`);
      return;
    }

    if (appWindow.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map((app) => (
          <div key={app.id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={app.name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={app.name}
              data-tooltip-delay-show={DOCK_APP_ICON_DATA_TOOLTIP_DELAY_SHOW}
              disabled={!app.canOpen}
              onClick={() => handleToggleApp(app)}
            >
              <img
                src={`/images/${app.icon}`}
                alt={app.name}
                loading="lazy"
                className={app.canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
