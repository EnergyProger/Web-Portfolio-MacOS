import dayjs from "dayjs";
import { navIcons, navLinks } from "@config";
import useWindowStore from "@store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Eduard's Portfolio</p>
      </div>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id} onClick={() => openWindow(link.type)}>
            <p>{link.name}</p>
          </li>
        ))}
      </ul>
      <div>
        <ul>
          {navIcons.map((icon) => (
            <li key={icon.id}>
              <img
                src={icon.img}
                className="icon-hover"
                alt={`icon-${icon.id}`}
              />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
