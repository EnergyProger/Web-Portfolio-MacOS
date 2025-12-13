import type {
  FontWeightType,
  IBlogPost,
  IDockApp,
  IFontWeightConfig,
  INavIcon,
  INavLink,
  ITechStack,
  IWindow,
} from "@types";

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

export const FONT_WEIGHTS: Record<FontWeightType, IFontWeightConfig> = {
  title: { min: 400, max: 900, default: 400 },
  subtitle: { min: 100, max: 400, default: 100 },
};

export const dockApps: IDockApp[] = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    icon_webp: "finder.webp",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    icon_webp: "safari.webp",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    icon_webp: "photos.webp",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    icon_webp: "contact.webp",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    icon_webp: "terminal.webp",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    icon_webp: "trash.webp",
    canOpen: true,
  },
];

export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG: Record<string, IWindow> = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export const techStack: ITechStack[] = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "SASS", "CSS", "LESS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PHP"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

export const blogPosts: IBlogPost[] = [
  {
    id: 1,
    date: "Dec 31, 2023",
    title:
      "METHOD OF DETECTING OUTWARD MANIFESTATIONS OF VIOLENCE IN VIDEO STREAMS USING NEURAL NETWORK TOOLS",
    image: "/images/blog-1.png",
    image_webp: "/images/blog-1.webp",
    link: "https://heraldts.khmnu.edu.ua/index.php/heraldts/article/view/414/418",
  },
];
