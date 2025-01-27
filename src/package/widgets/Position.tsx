/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, useMemo } from "react";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { LayoutElementType } from "../types/piece/LayoutElementType";
import {
  PositionPropsType,
  PositionType,
} from "../types/props/PositionPropsType";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const Position = React.forwardRef<
  HTMLElement,
  PositionPropsType<LayoutElementType> &
    ComponentPropsWithoutRef<LayoutElementType>
>((props, ref) => {
  const {
    as,
    children,
    className,
    type,
    top,
    bottom,
    left,
    right,
    axis,
    sizes,
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
    type,
    top,
    bottom,
    left,
    right,
    axis,
    sizes,
  };

  const Component = as || "div";

  //
  // extended props styles
  const ExtendedStyles = (props: PositionType) => {
    return {
      display: "flex",
      ...screenSizeStylesProps(props.sizes),
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
  // base style
  const baseStyle = useMemo(
    () =>
      css({
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
      ${ExtendedStyles({ ...pPs, type: pPs.type ?? "relative" })}
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

export default React.memo(Position);
