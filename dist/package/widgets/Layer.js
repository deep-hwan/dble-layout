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
var shadowStylesProps_1 = require("../styles/shadowStylesProps");
var spaceStylesProps_1 = require("../styles/spaceStylesProps");
var transformStylesProps_1 = require("../styles/transformStylesProps");
var createMediaStyles_1 = require("../utils/createMediaStyles");
var Layer = react_2.default.forwardRef(function (props, ref) {
    var as = props.as, children = props.children, className = props.className, 
    // layout
    w = props.w, maxW = props.maxW, minW = props.minW, h = props.h, maxH = props.maxH, minH = props.minH, 
    // flex
    flex = props.flex, direc = props.direc, isReverse = props.isReverse, align = props.align, justify = props.justify, gap = props.gap, order = props.order, 
    // position
    position = props.position, 
    // padding
    padding = props.padding, 
    // margin
    margin = props.margin, 
    // background
    fill = props.fill, border = props.border, shadow = props.shadow, blur = props.blur, opacity = props.opacity, scale = props.scale, rotate = props.rotate, 
    //
    zIndex = props.zIndex, transition = props.transition, cursor = props.cursor, userSelect = props.userSelect, 
    //active
    _hover = props._hover, _focus = props._focus, _active = props._active, _a = props._mq, _mq = _a === void 0 ? {} : _a, cssProp = props.css, rest = __rest(props, ["as", "children", "className", "w", "maxW", "minW", "h", "maxH", "minH", "flex", "direc", "isReverse", "align", "justify", "gap", "order", "position", "padding", "margin", "fill", "border", "shadow", "blur", "opacity", "scale", "rotate", "zIndex", "transition", "cursor", "userSelect", "_hover", "_focus", "_active", "_mq", "css"]);
    var pPs = {
        // layout
        w: w,
        maxW: maxW,
        minW: minW,
        h: h,
        maxH: maxH,
        minH: minH,
        // flex
        flex: flex,
        direc: direc,
        isReverse: isReverse,
        align: align,
        justify: justify,
        gap: gap,
        order: order,
        // position
        position: position,
        // padding
        padding: padding,
        // margin
        margin: margin,
        // background
        fill: fill,
        border: border,
        shadow: shadow,
        blur: blur,
        opacity: opacity,
        scale: scale,
        rotate: rotate,
    };
    var Component = as || "div";
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
        return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ width: props === null || props === void 0 ? void 0 : props.w, maxWidth: props === null || props === void 0 ? void 0 : props.maxW, minWidth: props === null || props === void 0 ? void 0 : props.minW, height: props === null || props === void 0 ? void 0 : props.h, maxHeight: props === null || props === void 0 ? void 0 : props.maxH, minHeight: props === null || props === void 0 ? void 0 : props.minH }, (0, flexStylesProps_1.flexStylesProps)({
            flex: props.flex,
            direc: props.direc,
            isReverse: props.isReverse,
            align: props.align,
            justify: props.justify,
            gap: props.gap,
            wrap: props.wrap,
            order: props.order,
        })), { 
            // position
            position: (_a = props === null || props === void 0 ? void 0 : props.position) === null || _a === void 0 ? void 0 : _a.type, top: (_b = props === null || props === void 0 ? void 0 : props.position) === null || _b === void 0 ? void 0 : _b.top, bottom: (_c = props === null || props === void 0 ? void 0 : props.position) === null || _c === void 0 ? void 0 : _c.bottom, left: (_d = props === null || props === void 0 ? void 0 : props.position) === null || _d === void 0 ? void 0 : _d.left, right: (_e = props === null || props === void 0 ? void 0 : props.position) === null || _e === void 0 ? void 0 : _e.right, transform: (props === null || props === void 0 ? void 0 : props.axis)
                ? "translate(".concat(typeof ((_f = props === null || props === void 0 ? void 0 : props.axis) === null || _f === void 0 ? void 0 : _f.x) === "number"
                    ? "".concat((_g = props === null || props === void 0 ? void 0 : props.axis) === null || _g === void 0 ? void 0 : _g.x, "px")
                    : (_j = (_h = props === null || props === void 0 ? void 0 : props.axis) === null || _h === void 0 ? void 0 : _h.x) !== null && _j !== void 0 ? _j : "0", ", ").concat(typeof ((_k = props === null || props === void 0 ? void 0 : props.axis) === null || _k === void 0 ? void 0 : _k.y) === "number"
                    ? "".concat((_l = props === null || props === void 0 ? void 0 : props.axis) === null || _l === void 0 ? void 0 : _l.y, "px")
                    : (_o = (_m = props === null || props === void 0 ? void 0 : props.axis) === null || _m === void 0 ? void 0 : _m.y) !== null && _o !== void 0 ? _o : "0", ")")
                : undefined }), (0, spaceStylesProps_1.spaceStylesProps)({
            padding: {
                all: (_p = props.padding) === null || _p === void 0 ? void 0 : _p.all,
                horizontal: (_q = props.padding) === null || _q === void 0 ? void 0 : _q.horizontal,
                vertical: (_r = props.padding) === null || _r === void 0 ? void 0 : _r.vertical,
                top: (_s = props.padding) === null || _s === void 0 ? void 0 : _s.top,
                bottom: (_t = props.padding) === null || _t === void 0 ? void 0 : _t.bottom,
                left: (_u = props.padding) === null || _u === void 0 ? void 0 : _u.left,
                right: (_v = props.padding) === null || _v === void 0 ? void 0 : _v.right,
            },
            margin: {
                all: (_w = props.margin) === null || _w === void 0 ? void 0 : _w.all,
                horizontal: (_x = props.margin) === null || _x === void 0 ? void 0 : _x.horizontal,
                vertical: (_y = props.margin) === null || _y === void 0 ? void 0 : _y.vertical,
                top: (_z = props.margin) === null || _z === void 0 ? void 0 : _z.top,
                bottom: (_0 = props.margin) === null || _0 === void 0 ? void 0 : _0.bottom,
                left: (_1 = props.margin) === null || _1 === void 0 ? void 0 : _1.left,
                right: (_2 = props.margin) === null || _2 === void 0 ? void 0 : _2.right,
            },
        })), { 
            // background
            backgroundColor: props.fill }), (props.border && (0, borderStylesProps_1.borderStylesProps)(props.border))), (props.shadow && (0, shadowStylesProps_1.shadowStylesProps)(props.shadow))), (0, transformStylesProps_1.transformStylesProps)({
            scale: props.scale,
            rotate: props.rotate,
        })), { opacity: props.opacity });
    };
    //
    // base style
    var baseStyle = (0, react_2.useMemo)(function () {
        return (0, react_1.css)(__assign({ position: "relative", display: "flex", flexDirection: "column" }, (0, baseStylesProps_1.baseStylesProps)({
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
        var _a, _b, _c;
        return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      ", "\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), baseStyle, ExtendedStyles(__assign(__assign({}, pPs), { w: (_a = pPs.w) !== null && _a !== void 0 ? _a : "100%", h: (_b = pPs.h) !== null && _b !== void 0 ? _b : (pPs.flex === 1 ? "100%" : undefined), direc: (_c = pPs.direc) !== null && _c !== void 0 ? _c : "column" })), mediaStyles, pseudoStyles);
    }, [baseStyle, pPs, mediaStyles, pseudoStyles]);
    var combinedClassName = (0, css_1.cx)("dble-layer".concat(as ? "-".concat(as) : ""), className);
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ ref: ref, className: combinedClassName, css: (0, react_1.css)([combinedStyles, cssProp]) }, rest, { children: children })));
});
exports.default = Layer;
var templateObject_1;
