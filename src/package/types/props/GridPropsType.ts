import { ElementType } from "react";
import { GridType as GridExtendedType } from "../piece/GridType";
import { MediaQueryType } from "../piece/MediaQueryType";
import { ScreenSizeType } from "../piece/ScreenSizeType";
import { ElementPropsType } from "./ExtendedElementPropsType";

export interface GridType extends GridExtendedType {
  sizes?: ScreenSizeType;
}

export interface GridPropsType<T extends ElementType>
  extends ElementPropsType,
    GridType {
  as?: T;
  mq?: MediaQueryType<GridType>;
  _hover?: Partial<GridType>;
  _focus?: Partial<GridType>;
  _active?: Partial<GridType>;
}
