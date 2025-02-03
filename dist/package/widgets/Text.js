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
var spaceStylesProps_1 = require("../styles/spaceStylesProps");
var transformStylesProps_1 = require("../styles/transformStylesProps");
var typographyStylesProps_1 = require("../styles/typographyStylesProps");
var createMediaStyles_1 = require("../utils/createMediaStyles");
var Text = react_2.default.forwardRef(function (_a, ref) {
    var as = _a.as, children = _a.children, className = _a.className, w = _a.w, maxW = _a.maxW, minW = _a.minW, h = _a.h, maxH = _a.maxH, minH = _a.minH, padding = _a.padding, margin = _a.margin, size = _a.size, weight = _a.weight, align = _a.align, color = _a.color, shadow = _a.shadow, transform = _a.transform, decoration = _a.decoration, lineHeight = _a.lineHeight, whiteSpace = _a.whiteSpace, ellipsis = _a.ellipsis, opacity = _a.opacity, scale = _a.scale, rotate = _a.rotate, zIndex = _a.zIndex, userSelect = _a.userSelect, _b = _a.transition, transition = _b === void 0 ? { duration: 0.25, type: "ease-in-out" } : _b, _hover = _a._hover, _focus = _a._focus, _active = _a._active, _c = _a._mq, _mq = _c === void 0 ? {} : _c, cssProp = _a.css, rest = __rest(_a, ["as", "children", "className", "w", "maxW", "minW", "h", "maxH", "minH", "padding", "margin", "size", "weight", "align", "color", "shadow", "transform", "decoration", "lineHeight", "whiteSpace", "ellipsis", "opacity", "scale", "rotate", "zIndex", "userSelect", "transition", "_hover", "_focus", "_active", "_mq", "css"]);
    var pPs = {
        w: w,
        maxW: maxW,
        minW: minW,
        h: h,
        maxH: maxH,
        minH: minH,
        padding: padding,
        margin: margin,
        size: size,
        weight: weight,
        align: align,
        color: color,
        shadow: shadow,
        transform: transform,
        decoration: decoration,
        lineHeight: lineHeight,
        whiteSpace: whiteSpace,
        ellipsis: ellipsis,
        opacity: opacity,
        scale: scale,
        rotate: rotate,
    };
    var Component = as || "p";
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        return __assign(__assign(__assign(__assign({ opacity: props.opacity }, (0, typographyStylesProps_1.typographyStylesProps)({
            as: props.as,
            txtSize: props.size,
            txtWeight: props.weight,
            txtAlign: props.align,
            txtColor: props.color,
            txtShadow: props.shadow,
            txtTransform: props.transform,
            lineHeight: props.lineHeight,
            whiteSpace: props.whiteSpace,
            ellipsis: props.ellipsis,
            txtDecoration: props.decoration,
        })), (0, screenSizeStylesProps_1.screenSizeStylesProps)({
            width: props.w,
            maxWidth: props.maxW,
            minWidth: props.minW,
            height: props.h,
            maxHeight: props.maxH,
            minHeight: props.minH,
        })), (0, spaceStylesProps_1.spaceStylesProps)({ padding: props.padding, margin: props.margin })), (0, transformStylesProps_1.transformStylesProps)({
            scale: props.scale,
            rotate: props.rotate,
        }));
    };
    //
    // base style
    var baseStyle = (0, react_2.useMemo)(function () {
        return (0, react_1.css)(__assign(__assign({}, (0, baseStylesProps_1.baseStylesProps)({ transition: transition, zIndex: zIndex, userSelect: userSelect })), { transition: "all ".concat(transition.duration, "s ").concat(transition.type) }));
    }, [rest.onClick, rest.onMouseEnter, transition, zIndex, userSelect]);
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
        var _a, _b, _c, _d;
        return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        ", "\n        ", "\n    ", "\n    ", "\n      "], ["\n        ", "\n        ", "\n    ", "\n    ", "\n      "])), baseStyle, ExtendedStyles(__assign(__assign({}, pPs), { size: (_a = pPs.size) !== null && _a !== void 0 ? _a : 15, color: (_b = pPs.color) !== null && _b !== void 0 ? _b : "#5d5d5f", whiteSpace: (_c = pPs.whiteSpace) !== null && _c !== void 0 ? _c : "pre-line", align: (_d = pPs.align) !== null && _d !== void 0 ? _d : "start" })), mediaStyles, pseudoStyles);
    }, [baseStyle, pPs, mediaStyles, pseudoStyles]);
    var combinedClassName = (0, css_1.cx)("dble-text".concat(as ? "-".concat(as) : ""), className);
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ ref: ref, className: combinedClassName, css: (0, react_1.css)([combinedStyles, cssProp]) }, rest, { children: children })));
});
exports.default = react_2.default.memo(Text);
var templateObject_1;
