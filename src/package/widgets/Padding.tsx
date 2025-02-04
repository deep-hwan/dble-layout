/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { baseStylesProps } from "../styles/baseStylesProps";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { spaceStylesProps } from "../styles/spaceStylesProps";
import { LayoutPropsRef } from "../types/piece/PipeLinePropsType";
import {
  PaddingLayoutElement,
  PaddingType,
} from "../types/props/PaddingPropsType";
import { createMediaStyles } from "../utils/createMediaStyles";

const Padding = React.forwardRef<
  HTMLElement,
  PaddingLayoutElement & LayoutPropsRef
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
    all,
    horizontal,
    vertical,
    top,
    bottom,
    left,
    right,
    zIndex,
    transition,
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
    all,
    horizontal,
    vertical,
    top,
    bottom,
    left,
    right,
  };

  const Component = as || "div";

  //
  // extended props styles
  const ExtendedStyles = (props: PaddingType) => {
    return {
      ...screenSizeStylesProps({
        width: props.w,
        maxWidth: props.maxW,
        minWidth: props.minW,
        height: props.h,
        maxHeight: props.maxH,
        minHeight: props.minH,
      }),
      ...spaceStylesProps({
        padding: {
          all: props.all,
          horizontal: props.horizontal,
          vertical: props.vertical,
          top: props.top,
          bottom: props.bottom,
          left: props.left,
          right: props.right,
        },
      }),
    };
  };

  //
  // base style
  const baseStyle = useMemo(
    () =>
      css({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        ...baseStylesProps({
          transition,
          zIndex,
        }),
      }),
    [transition, zIndex]
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
      ${ExtendedStyles({
        ...pPs,
        w: pPs.w ?? "100%",
      })}
    ${mediaStyles}
    ${pseudoStyles}
    `,
    [baseStyle, pPs, mediaStyles, pseudoStyles]
  );

  const combinedClassName = cx(`dble-padding${as ? `-${as}` : ""}`, className);
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

export default React.memo(Padding);
