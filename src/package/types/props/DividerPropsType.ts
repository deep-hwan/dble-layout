import { MediaQueryType } from '../piece/MediaQueryType';
import { TrafficType } from '../piece/TrafficType';

// Divider
export interface DividerType {
  direction?: 'horizontal' | 'vertical';
  width?: number | string;
  height?: number | string;
  color?: string;
  spacing?: TrafficType;
}

export interface DividerPropsType
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'size' | 'direction' | 'color'>,
    DividerType {
  children?: never[];
  mq?: MediaQueryType<DividerType>;
}
