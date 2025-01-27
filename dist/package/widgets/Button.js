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
exports.Button = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var css_1 = require("@emotion/css");
var react_1 = require("@emotion/react");
var react_2 = __importStar(require("react"));
var borderStylesProps_1 = require("../styles/borderStylesProps");
var flexStylesProps_1 = require("../styles/flexStylesProps");
var gradientStylesProps_1 = require("../styles/gradientStylesProps");
var positionStylesProps_1 = require("../styles/positionStylesProps");
var screenSizeStylesProps_1 = require("../styles/screenSizeStylesProps");
var shadowStylesProps_1 = require("../styles/shadowStylesProps");
var spaceStylesProps_1 = require("../styles/spaceStylesProps");
var transformStylesProps_1 = require("../styles/transformStylesProps");
var typographyStylesProps_1 = require("../styles/typographyStylesProps");
var mediaScreenSize_1 = require("../utils/mediaScreenSize");
var Button = react_2.default.memo(react_2.default.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, txtSize = _a.txtSize, txtWeight = _a.txtWeight, txtAlign = _a.txtAlign, txtColor = _a.txtColor, txtShadow = _a.txtShadow, txtTransform = _a.txtTransform, txtDecoration = _a.txtDecoration, lineHeight = _a.lineHeight, whiteSpace = _a.whiteSpace, ellipsis = _a.ellipsis, display = _a.display, sizes = _a.sizes, flex = _a.flex, position = _a.position, padding = _a.padding, margin = _a.margin, borderRadius = _a.borderRadius, border = _a.border, backgroundFill = _a.backgroundFill, opacity = _a.opacity, gradient = _a.gradient, shadow = _a.shadow, axis = _a.axis, scale = _a.scale, rotate = _a.rotate, zIndex = _a.zIndex, cursor = _a.cursor, _b = _a.userSelect, userSelect = _b === void 0 ? "none" : _b, _c = _a.transition, transition = _c === void 0 ? { time: 0.2, type: "ease-in-out" } : _c, _hover = _a._hover, _focus = _a._focus, _active = _a._active, _disabled = _a._disabled, _d = _a.mq, mq = _d === void 0 ? {} : _d, cssProp = _a.css, rest = __rest(_a, ["children", "className", "txtSize", "txtWeight", "txtAlign", "txtColor", "txtShadow", "txtTransform", "txtDecoration", "lineHeight", "whiteSpace", "ellipsis", "display", "sizes", "flex", "position", "padding", "margin", "borderRadius", "border", "backgroundFill", "opacity", "gradient", "shadow", "axis", "scale", "rotate", "zIndex", "cursor", "userSelect", "transition", "_hover", "_focus", "_active", "_disabled", "mq", "css"]);
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
        display: display,
        sizes: sizes,
        flex: flex,
        position: position,
        padding: padding,
        margin: margin,
        border: border,
        borderRadius: borderRadius,
        backgroundFill: backgroundFill,
        gradient: gradient,
        opacity: opacity,
        shadow: shadow,
        axis: axis,
        scale: scale,
        rotate: rotate,
    };
    var handleClick = (0, react_2.useCallback)(function (event) {
        if (rest === null || rest === void 0 ? void 0 : rest.onClick)
            rest === null || rest === void 0 ? void 0 : rest.onClick(event);
    }, [rest === null || rest === void 0 ? void 0 : rest.onClick]);
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ display: props.display, opacity: props.opacity, backgroundColor: props.backgroundFill }, (0, typographyStylesProps_1.typographyStylesProps)({
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
        })), ((props.display === "flex" || !props.display) &&
            (0, flexStylesProps_1.flexStylesProps)(props.flex))), (0, screenSizeStylesProps_1.screenSizeStylesProps)(props.sizes)), (0, positionStylesProps_1.positionStylesProps)({ position: props.position })), (0, spaceStylesProps_1.spaceStylesProps)({ padding: props.padding, margin: props.margin })), (0, borderStylesProps_1.borderStylesProps)({
            border: props.border,
            borderRadius: props.borderRadius,
        })), (0, gradientStylesProps_1.gradientStylesProps)(props.gradient)), (0, shadowStylesProps_1.shadowStylesProps)(props.shadow)), (0, transformStylesProps_1.transformStylesProps)({
            axis: props.axis,
            scale: props.scale,
            rotate: props.rotate,
        }));
    };
    //
    // base style
    var baseStyle = (0, react_2.useMemo)(function () {
        return (0, react_1.css)({
            cursor: "disabled" in rest && rest.disabled
                ? "default"
                : cursor !== null && cursor !== void 0 ? cursor : "pointer",
            transition: "all ".concat(transition.time, "s ").concat(transition.type),
            display: "inline-block",
            listStyle: "none",
            outline: "none",
            zIndex: zIndex,
            userSelect: userSelect,
            borderWidth: 0,
        });
    }, [
        cursor,
        rest.onClick,
        rest.onMouseEnter,
        transition,
        zIndex,
        userSelect,
    ]);
    //
    // media-query styles
    var mediaStyles = (0, react_2.useMemo)(function () {
        return mediaScreenSize_1.mediaScreenSize.map(function (size) {
            var breakpointKey = "w".concat(size);
            var styles = mq === null || mq === void 0 ? void 0 : mq[breakpointKey];
            return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n              @media (max-width: ", "px) {\n                ", "\n              }\n            "], ["\n              @media (max-width: ", "px) {\n                ", "\n              }\n            "])), size, styles ? ExtendedStyles(styles) : "");
        });
    }, [mq]);
    //
    // pseudos
    var pseudoStyles = (0, react_2.useMemo)(function () {
        var _a, _b, _c;
        return (0, react_1.css)({
            "&:hover": ExtendedStyles(__assign(__assign({}, _hover), { opacity: (_a = _hover === null || _hover === void 0 ? void 0 : _hover.opacity) !== null && _a !== void 0 ? _a : 0.9 })),
            "&:focus": ExtendedStyles(_focus || {}),
            "&:active": ExtendedStyles(__assign(__assign({}, _active), { opacity: (_b = _active === null || _active === void 0 ? void 0 : _active.opacity) !== null && _b !== void 0 ? _b : 0.75 })),
            "&:disabled": ExtendedStyles(__assign(__assign({}, _disabled), { backgroundFill: "#f0f0f0", txtColor: (_c = _disabled === null || _disabled === void 0 ? void 0 : _disabled.txtColor) !== null && _c !== void 0 ? _c : "#aaa" })),
        });
    }, [_hover, _focus, _active, _disabled]);
    //
    // combined styles
    var combinedStyles = (0, react_2.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          ", "\n          ", "\n    ", "\n    ", "\n        "], ["\n          ", "\n          ", "\n    ", "\n    ", "\n        "])), baseStyle, ExtendedStyles(__assign(__assign({}, pPs), { display: (_a = pPs.display) !== null && _a !== void 0 ? _a : "flex", flex: pPs.display === "flex" || !pPs.display
                ? __assign(__assign({}, pPs.flex), { direction: (_c = (_b = pPs.flex) === null || _b === void 0 ? void 0 : _b.direction) !== null && _c !== void 0 ? _c : "column", align: (_e = (_d = pPs.flex) === null || _d === void 0 ? void 0 : _d.align) !== null && _e !== void 0 ? _e : "center", crossAlign: (_g = (_f = pPs.flex) === null || _f === void 0 ? void 0 : _f.crossAlign) !== null && _g !== void 0 ? _g : "center" }) : undefined, position: __assign(__assign({}, pPs.position), { type: (_j = (_h = pPs.position) === null || _h === void 0 ? void 0 : _h.type) !== null && _j !== void 0 ? _j : "relative" }), padding: __assign(__assign({}, pPs.padding), { vertical: (_l = (_k = pPs.padding) === null || _k === void 0 ? void 0 : _k.vertical) !== null && _l !== void 0 ? _l : 14, horizontal: (_o = (_m = pPs.padding) === null || _m === void 0 ? void 0 : _m.horizontal) !== null && _o !== void 0 ? _o : 24 }), backgroundFill: (_p = pPs.backgroundFill) !== null && _p !== void 0 ? _p : "#5b94f0", gradient: __assign(__assign({}, pPs.gradient), { type: (_r = (_q = pPs.gradient) === null || _q === void 0 ? void 0 : _q.type) !== null && _r !== void 0 ? _r : "linear" }), border: __assign(__assign({}, pPs.border), { stroke: (_t = (_s = pPs.border) === null || _s === void 0 ? void 0 : _s.stroke) !== null && _t !== void 0 ? _t : 0, color: (_v = (_u = pPs.border) === null || _u === void 0 ? void 0 : _u.color) !== null && _v !== void 0 ? _v : "transparent" }), borderRadius: (_w = pPs.borderRadius) !== null && _w !== void 0 ? _w : 16, whiteSpace: (_x = pPs.whiteSpace) !== null && _x !== void 0 ? _x : "pre-line", txtSize: (_y = pPs.txtSize) !== null && _y !== void 0 ? _y : 15, txtColor: (_z = pPs.txtColor) !== null && _z !== void 0 ? _z : "#fbfbfb" })), mediaStyles, pseudoStyles);
    }, [baseStyle, pPs, mediaStyles, pseudoStyles]);
    var combinedClassName = (0, css_1.cx)("dble-button", className);
    return ((0, jsx_runtime_1.jsx)("button", __assign({ ref: ref, className: combinedClassName, css: (0, react_1.css)([combinedStyles, cssProp]), onClick: handleClick }, rest, { children: children })));
}));
exports.Button = Button;
var templateObject_1, templateObject_2;
