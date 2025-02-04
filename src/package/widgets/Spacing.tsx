/** @jsxImportSource @emotion/react */
import { cx } from "@emotion/css";
import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { SpacingPropsType } from "../types/props/SpacingPropsType";
import { mediaScreenSize } from "../utils/mediaScreenSize";

const SizeTheme = ({
  direction,
  size,
}: Pick<SpacingPropsType, "direction" | "size">) => ({
  width: direction === "row" ? `${size}px` : "100%",
  height: direction === "column" ? `${size}px` : "100%",
});

const Spacing = React.forwardRef(function Spacing(
  { direction = "column", size, _mq, css: cssProp, ...props }: SpacingPropsType,
  ref?: React.Ref<HTMLDivElement>
) {
  const baseStyle = useMemo(() => {
    const sizeTheme = SizeTheme({ direction, size });
    return css({
      display: "flex",
      transition: "0.2s ease-in-out",
      ...sizeTheme,
    });
  }, [direction, size]);

  const mediaStyles = useMemo(() => {
    if (!_mq) return [];
    return mediaScreenSize.map((size) => {
      const breakpointKey = `w${size}` as keyof typeof _mq;
      const styles = _mq[breakpointKey];
      return styles
        ? css`
            @media (max-width: ${size}px) {
              ${SizeTheme({
                direction,
                ...(styles as Pick<SpacingPropsType, "direction" | "size">),
              })}
            }
          `
        : "";
    });
  }, [_mq, direction]);

  const combinedClassName = cx("dble-spacing", props.className);

  return (
    <div
      ref={ref}
      className={combinedClassName}
      css={[baseStyle, ...mediaStyles, cssProp]}
      {...props}
    />
  );
});

export default React.memo(Spacing);
