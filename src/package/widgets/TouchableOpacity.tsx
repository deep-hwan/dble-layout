/** @jsxImportSource @emotion/react */
import { cx } from '@emotion/css';
import { css } from '@emotion/react';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import { backgroundStylesProps } from '../styles/bgStylesProps';
import { borderStylesProps } from '../styles/borderStylesProps';
import { flexStylesProps } from '../styles/flexStylesProps';
import { gradientStylesProps } from '../styles/gradientStylesProps';
import { positionStylesProps } from '../styles/positionStylesProps';
import { screenSizeStylesProps } from '../styles/screenSizeStylesProps';
import { shadowStylesProps } from '../styles/shadowStylesProps';
import { spaceStylesProps } from '../styles/spaceStylesProps';
import { transformStylesProps } from '../styles/transformStylesProps';
import { typographyStylesProps } from '../styles/typographyStylesProps';
import { TouchableOpacitPropsType, TouchableOpacityElementsType, TouchableOpacityType } from '../types';
import { mediaScreenSize } from '../utils/mediaScreenSize';

const TouchableOpacity = React.memo(
  <T extends TouchableOpacityElementsType = 'div'>({
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
    display,
    sizes,
    flex,
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
    userSelect = 'none',
    transition = { time: 0.2, type: 'ease-in-out' },
    _hover,
    _focus,
    _active,
    _disabled,
    mq = {},
    css: cssProp,
    ...rest
  }: TouchableOpacitPropsType<T> & ComponentPropsWithoutRef<T>) => {
    const pPs = {
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
      display,
      sizes,
      flex,
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
    // extended props styles
    const ExtendedStyles = (props: TouchableOpacityType & { as?: TouchableOpacityType }) => {
      return {
        display: props.display,
        opacity: props.opacity,
        ...typographyStylesProps({
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
        ...((props.display === 'flex' || !props.display) && flexStylesProps(props.flex)),
        ...screenSizeStylesProps(props.sizes),
        ...positionStylesProps({ position: props.position }),
        ...spaceStylesProps({ padding: props.padding, margin: props.margin }),
        ...borderStylesProps({ border: props.border, borderRadius: props.borderRadius }),
        ...backgroundStylesProps(props.background),
        ...gradientStylesProps(props.gradient),
        ...shadowStylesProps(props.shadow),
        ...transformStylesProps({ axis: props.axis, scale: props.scale, rotate: props.rotate }),
      };
    };

    //
    // base style
    const baseStyle = useMemo(
      () =>
        css({
          cursor: 'disabled' in rest && rest.disabled ? 'default' : (cursor ?? 'pointer'),
          transition: `all ${transition.time || 0.2}s ${transition.type || 'ease-in-out'}`,
          display: 'inline-block',
          listStyle: 'none',
          outline: 'none',
          zIndex,
          userSelect,
          borderWidth: 0,
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
              ${styles ? ExtendedStyles(styles) : ''}
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
          '&:hover': ExtendedStyles(_hover || {}),
          '&:focus': ExtendedStyles({ ..._focus, opacity: _focus?.opacity ?? 0.75 } || {}),
          '&:active': ExtendedStyles({ ..._active, opacity: _active?.opacity ?? 0.75 } || {}),
          '&:disabled': ExtendedStyles({ ..._disabled, txtColor: _disabled?.txtColor ?? '#aaa' } || {}),
        }),
      [_hover, _focus, _active, _disabled],
    );

    //
    // combined styles
    const combinedStyles = useMemo(
      () => css`
        ${baseStyle}
        ${ExtendedStyles({
          ...pPs,
          display: pPs.display ?? 'flex',
          flex:
            pPs.display === 'flex' || !pPs.display
              ? { ...pPs.flex, direction: pPs.flex?.direction ?? 'column' }
              : undefined,
          position: { ...pPs.position, type: pPs.position?.type ?? 'relative' },
          gradient: { ...pPs.gradient, type: pPs.gradient?.type ?? 'linear' } as any,
          border: {
            ...pPs.border,
            stroke: pPs.border?.stroke ?? 0,
            color: pPs.border?.color ?? 'transparent',
            shape: pPs.border?.shape ?? 'solid',
          } as any,
          txtSize: pPs.txtSize ?? 14,
          txtColor: pPs.txtColor ?? '#5b94f0',
          whiteSpace: pPs.whiteSpace ?? 'pre-line',
        })}
    ${mediaStyles}
    ${pseudoStyles}
    ${cssProp}
      `,
      [baseStyle, pPs, mediaStyles, pseudoStyles, cssProp],
    );

    const combinedClassName = cx('dble-txt', className);

    return (
      <Component className={combinedClassName} css={combinedStyles} {...(rest as any)}>
        {children}
      </Component>
    );
  },
);

export { TouchableOpacity };
