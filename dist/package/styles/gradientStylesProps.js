"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradientStylesProps = void 0;
var gradientStylesProps = function (props) {
    if (!props)
        return {};
    if (!props.colors || props.colors.length === 0)
        return {};
    var background;
    var _a = props.type, type = _a === void 0 ? 'linear' : _a, colors = props.colors, degree = props.degree;
    if (type === 'linear') {
        background = "linear-gradient(".concat(degree, "deg, ").concat(colors.map(function (c) { return "".concat(c.color, " ").concat(c.stop, "%"); }).join(', '), ")");
    }
    else if (type === 'radial') {
        background = "radial-gradient(".concat(colors.map(function (c) { return "".concat(c.color, " ").concat(c.stop, "%"); }).join(', '), ")");
    }
    return {
        background: background,
    };
};
exports.gradientStylesProps = gradientStylesProps;
