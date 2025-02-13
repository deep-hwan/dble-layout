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
var borderStylesProps_1 = require("../styles/borderStylesProps");
var flexStylesProps_1 = require("../styles/flexStylesProps");
var gradientStylesProps_1 = require("../styles/gradientStylesProps");
var screenSizeStylesProps_1 = require("../styles/screenSizeStylesProps");
var shadowStylesProps_1 = require("../styles/shadowStylesProps");
var spaceStylesProps_1 = require("../styles/spaceStylesProps");
var transformStylesProps_1 = require("../styles/transformStylesProps");
var typographyStylesProps_1 = require("../styles/typographyStylesProps");
var createMediaStyles_1 = require("../utils/createMediaStyles");
var TouchableOpacity = react_2.default.forwardRef(function (_a, ref) {
    var as = _a.as, children = _a.children, className = _a.className, w = _a.w, maxW = _a.maxW, minW = _a.minW, h = _a.h, maxH = _a.maxH, minH = _a.minH, 
    // flex
    direc = _a.direc, isReverse = _a.isReverse, align = _a.align, justify = _a.justify, gap = _a.gap, wrap = _a.wrap, 
    // typography
    txtSize = _a.txtSize, txtWeight = _a.txtWeight, txtAlign = _a.txtAlign, txtColor = _a.txtColor, txtShadow = _a.txtShadow, txtTransform = _a.txtTransform, lineHeight = _a.lineHeight, whiteSpace = _a.whiteSpace, 
    // padding
    padding = _a.padding, 
    // background
    fill = _a.fill, gradient = _a.gradient, border = _a.border, shadow = _a.shadow, opacity = _a.opacity, scale = _a.scale, zIndex = _a.zIndex, cursor = _a.cursor, _b = _a.userSelect, userSelect = _b === void 0 ? "none" : _b, _c = _a.transition, transition = _c === void 0 ? { duration: 0.2, type: "ease-in-out" } : _c, _hover = _a._hover, _focus = _a._focus, _active = _a._active, _disabled = _a._disabled, _d = _a._mq, _mq = _d === void 0 ? {} : _d, disabled = _a.disabled, cssProp = _a.css, rest = __rest(_a, ["as", "children", "className", "w", "maxW", "minW", "h", "maxH", "minH", "direc", "isReverse", "align", "justify", "gap", "wrap", "txtSize", "txtWeight", "txtAlign", "txtColor", "txtShadow", "txtTransform", "lineHeight", "whiteSpace", "padding", "fill", "gradient", "border", "shadow", "opacity", "scale", "zIndex", "cursor", "userSelect", "transition", "_hover", "_focus", "_active", "_disabled", "_mq", "disabled", "css"]);
    var pPs = {
        w: w,
        maxW: maxW,
        minW: minW,
        h: h,
        maxH: maxH,
        minH: minH,
        //
        direc: direc,
        isReverse: isReverse,
        align: align,
        justify: justify,
        gap: gap,
        wrap: wrap,
        //
        txtSize: txtSize,
        txtWeight: txtWeight,
        txtAlign: txtAlign,
        txtColor: txtColor,
        txtShadow: txtShadow,
        txtTransform: txtTransform,
        lineHeight: lineHeight,
        whiteSpace: whiteSpace,
        //
        padding: padding,
        //
        fill: fill,
        gradient: gradient,
        border: border,
        shadow: shadow,
        opacity: opacity,
        scale: scale,
    };
    var Component = as || "div";
    var handleClick = (0, react_2.useCallback)(function (event) {
        if (rest === null || rest === void 0 ? void 0 : rest.onClick)
            rest === null || rest === void 0 ? void 0 : rest.onClick(event);
    }, [rest === null || rest === void 0 ? void 0 : rest.onClick]);
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        var _a;
        return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (0, screenSizeStylesProps_1.screenSizeStylesProps)({
            width: props.w,
            maxWidth: props.maxW,
            minWidth: props.minW,
            height: props.h,
            maxHeight: props.maxH,
            minHeight: props.minH,
        })), (0, flexStylesProps_1.flexStylesProps)({
            direc: props.direc,
            isReverse: props.isReverse,
            align: props.align,
            justify: props.justify,
            gap: props.gap,
            wrap: props.wrap,
        })), (0, typographyStylesProps_1.typographyStylesProps)({
            txtSize: props.txtSize,
            txtWeight: props.txtWeight,
            txtAlign: props.txtAlign,
            txtColor: props.txtColor,
            txtShadow: props.txtShadow,
            txtTransform: props.txtTransform,
            lineHeight: props.lineHeight,
            whiteSpace: props.whiteSpace,
        })), (0, spaceStylesProps_1.spaceStylesProps)({ padding: props.padding })), { opacity: props.opacity, backgroundColor: props.fill }), (0, gradientStylesProps_1.gradientStylesProps)(props.gradient)), (0, borderStylesProps_1.borderStylesProps)((_a = props.border) !== null && _a !== void 0 ? _a : {})), (0, shadowStylesProps_1.shadowStylesProps)(props.shadow)), (0, transformStylesProps_1.transformStylesProps)({ scale: props.scale }));
    };
    //
    // base style
    var baseStyle = (0, react_2.useMemo)(function () {
        return (0, react_1.css)(__assign({ position: "relative", display: "flex" }, (0, baseStylesProps_1.baseStylesProps)({
            transition: transition,
            zIndex: zIndex,
            cursor: disabled ? "default" : cursor,
            userSelect: userSelect,
            onClick: rest.onClick,
            onMouseEnter: rest.onMouseEnter,
        })));
    }, [cursor, rest.onClick, rest.onMouseEnter, transition, zIndex, userSelect]);
    //
    // media-query styles
    var mediaStyles = (0, react_2.useMemo)(function () { return (0, createMediaStyles_1.createMediaStyles)(_mq, ExtendedStyles); }, [_mq]);
    //
    // pseudos
    var pseudoStyles = (0, react_2.useMemo)(function () {
        var _a, _b;
        return (0, react_1.css)({
            "&:hover": ExtendedStyles(__assign({}, _hover)),
            "&:focus": ExtendedStyles(__assign({}, _focus)),
            "&:active": ExtendedStyles(__assign(__assign({}, _active), { opacity: (_a = _active === null || _active === void 0 ? void 0 : _active.opacity) !== null && _a !== void 0 ? _a : 0.75 })),
            "&:disabled": ExtendedStyles(__assign(__assign({}, _disabled), { txtColor: (_b = _disabled === null || _disabled === void 0 ? void 0 : _disabled.txtColor) !== null && _b !== void 0 ? _b : "#aaa" })),
        });
    }, [_hover, _focus, _active, _disabled]);
    //
    // combined styles
    var combinedStyles = (0, react_2.useMemo)(function () {
        var _a, _b, _c;
        return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        ", "\n        ", "\n    ", "\n    ", "\n      "], ["\n        ", "\n        ", "\n    ", "\n    ", "\n      "])), baseStyle, ExtendedStyles(__assign(__assign({}, pPs), { direc: (_a = pPs.direc) !== null && _a !== void 0 ? _a : "row", txtSize: (_b = pPs.txtSize) !== null && _b !== void 0 ? _b : 15, txtColor: (_c = pPs.txtColor) !== null && _c !== void 0 ? _c : "#5b94f0" })), mediaStyles, pseudoStyles);
    }, [baseStyle, pPs, mediaStyles, pseudoStyles]);
    var combinedClassName = (0, css_1.cx)("dble-touchableOpacity".concat(as ? "-".concat(as) : ""), className);
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ ref: ref, className: combinedClassName, css: (0, react_1.css)([combinedStyles, cssProp]), onClick: disabled ? undefined : handleClick, disabled: disabled }, rest, { children: children })));
});
exports.default = react_2.default.memo(TouchableOpacity);
var templateObject_1;
