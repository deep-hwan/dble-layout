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
    backgroundPosition: "string" | "left" | "right" | "top" | "bottom" | "center" | undefined;
    backgroundImage: string | undefined;
    backgroundClip: "initial" | "inherit" | "border-box" | "padding-box" | "content-box" | undefined;
    filter: string | undefined;
};
export { backgroundStylesProps };
