"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowStylesProps = void 0;
var shadowStylesProps = function (props) {
    if (!props)
        return {};
    return {
        boxShadow: props ? "".concat(props === null || props === void 0 ? void 0 : props.x, "px ").concat(props === null || props === void 0 ? void 0 : props.y, "px ").concat(props === null || props === void 0 ? void 0 : props.blur, "px ").concat(props === null || props === void 0 ? void 0 : props.color) : undefined,
    };
};
exports.shadowStylesProps = shadowStylesProps;
