import { GridType } from '../types/GridType';

const gridStylesProps = (props?: GridType) => {
  if (!props) return {};

  return {
    gridTemplateColumns: props.templateColumns,
    gridTemplateRows: props.templateRows,
    gridTemplateAreas: props.templateAreas,
    gridGap: props.gap,
    gridAutoFlow: props.autoFlow,
    gridAutoColumns: props.autoColumns,
    gridAutoRows: props.autoRows,
    justifyItems: props.justifyItems,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    alignContent: props.alignContent,
  };
};

export { gridStylesProps };
