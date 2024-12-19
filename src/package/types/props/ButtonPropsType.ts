import { BorderType } from '../piece/BorderType';
import { FlexType } from '../piece/FlexType';
import { GradientType } from '../piece/GradientType';
import { MediaQueryType } from '../piece/MediaQueryType';
import { PositionType } from '../piece/PositionType';
import { ScreenSizeType } from '../piece/ScreenSizeType';
import { ShadowType } from '../piece/ShadowType';
import { TrafficType } from '../piece/TrafficType';
import { TypographyType } from '../piece/TypographyType';
import { ElementPropsType } from './ExtendedElementPropsType';

export interface ButtonType extends TypographyType {
  display?: 'flex' | 'none';
  sizes?: ScreenSizeType;
  flex?: FlexType;
  position?: PositionType;
  padding?: TrafficType;
  margin?: TrafficType;
  backgroundFill?: string;
  gradient?: GradientType | never;
  border?: BorderType;
  borderRadius?: number | string;
  shadow?: ShadowType;
  opacity?: number;
  scale?: number;
  rotate?: string | number;
  axis?: { x?: string | number; y?: string | number };
}

//
// TouchableOpacity
export interface ButtonPropsType extends ElementPropsType, ButtonType {
  mq?: MediaQueryType<ButtonType>;
  _hover?: Partial<ButtonType>;
  _focus?: Partial<ButtonType>;
  _active?: Partial<ButtonType>;
  _disabled?: Partial<ButtonType>;
}
