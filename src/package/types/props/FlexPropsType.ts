import { ElementType } from "react";
import { FlexType as FlexExtendedType } from "../piece/FlexType";
import { MediaQueryType } from "../piece/MediaQueryType";
import { ScreenSizeType } from "../piece/ScreenSizeType";
import { ElementPropsType } from "./ExtendedElementPropsType";

export interface FlexType extends FlexExtendedType {
  sizes?: ScreenSizeType;
}

export interface FlexPropsType<T extends ElementType>
  extends ElementPropsType,
    FlexType {
  as?: T;
  mq?: MediaQueryType<FlexType>;
  _hover?: Partial<FlexType>;
  _focus?: Partial<FlexType>;
  _active?: Partial<FlexType>;
}
