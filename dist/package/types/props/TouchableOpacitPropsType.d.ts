import { ElementType } from "react";
import { BackgroundType } from "../piece/BackgroundType";
import { BorderType } from "../piece/BorderType";
import { FlexType } from "../piece/FlexType";
import { GradientType } from "../piece/GradientType";
import { MediaQueryType } from "../piece/MediaQueryType";
import { PositionType } from "../piece/PositionType";
import { ScreenSizeType } from "../piece/ScreenSizeType";
import { ShadowType } from "../piece/ShadowType";
import { TrafficType } from "../piece/TrafficType";
import { TypographyType } from "../piece/TypographyType";
import { ElementPropsType } from "./ExtendedElementPropsType";
export type TouchableOpacityElementsType = "div" | "ul" | "ol" | "li" | "button" | "a";
export interface TouchableOpacityType extends TypographyType {
    display?: "flex" | "none";
    sizes?: ScreenSizeType;
    flex?: FlexType;
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
    axis?: {
        x?: string | number;
        y?: string | number;
    };
}
export interface TouchableOpacitPropsType<T extends ElementType = "div"> extends Omit<ElementType, "size" | "color" | "onClick">, ElementPropsType, TouchableOpacityType {
    as?: T;
    mq?: MediaQueryType<TouchableOpacityType>;
    _hover?: Partial<TouchableOpacityType>;
    _focus?: Partial<TouchableOpacityType>;
    _active?: Partial<TouchableOpacityType>;
    _disabled?: Partial<TouchableOpacityType>;
}
