import { CSSObject } from "@emotion/react";
import { ElementType } from "react";
import { MediaQueryType } from "../piece/MediaQueryType";
import { ScreenSizeType } from "../piece/ScreenSizeType";
import { TransitionType } from "../piece/TransitionType";
export interface PositionType {
    sizes?: ScreenSizeType;
    type?: "static" | "relative" | "fixed" | "absolute" | "sticky";
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    axis?: {
        x?: string | number;
        y?: string | number;
    };
}
export interface PositionPropsType<T extends ElementType> extends PositionType {
    as?: T;
    children: React.ReactNode;
    css?: CSSObject;
    zIndex?: number;
    transition?: TransitionType;
    mq?: MediaQueryType<PositionType>;
    _hover?: Partial<PositionType>;
    _focus?: Partial<PositionType>;
    _active?: Partial<PositionType>;
}
