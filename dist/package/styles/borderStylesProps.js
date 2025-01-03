"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borderStylesProps = void 0;
var borderStylesProps = function (props) {
    var _a = props !== null && props !== void 0 ? props : {}, border = _a.border, borderRadius = _a.borderRadius;
    var _b = border !== null && border !== void 0 ? border : {}, stroke = _b.stroke, position = _b.position, shape = _b.shape, color = _b.color;
    var defaultShape = shape !== null && shape !== void 0 ? shape : 'solid';
    if (!props || !stroke || stroke === 0)
        return { borderRadius: borderRadius };
    return {
        border: !position || position === 'all' ? "".concat(stroke, "px ").concat(defaultShape, " ").concat(color) : undefined,
        borderBottom: position === 'bottom' ? "".concat(stroke, "px ").concat(defaultShape, " ").concat(color) : undefined,
        borderTop: position === 'top' ? "".concat(stroke, "px ").concat(defaultShape, " ").concat(color) : undefined,
        borderRight: position === 'right' ? "".concat(stroke, "px ").concat(defaultShape, " ").concat(color) : undefined,
        borderLeft: position === 'left' ? "".concat(stroke, "px ").concat(defaultShape, " ").concat(color) : undefined,
        borderRadius: borderRadius,
    };
};
exports.borderStylesProps = borderStylesProps;
