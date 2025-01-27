/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, useMemo } from "react";
import { backgroundStylesProps } from "../styles/bgStylesProps";
import { borderStylesProps } from "../styles/borderStylesProps";
import { gradientStylesProps } from "../styles/gradientStylesProps";
import { positionStylesProps } from "../styles/positionStylesProps";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { shadowStylesProps } from "../styles/shadowStylesProps";
import { spaceStylesProps } from "../styles/spaceStylesProps";
import { transformStylesProps } from "../styles/transformStylesProps";
import { typographyStylesProps } from "../styles/typographyStylesProps";
import { TxtElementType, TxtPropsType, TxtType } from "../types";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const Txt = React.forwardRef<
  HTMLElement,
  TxtPropsType<TxtElementType> & ComponentPropsWithoutRef<TxtElementType>
>(
  (
    {
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
      transition = { time: 0.25, type: "ease-in-out" },
      _hover,
      _focus,
      _active,
      mq = {},
      css: cssProp,
      ...rest
    },
    ref
  ) => {
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

    const Component = as || "p";

    //
    // extended props styles
    const ExtendedStyles = (props: TxtType & { as?: TxtElementType }) => {
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
        ...screenSizeStylesProps(props.sizes),
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
          transition: `all ${transition.time}s ${transition.type}`,
          display: "inline-block",
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

          sizes: { ...pPs.sizes },
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
          txtSize: pPs.txtSize ?? 15,
          txtColor: pPs.txtColor ?? "#5d5d5f",
          whiteSpace: pPs.whiteSpace ?? "pre-line",
        })}
    ${mediaStyles}
    ${pseudoStyles}
      `,
      [baseStyle, pPs, mediaStyles, pseudoStyles]
    );

    const combinedClassName = cx("dble-txt", className);

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
  }
);

export default React.memo(Txt);
