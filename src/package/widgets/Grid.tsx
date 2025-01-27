/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, useMemo } from "react";
import { gridStylesProps } from "../styles/gridStylesProps";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { LayoutElementType } from "../types/piece/LayoutElementType";
import { GridPropsType, GridType } from "../types/props/GridPropsType";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const Grid = React.forwardRef<
  HTMLElement,
  GridPropsType<LayoutElementType> & ComponentPropsWithoutRef<LayoutElementType>
>((props, ref) => {
  const {
    as,
    children,
    className,
    templateColumns,
    templateRows,
    templateAreas,
    gap,
    autoFlow,
    autoColumns,
    autoRows,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    sizes,
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
    sizes,
    templateColumns,
    templateRows,
    templateAreas,
    gap,
    autoFlow,
    autoColumns,
    autoRows,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
  };

  const Component = as || "div";

  //
  // extended props styles
  const ExtendedStyles = (props: GridType) => {
    return {
      display: "grid",
      ...screenSizeStylesProps(props.sizes),
      ...gridStylesProps({
        templateColumns: props.templateColumns,
        templateRows: props.templateRows,
        templateAreas: props.templateAreas,
        gap: props.gap,
        autoFlow: props.autoFlow,
        autoColumns: props.autoColumns,
        autoRows: props.autoRows,
        justifyItems: props.justifyItems,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        alignContent: props.alignContent,
      }),
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
        sizes: { ...pPs.sizes, width: pPs.sizes?.width ?? "100%" },
      })}
    ${mediaStyles}
    ${pseudoStyles}
    `,
    [baseStyle, pPs, mediaStyles, pseudoStyles]
  );

  const combinedClassName = cx("dble-flex", className);
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

export default React.memo(Grid);
