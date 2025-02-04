"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var css_1 = require("@emotion/css");
var react_1 = require("@emotion/react");
var react_2 = __importStar(require("react"));
var baseStylesProps_1 = require("../styles/baseStylesProps");
var screenSizeStylesProps_1 = require("../styles/screenSizeStylesProps");
var createMediaStyles_1 = require("../utils/createMediaStyles");
var Position = react_2.default.forwardRef(function (props, ref) {
    var as = props.as, children = props.children, className = props.className, w = props.w, maxW = props.maxW, minW = props.minW, h = props.h, maxH = props.maxH, minH = props.minH, type = props.type, top = props.top, bottom = props.bottom, left = props.left, right = props.right, axis = props.axis, zIndex = props.zIndex, transition = props.transition, _hover = props._hover, _focus = props._focus, _active = props._active, _a = props._mq, _mq = _a === void 0 ? {} : _a, cssProp = props.css, rest = __rest(props, ["as", "children", "className", "w", "maxW", "minW", "h", "maxH", "minH", "type", "top", "bottom", "left", "right", "axis", "zIndex", "transition", "_hover", "_focus", "_active", "_mq", "css"]);
    var pPs = {
        w: w,
        maxW: maxW,
        minW: minW,
        h: h,
        maxH: maxH,
        minH: minH,
        type: type,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        axis: axis,
    };
    var Component = as || "div";
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        var _a, _b;
        return __assign(__assign({ display: "flex" }, (0, screenSizeStylesProps_1.screenSizeStylesProps)({
            width: props.w,
            maxWidth: props.maxW,
            minWidth: props.minW,
            height: props.h,
            maxHeight: props.maxH,
            minHeight: props.minH,
        })), { position: props.type, top: props.top, bottom: props.bottom, left: props.left, right: props.right, transform: axis
                ? "translate(".concat(typeof axis.x === "number" ? "".concat(axis.x, "px") : (_a = axis.x) !== null && _a !== void 0 ? _a : "0", ", ").concat(typeof axis.y === "number" ? "".concat(axis.y, "px") : (_b = axis.y) !== null && _b !== void 0 ? _b : "0", ")")
                : undefined });
    };
    //
    // media-query styles
    var mediaStyles = (0, react_2.useMemo)(function () { return (0, createMediaStyles_1.createMediaStyles)(_mq, ExtendedStyles); }, [_mq]);
    //
    // pseudos
    var pseudoStyles = (0, react_2.useMemo)(function () {
        return (0, react_1.css)({
            "&:hover": ExtendedStyles(_hover || {}),
            "&:focus": ExtendedStyles(_focus || {}),
            "&:active": ExtendedStyles(_active || {}),
        });
    }, [_hover, _focus, _active]);
    //
    // combined styles
    var combinedStyles = (0, react_2.useMemo)(function () {
        var _a;
        return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      ", "\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), (0, baseStylesProps_1.baseStylesProps)({ transition: transition, zIndex: zIndex }), ExtendedStyles(__assign(__assign({}, pPs), { type: (_a = pPs.type) !== null && _a !== void 0 ? _a : "relative" })), mediaStyles, pseudoStyles);
    }, [pPs, mediaStyles, pseudoStyles]);
    var combinedClassName = (0, css_1.cx)("dble-position", className);
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ ref: ref, className: combinedClassName, css: (0, react_1.css)([combinedStyles, cssProp]) }, rest, { children: children })));
});
exports.default = react_2.default.memo(Position);
var templateObject_1;
