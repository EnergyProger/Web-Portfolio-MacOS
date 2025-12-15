import clsx from "clsx";
import { locations } from "@config";
import useLocationStore from "@store/location";
import type { ILocation, IFile } from "@types";

const FinderSidebar = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();

  const renderList = (items: (ILocation | IFile)[], name: string) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation?.id ? "active" : "not-active"
            )}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-4"
              loading="lazy"
            />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="sidebar">
      {renderList(Object.values(locations), "Favorites")}
      {renderList(locations.work.children, "Work")}
    </div>
  );
};

export default FinderSidebar;
