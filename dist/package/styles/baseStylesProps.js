"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseStylesProps = void 0;
var baseStylesProps = function (_a) {
    var _b;
    var cursor = _a.cursor, transition = _a.transition, zIndex = _a.zIndex, userSelect = _a.userSelect, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter;
    return {
        zIndex: zIndex,
        userSelect: userSelect,
        cursor: cursor ? cursor : (onClick || onMouseEnter) && "pointer",
        transition: transition && (transition === null || transition === void 0 ? void 0 : transition.duration) && (transition === null || transition === void 0 ? void 0 : transition.duration) > 0
            ? "all ".concat(transition.duration, "s ").concat((_b = transition.type) !== null && _b !== void 0 ? _b : "ease-in-out")
            : undefined,
        listStyle: "none",
        outline: "none",
        borderWidth: 0,
    };
};
exports.baseStylesProps = baseStylesProps;
