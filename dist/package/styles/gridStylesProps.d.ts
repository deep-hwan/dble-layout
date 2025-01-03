import { GridType } from '../types/piece/GridType';
declare const gridStylesProps: (props?: GridType) => {
    gridTemplateColumns?: undefined;
    gridTemplateRows?: undefined;
    gridTemplateAreas?: undefined;
    gridGap?: undefined;
    gridAutoFlow?: undefined;
    gridAutoColumns?: undefined;
    gridAutoRows?: undefined;
    justifyItems?: undefined;
    alignItems?: undefined;
    justifyContent?: undefined;
    alignContent?: undefined;
} | {
    gridTemplateColumns: string | undefined;
    gridTemplateRows: string | undefined;
    gridTemplateAreas: string | undefined;
    gridGap: string | number | undefined;
    gridAutoFlow: "row" | "column" | "dense" | "row dense" | "column dense" | undefined;
    gridAutoColumns: string | undefined;
    gridAutoRows: string | undefined;
    justifyItems: "center" | "start" | "end" | "stretch" | undefined;
    alignItems: "center" | "start" | "end" | "stretch" | undefined;
    justifyContent: "center" | "start" | "end" | "stretch" | "space-between" | "space-around" | undefined;
    alignContent: "center" | "start" | "end" | "stretch" | "space-between" | "space-around" | undefined;
};
export { gridStylesProps };
