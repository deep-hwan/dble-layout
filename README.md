# <div align="left">

<h1>NPM-Package-Template</h1>

<p>
ReactJs, Vite , Typescript 환경의 NPM 패키지를 쉽게 배포할 수 있도록 셋팅된 템플릿입니다

</p>
</div>

[![GitHub](https://img.shields.io/github/license/beforesemicolon/flatlist-react)](https://github.com/deep-hwan/npm-vite-ts-package-template/blob/main/LICENSE)

</div>

## 배포 후 Install 셋팅

    npm install package-name

    yarn add package-name

---

## 배포 방법

1. package.json >> version 설정
2. padkage.json >> description / repository.url / keywords 수정
3. vite.config.ts >> build > lib > name 수정
4. src > package > index.tsx 내에 배포할 패키지 export로 반환 셋팅
5. npm login >> npm 로그인
6. npm publish >> 패키지 버전 배포

---

## License

MIT © Deepfactory, Inc. See [LICENSE](LICENSE) for details.

<!-- BOTTOM LOGO -->
<a title="DEEP" href="https://www.deepfactory.kr/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./src/assets/deep-white.png">
    <img alt="DEEP" src="./src/assets/deep-dark.png" width="120">
  </picture>
</a>
<!--  -->

/\*_ @jsxImportSource @emotion/react _/
import { cx } from '@emotion/css';
import { css } from '@emotion/react';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import { backgroundStylesProps } from '../styles/bgStylesProps';
import { borderStylesProps } from '../styles/borderStylesProps';
import { flexStylesProps } from '../styles/flexStylesProps';
import { gradientStylesProps } from '../styles/gradientStylesProps';
import { screenSizeStylesProps } from '../styles/screenSizeStylesProps';
import { shadowStylesProps } from '../styles/shadowStylesProps';
import { spaceStylesProps } from '../styles/spaceStylesProps';
import { ScrollLayerElementType, ScrollLayerPropsType, ScrollLayerType } from '../types/props/ScrollLayerPropsType';
import { mediaScreenSize } from '../utils/mediaScreenSize';

const ScrollLayer = React.memo(
<T extends ScrollLayerElementType = 'div'>({
as,
children,
className,
display,
sizes,
flex,
padding,
margin,
borderRadius,
border,
background,
gradient,
opacity,
shadow,
zIndex,
transition = { time: 0.25, type: 'ease-in-out' },
mq = {},
css: cssProp,
...rest
}: ScrollLayerPropsType<T> & ComponentPropsWithoutRef<T>) => {
const pPs = {
display,
sizes,
flex: display === 'flex' || !display ? flex : undefined,
padding,
margin,
border,
borderRadius,
background,
gradient,
opacity,
shadow,
};

    const Component = as || 'div';

    //
    // extended props styles
    const ExtendedStyles = (props: ScrollLayerType) => {
      return {
        display: props.display,
        opacity: props.opacity,
        ...screenSizeStylesProps(props.sizes),
        ...((props.display === 'flex' || !props.display) && flexStylesProps(props.flex)),
        ...spaceStylesProps({ padding: props.padding, margin: props.margin }),
        ...borderStylesProps({ border: props.border, borderRadius: props.borderRadius }),
        ...backgroundStylesProps(props.background),
        ...gradientStylesProps(props.gradient),
        ...shadowStylesProps(props.shadow),
      };
    };

    //
    // base style
    const baseStyle = useMemo(
      () =>
        css({
          transition: `all ${transition.time || 0.25}s ${transition.type || 'ease-in-out'}`,
          listStyle: 'none',
          outline: 'none',
          zIndex,
        }),
      [transition, zIndex],
    );

    //
    // media-query styles
    const mediaStyles = useMemo(
      () =>
        mediaScreenSize.map(size => {
          const breakpointKey = `w${size}` as keyof typeof mq;
          const styles = mq?.[breakpointKey];

          return css`
            @media (max-width: ${size}px) {
              ${styles ? ExtendedStyles(styles) : ''}
            }
          `;
        }),
      [mq],
    );

    //
    // combined styles
    const combinedStyles = useMemo(
      () => css`
        ${baseStyle}
        ${ExtendedStyles({
          ...pPs,
          display: pPs.display ?? 'flex',
          sizes: { ...pPs.sizes, width: pPs.sizes?.width ?? '100%' },
          flex:
            pPs.display === 'flex' || !pPs.display
              ? { ...pPs.flex, direction: pPs.flex?.direction ?? 'column' }
              : undefined,
          gradient: { ...pPs.gradient, type: pPs.gradient?.type ?? 'linear' } as any,
          border: {
            ...pPs.border,
            stroke: pPs.border?.stroke ?? 0,
            color: pPs.border?.color ?? 'transparent',
            shape: pPs.border?.shape ?? 'solid',
          } as any,
        })}
    ${mediaStyles}
    ${cssProp}
      `,
      [baseStyle, pPs, mediaStyles, cssProp],
    );

    const combinedClassName = cx('dble-scroll-layer', className);
    return (
      <Component className={combinedClassName} css={combinedStyles} {...(rest as any)}>
        {children}
      </Component>
    );

},
);

export { ScrollLayer };
