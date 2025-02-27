import { CSSObject } from "@emotion/react";
import { ElementType } from "react";
import { GridType as GridExtendedType } from "../piece/GridType";
import { LayoutElementType } from "../piece/LayoutElementType";
import { MediaQueryType } from "../piece/MediaQueryType";
import { ExcludedProps } from "../piece/PipeLinePropsType";
import { TransitionType } from "../piece/TransitionType";
export interface GridType extends GridExtendedType {
    w?: number | string;
    maxW?: number | string;
    minW?: number | string;
    h?: number | string;
    maxH?: number | string;
    minH?: number | string;
    templateColumns?: string;
    templateRows?: string;
    templateAreas?: string;
    gap?: string | number;
    autoFlow?: "row" | "column" | "dense" | "row dense" | "column dense";
    autoColumns?: string;
    autoRows?: string;
    justifyItems?: "start" | "end" | "center" | "stretch";
    alignItems?: "start" | "end" | "center" | "stretch";
    justifyContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around";
    alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around";
}
interface GridPropsType<T extends ElementType = "div"> extends Omit<GridType, ExcludedProps> {
    as?: T;
    children: React.ReactNode;
    css?: CSSObject;
    zIndex?: number;
    transition?: TransitionType;
    _mq?: MediaQueryType<GridType>;
}
export type GridLayoutElement = Omit<GridPropsType<LayoutElementType>, ExcludedProps>;
export {};
