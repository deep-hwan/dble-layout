/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, useMemo } from "react";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { spaceStylesProps } from "../styles/spaceStylesProps";
import { LayoutElementType } from "../types/piece/LayoutElementType";
import { PaddingPropsType, PaddingType } from "../types/props/PaddingPropsType";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const Padding = React.forwardRef<
  HTMLElement,
  PaddingPropsType<LayoutElementType> &
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
    all,
    horizontal,
    vertical,
    top,
    bottom,
    left,
    right,
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
      display: "flex",
      ...screenSizeStylesProps({
        width: props.width,
        maxWidth: props.maxWidth,
        minWidth: props.minWidth,
        height: props.height,
        maxHeight: props.maxHeight,
        minHeight: props.minHeight,
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
        transition: `all ${transition.time || 0.25}s ${
          transition.type || "ease-in-out"
        }`,
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
      ${ExtendedStyles({
        ...pPs,
        width: pPs.width ?? "100%",
      })}
    ${mediaStyles}
    ${pseudoStyles}
    display: flex;
      flex-direction: column;
      align-items: start;
    `,
    [baseStyle, pPs, mediaStyles, pseudoStyles]
  );

  const combinedClassName = cx("dble-padding", className);
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
