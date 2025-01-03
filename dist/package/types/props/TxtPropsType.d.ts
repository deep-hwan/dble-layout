import { ElementType } from 'react';
import { BackgroundType } from '../piece/BackgroundType';
import { BorderType } from '../piece/BorderType';
import { GradientType } from '../piece/GradientType';
import { MediaQueryType } from '../piece/MediaQueryType';
import { PositionType } from '../piece/PositionType';
import { ScreenSizeType } from '../piece/ScreenSizeType';
import { ShadowType } from '../piece/ShadowType';
import { TrafficType } from '../piece/TrafficType';
import { TypographyType } from '../piece/TypographyType';
import { ElementPropsType } from './ExtendedElementPropsType';
export type TxtElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'b' | 'i' | 'p' | 'span' | 'div';
export interface TxtType extends TypographyType {
    sizes?: ScreenSizeType;
    position?: PositionType;
    padding?: TrafficType;
    margin?: TrafficType;
    background?: BackgroundType;
    gradient?: GradientType | never;
    border?: BorderType;
    borderRadius?: number | string;
    shadow?: ShadowType;
    opacity?: number;
    scale?: number;
    rotate?: string | number;
    axis?: {
        x?: string | number;
        y?: string | number;
    };
}
export interface TxtPropsType<T extends ElementType = 'p'> extends ElementPropsType, TxtType {
    as?: T;
    mq?: MediaQueryType<TxtType>;
    _hover?: Partial<TxtType>;
    _focus?: Partial<TxtType>;
    _active?: Partial<TxtType>;
}
