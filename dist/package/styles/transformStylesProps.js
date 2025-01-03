"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformStylesProps = void 0;
var transformStylesProps = function (props) {
    var _a, _b;
    var _c = props !== null && props !== void 0 ? props : {}, axis = _c.axis, scale = _c.scale, rotate = _c.rotate;
    if (!props)
        return {};
    return {
        transform: axis
            ? "translate(".concat(typeof axis.x === 'number' ? "".concat(axis.x, "px") : ((_a = axis.x) !== null && _a !== void 0 ? _a : '0'), ", ").concat(typeof axis.y === 'number' ? "".concat(axis.y, "px") : ((_b = axis.y) !== null && _b !== void 0 ? _b : '0'), ")")
            : undefined,
        scale: scale,
        rotate: typeof rotate === 'number' ? rotate + 'deg' : rotate,
    };
};
exports.transformStylesProps = transformStylesProps;
