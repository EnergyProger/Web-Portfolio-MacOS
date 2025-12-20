import { locations } from "@config";
import { useDesktopDraggable } from "@hooks/useDesktopDraggable";
import type { IFile } from "@types";
import clsx from "clsx";
import useLocationStore from "@store/location";
import useWindowStore from "@store/window";
import { DOCK_APP_WINDOW_KEY_FINDER } from "@constants";

const Home = () => {
  const projects = locations.work.children ?? [];
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openProjectFinder = (project: IFile) => {
    setActiveLocation(project);
    openWindow(DOCK_APP_WINDOW_KEY_FINDER);
  };

  useDesktopDraggable({ items: projects });

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            data-id={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => openProjectFinder(project)}
          >
            <picture>
              <source type="image/webp" srcSet="/images/folder.webp" />
              <img src="/images/folder.png" alt={project.name} loading="lazy" />
            </picture>
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
