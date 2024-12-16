/** @jsxImportSource @emotion/react */
import { cx } from '@emotion/css';
import { css } from '@emotion/react';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import { backgroundStylesProps } from '../styles/bgStylesProps';
import { borderStylesProps } from '../styles/borderStylesProps';
import { gradientStylesProps } from '../styles/gradientStylesProps';
import { positionStylesProps } from '../styles/positionStylesProps';
import { screenSizeStylesProps } from '../styles/screenSizeStylesProps';
import { shadowStylesProps } from '../styles/shadowStylesProps';
import { spaceStylesProps } from '../styles/spaceStylesProps';
import { transformStylesProps } from '../styles/transformStylesProps';
import { typographyStylesProps } from '../styles/typographyStylesProps';
import { TxtPropsType, TxtType } from '../types/_propsType';
import { TxtElementType } from '../types/elements/TxtElementsType';
import { mediaScreenSize } from '../utils/mediaScreenSize';

const Txt = React.memo(
  <T extends TxtElementType = 'p'>({
    as,
    children,
    className,
    txtSize,
    txtWeight,
    txtAlign,
    txtColor,
    txtShadow,
    txtTransform,
    txtDecoration,
    lineHeight,
    whiteSpace,
    ellipsis,
    sizes,
    position,
    padding,
    margin,
    borderRadius,
    border,
    background,
    opacity,
    gradient,
    shadow,
    axis,
    scale,
    rotate,
    zIndex,
    cursor,
    userSelect,
    transition = { time: 0.25, type: 'ease-in-out' },
    _hover,
    _focus,
    _active,
    mq = {},
    css: cssProp,
    ...rest
  }: TxtPropsType<T> & ComponentPropsWithoutRef<T>) => {
    const txtProps = {
      txtSize,
      txtWeight,
      txtAlign,
      txtColor,
      txtShadow,
      txtTransform,
      txtDecoration,
      lineHeight,
      whiteSpace,
      ellipsis,
      sizes,
      position,
      padding,
      margin,
      border,
      borderRadius,
      background,
      gradient,
      opacity,
      shadow,
      axis,
      scale,
      rotate,
    };

    const Component = as || 'div';

    //
    // layer styles
    const TxtStyles = (props: TxtType & { as?: TxtElementType }) => {
      return {
        opacity: props.opacity,
        ...typographyStylesProps({
          as: props.as,
          txtSize: props.txtSize,
          txtWeight: props.txtWeight,
          txtAlign: props.txtAlign,
          txtColor: props.txtColor,
          txtShadow: props.txtShadow,
          txtTransform: props.txtTransform,
          lineHeight: props.lineHeight,
          whiteSpace: props.whiteSpace,
          ellipsis: props.ellipsis,
          txtDecoration: props.txtDecoration,
        }),
        ...spaceStylesProps({ padding: props.padding, margin: props.margin }),
        ...positionStylesProps({ position: props.position }),
        ...screenSizeStylesProps(props.sizes),
        ...borderStylesProps({ border: props.border, borderRadius: props.borderRadius }),
        ...transformStylesProps({ axis: props.axis, scale: props.scale, rotate: props.rotate }),
        ...backgroundStylesProps(props.background),
        ...gradientStylesProps(props.gradient),
        ...shadowStylesProps(props.shadow),
      };
    };

    //
    // base style
    const baseStyle = useMemo(
      () =>
        css({
          cursor: cursor ? cursor : (rest.onClick || rest.onMouseEnter) && 'pointer',
          transition: `all ${transition.time || 0.25}s ${transition.type || 'ease-in-out'}`,
          display: 'inline-block',
          listStyle: 'none',
          outline: 'none',
          zIndex,
          userSelect,
        }),
      [cursor, rest.onClick, rest.onMouseEnter, transition, zIndex, userSelect],
    );

    //
    // media-query styles
    const mediaStyles = useMemo(
      () =>
        mediaScreenSize.map(size => {
          const breakpointKey = `w${size}` as keyof typeof mq;
          const styles = mq?.[breakpointKey];

          return css`
            @media (max-width: ${size}px) {
              ${styles ? TxtStyles(styles) : ''}
            }
          `;
        }),
      [mq],
    );

    //
    // pseudos
    const pseudoStyles = useMemo(
      () =>
        css({
          '&:hover': TxtStyles(_hover || {}),
          '&:focus': TxtStyles(_focus || {}),
          '&:active': TxtStyles(_active || {}),
        }),
      [_hover, _focus, _active],
    );

    //
    // combined styles
    const combinedStyles = useMemo(
      () => css`
        ${baseStyle}
        ${TxtStyles({
          ...txtProps,

          txtSize: txtProps.txtSize ?? 15,
          txtColor: txtProps.txtColor ?? '#5d5d5f',
          sizes: { ...txtProps.sizes },
          whiteSpace: txtProps.whiteSpace ?? 'pre-line',
          border: {
            ...txtProps.border,
            stroke: txtProps.border?.stroke ?? 0,
            color: txtProps.border?.color ?? 'transparent',
            shape: txtProps.border?.shape ?? 'solid',
          } as any,
          gradient: { ...txtProps.gradient, type: txtProps.gradient?.type ?? 'linear' } as any,
        })}
    ${mediaStyles}
    ${pseudoStyles}
    ${cssProp}
      `,
      [baseStyle, txtProps, mediaStyles, pseudoStyles, cssProp],
    );

    const combinedClassName = cx('dble-txt', className);

    return (
      <Component className={combinedClassName} css={combinedStyles} {...rest}>
        {children}
      </Component>
    );
  },
);

export default Txt;
