import { TrafficType } from '../types/piece/TrafficType';

const spaceStylesProps = (props?: { padding?: TrafficType; margin?: TrafficType }) => {
  if (!props) return {};
  return {
    paddingTop: props.padding?.all || props.padding?.vertical || props.padding?.top,
    paddingBottom: props.padding?.all || props.padding?.vertical || props.padding?.bottom,
    paddingRight: props.padding?.all || props.padding?.horizontal || props.padding?.right,
    paddingLeft: props.padding?.all || props.padding?.horizontal || props.padding?.left,

    marginTop: props.margin?.all || props.margin?.vertical || props.margin?.top,
    marginBottom: props.margin?.all || props.margin?.vertical || props.margin?.bottom,
    marginRight: props.margin?.all || props.margin?.horizontal || props.margin?.right,
    marginLeft: props.margin?.all || props.margin?.horizontal || props.margin?.left,
  };
};

export { spaceStylesProps };
