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
    console.log("tt", ttRef.current);
    // useEffect(() => {
    //   console.log("layer", ref.current);
    //   console.log("tabRef", tabRef.current);
    // }, []);
    return ((0, jsx_runtime_1.jsxs)(package_1.Layer, __assign({ as: "nav", ref: ref, flex: { flex: 1 }, sizes: { width: "100%", height: "100vh" }, background: { fill: "#000" }, padding: { all: 20 } }, { children: [(0, jsx_runtime_1.jsxs)(package_1.Flex, __assign({ align: "center" }, { children: [(0, jsx_runtime_1.jsx)(package_1.Txt, __assign({ txtColor: "#fff" }, { children: "asd" })), (0, jsx_runtime_1.jsx)(package_1.Txt, __assign({ txtColor: "#fff" }, { children: "hh" })), (0, jsx_runtime_1.jsx)(package_1.TouchableOpacity, __assign({ color: "#fff" }, { children: "11" })), (0, jsx_runtime_1.jsx)(package_1.Button, __assign({ ref: tabRef }, { children: "Tab" }))] })), (0, jsx_runtime_1.jsxs)(package_1.Grid, __assign({ sizes: { maxWidth: 200 }, templateColumns: "repeat(3, 1fr)", gap: 20 }, { children: [(0, jsx_runtime_1.jsxs)(package_1.Flex, { children: [(0, jsx_runtime_1.jsx)(package_1.Txt, { children: "1" }), (0, jsx_runtime_1.jsx)(package_1.Txt, { children: "2" }), (0, jsx_runtime_1.jsx)(package_1.Txt, { children: "3" })] }), (0, jsx_runtime_1.jsxs)(package_1.Flex, { children: [(0, jsx_runtime_1.jsx)(package_1.Txt, { children: "1" }), (0, jsx_runtime_1.jsx)(package_1.Txt, { children: "2" }), (0, jsx_runtime_1.jsx)(package_1.Txt, { children: "3" })] }), (0, jsx_runtime_1.jsxs)(package_1.Flex, { children: [(0, jsx_runtime_1.jsx)(package_1.Txt, { children: "1" }), (0, jsx_runtime_1.jsx)(package_1.Txt, { children: "2" }), (0, jsx_runtime_1.jsx)(package_1.Txt, { children: "3" })] })] }))] })));
}
exports.default = App;
