interface FlexType {
    flex?: string | number;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    isReverse?: boolean;
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    gap?: string | number;
    order?: number;
    grow?: number;
    shrink?: number;
    basis?: string | number;
    alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}
export type { FlexType };
