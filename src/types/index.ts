export interface INavLink {
  id: number;
  name: string;
}

export interface INavIcon {
  id: number;
  img: string;
}

export interface IFontWeightConfig {
  min: number;
  max: number;
  default: number;
}

export type FontWeightType = "title" | "subtitle";

export interface IDockApp {
  id: string;
  name: string;
  icon: string;
  icon_webp: string;
  canOpen: boolean;
}

export interface IWindow {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
}

export interface IWindowStore {
  windows: Record<string, IWindow>;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: unknown) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}

export interface ITechStack {
  category: string;
  items: string[];
}

export interface IBlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
  image_webp: string;
  link: string;
}
