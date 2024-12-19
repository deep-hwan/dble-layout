import { BorderType } from '../types/piece/BorderType';

type BorderPropsType = {
  border?: BorderType;
  borderRadius?: number | string;
};

const borderStylesProps = (props?: BorderPropsType) => {
  const { border, borderRadius } = props ?? {};
  const { stroke, position, shape, color } = border ?? {};

  const defaultShape = shape ?? 'solid';

  if (!props || !stroke || stroke === 0) return { borderRadius: borderRadius };
  return {
    border: !position || position === 'all' ? `${stroke}px ${defaultShape} ${color}` : undefined,
    borderBottom: position === 'bottom' ? `${stroke}px ${defaultShape} ${color}` : undefined,
    borderTop: position === 'top' ? `${stroke}px ${defaultShape} ${color}` : undefined,
    borderRight: position === 'right' ? `${stroke}px ${defaultShape} ${color}` : undefined,
    borderLeft: position === 'left' ? `${stroke}px ${defaultShape} ${color}` : undefined,
    borderRadius: borderRadius,
  };
};

export { borderStylesProps };
