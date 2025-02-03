"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borderStylesProps = void 0;
var borderStylesProps = function (border) {
    var _a = border !== null && border !== void 0 ? border : {}, radius = _a.radius, stroke = _a.stroke, position = _a.position, shape = _a.shape, color = _a.color;
    var defaultShape = shape !== null && shape !== void 0 ? shape : "solid";
    if (!stroke && !position && !shape && !color) {
        return {
            border: undefined,
            borderBottom: undefined,
            borderTop: undefined,
            borderRight: undefined,
            borderLeft: undefined,
            borderRadius: radius,
        };
    }
    return {
        border: !position || position === "all"
            ? "".concat(stroke, "px ").concat(defaultShape, " ").concat(color)
            : undefined,
        borderBottom: position === "bottom"
            ? "".concat(stroke, "px ").concat(defaultShape, " ").concat(color)
            : undefined,
        borderTop: position === "top" ? "".concat(stroke, "px ").concat(defaultShape, " ").concat(color) : undefined,
        borderRight: position === "right" ? "".concat(stroke, "px ").concat(defaultShape, " ").concat(color) : undefined,
        borderLeft: position === "left" ? "".concat(stroke, "px ").concat(defaultShape, " ").concat(color) : undefined,
        borderRadius: radius,
    };
};
exports.borderStylesProps = borderStylesProps;
