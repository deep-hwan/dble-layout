/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { borderStylesProps } from "../styles/borderStylesProps";
import { gradientStylesProps } from "../styles/gradientStylesProps";
import { shadowStylesProps } from "../styles/shadowStylesProps";
import { transformStylesProps } from "../styles/transformStylesProps";
import { LayoutPropsRef } from "../types";
import {
  BackgroundLayoutElement,
  BackgroundType,
} from "../types/props/BackgroundPropsType";
import { createMediaStyles } from "../utils/createMediaStyles";

const Background = React.forwardRef<
  HTMLElement,
  BackgroundLayoutElement & LayoutPropsRef
>((props, ref) => {
  const {
    as,
    children,
    className,
    w,
    maxW,
    minW,
    h,
    maxH,
    minH,
    fill,
    imageFill,
    gradient,
    border,
    shadow,
    blur,
    opacity,
    scale,
    rotate,
    zIndex,
    transition,
    cursor,
    userSelect,
    _hover,
    _focus,
    _active,
    _mq = {},
    css: cssProp,
    ...rest
  } = props;

  const pPs = {
    w,
    maxW,
    minW,
    h,
    maxH,
    minH,
    fill,
    imageFill,
    gradient,
    border,
    shadow,
    blur,
    opacity,
    scale,
    rotate,
  };

  const Component = as || "div";

  //
  // extended props styles
  const ExtendedStyles = (props: BackgroundType) => {
    return {
      width: props?.w,
      maxWidth: props?.maxW,
      minWidth: props?.minW,
      height: props?.h,
      maxHeight: props?.maxH,
      minHeight: props?.minH,
      backgroundColor: props.fill,
      backgroundRepeat: props.imageFill?.repeat,
      backgroundSize: props.imageFill?.size,
      backgroundPosition: props.imageFill?.position,
      backgroundImage: props.imageFill?.url
        ? `url(${props.imageFill.url})`
        : undefined,
      backgroundClip: props.imageFill?.clip,
      filter: !!props.blur ? `blur(${props.blur}px)` : undefined,
      ...gradientStylesProps(props.gradient),
      ...(props.border && borderStylesProps(props.border)),
      ...(props.shadow && shadowStylesProps(props.shadow)),
      ...transformStylesProps({
        scale: props.scale,
        rotate: props.rotate,
      }),
      opacity: props.opacity,
    };
  };

  //
  // base style
  const baseStyle = useMemo(
    () =>
      css({
        position: "relative",
        cursor: cursor
          ? cursor
          : (rest.onClick || rest.onMouseEnter) && "pointer",
        transition:
          transition && transition?.duration && transition?.duration > 0
            ? `all ${transition.duration}s ${transition.type}`
            : undefined,
        listStyle: "none",
        outline: "none",
        zIndex,
        userSelect,
      }),
    [cursor, rest.onClick, rest.onMouseEnter, transition, zIndex, userSelect]
  );

  //
  // media-query styles
  const mediaStyles = useMemo(
    () => createMediaStyles(_mq, ExtendedStyles),
    [_mq]
  );

  //
  // pseudos
  const pseudoStyles = useMemo(
    () =>
      css({
        "&:hover": ExtendedStyles(_hover || {}),
        "&:focus": ExtendedStyles(_focus || {}),
        "&:active": ExtendedStyles(_active || {}),
      }),
    [_hover, _focus, _active]
  );

  //
  // combined styles
  const combinedStyles = useMemo(
    () => css`
      ${baseStyle}
      ${ExtendedStyles({ ...pPs, w: pPs.w ?? "100%" })}
      ${mediaStyles}
      ${pseudoStyles}
    `,
    [baseStyle, pPs, mediaStyles, pseudoStyles]
  );

  const combinedClassName = cx(
    `dble-background${as ? `-${as}` : ""}`,
    className
  );
  return (
    <Component
      ref={ref}
      className={combinedClassName}
      css={css([combinedStyles, cssProp])}
      {...(rest as any)}
    >
      {children}
    </Component>
  );
});

export default React.memo(Background);
