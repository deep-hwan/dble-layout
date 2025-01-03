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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var css_1 = require("@emotion/css");
var react_1 = require("@emotion/react");
var react_2 = require("react");
var mediaScreenSize_1 = require("../utils/mediaScreenSize");
var useRender_1 = __importDefault(require("../utils/useRender"));
exports.Divider = (0, react_2.memo)((0, react_2.forwardRef)(function Solid(_a, ref) {
    var _b = _a.direction, direction = _b === void 0 ? 'horizontal' : _b, width = _a.width, height = _a.height, _c = _a.color, color = _c === void 0 ? '#e9e9e9' : _c, spacing = _a.spacing, mq = _a.mq, props = __rest(_a, ["direction", "width", "height", "color", "spacing", "mq"]);
    (0, useRender_1.default)();
    var Types = function (props) {
        var _a, _b, _c, _d;
        return ({
            width: direction === 'horizontal' ? ((_a = props.width) !== null && _a !== void 0 ? _a : '100%') : ((_b = props.width) !== null && _b !== void 0 ? _b : 1),
            height: direction === 'vertical' ? ((_c = props.height) !== null && _c !== void 0 ? _c : '100%') : ((_d = props.height) !== null && _d !== void 0 ? _d : 1),
        });
    };
    var getSpacing = function (spacing, type) { var _a, _b; return (_b = (_a = spacing === null || spacing === void 0 ? void 0 : spacing.all) !== null && _a !== void 0 ? _a : spacing === null || spacing === void 0 ? void 0 : spacing[type]) !== null && _b !== void 0 ? _b : spacing === null || spacing === void 0 ? void 0 : spacing[type === 'vertical' ? 'top' : 'left']; };
    var DividerStyle = function (props) {
        return (0, react_1.css)(__assign({ backgroundColor: props.color, transition: '0.25s ease-in-out', marginTop: getSpacing(props.spacing, 'vertical'), marginBottom: getSpacing(props.spacing, 'vertical'), marginLeft: getSpacing(props.spacing, 'horizontal'), marginRight: getSpacing(props.spacing, 'horizontal') }, Types({ width: props.width, height: props.height })));
    };
    var mediaStyles = mediaScreenSize_1.mediaScreenSize.map(function (size) {
        var breakpointKey = "w".concat(size);
        var styles = mq === null || mq === void 0 ? void 0 : mq[breakpointKey];
        return styles
            ? (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            @media (max-width: ", "px) {\n              ", "\n            }\n          "], ["\n            @media (max-width: ", "px) {\n              ", "\n            }\n          "])), size, DividerStyle(styles)) : '';
    });
    var combinedClassName = (0, css_1.cx)('dble-divider', props.className);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, className: combinedClassName, css: __spreadArray([DividerStyle({ direction: direction, width: width, height: height, spacing: spacing, color: color })], mediaStyles, true) }, props)));
}));
var templateObject_1;
