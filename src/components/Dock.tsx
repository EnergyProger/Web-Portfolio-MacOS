import { dockApps } from "@config";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import type { IDockApp } from "@types";
import { useDockAnimation } from "@hooks/useDockAnimation";
import { DOCK_APP_ICON_DATA_TOOLTIP_DELAY_SHOW } from "@constants";

const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null);

  useDockAnimation(dockRef);

  const handleToggleApp = (app: IDockApp) => {
    //TODO: Implement Open Window Logic
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
