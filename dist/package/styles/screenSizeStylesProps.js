"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.screenSizeStylesProps = void 0;
var screenSizeStylesProps = function (props) {
    if (!props)
        return {};
    return {
        width: props === null || props === void 0 ? void 0 : props.width,
        maxWidth: props === null || props === void 0 ? void 0 : props.maxWidth,
        minWidth: props === null || props === void 0 ? void 0 : props.minWidth,
        height: props === null || props === void 0 ? void 0 : props.height,
        maxHeight: props === null || props === void 0 ? void 0 : props.maxHeight,
        minHeight: props === null || props === void 0 ? void 0 : props.minHeight,
    };
};
exports.screenSizeStylesProps = screenSizeStylesProps;
