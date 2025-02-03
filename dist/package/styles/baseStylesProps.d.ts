import { CSSObject } from "@emotion/react";
import { CursorType } from "../types/piece/CursorType";
import { TransitionType } from "../types/piece/TransitionType";
export declare const baseStylesProps: ({ cursor, transition, zIndex, userSelect, onClick, onMouseEnter, }: {
    cursor?: CursorType | undefined;
    transition?: TransitionType | undefined;
    zIndex?: number | undefined;
    userSelect?: string | undefined;
    onClick?: any;
    onMouseEnter?: any;
}) => CSSObject;
