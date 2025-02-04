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
var shadowStylesProps_1 = require("../styles/shadowStylesProps");
var createMediaStyles_1 = require("../utils/createMediaStyles");
var Border = react_2.default.forwardRef(function (props, ref) {
    var as = props.as, children = props.children, className = props.className, w = props.w, maxW = props.maxW, minW = props.minW, h = props.h, maxH = props.maxH, minH = props.minH, fill = props.fill, radius = props.radius, stroke = props.stroke, position = props.position, strokeColor = props.strokeColor, shape = props.shape, shadow = props.shadow, opacity = props.opacity, zIndex = props.zIndex, transition = props.transition, cursor = props.cursor, userSelect = props.userSelect, _hover = props._hover, _focus = props._focus, _active = props._active, _a = props._mq, _mq = _a === void 0 ? {} : _a, cssProp = props.css, rest = __rest(props, ["as", "children", "className", "w", "maxW", "minW", "h", "maxH", "minH", "fill", "radius", "stroke", "position", "strokeColor", "shape", "shadow", "opacity", "zIndex", "transition", "cursor", "userSelect", "_hover", "_focus", "_active", "_mq", "css"]);
    var pPs = {
        w: w,
        maxW: maxW,
        minW: minW,
        h: h,
        maxH: maxH,
        minH: minH,
        fill: fill,
        radius: radius,
        stroke: stroke,
        position: position,
        strokeColor: strokeColor,
        shape: shape,
        shadow: shadow,
        opacity: opacity,
    };
    var Component = as || "div";
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        return __assign(__assign(__assign({ width: props === null || props === void 0 ? void 0 : props.w, maxWidth: props === null || props === void 0 ? void 0 : props.maxW, minWidth: props === null || props === void 0 ? void 0 : props.minW, height: props === null || props === void 0 ? void 0 : props.h, maxHeight: props === null || props === void 0 ? void 0 : props.maxH, minHeight: props === null || props === void 0 ? void 0 : props.minH, backgroundColor: props === null || props === void 0 ? void 0 : props.fill }, (0, borderStylesProps_1.borderStylesProps)({
            radius: props.radius,
            stroke: props.stroke,
            position: props.position,
            color: props.strokeColor,
            shape: props.shape,
        })), (props.shadow && (0, shadowStylesProps_1.shadowStylesProps)(props.shadow))), { opacity: props.opacity });
    };
    //
    // base style
    var baseStyle = (0, react_2.useMemo)(function () {
        return (0, react_1.css)(__assign({ position: "relative" }, (0, baseStylesProps_1.baseStylesProps)({
            transition: transition,
            zIndex: zIndex,
            cursor: cursor,
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
        return (0, react_1.css)({
            "&:hover": ExtendedStyles(__assign({}, _hover)),
            "&:focus": ExtendedStyles(__assign({}, _focus)),
            "&:active": ExtendedStyles(__assign({}, _active)),
        });
    }, [_hover, _focus, _active]);
    //
    // combined styles
    var combinedStyles = (0, react_2.useMemo)(function () {
        var _a, _b;
        return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      ", "\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), baseStyle, ExtendedStyles(__assign(__assign({}, pPs), { radius: (_a = pPs.radius) !== null && _a !== void 0 ? _a : 16, w: (_b = pPs.w) !== null && _b !== void 0 ? _b : "100%" })), mediaStyles, pseudoStyles);
    }, [baseStyle, pPs, mediaStyles, pseudoStyles]);
    var combinedClassName = (0, css_1.cx)("dble-border".concat(as ? "-".concat(as) : ""), className);
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ ref: ref, className: combinedClassName, css: (0, react_1.css)([combinedStyles, cssProp]) }, rest, { children: children })));
});
exports.default = react_2.default.memo(Border);
var templateObject_1;
