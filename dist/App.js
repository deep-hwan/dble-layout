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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var package_1 = require("./package");
function App() {
    var ref = (0, react_1.useRef)(null);
    var tabRef = (0, react_1.useRef)(null);
    var ttRef = (0, react_1.useRef)(null);
    var skRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsx)(package_1.Layer, __assign({ as: "nav", ref: ref, flex: { flex: 1 }, sizes: { width: "100%", height: "100vh" }, background: { fill: "#000" } }, { children: (0, jsx_runtime_1.jsx)(package_1.Padding, __assign({ all: 40, _hover: { all: 200 } }, { children: (0, jsx_runtime_1.jsxs)(package_1.Flex, __assign({ align: "center", gap: 50, ref: ttRef }, { children: [(0, jsx_runtime_1.jsx)(package_1.Skeleton, { ref: skRef, height: 50 }), (0, jsx_runtime_1.jsx)(package_1.Txt, __assign({ txtColor: "#fff" }, { children: "asd" })), (0, jsx_runtime_1.jsx)(package_1.Txt, __assign({ txtColor: "#fff" }, { children: "hh" })), (0, jsx_runtime_1.jsx)(package_1.TouchableOpacity, __assign({ ref: tabRef, color: "#fff" }, { children: "TouchableOpacity" })), (0, jsx_runtime_1.jsx)(package_1.Button, { children: "Tab" }), (0, jsx_runtime_1.jsx)(package_1.Txt, __assign({ css: { padding: 20, fontSize: 30 } }, { children: "1" }))] })) })) })));
}
exports.default = App;
