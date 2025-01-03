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
exports.Skeleton = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var css_1 = require("@emotion/css");
var react_1 = require("@emotion/react");
var react_2 = require("react");
var mediaScreenSize_1 = require("../utils/mediaScreenSize");
var useRender_1 = __importDefault(require("../utils/useRender"));
var Skeleton = (0, react_2.memo)((0, react_2.forwardRef)(function (_a, ref) {
    var width = _a.width, _b = _a.height, height = _b === void 0 ? 20 : _b, _c = _a.borderRadius, borderRadius = _c === void 0 ? 8 : _c, _d = _a.primaryColor, primaryColor = _d === void 0 ? '#e2e2e2' : _d, _e = _a.moveColor, moveColor = _e === void 0 ? '#f5f5f5' : _e, mq = _a.mq, props = __rest(_a, ["width", "height", "borderRadius", "primaryColor", "moveColor", "mq"]);
    (0, useRender_1.default)();
    var loadAnimation = "\n      @keyframes load {\n        100% {\n          background-position: -100% 0;\n        }\n      }\n    ";
    var baseStyle = (0, react_2.useMemo)(function () {
        return (0, react_1.css)({
            width: '100%',
        });
    }, []);
    var ExtendedStyles = (0, react_2.useMemo)(function () {
        return function (props) {
            return (0, react_1.css)({
                minWidth: props.width,
                maxWidth: props.width,
                height: props.height,
                minHeight: props.height,
                maxHeight: props.height,
                borderRadius: props.borderRadius,
                background: "linear-gradient(120deg, ".concat(props.primaryColor, " 30%, ").concat(props.moveColor, " 38%, ").concat(props.moveColor, " 40%, ").concat(props.primaryColor, " 48%)"),
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0',
                animation: 'load 1s infinite',
                transition: '0.2s ease-in-out',
            });
        };
    }, [primaryColor, moveColor]);
    var mediaStyles = (0, react_2.useMemo)(function () {
        if (!mq)
            return [];
        return mediaScreenSize_1.mediaScreenSize.map(function (size) {
            var breakpointKey = "w".concat(size);
            var styles = mq[breakpointKey];
            return styles
                ? (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                @media (max-width: ", "px) {\n                  ", "\n                }\n              "], ["\n                @media (max-width: ", "px) {\n                  ", "\n                }\n              "])), size, ExtendedStyles(styles)) : '';
        });
    }, [mq, ExtendedStyles]);
    var combinedClassName = (0, css_1.cx)('dble-skeleton', props.className);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("style", { children: loadAnimation }), (0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, className: combinedClassName, css: __spreadArray([baseStyle, ExtendedStyles({ width: width, height: height, borderRadius: borderRadius, primaryColor: primaryColor, moveColor: moveColor })], mediaStyles, true) }, props))] }));
}));
exports.Skeleton = Skeleton;
var templateObject_1;
