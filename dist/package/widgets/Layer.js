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
var gridStylesProps_1 = require("../styles/gridStylesProps");
var positionStylesProps_1 = require("../styles/positionStylesProps");
var screenSizeStylesProps_1 = require("../styles/screenSizeStylesProps");
var shadowStylesProps_1 = require("../styles/shadowStylesProps");
var spaceStylesProps_1 = require("../styles/spaceStylesProps");
var transformStylesProps_1 = require("../styles/transformStylesProps");
var mediaScreenSize_1 = require("../utils/mediaScreenSize");
var Layer = react_2.default.forwardRef(function (props, ref) {
    // console.log("ref", ref);
    var as = props.as, children = props.children, className = props.className, display = props.display, sizes = props.sizes, flex = props.flex, grid = props.grid, position = props.position, padding = props.padding, margin = props.margin, borderRadius = props.borderRadius, border = props.border, background = props.background, gradient = props.gradient, opacity = props.opacity, shadow = props.shadow, axis = props.axis, scale = props.scale, rotate = props.rotate, zIndex = props.zIndex, cursor = props.cursor, userSelect = props.userSelect, _a = props.transition, transition = _a === void 0 ? { time: 0.25, type: "ease-in-out" } : _a, _hover = props._hover, _focus = props._focus, _active = props._active, _b = props.mq, mq = _b === void 0 ? {} : _b, cssProp = props.css, rest = __rest(props, ["as", "children", "className", "display", "sizes", "flex", "grid", "position", "padding", "margin", "borderRadius", "border", "background", "gradient", "opacity", "shadow", "axis", "scale", "rotate", "zIndex", "cursor", "userSelect", "transition", "_hover", "_focus", "_active", "mq", "css"]);
    var pPs = {
        display: display,
        sizes: sizes,
        flex: display === "flex" || !display ? flex : undefined,
        grid: display === "grid" ? grid : undefined,
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
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ display: props.display, opacity: props.opacity }, (0, screenSizeStylesProps_1.screenSizeStylesProps)(props.sizes)), ((props.display === "flex" || !props.display) &&
            (0, flexStylesProps_1.flexStylesProps)(props.flex))), (props.display === "grid" && (0, gridStylesProps_1.gridStylesProps)(props.grid))), (0, positionStylesProps_1.positionStylesProps)({ position: props.position })), (0, spaceStylesProps_1.spaceStylesProps)({ padding: props.padding, margin: props.margin })), (0, borderStylesProps_1.borderStylesProps)({
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
            transition: "all ".concat(transition.time, "s ").concat(transition.type),
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
            return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          @media (max-width: ", "px) {\n            ", "\n          }\n        "], ["\n          @media (max-width: ", "px) {\n            ", "\n          }\n        "])), size, styles ? ExtendedStyles(styles) : "");
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", "\n      ", "\n    ", "\n    ", "\n    "], ["\n      ", "\n      ", "\n    ", "\n    ", "\n    "])), baseStyle, ExtendedStyles(__assign(__assign({}, pPs), { display: (_a = pPs.display) !== null && _a !== void 0 ? _a : "flex", sizes: __assign(__assign({}, pPs.sizes), { width: (_c = (_b = pPs.sizes) === null || _b === void 0 ? void 0 : _b.width) !== null && _c !== void 0 ? _c : "100%" }), flex: pPs.display === "flex" || !pPs.display
                ? __assign(__assign({}, pPs.flex), { direction: (_e = (_d = pPs.flex) === null || _d === void 0 ? void 0 : _d.direction) !== null && _e !== void 0 ? _e : "column" }) : undefined, position: __assign(__assign({}, pPs.position), { type: (_g = (_f = pPs.position) === null || _f === void 0 ? void 0 : _f.type) !== null && _g !== void 0 ? _g : "relative" }), gradient: __assign(__assign({}, pPs.gradient), { type: (_j = (_h = pPs.gradient) === null || _h === void 0 ? void 0 : _h.type) !== null && _j !== void 0 ? _j : "linear" }), border: __assign(__assign({}, pPs.border), { stroke: (_l = (_k = pPs.border) === null || _k === void 0 ? void 0 : _k.stroke) !== null && _l !== void 0 ? _l : 0, color: (_o = (_m = pPs.border) === null || _m === void 0 ? void 0 : _m.color) !== null && _o !== void 0 ? _o : "transparent", shape: (_q = (_p = pPs.border) === null || _p === void 0 ? void 0 : _p.shape) !== null && _q !== void 0 ? _q : "solid" }) })), mediaStyles, pseudoStyles);
    }, [baseStyle, pPs, mediaStyles, pseudoStyles]);
    var combinedClassName = (0, css_1.cx)("dble-layer", className);
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ ref: ref, className: combinedClassName, css: (0, react_1.css)([combinedStyles, cssProp]) }, rest, { children: children })));
});
exports.default = react_2.default.memo(Layer);
var templateObject_1, templateObject_2;
