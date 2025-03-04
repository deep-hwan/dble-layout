import { PositionType } from '../types/piece/PositionType';
declare const positionStylesProps: (props?: {
    position?: PositionType;
}) => {
    position?: undefined;
    top?: undefined;
    bottom?: undefined;
    left?: undefined;
    right?: undefined;
} | {
    position: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    top: string | number | undefined;
    bottom: string | number | undefined;
    left: string | number | undefined;
    right: string | number | undefined;
};
export { positionStylesProps };
