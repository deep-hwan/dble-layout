/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { baseStylesProps } from "../styles/baseStylesProps";
import { flexStylesProps } from "../styles/flexStylesProps";
import { screenSizeStylesProps } from "../styles/screenSizeStylesProps";
import { LayoutPropsRef } from "../types/piece/PipeLinePropsType";
import { FlexLayoutElement, FlexType } from "../types/props/FlexPropsType";
import { createMediaStyles } from "../utils/createMediaStyles";

const Flex = React.forwardRef<HTMLElement, FlexLayoutElement & LayoutPropsRef>(
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
      flex,
      direction,
      isReverse,
      align,
      crossAlign,
      gap,
      order,
      grow,
      shrink,
      basis,
      alignContent,
      alignSelf,
      wrap,
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
      flex,
      direction,
      isReverse,
      align,
      crossAlign,
      gap,
      order,
      grow,
      shrink,
      basis,
      alignContent,
      alignSelf,
      wrap,
    };

    const Component = as || "div";

    //
    // extended props styles
    const ExtendedStyles = (props: FlexType) => {
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
        ...flexStylesProps({
          flex: props.flex,
          direction: props.direction,
          isReverse: props.isReverse,
          align: props.align,
          crossAlign: props.crossAlign,
          gap: props.gap,
          wrap: props.wrap,
          order: props.order,
          grow: props.grow,
          shrink: props.shrink,
          basis: props.basis,
          alignContent: props.alignContent,
          alignSelf: props.alignSelf,
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
          }),
        }),
      [transition, zIndex]
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
          direction: pPs.direction ?? "column",
        })}
    ${mediaStyles}
    ${pseudoStyles}
      `,
      [baseStyle, pPs, mediaStyles, pseudoStyles]
    );

    const combinedClassName = cx(`dble-flex${as ? `-${as}` : ""}`, className);
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

export default React.memo(Flex);
