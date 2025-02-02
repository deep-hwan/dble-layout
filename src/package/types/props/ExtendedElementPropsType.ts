import { CSSObject } from "@emotion/react";
import { CursorType } from "../piece/CursorType";
import { TransitionType } from "../piece/TransitionType";

// Element
interface ExtendedElementType {
  children: React.ReactNode;
  css?: CSSObject;
  zIndex?: number;
  transition?: TransitionType;
  cursor?: CursorType;
  userSelect?: "none" | "auto" | "text" | "contain" | "all";
}

type ElementPropsType = Omit<
  ExtendedElementType,
  "size" | "sizes" | "color" | "title" | "hidden"
>;

export type { ElementPropsType, ExtendedElementType };
