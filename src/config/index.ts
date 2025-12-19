import type {
  FontWeightType,
  IBlogPost,
  IDockApp,
  IFontWeightConfig,
  ILocation,
  INavIcon,
  INavLink,
  ISocial,
  ITechStack,
  IWindow,
} from "@types";

export const navLinks: INavLink[] = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 2, name: "Resume", type: "resume" },
  { id: 3, name: "Contact", type: "contact" },
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

const WORK_LOCATION: ILocation = {
  id: "loc-work",
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: "work-thingiverse",
      name: "Thingiverse - Digital Designs for Physical Objects",
      icon: "/images/folder.png",
      icon_webp: "/images/folder.webp",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: "thingiverse-txt",
          name: "Thingiverse Project.txt",
          icon: "/images/txt.png",
          icon_webp: "/images/txt.webp",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Thingiverse is a website dedicated to the sharing of user-created digital design files. It is widely considered the world's largest 3D printing community and file repository.",
            `It’s built:
            - Frontend: TypeScript, React.js, Three.js, SASS, Redux, Redux-Saga
            - Backend: PHP
            - Database: MySQL
            - Testing: Jest, Cypress
            - Dev Tools: Git, GitHub, Docker
            `,
          ],
        },
        {
          id: "thingiverse-url",
          name: "thingiverse.com",
          icon: "/images/safari.png",
          icon_webp: "/images/safari.webp",
          kind: "file",
          fileType: "url",
          href: "https://www.thingiverse.com/",
          position: "top-10 right-20",
        },
        {
          id: "thingiverse-img",
          name: "thingiverse.png",
          icon: "/images/image.png",
          icon_webp: "/images/image.webp",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },
    {
      id: "work-cadtoearth",
      name: "CADtoEarth",
      icon: "/images/folder.png",
      icon_webp: "/images/folder.webp",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: "cadtoearth-txt",
          name: "CADtoEarth Project.txt",
          icon: "/images/txt.png",
          icon_webp: "/images/txt.webp",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "CADtoEarth is a technology demonstration of connecting popular CAD modeling software packages with Cesium, a geospatial 3D mapping platform for creating virtual globes.",
            `It’s built:
            - Frontend: TypeScript, React.js, Three.js, LESS
            - Backend: Express.js, ASP.NET Core
            - Database: MongoDB, Microsoft SQL Server
            - Testing: Jest, Cypress
            - Dev Tools: Git, Azure DevOps Server
            `,
          ],
        },
        {
          id: "cadtoearth-url",
          name: "CADtoEarth.com",
          icon: "/images/safari.png",
          icon_webp: "/images/safari.webp",
          kind: "file",
          fileType: "url",
          href: "https://www.amcbridge.com/technology-demos/labs/cadtoearth",
          position: "top-20 left-20",
        },
        {
          id: "cadtoearth-img",
          name: "CADtoEarth.png",
          icon: "/images/image.png",
          icon_webp: "/images/image.webp",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },
    {
      id: "work-3dviewer",
      name: "3D Model Viewer based on WebGL",
      icon: "/images/folder.png",
      icon_webp: "/images/folder.webp",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: "3dviewer-txt",
          name: "3D Model Viewer based on WebGL Project.txt",
          icon: "/images/txt.png",
          icon_webp: "/images/txt.webp",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "3D Model Viewer based on WebGL is a web application that allows you to upload 3D models to the browser and interact with them.",
            "This application has the following features: movement along a plane, rotation, intersection with a plane, zoom to a point on a 3D model.",
            `It’s built:
            - Frontend: TypeScript, React.js, Three.js, SASS
            - Backend: Express.js, ASP.NET Core
            - Database: MongoDB, Microsoft SQL Server
            - Testing: Jest, Cypress
            - Dev Tools: Git, GitLab
            `,
          ],
        },
      ],
    },
  ],
};

const ABOUT_LOCATION: ILocation = {
  id: "loc-about",
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: "about-me-png",
      name: "me.png",
      icon: "/images/image.png",
      icon_webp: "/images/image.webp",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/user-1.png",
      imageUrl_webp: "/images/user-1.webp",
    },
    {
      id: "about-casual-png",
      name: "casual-me.png",
      icon: "/images/image.png",
      icon_webp: "/images/image.webp",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/user-2.png",
      imageUrl_webp: "/images/user-2.webp",
    },
    {
      id: "about-conf-png",
      name: "conference-me.png",
      icon: "/images/image.png",
      icon_webp: "/images/image.webp",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/user-3.png",
      imageUrl_webp: "/images/user-3.webp",
    },
    {
      id: "about-desc-txt",
      name: "about-me.txt",
      icon: "/images/txt.png",
      icon_webp: "/images/txt.webp",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      imageUrl: "/images/user-1.png",
      imageUrl_webp: "/images/user-1.webp",
      description: [
        "Hey! I’m Eduard 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, Typescript, React, Node.js, PHP, C# - and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
      ],
    },
  ],
};

const RESUME_LOCATION: ILocation = {
  id: "loc-resume",
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: "resume-pdf",
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      icon_webp: "/images/pdf.webp",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION: ILocation = {
  id: "loc-trash",
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: "trash-1",
      name: "trash-1.png",
      icon: "/images/image.png",
      icon_webp: "/images/image.webp",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
      imageUrl_webp: "/images/trash-1.webp",
    },
    {
      id: "trash-2",
      name: "trash-2.png",
      icon: "/images/image.png",
      icon_webp: "/images/image.webp",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
      imageUrl_webp: "/images/trash-2.webp",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

export const socials: ISocial[] = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#000000",
    link: "#",
  },
  {
    id: 2,
    text: "Telegram",
    icon: "/icons/telegram.svg",
    bg: "#0088cc",
    link: "#",
  },
  {
    id: 3,
    text: "Gmail",
    icon: "/icons/gmail.svg",
    bg: "#ea4335",
    link: "mailto:test@gmail.com",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077b5",
    link: "#",
  },
];
