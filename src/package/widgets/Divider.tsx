/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { DividerPropsType, DividerType } from "../types";
import { createMediaStyles } from "../utils/createMediaStyles";

const Divider = React.forwardRef<HTMLDivElement, DividerPropsType>(
  function Solid(
    {
      direction = "horizontal",
      w,
      h,
      color = "#e9e9e9",
      radius,
      spacing,
      _mq = {},
      css: cssProp,
      ...props
    },
    ref
  ) {
    type NumbericType = number | string;

    const Types = (props: { w?: NumbericType; h?: NumbericType }) => ({
      width: direction === "horizontal" ? props.w ?? "100%" : props.w ?? 1,
      height: direction === "vertical" ? props.h ?? "100%" : props.h ?? 1,
    });

    const getSpacing = (spacing: any, type: string) =>
      spacing?.all ??
      spacing?.[type] ??
      spacing?.[type === "vertical" ? "top" : "left"];

    const DividerStyle = (props: DividerType) =>
      css({
        backgroundColor: props.color,
        transition: "0.25s ease-in-out",
        borderRadius: props.radius,
        marginTop: getSpacing(props.spacing, "vertical"),
        marginBottom: getSpacing(props.spacing, "vertical"),
        marginLeft: getSpacing(props.spacing, "horizontal"),
        marginRight: getSpacing(props.spacing, "horizontal"),
        ...Types({ w: props.w, h: props.h }),
      });

    const mediaStyles = useMemo(
      () => createMediaStyles(_mq, DividerStyle),
      [_mq]
    );

    const combinedClassName = cx("dble-divider", props.className);

    return (
      <div
        ref={ref}
        className={combinedClassName}
        css={css([
          DividerStyle({ direction, w, h, spacing, color, radius }),
          ...mediaStyles,
          cssProp,
        ])}
        {...props}
      />
    );
  }
);

export default React.memo(Divider);
