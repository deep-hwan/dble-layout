type TransformType = {
    axis?: {
        x?: string | number;
        y?: string | number;
    };
    scale?: number;
    rotate?: string | number;
};
declare const transformStylesProps: (props?: TransformType) => {
    transform?: undefined;
    scale?: undefined;
    rotate?: undefined;
} | {
    transform: string | undefined;
    scale: number | undefined;
    rotate: string | undefined;
};
export { transformStylesProps };
