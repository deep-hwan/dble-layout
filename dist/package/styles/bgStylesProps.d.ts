import { BackgroundType } from '../types/piece/BackgroundType';
declare const backgroundStylesProps: (props?: BackgroundType) => {
    backgroundColor?: undefined;
    backgroundRepeat?: undefined;
    backgroundSize?: undefined;
    backgroundPosition?: undefined;
    backgroundImage?: undefined;
    backgroundClip?: undefined;
    filter?: undefined;
} | {
    backgroundColor: string | undefined;
    backgroundRepeat: "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat" | undefined;
    backgroundSize: string | undefined;
    backgroundPosition: "string" | "top" | "bottom" | "center" | "left" | "right" | undefined;
    backgroundImage: string | undefined;
    backgroundClip: "border-box" | "padding-box" | "content-box" | "initial" | "inherit" | undefined;
    filter: string | undefined;
};
export { backgroundStylesProps };
