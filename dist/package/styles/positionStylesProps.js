"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionStylesProps = void 0;
var positionStylesProps = function (props) {
    var _a, _b, _c, _d, _e;
    if (!props)
        return {};
    return {
        position: (_a = props.position) === null || _a === void 0 ? void 0 : _a.type,
        top: (_b = props === null || props === void 0 ? void 0 : props.position) === null || _b === void 0 ? void 0 : _b.top,
        bottom: (_c = props.position) === null || _c === void 0 ? void 0 : _c.bottom,
        left: (_d = props.position) === null || _d === void 0 ? void 0 : _d.left,
        right: (_e = props.position) === null || _e === void 0 ? void 0 : _e.right,
    };
};
exports.positionStylesProps = positionStylesProps;
