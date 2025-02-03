/// <reference types="react" />
import { CSSObject } from "@emotion/react";
import { MediaQueryType } from "../piece/MediaQueryType";
type SpacingType = {
    direction?: "row" | "column";
    size?: number;
};
export interface SpacingPropsType extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "size" | "direction" | "color">, SpacingType {
    children?: never[];
    _mq?: MediaQueryType<SpacingType>;
    css?: CSSObject;
}
export {};
