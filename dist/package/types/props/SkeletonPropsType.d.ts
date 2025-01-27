/// <reference types="react" />
import { CSSObject } from "@emotion/react";
import { MediaQueryType } from "../piece/MediaQueryType";
export interface SkeletonType {
    width?: number;
    height?: number;
    primaryColor?: string;
    moveColor?: string;
    borderRadius?: number | string;
}
export interface SkeletonPropsType extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "size" | "direction" | "color">, SkeletonType {
    children?: never[];
    mq?: MediaQueryType<SkeletonType>;
    css?: CSSObject;
}
