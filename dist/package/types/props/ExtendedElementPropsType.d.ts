/// <reference types="react" />
import { CursorType } from "../piece/CursorType";
import { TransitionType } from "../piece/TransitionType";
interface ExtendedElementType {
    children: React.ReactNode;
    css?: any;
    zIndex?: number;
    transition?: TransitionType;
    cursor?: CursorType;
    userSelect?: "none" | "auto" | "text" | "contain" | "all";
}
type ElementPropsType = Omit<ExtendedElementType, "size" | "color" | "title">;
export type { ElementPropsType };
