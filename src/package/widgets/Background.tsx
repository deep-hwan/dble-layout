/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, useMemo } from "react";
import { shadowStylesProps } from "../styles/shadowStylesProps";
import { LayoutElementType } from "../types/piece/LayoutElementType";
import {
  BackgroundPropsType,
  BackgroundType,
} from "../types/props/BackgroundPropsType";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const Background = React.forwardRef<
  HTMLElement,
  BackgroundPropsType<LayoutElementType> &
    ComponentPropsWithoutRef<LayoutElementType>
>((props, ref) => {
  const {
    as,
    children,
    className,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    fill,
    border,
    shadow,
    zIndex,
    transition = { time: 0.25, type: "ease-in-out" },
    _hover,
    _focus,
    _active,
    mq = {},
    css: cssProp,
    ...rest
  } = props;

  const pPs = {
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    fill,
    border,
    shadow,
  };

  const Component = as || "div";

  const borderStylesProps = (border: BackgroundType["border"]) => {
    const { radius, stroke, position, shape, color } = border ?? {};

    const defaultShape = shape ?? "solid";

    return {
      border:
        !position || position === "all"
          ? `${stroke}px ${defaultShape} ${color}`
          : undefined,
      borderBottom:
        position === "bottom"
          ? `${stroke}px ${defaultShape} ${color}`
          : undefined,
      borderTop:
        position === "top" ? `${stroke}px ${defaultShape} ${color}` : undefined,
      borderRight:
        position === "right"
          ? `${stroke}px ${defaultShape} ${color}`
          : undefined,
      borderLeft:
        position === "left"
          ? `${stroke}px ${defaultShape} ${color}`
          : undefined,
      borderRadius: radius,
    };
  };

  //
  // extended props styles
  const ExtendedStyles = (props: BackgroundType) => {
    return {
      width: props?.width,
      maxWidth: props?.maxWidth,
      minWidth: props?.minWidth,
      height: props?.height,
      maxHeight: props?.maxHeight,
      minHeight: props?.minHeight,
      backgroundColor: props.fill,

      ...borderStylesProps(props?.border),
      ...shadowStylesProps(props.shadow),
    };
  };

  //
  // base style
  const baseStyle = useMemo(
    () =>
      css({
        position: "relative",
        transition: `all ${transition.time}s ${transition.type}`,
        listStyle: "none",
        outline: "none",
        zIndex,
      }),
    [rest.onClick, rest.onMouseEnter, transition, zIndex]
  );

  //
  // media-query styles
  const mediaStyles = useMemo(
    () =>
      mediaScreenSize.map((size) => {
        const breakpointKey = `w${size}` as keyof typeof mq;
        const styles = mq?.[breakpointKey];

        return css`
          @media (max-width: ${size}px) {
            ${styles ? ExtendedStyles(styles) : ""}
          }
        `;
      }),
    [mq]
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
      ${ExtendedStyles({ ...pPs, width: pPs.width ?? "100%" })}
      ${mediaStyles}
      ${pseudoStyles}
    `,
    [baseStyle, pPs, mediaStyles, pseudoStyles]
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

export default React.memo(Background);
