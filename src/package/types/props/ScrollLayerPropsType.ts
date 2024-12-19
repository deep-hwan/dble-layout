import { ElementType } from 'react';
import { BackgroundType } from '../piece/BackgroundType';
import { BorderType } from '../piece/BorderType';
import { FlexType } from '../piece/FlexType';
import { GradientType } from '../piece/GradientType';
import { MediaQueryType } from '../piece/MediaQueryType';
import { ScreenSizeType } from '../piece/ScreenSizeType';
import { ShadowType } from '../piece/ShadowType';
import { TrafficType } from '../piece/TrafficType';
import { ElementPropsType } from './ExtendedElementPropsType';

export type ScrollLayerElementType = 'div' | 'main' | 'section' | 'article' | 'aside' | 'ul';

export interface ScrollLayerType {
  display?: 'flex' | 'none';
  sizes?: ScreenSizeType;
  flex?: FlexType;
  padding?: TrafficType;
  margin?: TrafficType;
  background?: BackgroundType;
  gradient?: GradientType | never;
  border?: BorderType;
  borderRadius?: number | string;
  shadow?: ShadowType;
  opacity?: number;
  forceVisible?: 'x' | 'y' | 'xy';
  autoHide?: boolean;
}

export interface ScrollLayerPropsType<T extends ElementType>
  extends Omit<ElementPropsType, 'cursor' | 'userSelect'>,
    ScrollLayerType {
  as?: T;
  mq?: MediaQueryType<ScrollLayerType>;
}
