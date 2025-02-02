/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, useMemo } from "react";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { spaceStylesProps } from "../styles/spaceStylesProps";
import { transformStylesProps } from "../styles/transformStylesProps";
import { typographyStylesProps } from "../styles/typographyStylesProps";
import {
  TextElementType,
  TextPropsType,
  TextType,
} from "../types/props/TextPropsType";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const Text = React.forwardRef<
  HTMLElement,
  TextPropsType<TextElementType> & ComponentPropsWithoutRef<TextElementType>
>(
  (
    {
      as,
      children,
      className,
      w,
      maxW,
      minW,
      h,
      maxH,
      minH,
      padding,
      margin,
      size,
      weight,
      align,
      color,
      shadow,
      transform,
      decoration,
      lineHeight,
      whiteSpace,
      ellipsis,
      opacity,
      scale,
      rotate,
      zIndex,
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
      w,
      maxW,
      minW,
      h,
      maxH,
      minH,
      padding,
      margin,
      size,
      weight,
      align,
      color,
      shadow,
      transform,
      decoration,
      lineHeight,
      whiteSpace,
      ellipsis,
      opacity,
      scale,
      rotate,
    };

    const Component = as || "p";

    //
    // extended props styles
    const ExtendedStyles = (props: TextType & { as?: TextElementType }) => {
      return {
        opacity: props.opacity,
        ...typographyStylesProps({
          as: props.as,
          txtSize: props.size,
          txtWeight: props.weight,
          txtAlign: props.align,
          txtColor: props.color,
          txtShadow: props.shadow,
          txtTransform: props.transform,
          lineHeight: props.lineHeight,
          whiteSpace: props.whiteSpace,
          ellipsis: props.ellipsis,
          txtDecoration: props.decoration,
        }),
        ...screenSizeStylesProps({
          width: props.w,
          maxWidth: props.maxW,
          minWidth: props.minW,
          height: props.h,
          maxHeight: props.maxH,
          minHeight: props.minH,
        }),

        ...spaceStylesProps({ padding: props.padding, margin: props.margin }),

        ...transformStylesProps({
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
          transition: `all ${transition.time}s ${transition.type}`,
          display: "inline-block",
          listStyle: "none",
          outline: "none",
          zIndex,
          userSelect,
        }),
      [rest.onClick, rest.onMouseEnter, transition, zIndex, userSelect]
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
          size: pPs.size ?? 15,
          color: pPs.color ?? "#5d5d5f",
          whiteSpace: pPs.whiteSpace ?? "pre-line",
        })}
    ${mediaStyles}
    ${pseudoStyles}
      `,
      [baseStyle, pPs, mediaStyles, pseudoStyles]
    );

    const combinedClassName = cx(`dble-text-${as}`, className);

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

export default React.memo(Text);
