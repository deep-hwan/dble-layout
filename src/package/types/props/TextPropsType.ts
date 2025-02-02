import { CSSObject } from "@emotion/react";
import { ElementType, HTMLAttributes } from "react";
import { MediaQueryType } from "../piece/MediaQueryType";
import { TrafficType } from "../piece/TrafficType";
import { TransitionType } from "../piece/TransitionType";

export type TextElementType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "strong"
  | "b"
  | "i"
  | "p"
  | "span"
  | "div"
  | "li"
  | "label";

export interface TextType
  extends Omit<
    HTMLAttributes<HTMLParagraphElement>,
    "size" | "sizes" | "color" | "title" | "hidden"
  > {
  w?: number | string;
  maxW?: number | string;
  minW?: number | string;
  h?: number | string;
  maxH?: number | string;
  minH?: number | string;
  padding?: TrafficType;
  margin?: TrafficType;
  size?: number | string;
  weight?: "lighter" | "normal" | "medium" | "bold";
  align?: "start" | "end" | "center";
  color?: string;
  shadow?: string;
  decoration?: "underline" | string;
  transform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
  lineHeight?: number | string;
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
  ellipsis?: { isActive?: boolean; line?: number };
  opacity?: number;
  scale?: number;
  rotate?: string | number;
}

export interface TextPropsType<T extends ElementType = "p"> extends TextType {
  as?: T;
  mq?: MediaQueryType<TextType>;
  _hover?: Partial<TextType>;
  _focus?: Partial<TextType>;
  _active?: Partial<TextType>;

  children: React.ReactNode;
  css?: CSSObject;
  zIndex?: number;
  transition?: TransitionType;
  userSelect?: "none" | "auto" | "text" | "contain" | "all";
}
