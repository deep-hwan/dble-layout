import { ScreenSizeType } from '../types/ScreenSizeType';

const screenSizeStylesProps = (props?: ScreenSizeType) => {
  if (!props) return {};
  return {
    width: props?.width,
    maxWidth: props?.maxWidth,
    minWidth: props?.minWidth,
    height: props?.height,
    maxHeight: props?.maxHeight,
    minHeight: props?.minHeight,
  };
};

export { screenSizeStylesProps };
