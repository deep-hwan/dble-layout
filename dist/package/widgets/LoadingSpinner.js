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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingSpinner = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("@emotion/react");
var react_2 = require("react");
// --------------------------------------------
// -------------- LoadingSpinner --------------
// --------------------------------------------
var LoadingSpinnerUi = (0, react_2.forwardRef)(function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 40 : _b, _c = _a.storkeSize, storkeSize = _c === void 0 ? 3 : _c, _d = _a.color, color = _d === void 0 ? "#eee" : _d, props = __rest(_a, ["size", "storkeSize", "color"]);
    var rotation = (0, react_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, css: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
        } }, props, { children: (0, jsx_runtime_1.jsx)("div", { css: {
                width: "".concat(size, "px"),
                minWidth: "".concat(size, "px"),
                height: "".concat(size, "px"),
                minHeight: "".concat(size, "px"),
                border: "".concat(storkeSize, "px solid ").concat(color),
                borderBottomColor: "transparent",
                borderRadius: "50%",
                display: "inline-block",
                boxSizing: "border-box",
                animation: "".concat(rotation, " 1s linear infinite"),
            } }) })));
});
exports.LoadingSpinner = (0, react_2.memo)(LoadingSpinnerUi);
var templateObject_1;
