/** @jsxImportSource @emotion/react */
import { cx } from '@emotion/css';
import { css } from '@emotion/react';
import { ForwardedRef, forwardRef, memo, useMemo } from 'react';
import { SkeletonPropsType, SkeletonType } from '../types/_propsType';
import { mediaScreenSize } from '../utils/mediaScreenSize';

const Skeleton = memo(
  forwardRef(
    (
      {
        width,
        height = 20,
        borderRadius = 8,
        primaryColor = '#e2e2e2',
        moveColor = '#f5f5f5',
        mq,
        ...props
      }: SkeletonPropsType,
      ref: ForwardedRef<HTMLDivElement>,
    ) => {
      const loadAnimation = `
      @keyframes load {
        100% {
          background-position: -100% 0;
        }
      }
    `;

      const baseStyle = useMemo(() => {
        return css({
          width: '100%',
        });
      }, []);

      const SkeletonStyle = useMemo(() => {
        return (props: SkeletonType) =>
          css({
            minWidth: props.width,
            maxWidth: props.width,
            height: props.height,
            minHeight: props.height,
            maxHeight: props.height,
            borderRadius: props.borderRadius,
            background: `linear-gradient(120deg, ${props.primaryColor} 30%, ${props.moveColor} 38%, ${props.moveColor} 40%, ${props.primaryColor} 48%)`,
            backgroundSize: '200% 100%',
            backgroundPosition: '100% 0',
            animation: 'load 1s infinite',
            transition: '0.2s ease-in-out',
          });
      }, [primaryColor, moveColor]);

      const mediaStyles = useMemo(() => {
        if (!mq) return [];
        return mediaScreenSize.map(size => {
          const breakpointKey = `w${size}` as keyof typeof mq;
          const styles = mq[breakpointKey];
          return styles
            ? css`
                @media (max-width: ${size}px) {
                  ${SkeletonStyle(styles)}
                }
              `
            : '';
        });
      }, [mq, SkeletonStyle]);

      const combinedClassName = cx('dble-skeleton', props.className);

      return (
        <>
          <style>{loadAnimation}</style>
          <div
            ref={ref}
            className={combinedClassName}
            css={[baseStyle, SkeletonStyle({ width, height, borderRadius, primaryColor, moveColor }), ...mediaStyles]}
            {...props}
          />
        </>
      );
    },
  ),
);

export { Skeleton };
