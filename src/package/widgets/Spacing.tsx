/** @jsxImportSource @emotion/react */
import { cx } from '@emotion/css';
import { css } from '@emotion/react';
import { ForwardedRef, forwardRef, memo, useMemo } from 'react';
import { SpacingPropsType } from '../types';
import { mediaScreenSize } from '../utils/mediaScreenSize';

const SizeTheme = ({ direction, size }: Pick<SpacingPropsType, 'direction' | 'size'>) => ({
  width: direction === 'row' ? `${size}px` : '100%',
  height: direction === 'column' ? `${size}px` : '100%',
});

const Spacing = memo(
  forwardRef(function Spacing(
    { direction = 'column', size, mq, ...props }: SpacingPropsType,
    ref?: ForwardedRef<HTMLDivElement>,
  ) {
    const baseStyle = useMemo(() => {
      const sizeTheme = SizeTheme({ direction, size });
      return css({
        display: 'flex',
        transition: '0.2s ease-in-out',
        ...sizeTheme,
      });
    }, [direction, size]);

    const mediaStyles = useMemo(() => {
      if (!mq) return [];
      return mediaScreenSize.map(size => {
        const breakpointKey = `w${size}` as keyof typeof mq;
        const styles = mq[breakpointKey];
        return styles
          ? css`
              @media (max-width: ${size}px) {
                ${SizeTheme({ direction, ...(styles as Pick<SpacingPropsType, 'direction' | 'size'>) })}
              }
            `
          : '';
      });
    }, [mq, direction]);

    const combinedClassName = cx('dble-spacing', props.className);

    return <div ref={ref} className={combinedClassName} css={[baseStyle, ...mediaStyles]} {...props} />;
  }),
);

export { Spacing };
