/** @jsxImportSource @emotion/react */
import { cx } from '@emotion/css';
import { css } from '@emotion/react';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import { backgroundStylesProps } from '../styles/bgStylesProps';
import { borderStylesProps } from '../styles/borderStylesProps';
import { flexStylesProps } from '../styles/flexStylesProps';
import { gradientStylesProps } from '../styles/gradientStylesProps';
import { screenSizeStylesProps } from '../styles/screenSizeStylesProps';
import { shadowStylesProps } from '../styles/shadowStylesProps';
import { spaceStylesProps } from '../styles/spaceStylesProps';
import { ScrollLayerElementType, ScrollLayerPropsType, ScrollLayerType } from '../types/props/ScrollLayerPropsType';
import { mediaScreenSize } from '../utils/mediaScreenSize';

const ScrollLayer = React.memo(
  <T extends ScrollLayerElementType = 'div'>({
    as,
    children,
    className,
    display,
    sizes,
    flex,
    padding,
    margin,
    borderRadius,
    border,
    background,
    gradient,
    opacity,
    shadow,
    zIndex,
    transition = { time: 0.25, type: 'ease-in-out' },
    mq = {},
    css: cssProp,
    forceVisible = 'y',
    autoHide = true,
    ...rest
  }: ScrollLayerPropsType<T> & ComponentPropsWithoutRef<T>) => {
    const pPs = {
      display,
      sizes: { ...sizes, width: sizes?.width ?? '100%' },
      flex: display === 'flex' || !display ? flex : undefined,
      padding,
      margin,
      border,
      borderRadius,
      background,
      gradient,
      opacity,
      shadow,
    };

    const Component = as || 'div';

    // Custom scrollbar styles with auto-hide functionality
    const scrollbarStyles = css`
      &::-webkit-scrollbar {
        background-color: none;
        width: 6px;
        height: 6px;
        transition: opacity 0.3s ease;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        opacity: ${autoHide ? 0 : 1};
        visibility: hidden;
        border-radius: 100px;
      }
      &:hover::-webkit-scrollbar-thumb {
        visibility: visible;
        opacity: 1;
      }
    `;

    //
    // extended props styles
    const ExtendedStyles = (props: ScrollLayerType) => {
      return {
        display: props.display,
        opacity: props.opacity,
        ...screenSizeStylesProps(props.sizes),
        ...((props.display === 'flex' || !props.display) && flexStylesProps(props.flex)),
        ...spaceStylesProps({ padding: props.padding, margin: props.margin }),
        ...borderStylesProps({ border: props.border, borderRadius: props.borderRadius }),
        ...backgroundStylesProps(props.background),
        ...gradientStylesProps(props.gradient),
        ...shadowStylesProps(props.shadow),
      };
    };

    //
    // base style with smooth scrolling
    const baseStyle = useMemo(
      () =>
        css({
          transition: `all ${transition.time || 0.25}s ${transition.type || 'ease-in-out'}`,
          listStyle: 'none',
          outline: 'none',
          zIndex,
          overflowX: forceVisible.includes('x') ? 'auto' : 'hidden',
          overflowY: forceVisible.includes('y') ? 'auto' : 'hidden',
          scrollBehavior: 'smooth', // Enable smooth scrolling
        }),
      [transition, zIndex, autoHide, forceVisible],
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
    // combined styles
    const combinedStyles = useMemo(
      () => css`
        ${baseStyle}
        ${scrollbarStyles}
        ${ExtendedStyles({
          ...pPs,
          display: pPs.display ?? 'flex',
          sizes: { ...pPs.sizes, width: pPs.sizes?.width ?? '100%' },
          flex:
            pPs.display === 'flex' || !pPs.display
              ? { ...pPs.flex, direction: pPs.flex?.direction ?? 'column' }
              : undefined,
          gradient: { ...pPs.gradient, type: pPs.gradient?.type ?? 'linear' } as any,
          border: {
            ...pPs.border,
            stroke: pPs.border?.stroke ?? 0,
            color: pPs.border?.color ?? 'transparent',
            shape: pPs.border?.shape ?? 'solid',
          } as any,
        })}
        ${mediaStyles}
        ${cssProp}
      `,
      [baseStyle, scrollbarStyles, pPs, mediaStyles, cssProp],
    );

    const combinedClassName = cx('dble-scroll-layer', className);
    return (
      <Component className={combinedClassName} css={combinedStyles} {...(rest as any)}>
        {children}
      </Component>
    );
  },
);

export { ScrollLayer };
