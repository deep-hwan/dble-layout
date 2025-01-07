/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { ForwardedRef } from "react";
import { DividerPropsType, DividerType } from "../types";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const Divider = React.forwardRef(function Solid(
  {
    direction = "horizontal",
    width,
    height,
    color = "#e9e9e9",
    spacing,
    mq,
    ...props
  }: DividerPropsType,
  ref?: ForwardedRef<HTMLDivElement>
) {
  type NumbericType = number | string;

  const Types = (props: { width?: NumbericType; height?: NumbericType }) => ({
    width:
      direction === "horizontal" ? props.width ?? "100%" : props.width ?? 1,
    height:
      direction === "vertical" ? props.height ?? "100%" : props.height ?? 1,
  });

  const getSpacing = (spacing: any, type: string) =>
    spacing?.all ??
    spacing?.[type] ??
    spacing?.[type === "vertical" ? "top" : "left"];

  const DividerStyle = (props: DividerType) =>
    css({
      backgroundColor: props.color,
      transition: "0.25s ease-in-out",
      marginTop: getSpacing(props.spacing, "vertical"),
      marginBottom: getSpacing(props.spacing, "vertical"),
      marginLeft: getSpacing(props.spacing, "horizontal"),
      marginRight: getSpacing(props.spacing, "horizontal"),
      ...Types({ width: props.width, height: props.height }),
    });

  const mediaStyles = mediaScreenSize.map((size) => {
    const breakpointKey = `w${size}` as keyof typeof mq;
    const styles = mq?.[breakpointKey];

    return styles
      ? css`
          @media (max-width: ${size}px) {
            ${DividerStyle(styles)}
          }
        `
      : "";
  });

  const combinedClassName = cx("dble-divider", props.className);

  return (
    <div
      ref={ref}
      className={combinedClassName}
      css={[
        DividerStyle({ direction, width, height, spacing, color }),
        ...mediaStyles,
      ]}
      {...props}
    />
  );
});

export default React.memo(Divider);
