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
var bgStylesProps_1 = require("../styles/bgStylesProps");
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
var TouchableOpacity = react_2.default.forwardRef(function (_a, ref) {
    var as = _a.as, children = _a.children, className = _a.className, txtSize = _a.txtSize, txtWeight = _a.txtWeight, txtAlign = _a.txtAlign, txtColor = _a.txtColor, txtShadow = _a.txtShadow, txtTransform = _a.txtTransform, txtDecoration = _a.txtDecoration, lineHeight = _a.lineHeight, whiteSpace = _a.whiteSpace, ellipsis = _a.ellipsis, display = _a.display, sizes = _a.sizes, flex = _a.flex, position = _a.position, padding = _a.padding, margin = _a.margin, borderRadius = _a.borderRadius, border = _a.border, background = _a.background, opacity = _a.opacity, gradient = _a.gradient, shadow = _a.shadow, axis = _a.axis, scale = _a.scale, rotate = _a.rotate, zIndex = _a.zIndex, cursor = _a.cursor, _b = _a.userSelect, userSelect = _b === void 0 ? "none" : _b, _c = _a.transition, transition = _c === void 0 ? { time: 0.2, type: "ease-in-out" } : _c, _hover = _a._hover, _focus = _a._focus, _active = _a._active, _disabled = _a._disabled, _d = _a.mq, mq = _d === void 0 ? {} : _d, cssProp = _a.css, rest = __rest(_a, ["as", "children", "className", "txtSize", "txtWeight", "txtAlign", "txtColor", "txtShadow", "txtTransform", "txtDecoration", "lineHeight", "whiteSpace", "ellipsis", "display", "sizes", "flex", "position", "padding", "margin", "borderRadius", "border", "background", "opacity", "gradient", "shadow", "axis", "scale", "rotate", "zIndex", "cursor", "userSelect", "transition", "_hover", "_focus", "_active", "_disabled", "mq", "css"]);
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
        background: background,
        gradient: gradient,
        opacity: opacity,
        shadow: shadow,
        axis: axis,
        scale: scale,
        rotate: rotate,
    };
    var Component = as || "div";
    var handleClick = (0, react_2.useCallback)(function (event) {
        if (rest === null || rest === void 0 ? void 0 : rest.onClick)
            rest === null || rest === void 0 ? void 0 : rest.onClick(event);
    }, [rest === null || rest === void 0 ? void 0 : rest.onClick]);
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ display: props.display, opacity: props.opacity }, (0, typographyStylesProps_1.typographyStylesProps)({
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
            cursor: "disabled" in rest && rest.disabled
                ? "default"
                : cursor !== null && cursor !== void 0 ? cursor : "pointer",
            transition: "all ".concat(transition.time || 0.2, "s ").concat(transition.type || "ease-in-out"),
            display: "inline-block",
            listStyle: "none",
            outline: "none",
            zIndex: zIndex,
            userSelect: userSelect,
            borderWidth: 0,
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
        var _a, _b, _c;
        return (0, react_1.css)({
            "&:hover": ExtendedStyles(_hover || {}),
            "&:focus": ExtendedStyles(__assign(__assign({}, _focus), { opacity: (_a = _focus === null || _focus === void 0 ? void 0 : _focus.opacity) !== null && _a !== void 0 ? _a : 0.75 })),
            "&:active": ExtendedStyles(__assign(__assign({}, _active), { opacity: (_b = _active === null || _active === void 0 ? void 0 : _active.opacity) !== null && _b !== void 0 ? _b : 0.75 })),
            "&:disabled": ExtendedStyles(__assign(__assign({}, _disabled), { txtColor: (_c = _disabled === null || _disabled === void 0 ? void 0 : _disabled.txtColor) !== null && _c !== void 0 ? _c : "#aaa" })),
        });
    }, [_hover, _focus, _active, _disabled]);
    //
    // combined styles
    var combinedStyles = (0, react_2.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        ", "\n        ", "\n    ", "\n    ", "\n    ", "\n      "], ["\n        ", "\n        ", "\n    ", "\n    ", "\n    ", "\n      "])), baseStyle, ExtendedStyles(__assign(__assign({}, pPs), { display: (_a = pPs.display) !== null && _a !== void 0 ? _a : "flex", flex: pPs.display === "flex" || !pPs.display
                ? __assign(__assign({}, pPs.flex), { direction: (_c = (_b = pPs.flex) === null || _b === void 0 ? void 0 : _b.direction) !== null && _c !== void 0 ? _c : "column" }) : undefined, position: __assign(__assign({}, pPs.position), { type: (_e = (_d = pPs.position) === null || _d === void 0 ? void 0 : _d.type) !== null && _e !== void 0 ? _e : "relative" }), gradient: __assign(__assign({}, pPs.gradient), { type: (_g = (_f = pPs.gradient) === null || _f === void 0 ? void 0 : _f.type) !== null && _g !== void 0 ? _g : "linear" }), border: __assign(__assign({}, pPs.border), { stroke: (_j = (_h = pPs.border) === null || _h === void 0 ? void 0 : _h.stroke) !== null && _j !== void 0 ? _j : 0, color: (_l = (_k = pPs.border) === null || _k === void 0 ? void 0 : _k.color) !== null && _l !== void 0 ? _l : "transparent", shape: (_o = (_m = pPs.border) === null || _m === void 0 ? void 0 : _m.shape) !== null && _o !== void 0 ? _o : "solid" }), txtSize: (_p = pPs.txtSize) !== null && _p !== void 0 ? _p : 14, txtColor: (_q = pPs.txtColor) !== null && _q !== void 0 ? _q : "#5b94f0", whiteSpace: (_r = pPs.whiteSpace) !== null && _r !== void 0 ? _r : "pre-line" })), mediaStyles, pseudoStyles, cssProp);
    }, [baseStyle, pPs, mediaStyles, pseudoStyles, cssProp]);
    var combinedClassName = (0, css_1.cx)("dble-touchableOpacity", className);
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ ref: ref, className: combinedClassName, css: combinedStyles, onClick: handleClick }, rest, { children: children })));
});
exports.default = react_2.default.memo(TouchableOpacity);
var templateObject_1, templateObject_2;
