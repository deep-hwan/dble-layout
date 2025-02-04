/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, useMemo } from "react";
import { baseStylesProps } from "../styles/baseStylesProps";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { LayoutElementType } from "../types/piece/LayoutElementType";
import {
  PositionPropsType,
  PositionType,
} from "../types/props/PositionPropsType";
import { createMediaStyles } from "../utils/createMediaStyles";

const Position = React.forwardRef<
  HTMLElement,
  PositionPropsType<LayoutElementType> &
    ComponentPropsWithoutRef<LayoutElementType>
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
    type,
    top,
    bottom,
    left,
    right,
    axis,
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
    type,
    top,
    bottom,
    left,
    right,
    axis,
  };

  const Component = as || "div";

  //
  // extended props styles
  const ExtendedStyles = (props: PositionType) => {
    return {
      display: "flex",
      ...screenSizeStylesProps({
        width: props.w,
        maxWidth: props.maxW,
        minWidth: props.minW,
        height: props.h,
        maxHeight: props.maxH,
        minHeight: props.minH,
      }),
      position: props.type,
      top: props.top,
      bottom: props.bottom,
      left: props.left,
      right: props.right,
      transform: axis
        ? `translate(${
            typeof axis.x === "number" ? `${axis.x}px` : axis.x ?? "0"
          }, ${typeof axis.y === "number" ? `${axis.y}px` : axis.y ?? "0"})`
        : undefined,
    };
  };

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
      ${baseStylesProps({ transition, zIndex })}
      ${ExtendedStyles({ ...pPs, type: pPs.type ?? "relative" })}
      ${mediaStyles}
      ${pseudoStyles}
    `,
    [pPs, mediaStyles, pseudoStyles]
  );

  const combinedClassName = cx("dble-position", className);
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

export default React.memo(Position);
