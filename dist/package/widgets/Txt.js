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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Txt = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var css_1 = require("@emotion/css");
var react_1 = require("@emotion/react");
var react_2 = __importStar(require("react"));
var bgStylesProps_1 = require("../styles/bgStylesProps");
var borderStylesProps_1 = require("../styles/borderStylesProps");
var gradientStylesProps_1 = require("../styles/gradientStylesProps");
var positionStylesProps_1 = require("../styles/positionStylesProps");
var screenSizeStylesProps_1 = require("../styles/screenSizeStylesProps");
var shadowStylesProps_1 = require("../styles/shadowStylesProps");
var spaceStylesProps_1 = require("../styles/spaceStylesProps");
var transformStylesProps_1 = require("../styles/transformStylesProps");
var typographyStylesProps_1 = require("../styles/typographyStylesProps");
var mediaScreenSize_1 = require("../utils/mediaScreenSize");
var useRender_1 = __importDefault(require("../utils/useRender"));
var Txt = react_2.default.memo(function (_a) {
    var as = _a.as, children = _a.children, className = _a.className, txtSize = _a.txtSize, txtWeight = _a.txtWeight, txtAlign = _a.txtAlign, txtColor = _a.txtColor, txtShadow = _a.txtShadow, txtTransform = _a.txtTransform, txtDecoration = _a.txtDecoration, lineHeight = _a.lineHeight, whiteSpace = _a.whiteSpace, ellipsis = _a.ellipsis, sizes = _a.sizes, position = _a.position, padding = _a.padding, margin = _a.margin, borderRadius = _a.borderRadius, border = _a.border, background = _a.background, opacity = _a.opacity, gradient = _a.gradient, shadow = _a.shadow, axis = _a.axis, scale = _a.scale, rotate = _a.rotate, zIndex = _a.zIndex, cursor = _a.cursor, userSelect = _a.userSelect, _b = _a.transition, transition = _b === void 0 ? { time: 0.25, type: "ease-in-out" } : _b, _hover = _a._hover, _focus = _a._focus, _active = _a._active, _c = _a.mq, mq = _c === void 0 ? {} : _c, cssProp = _a.css, rest = __rest(_a, ["as", "children", "className", "txtSize", "txtWeight", "txtAlign", "txtColor", "txtShadow", "txtTransform", "txtDecoration", "lineHeight", "whiteSpace", "ellipsis", "sizes", "position", "padding", "margin", "borderRadius", "border", "background", "opacity", "gradient", "shadow", "axis", "scale", "rotate", "zIndex", "cursor", "userSelect", "transition", "_hover", "_focus", "_active", "mq", "css"]);
    (0, useRender_1.default)();
    var pPs = {
        txtSize: txtSize,
        txtWeight: txtWeight,
        txtAlign: txtAlign,
        txtColor: txtColor,
        txtShadow: txtShadow,
        txtTransform: txtTransform,
        txtDecoration: txtDecoration,
        lineHeight: lineHeight,
        whiteSpace: whiteSpace,
        ellipsis: ellipsis,
        sizes: sizes,
        position: position,
        padding: padding,
        margin: margin,
        border: border,
        borderRadius: borderRadius,
        background: background,
        gradient: gradient,
        opacity: opacity,
        shadow: shadow,
        axis: axis,
        scale: scale,
        rotate: rotate,
    };
    var Component = as || "p";
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ opacity: props.opacity }, (0, typographyStylesProps_1.typographyStylesProps)({
            as: props.as,
            txtSize: props.txtSize,
            txtWeight: props.txtWeight,
            txtAlign: props.txtAlign,
            txtColor: props.txtColor,
            txtShadow: props.txtShadow,
            txtTransform: props.txtTransform,
            lineHeight: props.lineHeight,
            whiteSpace: props.whiteSpace,
            ellipsis: props.ellipsis,
            txtDecoration: props.txtDecoration,
        })), (0, screenSizeStylesProps_1.screenSizeStylesProps)(props.sizes)), (0, positionStylesProps_1.positionStylesProps)({ position: props.position })), (0, spaceStylesProps_1.spaceStylesProps)({ padding: props.padding, margin: props.margin })), (0, borderStylesProps_1.borderStylesProps)({
            border: props.border,
            borderRadius: props.borderRadius,
        })), (0, bgStylesProps_1.backgroundStylesProps)(props.background)), (0, gradientStylesProps_1.gradientStylesProps)(props.gradient)), (0, shadowStylesProps_1.shadowStylesProps)(props.shadow)), (0, transformStylesProps_1.transformStylesProps)({
            axis: props.axis,
            scale: props.scale,
            rotate: props.rotate,
        }));
    };
    //
    // base style
    var baseStyle = (0, react_2.useMemo)(function () {
        return (0, react_1.css)({
            cursor: cursor
                ? cursor
                : (rest.onClick || rest.onMouseEnter) && "pointer",
            transition: "all ".concat(transition.time || 0.25, "s ").concat(transition.type || "ease-in-out"),
            display: "inline-block",
            listStyle: "none",
            outline: "none",
            zIndex: zIndex,
            userSelect: userSelect,
        });
    }, [cursor, rest.onClick, rest.onMouseEnter, transition, zIndex, userSelect]);
    //
    // media-query styles
    var mediaStyles = (0, react_2.useMemo)(function () {
        return mediaScreenSize_1.mediaScreenSize.map(function (size) {
            var breakpointKey = "w".concat(size);
            var styles = mq === null || mq === void 0 ? void 0 : mq[breakpointKey];
            return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            @media (max-width: ", "px) {\n              ", "\n            }\n          "], ["\n            @media (max-width: ", "px) {\n              ", "\n            }\n          "])), size, styles ? ExtendedStyles(styles) : "");
        });
    }, [mq]);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        ", "\n        ", "\n    ", "\n    ", "\n    ", "\n      "], ["\n        ", "\n        ", "\n    ", "\n    ", "\n    ", "\n      "])), baseStyle, ExtendedStyles(__assign(__assign({}, pPs), { sizes: __assign({}, pPs.sizes), gradient: __assign(__assign({}, pPs.gradient), { type: (_b = (_a = pPs.gradient) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : "linear" }), border: __assign(__assign({}, pPs.border), { stroke: (_d = (_c = pPs.border) === null || _c === void 0 ? void 0 : _c.stroke) !== null && _d !== void 0 ? _d : 0, color: (_f = (_e = pPs.border) === null || _e === void 0 ? void 0 : _e.color) !== null && _f !== void 0 ? _f : "transparent", shape: (_h = (_g = pPs.border) === null || _g === void 0 ? void 0 : _g.shape) !== null && _h !== void 0 ? _h : "solid" }), txtSize: (_j = pPs.txtSize) !== null && _j !== void 0 ? _j : 15, txtColor: (_k = pPs.txtColor) !== null && _k !== void 0 ? _k : "#5d5d5f", whiteSpace: (_l = pPs.whiteSpace) !== null && _l !== void 0 ? _l : "pre-line" })), mediaStyles, pseudoStyles, cssProp);
    }, [baseStyle, pPs, mediaStyles, pseudoStyles, cssProp]);
    var combinedClassName = (0, css_1.cx)("dble-txt", className);
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ className: combinedClassName, css: combinedStyles }, rest, { children: children })));
});
exports.Txt = Txt;
var templateObject_1, templateObject_2;
