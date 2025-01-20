import { ElementType } from "react";
import { MediaQueryType } from "../piece/MediaQueryType";
import { ElementPropsType } from "./ExtendedElementPropsType";
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
export interface PaddingPropsType<T extends ElementType> extends Omit<ElementPropsType, "userSelect">, PaddingType {
    as?: T;
    mq?: MediaQueryType<PaddingType>;
    _hover?: Partial<PaddingType>;
    _focus?: Partial<PaddingType>;
    _active?: Partial<PaddingType>;
}
