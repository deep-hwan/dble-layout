import { HTMLAttributes } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: never[];
    size?: number;
    storkeSize?: number;
    color?: string;
}
export declare const LoadingSpinner: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>>;
export {};
