import { FINDER_WINDOW_FILETYPE, FINDER_WINDOW_KIND } from "@constants";
import useLocationStore from "@store/location";
import useWindowStore from "@store/window";
import type { IFile } from "@types";

const FinderContent = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openItem = (item: IFile) => {
    if (item.fileType === FINDER_WINDOW_FILETYPE.PDF) {
      return openWindow("resume");
    } else if (item.kind === FINDER_WINDOW_KIND.FOLDER) {
      return setActiveLocation(item);
    } else if (
      [FINDER_WINDOW_FILETYPE.URL].includes(item.fileType!) &&
      item.href
    ) {
      return window.open(item.href, "_blank");
    } else {
      return openWindow(`${item.fileType}${item.kind}`, item);
    }
  };

  return (
    <ul className="content">
      {activeLocation?.children?.map((item) => (
        <li
          key={item.id}
          className={item.position}
          onClick={() => openItem(item)}
        >
          <picture>
            <source type="image/webp" srcSet={item.icon_webp} />
            <img src={item.icon} alt={item.name} loading="lazy" />
          </picture>
          <p className="text-sm font-medium truncate">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FinderContent;
