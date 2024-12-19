import { FlexType } from '../types/piece/FlexType';

const flexStylesProps = (props?: FlexType) => {
  const computedDirection: FlexType['direction'] = props?.isReverse
    ? (`${props.direction}-reverse` as 'row-reverse' | 'column-reverse')
    : props?.direction;

  const computedCrossAlign = props?.isReverse
    ? props.crossAlign === 'start'
      ? 'flex-end'
      : 'flex-start'
    : props?.crossAlign;

  const baseStyle = {
    flexDirection: computedDirection,
    alignItems: props?.align,
    justifyContent: computedCrossAlign,
    gap: props?.gap,
    order: props?.order,
    flexGrow: props?.grow,
    flexShrink: props?.shrink,
    flexBasis: props?.basis,
    flex: props?.flex,
    alignContent: props?.alignContent,
    alignSelf: props?.alignSelf,
    flexWrap: props?.wrap,
  };

  if (!props) return {};
  return baseStyle;
};

export { flexStylesProps };
