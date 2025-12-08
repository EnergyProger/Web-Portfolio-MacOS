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
