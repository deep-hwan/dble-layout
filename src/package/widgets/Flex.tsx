/** @jsxImportSource @emotion/react */
import { cx } from '@emotion/css';
import { css } from '@emotion/react';
import { ComponentPropsWithoutRef, ElementType } from 'react';
import { flexStylesProps } from '../styles/flexStylesProps';
import { FlexPropsType } from '../types/_propsType';
import { mediaScreenSize } from '../utils/mediaScreenSize';

const Flex = <T extends ElementType = 'div'>(props: FlexPropsType<T> & ComponentPropsWithoutRef<T>) => {
  const {
    as,
    children,
    className,
    direction = 'column',
    flex,
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
    mq = {},
    isReverse = false,
    transition = { time: 0.25, type: 'ease-in-out' },
    cursor,
    _hover,
    _focus,
    _active,
    css: cssProp,
    ...rest
  } = props;

  const flexProps = {
    direction,
    flex,
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
    mq,
    isReverse,
  };

  const Component = as || 'div';

  if (isReverse && (direction === 'row-reverse' || direction === 'column-reverse')) {
    throw new Error("Cannot use 'isReverse' with 'row-reverse' or 'column-reverse' directions.");
  }

  //
  // base style
  const baseStyle = css({
    display: 'flex',
    cursor: cursor ? cursor : (rest.onClick || rest.onMouseEnter) && 'pointer',
    transition: `all ${transition.time || 0.25}s ${transition.type || 'ease-in-out'}`,
  });

  //
  // media-query styles
  const mediaStyles = mediaScreenSize.map(size => {
    const breakpointKey = `w${size}` as keyof typeof mq;
    const styles = mq?.[breakpointKey];

    return css`
      @media (max-width: ${size}px) {
        ${styles ? flexStylesProps(styles) : ''}
      }
    `;
  });

  //
  // pseudos
  const pseudoStyles = css({
    '&:hover': flexStylesProps(_hover),
    '&:focus': flexStylesProps(_focus),
    '&:active': flexStylesProps(_active),
  });

  //
  // combined styles
  const combinedStyles = css`
    ${baseStyle}
    ${flexStylesProps(flexProps)}
    ${mediaStyles}
    ${pseudoStyles}
    ${cssProp}
  `;

  const combinedClassName = cx('dble-flex-' + direction, className);

  return (
    <Component className={combinedClassName} css={combinedStyles} {...rest}>
      {children}
    </Component>
  );
};

export default Flex;
