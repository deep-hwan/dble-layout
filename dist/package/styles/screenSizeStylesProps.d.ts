import { ScreenSizeType } from '../types/piece/ScreenSizeType';
declare const screenSizeStylesProps: (props?: ScreenSizeType) => {
    width?: undefined;
    maxWidth?: undefined;
    minWidth?: undefined;
    height?: undefined;
    maxHeight?: undefined;
    minHeight?: undefined;
} | {
    width: string | number | undefined;
    maxWidth: string | number | undefined;
    minWidth: string | number | undefined;
    height: string | number | undefined;
    maxHeight: string | number | undefined;
    minHeight: string | number | undefined;
};
export { screenSizeStylesProps };
