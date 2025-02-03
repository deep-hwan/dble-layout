import { CSSObject } from "@emotion/react";
import { ElementType, HTMLAttributes } from "react";
import { LayoutElementType } from "../piece/LayoutElementType";
import { MediaQueryType } from "../piece/MediaQueryType";
import { ExcludedProps } from "../piece/PipeLinePropsType";
import { TransitionType } from "../piece/TransitionType";
export interface FlexType extends Omit<HTMLAttributes<HTMLElement>, ExcludedProps> {
    w?: number | string;
    maxW?: number | string;
    minW?: number | string;
    h?: number | string;
    maxH?: number | string;
    minH?: number | string;
    flex?: string | number;
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    isReverse?: boolean;
    align?: "start" | "end" | "center" | "baseline" | "stretch";
    crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly";
    gap?: string | number;
    order?: number;
    grow?: number;
    shrink?: number;
    basis?: string | number;
    alignContent?: "start" | "end" | "center" | "space-between" | "space-around" | "stretch";
    alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
}
interface FlexPropsType<T extends ElementType = "div"> extends Omit<FlexType, ExcludedProps> {
    as?: T;
    children: React.ReactNode;
    css?: CSSObject;
    zIndex?: number;
    transition?: TransitionType;
    _mq?: MediaQueryType<FlexType>;
    _hover?: Partial<FlexType>;
    _focus?: Partial<FlexType>;
    _active?: Partial<FlexType>;
}
export type FlexLayoutElement = Omit<FlexPropsType<LayoutElementType>, ExcludedProps>;
export {};
