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
var flexStylesProps_1 = require("../styles/flexStylesProps");
var screenSizeStylesProps_1 = require("../styles/screenSizeStylesProps");
var mediaScreenSize_1 = require("../utils/mediaScreenSize");
var Flex = react_2.default.forwardRef(function (props, ref) {
    var as = props.as, children = props.children, className = props.className, flex = props.flex, direction = props.direction, isReverse = props.isReverse, align = props.align, crossAlign = props.crossAlign, gap = props.gap, order = props.order, grow = props.grow, shrink = props.shrink, basis = props.basis, alignContent = props.alignContent, alignSelf = props.alignSelf, wrap = props.wrap, sizes = props.sizes, zIndex = props.zIndex, cursor = props.cursor, userSelect = props.userSelect, transition = props.transition, _hover = props._hover, _focus = props._focus, _active = props._active, _a = props.mq, mq = _a === void 0 ? {} : _a, cssProp = props.css, rest = __rest(props, ["as", "children", "className", "flex", "direction", "isReverse", "align", "crossAlign", "gap", "order", "grow", "shrink", "basis", "alignContent", "alignSelf", "wrap", "sizes", "zIndex", "cursor", "userSelect", "transition", "_hover", "_focus", "_active", "mq", "css"]);
    var pPs = {
        sizes: sizes,
        flex: flex,
        direction: direction,
        isReverse: isReverse,
        align: align,
        crossAlign: crossAlign,
        gap: gap,
        order: order,
        grow: grow,
        shrink: shrink,
        basis: basis,
        alignContent: alignContent,
        alignSelf: alignSelf,
        wrap: wrap,
    };
    var Component = as || "div";
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        return __assign(__assign({ display: "flex" }, (0, screenSizeStylesProps_1.screenSizeStylesProps)(props.sizes)), (0, flexStylesProps_1.flexStylesProps)({
            flex: props.flex,
            direction: props.direction,
            isReverse: props.isReverse,
            align: props.align,
            crossAlign: props.crossAlign,
            gap: props.gap,
            order: props.order,
            grow: props.grow,
            shrink: props.shrink,
            basis: props.basis,
            alignContent: props.alignContent,
            alignSelf: props.alignSelf,
            wrap: props.wrap,
        }));
    };
    //
    // base style
    var baseStyle = (0, react_2.useMemo)(function () {
        return (0, react_1.css)({
            position: "relative",
            cursor: cursor
                ? cursor
                : (rest.onClick || rest.onMouseEnter) && "pointer",
            transition: transition && (transition === null || transition === void 0 ? void 0 : transition.time) && (transition === null || transition === void 0 ? void 0 : transition.time) > 0
                ? "all ".concat(transition.time, "s ").concat(transition.type)
                : undefined,
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
        var _a, _b, _c;
        return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", "\n      ", "\n    ", "\n    ", "\n    "], ["\n      ", "\n      ", "\n    ", "\n    ", "\n    "])), baseStyle, ExtendedStyles(__assign(__assign({}, pPs), { sizes: __assign(__assign({}, pPs.sizes), { width: (_b = (_a = pPs.sizes) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : "100%" }), direction: (_c = pPs.direction) !== null && _c !== void 0 ? _c : "column" })), mediaStyles, pseudoStyles);
    }, [baseStyle, pPs, mediaStyles, pseudoStyles]);
    var combinedClassName = (0, css_1.cx)("dble-flex", className);
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ ref: ref, className: combinedClassName, css: (0, react_1.css)([combinedStyles, cssProp]) }, rest, { children: children })));
});
exports.default = react_2.default.memo(Flex);
var templateObject_1, templateObject_2;
