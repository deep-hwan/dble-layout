/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { baseStylesProps } from "../styles/baseStylesProps";
import { gridStylesProps } from "../styles/gridStylesProps";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { LayoutPropsRef } from "../types/piece/PipeLinePropsType";
import { GridLayoutElement, GridType } from "../types/props/GridPropsType";
import { createMediaStyles } from "../utils/createMediaStyles";

const Grid = React.forwardRef<HTMLElement, GridLayoutElement & LayoutPropsRef>(
  (props, ref) => {
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
        ...screenSizeStylesProps({
          width: props.w,
          maxWidth: props.maxW,
          minWidth: props.minW,
          height: props.h,
          maxHeight: props.maxH,
          minHeight: props.minH,
        }),
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
          ...baseStylesProps({
            transition,
            zIndex,
            onClick: rest.onClick,
            onMouseEnter: rest.onMouseEnter,
          }),
        }),
      [rest.onClick, rest.onMouseEnter, transition, zIndex]
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

    const combinedClassName = cx(`dble-grid${as ? `-${as}` : ""}`, className);
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

export default React.memo(Grid);
