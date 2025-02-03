import { CSSObject } from "@emotion/react";
import { ElementType, HTMLAttributes } from "react";
import { LayoutElementType } from "../piece/LayoutElementType";
import { MediaQueryType } from "../piece/MediaQueryType";
import { ExcludedProps } from "../piece/PipeLinePropsType";
import { TransitionType } from "../piece/TransitionType";
export interface PaddingType extends Omit<HTMLAttributes<HTMLElement>, ExcludedProps> {
    w?: number | string;
    maxW?: number | string;
    minW?: number | string;
    h?: number | string;
    maxH?: number | string;
    minH?: number | string;
    all?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
}
export interface PaddingPropsType<T extends ElementType = "div"> extends Omit<PaddingType, ExcludedProps> {
    as?: T;
    children: React.ReactNode;
    css?: CSSObject;
    zIndex?: number;
    transition?: TransitionType;
    _mq?: MediaQueryType<PaddingType>;
    _hover?: Partial<PaddingType>;
    _focus?: Partial<PaddingType>;
    _active?: Partial<PaddingType>;
}
export type PaddingLayoutElement = Omit<PaddingPropsType<LayoutElementType>, ExcludedProps>;
