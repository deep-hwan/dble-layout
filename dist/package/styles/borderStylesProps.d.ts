import { BorderType } from '../types/piece/BorderType';
type BorderPropsType = {
    border?: BorderType;
    borderRadius?: number | string;
};
declare const borderStylesProps: (props?: BorderPropsType) => {
    borderRadius: string | number | undefined;
    border?: undefined;
    borderBottom?: undefined;
    borderTop?: undefined;
    borderRight?: undefined;
    borderLeft?: undefined;
} | {
    border: string | undefined;
    borderBottom: string | undefined;
    borderTop: string | undefined;
    borderRight: string | undefined;
    borderLeft: string | undefined;
    borderRadius: string | number | undefined;
};
export { borderStylesProps };
