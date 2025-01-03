import { TrafficType } from '../types/piece/TrafficType';
declare const spaceStylesProps: (props?: {
    padding?: TrafficType;
    margin?: TrafficType;
}) => {
    paddingTop?: undefined;
    paddingBottom?: undefined;
    paddingRight?: undefined;
    paddingLeft?: undefined;
    marginTop?: undefined;
    marginBottom?: undefined;
    marginRight?: undefined;
    marginLeft?: undefined;
} | {
    paddingTop: string | number | undefined;
    paddingBottom: string | number | undefined;
    paddingRight: string | number | undefined;
    paddingLeft: string | number | undefined;
    marginTop: string | number | undefined;
    marginBottom: string | number | undefined;
    marginRight: string | number | undefined;
    marginLeft: string | number | undefined;
};
export { spaceStylesProps };
