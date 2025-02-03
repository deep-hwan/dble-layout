"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowStylesProps = void 0;
var shadowStylesProps = function (props) {
    var _a;
    if (!props)
        return {};
    return {
        boxShadow: props
            ? "".concat((_a = props.x) !== null && _a !== void 0 ? _a : 0, "px ").concat(props.y, "px ").concat(props.blur, "px ").concat(props.color)
            : undefined,
    };
};
exports.shadowStylesProps = shadowStylesProps;
