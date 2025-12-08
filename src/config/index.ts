import type { IFontWeightConfig, INavIcon, INavLink } from "@types";

export const navLinks: INavLink[] = [
  { id: 1, name: "Projects" },
  { id: 2, name: "Resume" },
  { id: 3, name: "Contact" },
];

export const navIcons: INavIcon[] = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

export const FONT_WEIGHTS: Record<"title" | "subtitle", IFontWeightConfig> = {
  title: { min: 400, max: 900, default: 400 },
  subtitle: { min: 100, max: 400, default: 100 },
};
