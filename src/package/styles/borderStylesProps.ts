import { BorderType } from '../types/BorderType';

const borderStylesProps = (props?: BorderType) => {
  const { border, borderRadius } = props ?? {};
  const { stroke, position, shape, color } = border ?? {};

  if (!props) return {};
  return {
    border: !!stroke && position === 'all' ? `${stroke}px ${shape} ${color}` : undefined,
    borderBottom: position === 'bottom' ? `${stroke}px ${shape} ${color}` : undefined,
    borderTop: position === 'top' ? `${stroke}px ${shape} ${color}` : undefined,
    borderRight: position === 'right' ? `${stroke}px ${shape} ${color}` : undefined,
    borderLeft: position === 'left' ? `${stroke}px ${shape} ${color}` : undefined,
    borderRadius: borderRadius,
  };
};

export { borderStylesProps };
