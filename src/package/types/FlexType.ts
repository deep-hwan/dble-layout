interface FlexType {
  flex?: string | number;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  isReverse?: boolean; // flex-direction
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'; // align-items
  crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'; // justify-content
  gap?: string | number;
  order?: number;
  grow?: number;
  shrink?: number; // flex-shrink
  basis?: string | number; // flex-basis
  alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch'; // align-content
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'; // align-self
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'; // flex-wrap
}

export type { FlexType };
