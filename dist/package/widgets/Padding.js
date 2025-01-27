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
var screenSizeStylesProps_1 = require("../styles/screenSizeStylesProps");
var spaceStylesProps_1 = require("../styles/spaceStylesProps");
var mediaScreenSize_1 = require("../utils/mediaScreenSize");
var Padding = react_2.default.forwardRef(function (props, ref) {
    var as = props.as, children = props.children, className = props.className, width = props.width, maxWidth = props.maxWidth, minWidth = props.minWidth, height = props.height, maxHeight = props.maxHeight, minHeight = props.minHeight, all = props.all, horizontal = props.horizontal, vertical = props.vertical, top = props.top, bottom = props.bottom, left = props.left, right = props.right, zIndex = props.zIndex, _a = props.transition, transition = _a === void 0 ? { time: 0.25, type: "ease-in-out" } : _a, _hover = props._hover, _focus = props._focus, _active = props._active, _b = props.mq, mq = _b === void 0 ? {} : _b, cssProp = props.css, rest = __rest(props, ["as", "children", "className", "width", "maxWidth", "minWidth", "height", "maxHeight", "minHeight", "all", "horizontal", "vertical", "top", "bottom", "left", "right", "zIndex", "transition", "_hover", "_focus", "_active", "mq", "css"]);
    var pPs = {
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
        height: height,
        maxHeight: maxHeight,
        minHeight: minHeight,
        all: all,
        horizontal: horizontal,
        vertical: vertical,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
    };
    var Component = as || "div";
    //
    // extended props styles
    var ExtendedStyles = function (props) {
        return __assign(__assign({ display: "flex" }, (0, screenSizeStylesProps_1.screenSizeStylesProps)({
            width: props.width,
            maxWidth: props.maxWidth,
            minWidth: props.minWidth,
            height: props.height,
            maxHeight: props.maxHeight,
            minHeight: props.minHeight,
        })), (0, spaceStylesProps_1.spaceStylesProps)({
            padding: {
                all: props.all,
                horizontal: props.horizontal,
                vertical: props.vertical,
                top: props.top,
                bottom: props.bottom,
                left: props.left,
                right: props.right,
            },
        }));
    };
    //
    // base style
    var baseStyle = (0, react_2.useMemo)(function () {
        return (0, react_1.css)({
            transition: "all ".concat(transition.time || 0.25, "s ").concat(transition.type || "ease-in-out"),
            listStyle: "none",
            outline: "none",
            zIndex: zIndex,
        });
    }, [rest.onClick, rest.onMouseEnter, transition, zIndex]);
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
        var _a;
        return (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", "\n      ", "\n    ", "\n    ", "\n    display: flex;\n      flex-direction: column;\n      align-items: start;\n    "], ["\n      ", "\n      ", "\n    ", "\n    ", "\n    display: flex;\n      flex-direction: column;\n      align-items: start;\n    "])), baseStyle, ExtendedStyles(__assign(__assign({}, pPs), { width: (_a = pPs.width) !== null && _a !== void 0 ? _a : "100%" })), mediaStyles, pseudoStyles);
    }, [baseStyle, pPs, mediaStyles, pseudoStyles]);
    var combinedClassName = (0, css_1.cx)("dble-padding", className);
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ ref: ref, className: combinedClassName, css: (0, react_1.css)([combinedStyles, cssProp]) }, rest, { children: children })));
});
exports.default = react_2.default.memo(Padding);
var templateObject_1, templateObject_2;
