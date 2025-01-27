import { CSSObject } from "@emotion/react";
import { ElementType } from "react";
import { MediaQueryType } from "../piece/MediaQueryType";
import { TransitionType } from "../piece/TransitionType";
export interface BackgroundType {
    width?: number | string;
    maxWidth?: number | string;
    minWidth?: number | string;
    height?: number | string;
    maxHeight?: number | string;
    minHeight?: number | string;
    fill?: string;
    radius?: number | string;
    stroke?: number | string;
    strokeColor?: string;
    strokePosition?: "top" | "bottom" | "left" | "right";
    border?: {
        radius?: number | string;
        stroke?: number;
        position?: "all" | "left" | "right" | "top" | "bottom";
        color?: string;
        shape?: "solid" | "dotted" | "dashed" | "double" | "outset" | "inset" | "groove" | "ridge";
    };
}
export interface BackgroundPropsType<T extends ElementType> extends BackgroundType {
    as?: T;
    children: React.ReactNode;
    css?: CSSObject;
    zIndex?: number;
    transition?: TransitionType;
    mq?: MediaQueryType<BackgroundType>;
    _hover?: Partial<BackgroundType>;
    _focus?: Partial<BackgroundType>;
    _active?: Partial<BackgroundType>;
}
