"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gridStylesProps = void 0;
var gridStylesProps = function (props) {
    if (!props)
        return {};
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
exports.gridStylesProps = gridStylesProps;
