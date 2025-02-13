"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexStylesProps = void 0;
var flexStylesProps = function (props) {
    var computedDirection = (props === null || props === void 0 ? void 0 : props.isReverse)
        ? "".concat(props.direc, "-reverse")
        : props === null || props === void 0 ? void 0 : props.direc;
    var computedCrossAlign = (props === null || props === void 0 ? void 0 : props.isReverse)
        ? props.justify === "start"
            ? "flex-end"
            : "flex-start"
        : props === null || props === void 0 ? void 0 : props.justify;
    var baseStyle = {
        flexDirection: computedDirection,
        alignItems: props === null || props === void 0 ? void 0 : props.align,
        justifyContent: computedCrossAlign,
        gap: props === null || props === void 0 ? void 0 : props.gap,
        order: props === null || props === void 0 ? void 0 : props.order,
        flexGrow: props === null || props === void 0 ? void 0 : props.grow,
        flexShrink: props === null || props === void 0 ? void 0 : props.shrink,
        flexBasis: props === null || props === void 0 ? void 0 : props.basis,
        flex: props === null || props === void 0 ? void 0 : props.flex,
        alignContent: props === null || props === void 0 ? void 0 : props.alignContent,
        alignSelf: props === null || props === void 0 ? void 0 : props.alignSelf,
        flexWrap: props === null || props === void 0 ? void 0 : props.wrap,
    };
    if (!props)
        return {};
    return baseStyle;
};
exports.flexStylesProps = flexStylesProps;
