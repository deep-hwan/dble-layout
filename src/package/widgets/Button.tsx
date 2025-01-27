/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, useCallback, useMemo } from "react";
import { borderStylesProps } from "../styles/borderStylesProps";
import { flexStylesProps } from "../styles/flexStylesProps";
import { gradientStylesProps } from "../styles/gradientStylesProps";
import { positionStylesProps } from "../styles/positionStylesProps";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { shadowStylesProps } from "../styles/shadowStylesProps";
import { spaceStylesProps } from "../styles/spaceStylesProps";
import { transformStylesProps } from "../styles/transformStylesProps";
import { typographyStylesProps } from "../styles/typographyStylesProps";
import { ButtonPropsType, ButtonType } from "../types";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const Button = React.memo(
  React.forwardRef<
    HTMLElement,
    ButtonPropsType & ComponentPropsWithoutRef<"button">
  >(
    (
      {
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
        backgroundFill,
        opacity,
        gradient,
        shadow,
        axis,
        scale,
        rotate,
        zIndex,
        cursor,
        userSelect = "none",
        transition = { time: 0.2, type: "ease-in-out" },
        _hover,
        _focus,
        _active,
        _disabled,
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
        display,
        sizes,
        flex,
        position,
        padding,
        margin,
        border,
        borderRadius,
        backgroundFill,
        gradient,
        opacity,
        shadow,
        axis,
        scale,
        rotate,
      };

      const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
          if (rest?.onClick) rest?.onClick(event);
        },
        [rest?.onClick]
      );

      //
      // extended props styles
      const ExtendedStyles = (props: ButtonType) => {
        return {
          display: props.display,
          opacity: props.opacity,
          backgroundColor: props.backgroundFill,
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
          ...((props.display === "flex" || !props.display) &&
            flexStylesProps(props.flex)),
          ...screenSizeStylesProps(props.sizes),
          ...positionStylesProps({ position: props.position }),
          ...spaceStylesProps({ padding: props.padding, margin: props.margin }),
          ...borderStylesProps({
            border: props.border,
            borderRadius: props.borderRadius,
          }),
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
            cursor:
              "disabled" in rest && rest.disabled
                ? "default"
                : cursor ?? "pointer",
            transition: `all ${transition.time}s ${transition.type}`,
            display: "inline-block",
            listStyle: "none",
            outline: "none",
            zIndex,
            userSelect,
            borderWidth: 0,
          }),
        [
          cursor,
          rest.onClick,
          rest.onMouseEnter,
          transition,
          zIndex,
          userSelect,
        ]
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
            "&:hover": ExtendedStyles({
              ..._hover,
              opacity: _hover?.opacity ?? 0.9,
            }),
            "&:focus": ExtendedStyles(_focus || {}),
            "&:active": ExtendedStyles({
              ..._active,
              opacity: _active?.opacity ?? 0.75,
            }),
            "&:disabled": ExtendedStyles({
              ..._disabled,
              backgroundFill: "#f0f0f0",
              txtColor: _disabled?.txtColor ?? "#aaa",
            }),
          }),
        [_hover, _focus, _active, _disabled]
      );

      //
      // combined styles
      const combinedStyles = useMemo(
        () => css`
          ${baseStyle}
          ${ExtendedStyles({
            ...pPs,
            display: pPs.display ?? "flex",
            flex:
              pPs.display === "flex" || !pPs.display
                ? {
                    ...pPs.flex,
                    direction: pPs.flex?.direction ?? "column",
                    align: pPs.flex?.align ?? "center",
                    crossAlign: pPs.flex?.crossAlign ?? "center",
                  }
                : undefined,
            position: {
              ...pPs.position,
              type: pPs.position?.type ?? "relative",
            },
            padding: {
              ...pPs.padding,
              vertical: pPs.padding?.vertical ?? 14,
              horizontal: pPs.padding?.horizontal ?? 24,
            },
            backgroundFill: pPs.backgroundFill ?? "#5b94f0",
            gradient: {
              ...pPs.gradient,
              type: pPs.gradient?.type ?? "linear",
            } as any,
            border: {
              ...pPs.border,
              stroke: pPs.border?.stroke ?? 0,
              color: pPs.border?.color ?? "transparent",
            } as any,
            borderRadius: pPs.borderRadius ?? 16,
            whiteSpace: pPs.whiteSpace ?? "pre-line",
            txtSize: pPs.txtSize ?? 15,
            txtColor: pPs.txtColor ?? "#fbfbfb",
          })}
    ${mediaStyles}
    ${pseudoStyles}
        `,
        [baseStyle, pPs, mediaStyles, pseudoStyles]
      );

      const combinedClassName = cx("dble-button", className);

      return (
        <button
          ref={ref}
          className={combinedClassName}
          css={css([combinedStyles, cssProp])}
          onClick={handleClick}
          {...(rest as any)}
        >
          {children}
        </button>
      );
    }
  )
);

export { Button };
