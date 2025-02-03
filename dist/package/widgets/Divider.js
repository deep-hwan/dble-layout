"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var css_1 = require("@emotion/css");
var react_1 = require("@emotion/react");
var react_2 = __importStar(require("react"));
var createMediaStyles_1 = require("../utils/createMediaStyles");
var Divider = react_2.default.forwardRef(function Solid(_a, ref) {
    var _b = _a.direction, direction = _b === void 0 ? "horizontal" : _b, w = _a.w, h = _a.h, _c = _a.color, color = _c === void 0 ? "#e9e9e9" : _c, radius = _a.radius, spacing = _a.spacing, _d = _a._mq, _mq = _d === void 0 ? {} : _d, cssProp = _a.css, props = __rest(_a, ["direction", "w", "h", "color", "radius", "spacing", "_mq", "css"]);
    var Types = function (props) {
        var _a, _b, _c, _d;
        return ({
            width: direction === "horizontal" ? (_a = props.w) !== null && _a !== void 0 ? _a : "100%" : (_b = props.w) !== null && _b !== void 0 ? _b : 1,
            height: direction === "vertical" ? (_c = props.h) !== null && _c !== void 0 ? _c : "100%" : (_d = props.h) !== null && _d !== void 0 ? _d : 1,
        });
    };
    var getSpacing = function (spacing, type) {
        var _a, _b;
        return (_b = (_a = spacing === null || spacing === void 0 ? void 0 : spacing.all) !== null && _a !== void 0 ? _a : spacing === null || spacing === void 0 ? void 0 : spacing[type]) !== null && _b !== void 0 ? _b : spacing === null || spacing === void 0 ? void 0 : spacing[type === "vertical" ? "top" : "left"];
    };
    var DividerStyle = function (props) {
        return (0, react_1.css)(__assign({ backgroundColor: props.color, transition: "0.25s ease-in-out", borderRadius: props.radius, marginTop: getSpacing(props.spacing, "vertical"), marginBottom: getSpacing(props.spacing, "vertical"), marginLeft: getSpacing(props.spacing, "horizontal"), marginRight: getSpacing(props.spacing, "horizontal") }, Types({ w: props.w, h: props.h })));
    };
    var mediaStyles = (0, react_2.useMemo)(function () { return (0, createMediaStyles_1.createMediaStyles)(_mq, DividerStyle); }, [_mq]);
    var combinedClassName = (0, css_1.cx)("dble-divider", props.className);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, className: combinedClassName, css: (0, react_1.css)(__spreadArray(__spreadArray([
            DividerStyle({ direction: direction, w: w, h: h, spacing: spacing, color: color, radius: radius })
        ], mediaStyles, true), [
            cssProp,
        ], false)) }, props)));
});
exports.default = react_2.default.memo(Divider);
