/** @jsxImportSource @emotion/react */
import { cx } from '@emotion/css';
import { css } from '@emotion/react';
import { ComponentPropsWithoutRef, ElementType } from 'react';
import { backgroundStylesProps } from '../styles/bgStylesProps';
import { borderStylesProps } from '../styles/borderStylesProps';
import { flexStylesProps } from '../styles/flexStylesProps';
import { gradientStylesProps } from '../styles/gradientStylesProps';
import { gridStylesProps } from '../styles/gridStylesProps';
import { positionStylesProps } from '../styles/positionStylesProps';
import { screenSizeStylesProps } from '../styles/screenSizeStylesProps';
import { shadowStylesProps } from '../styles/shadowStylesProps';
import { spaceStylesProps } from '../styles/spaceStylesProps';
import { transformStylesProps } from '../styles/transformStylesProps';
import { LayerPropsType, LayerType } from '../types/_propsType';
import { mediaScreenSize } from '../utils/mediaScreenSize';

const Layer = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  display,
  sizes,
  flex,
  grid,
  position,
  padding,
  margin,
  borderRadius,
  border,
  background,
  gradient,
  shadow,
  zIndex,
  cursor,
  userSelect,
  axis,
  scale,
  rotate,
  transition = { time: 0.25, type: 'ease-in-out' },
  _hover,
  _focus,
  _active,
  mq = {},
  css: cssProp,
  ...rest
}: LayerPropsType<T> & ComponentPropsWithoutRef<T>) => {
  const layerProps = {
    display,
    sizes,
    flex: display === 'flex' ? flex : undefined,
    grid: display === 'grid' ? grid : undefined,
    position,
    padding,
    margin,
    border,
    borderRadius,
    background,
    gradient,
    shadow,
    axis,
    scale,
    rotate,
  };

  const Component = as || 'div';

  //
  // layer styles
  const LayerStyles = (props: LayerType) => {
    return {
      display: props.display,
      ...spaceStylesProps({ padding: props.padding, margin: props.margin }),
      ...(props.display === 'flex' && flexStylesProps(props.flex)),
      ...(props.display === 'grid' && gridStylesProps(props.grid)),
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
  const baseStyle = css({
    cursor: cursor ? cursor : (rest.onClick || rest.onMouseEnter) && 'pointer',
    transition: `all ${transition.time || 0.25}s ${transition.type || 'ease-in-out'}`,
    listStyle: 'none',
    outline: 'none',
    zIndex,
    userSelect,
  });

  //
  // media-query styles
  const mediaStyles = mediaScreenSize.map(size => {
    const breakpointKey = `w${size}` as keyof typeof mq;
    const styles = mq?.[breakpointKey];

    return css`
      @media (max-width: ${size}px) {
        ${styles ? LayerStyles(styles) : ''}
      }
    `;
  });

  //
  // pseudos
  const pseudoStyles = css({
    '&:hover': LayerStyles(_hover || {}),
    '&:focus': LayerStyles(_focus || {}),
    '&:active': LayerStyles(_active || {}),
  });

  //
  // combined styles
  const combinedStyles = css`
    ${baseStyle}
    ${LayerStyles({
      ...layerProps,
      display: layerProps.display ?? 'flex',
      sizes: { ...layerProps.sizes, width: layerProps.sizes?.width ?? '100%' },
      flex:
        layerProps.display === 'flex'
          ? { ...layerProps.flex, direction: layerProps.flex?.direction ?? 'column' }
          : undefined,
      position: { ...layerProps.position, type: layerProps.position?.type ?? 'relative' },
      border: {
        ...layerProps.border,
        stroke: layerProps.border?.stroke ?? 0,
        color: layerProps.border?.color ?? 'transparent',
        shape: layerProps.border?.shape ?? 'solid',
      } as any,
      gradient: { ...layerProps.gradient, type: layerProps.gradient?.type ?? 'linear' } as any,
    })}
    ${mediaStyles}
    ${pseudoStyles}
    ${cssProp}
  `;

  const combinedClassName = cx('dble-layer', className);

  return (
    <Component className={combinedClassName} css={combinedStyles} {...rest}>
      {children}
    </Component>
  );
};

export default Layer;
