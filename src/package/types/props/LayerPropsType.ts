import { ElementType } from "react";
import { BackgroundType } from "../piece/BackgroundType";
import { BorderType } from "../piece/BorderType";
import { FlexType } from "../piece/FlexType";
import { GradientType } from "../piece/GradientType";
import { GridType } from "../piece/GridType";
import { MediaQueryType } from "../piece/MediaQueryType";
import { PositionType } from "../piece/PositionType";
import { ScreenSizeType } from "../piece/ScreenSizeType";
import { ShadowType } from "../piece/ShadowType";
import { TrafficType } from "../piece/TrafficType";
import { ElementPropsType } from "./ExtendedElementPropsType";

export interface LayerType {
  display?: "flex" | "grid" | "none";
  sizes?: ScreenSizeType;
  flex?: FlexType;
  grid?: GridType;
  position?: PositionType;
  padding?: TrafficType;
  margin?: TrafficType;
  background?: BackgroundType;
  gradient?: GradientType | never;
  border?: BorderType;
  borderRadius?: number | string;
  shadow?: ShadowType;
  opacity?: number;
  scale?: number;
  rotate?: string | number;
  axis?: { x?: string | number; y?: string | number };
}

export interface LayerPropsType<T extends ElementType>
  extends ElementPropsType,
    LayerType {
  as?: T;
  mq?: MediaQueryType<LayerType>;
  _hover?: Partial<LayerType>;
  _focus?: Partial<LayerType>;
  _active?: Partial<LayerType>;
}
