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
    backgroundPosition: "string" | "bottom" | "left" | "right" | "top" | "center" | undefined;
    backgroundImage: string | undefined;
    backgroundClip: "inherit" | "initial" | "border-box" | "padding-box" | "content-box" | undefined;
    filter: string | undefined;
};
export { backgroundStylesProps };
