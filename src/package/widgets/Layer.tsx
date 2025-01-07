/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, useMemo } from "react";
import { backgroundStylesProps } from "../styles/bgStylesProps";
import { borderStylesProps } from "../styles/borderStylesProps";
import { flexStylesProps } from "../styles/flexStylesProps";
import { gradientStylesProps } from "../styles/gradientStylesProps";
import { gridStylesProps } from "../styles/gridStylesProps";
import { positionStylesProps } from "../styles/positionStylesProps";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { shadowStylesProps } from "../styles/shadowStylesProps";
import { spaceStylesProps } from "../styles/spaceStylesProps";
import { transformStylesProps } from "../styles/transformStylesProps";
import { LayerPropsType, LayerType } from "../types";
import { LayoutElementType } from "../types/piece/LayoutElementType";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const Layer = React.forwardRef(
  <T extends LayoutElementType = "div">(
    props: LayerPropsType<T> & ComponentPropsWithoutRef<T>,
    ref: React.Ref<HTMLElement>
  ) => {
    // console.log("ref", ref);

    const {
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
      opacity,
      shadow,
      axis,
      scale,
      rotate,
      zIndex,
      cursor,
      userSelect,
      transition = { time: 0.25, type: "ease-in-out" },
      _hover,
      _focus,
      _active,
      mq = {},
      css: cssProp,
      ...rest
    } = props;

    const pPs = {
      display,
      sizes,
      flex: display === "flex" || !display ? flex : undefined,
      grid: display === "grid" ? grid : undefined,
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

    const Component = as || "div";

    //
    // extended props styles
    const ExtendedStyles = (props: LayerType) => {
      return {
        display: props.display,
        opacity: props.opacity,
        ...screenSizeStylesProps(props.sizes),
        ...((props.display === "flex" || !props.display) &&
          flexStylesProps(props.flex)),
        ...(props.display === "grid" && gridStylesProps(props.grid)),
        ...positionStylesProps({ position: props.position }),
        ...spaceStylesProps({ padding: props.padding, margin: props.margin }),
        ...borderStylesProps({
          border: props.border,
          borderRadius: props.borderRadius,
        }),
        ...backgroundStylesProps(props.background),
        ...gradientStylesProps(props.gradient),
        ...shadowStylesProps(props.shadow),
        ...transformStylesProps({
          axis: props.axis,
          scale: props.scale,
          rotate: props.rotate,
        }),
      };
    };

    //
    // base style
    const baseStyle = useMemo(
      () =>
        css({
          cursor: cursor
            ? cursor
            : (rest.onClick || rest.onMouseEnter) && "pointer",
          transition: `all ${transition.time || 0.25}s ${
            transition.type || "ease-in-out"
          }`,
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
        ${ExtendedStyles({
          ...pPs,
          display: pPs.display ?? "flex",
          sizes: { ...pPs.sizes, width: pPs.sizes?.width ?? "100%" },
          flex:
            pPs.display === "flex" || !pPs.display
              ? { ...pPs.flex, direction: pPs.flex?.direction ?? "column" }
              : undefined,
          position: {
            ...pPs.position,
            type: pPs.position?.type ?? "relative",
          },
          gradient: {
            ...pPs.gradient,
            type: pPs.gradient?.type ?? "linear",
          } as any,
          border: {
            ...pPs.border,
            stroke: pPs.border?.stroke ?? 0,
            color: pPs.border?.color ?? "transparent",
            shape: pPs.border?.shape ?? "solid",
          } as any,
        })}
    ${mediaStyles}
    ${pseudoStyles}
    ${cssProp}
      `,
      [baseStyle, pPs, mediaStyles, pseudoStyles, cssProp]
    );

    const combinedClassName = cx("dble-layer", className);

    return (
      <Component
        ref={ref} // Use the callback ref
        className={combinedClassName}
        css={combinedStyles}
        {...(rest as any)}
      >
        {children}
      </Component>
    );
  }
);

export default React.memo(Layer);
