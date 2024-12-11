import { ElementType, HTMLAttributes } from 'react';
import { BackgroundType } from './BackgroundType';
import { BorderType } from './BorderType';
import { CursorType } from './CursorType';
import { FlexType } from './FlexType';
import { GradientType } from './GradientType';
import { GridType } from './GridType';
import { MediaQueryType } from './MediaQueryType';
import { PositionTypes } from './PositionTypes';
import { ScreenSizeType } from './ScreenSizeType';
import { ShadowType } from './ShadowType';
import { TrafficType } from './TrafficType';
import { TransformType } from './TransformType';
import { TransitionType } from './TransitionType';

//
// Element
interface ElementPropsType {
  children: React.ReactNode;
  css?: any;
  zIndex?: number;
  transition?: TransitionType;
  cursor?: CursorType;
  userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all';
}

//
// Flex
export interface FlexPropsType<T extends ElementType> extends ElementPropsType, FlexType {
  as?: T;
  mq?: {
    w1440?: FlexType;
    w1200?: FlexType;
    w1080?: FlexType;
    w768?: FlexType;
    w600?: FlexType;
    w438?: FlexType;
  };
  _hover?: Partial<FlexType>;
  _focus?: Partial<FlexType>;
  _active?: Partial<FlexType>;
}

//
// Layer
export interface LayerType extends BorderType, TransformType {
  display?: 'flex' | 'grid';
  sizes?: ScreenSizeType;
  flex?: FlexType;
  grid?: GridType;
  position?: PositionTypes;
  padding?: TrafficType;
  margin?: TrafficType;
  background?: BackgroundType;
  gradient?: GradientType | never;
  shadow?: ShadowType;
}

export interface LayerPropsType<T extends ElementType> extends ElementPropsType, LayerType {
  as?: T;
  mq?: MediaQueryType<LayerType>;
  _hover?: Partial<LayerType>;
  _focus?: Partial<LayerType>;
  _active?: Partial<LayerType>;
  _disabled?: Partial<LayerType>;
}

//
// Spacing
type SpacingType = { direction?: 'row' | 'column'; size?: number };

export interface SpacingPropsType extends HTMLAttributes<HTMLDivElement>, SpacingType {
  children?: never[];
  mq?: MediaQueryType<SpacingType>;
}

//
// Divider
export interface DividerType {
  direction?: 'horizontal' | 'vertical';
  width?: number | string;
  height?: number | string;
  color?: string;
  spacing?: TrafficType;
}

//
// Divider
export interface DividerPropsType extends HTMLAttributes<HTMLDivElement>, DividerType {
  children?: never[];
  mq?: MediaQueryType<DividerType>;
}

//
// Skeleton
export interface SkeletonType {
  width?: number;
  height?: number;
  primaryColor?: string;
  moveColor?: string;
  borderRadius?: number | string;
}

export interface SkeletonPropsType extends HTMLAttributes<HTMLDivElement>, SkeletonType {
  children?: never[];
  mq?: MediaQueryType<SkeletonType>;
}
