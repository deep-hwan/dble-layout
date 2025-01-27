import { ElementType } from "react";
import { MediaQueryType } from "../piece/MediaQueryType";
import { TransitionType } from "../piece/TransitionType";
import { CSSObject } from "@emotion/react";

export interface PaddingType {
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  height?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;

  all?: number | string;
  horizontal?: number | string;
  vertical?: number | string;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
}

export interface PaddingPropsType<T extends ElementType> extends PaddingType {
  as?: T;
  children: React.ReactNode;
  css?: CSSObject;
  zIndex?: number;
  transition?: TransitionType;
  mq?: MediaQueryType<PaddingType>;
  _hover?: Partial<PaddingType>;
  _focus?: Partial<PaddingType>;
  _active?: Partial<PaddingType>;
}
