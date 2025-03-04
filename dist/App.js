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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var package_1 = require("./package");
var Layer_1 = __importDefault(require("./package/widgets/Layer"));
var TouchableOpacity_1 = __importDefault(require("./package/widgets/TouchableOpacity"));
function App() {
    var ref = (0, react_1.useRef)(null);
    var tabRef = (0, react_1.useRef)(null);
    var ttRef = (0, react_1.useRef)(null);
    var skRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)(Layer_1.default, __assign({ as: "section", fill: "#f2f3fa", flex: 1, h: "100vh", padding: { all: 60 }, margin: { top: 20 }, border: { stroke: 2, color: "#000" }, _mq: { w1080: { padding: { all: 20 } } } }, { children: [(0, jsx_runtime_1.jsxs)(package_1.Padding, __assign({ all: 0, ref: ttRef }, { children: [(0, jsx_runtime_1.jsx)(TouchableOpacity_1.default, { children: "\uBC84\uD2BC\uC774\uC57C" }), (0, jsx_runtime_1.jsxs)(package_1.Flex, __assign({ h: "100%", as: "ul", ref: ttRef, direc: "row", gap: 25, _mq: {
                            w600: { direc: "column" },
                        } }, { children: [(0, jsx_runtime_1.jsx)(package_1.Text, __assign({ size: 50, weight: "bold", color: "#000", lineHeight: 1.5, whiteSpace: "nowrap", padding: { all: 50 }, _mq: { w600: { size: 15, padding: { all: 0 } } } }, { children: "\uC548\uB155\uB098\uC758 \uB514\uC790\uBAAC \uC544\uAD6C\uBAAC\uC774\uC57C" })), (0, jsx_runtime_1.jsxs)(package_1.Grid, __assign({ templateColumns: "repeat(3, 1fr)", _mq: { w600: { templateColumns: "repeat(2, 1fr)" } } }, { children: [(0, jsx_runtime_1.jsx)(package_1.Text, { children: "1" }), (0, jsx_runtime_1.jsx)(package_1.Text, { children: "2" }), (0, jsx_runtime_1.jsx)(package_1.Text, { children: "3" })] }))] }))] })), (0, jsx_runtime_1.jsx)(package_1.Button, __assign({ _mq: { w1080: { w: "100%" } } }, { children: "asda" })), (0, jsx_runtime_1.jsx)(package_1.Divider, { h: 10, color: "#000", _mq: { w1080: { h: 50, color: "#ccc" }, w600: { h: 20 } } }), (0, jsx_runtime_1.jsx)(package_1.Spacing, { size: 10, _mq: { w1080: { size: 50 } } }), (0, jsx_runtime_1.jsx)(package_1.Padding, __assign({ all: 10, _mq: { w1080: { all: 0 } } }, { children: (0, jsx_runtime_1.jsxs)(package_1.Flex, __assign({ direc: "row", justify: "space-between", _mq: {
                        w600: { direc: "column" },
                    } }, { children: [(0, jsx_runtime_1.jsxs)(TouchableOpacity_1.default, __assign({ w: "auto", gap: 20, padding: { all: 20 }, fill: "#f0f0f0", _mq: {
                                w600: {
                                    direc: "column",
                                    w: "100%",
                                },
                            } }, { children: [(0, jsx_runtime_1.jsx)(package_1.Skeleton, { w: 100, h: 100 }), (0, jsx_runtime_1.jsx)(package_1.Background, __assign({ fill: "#fff", w: "auto" }, { children: (0, jsx_runtime_1.jsxs)(package_1.Flex, __assign({ w: "auto", direc: "column", align: "start", gap: 10 }, { children: [(0, jsx_runtime_1.jsx)(package_1.Text, { children: "\uC548\uB155" }), (0, jsx_runtime_1.jsx)(package_1.Text, { children: "\uB098\uC758 \uC774\uB984\uC740 \uC815\uC7AC\uD658\uC774\uACE0 \uB098\uB294 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uC57C" })] })) }))] })), (0, jsx_runtime_1.jsxs)(TouchableOpacity_1.default, __assign({ w: "auto", gap: 20, padding: { all: 20 }, fill: "#f0f0f0" }, { children: [(0, jsx_runtime_1.jsx)(package_1.Skeleton, { w: 100, h: 100 }), (0, jsx_runtime_1.jsx)(package_1.Background, __assign({ fill: "#fff", w: "auto" }, { children: (0, jsx_runtime_1.jsxs)(package_1.Flex, __assign({ w: "auto", direc: "column", align: "start", gap: 10 }, { children: [(0, jsx_runtime_1.jsx)(package_1.Text, { children: "\uC548\uB155" }), (0, jsx_runtime_1.jsx)(package_1.Text, { children: "\uB098\uC758 \uC774\uB984\uC740 \uC815\uC7AC\uD658\uC774\uACE0 \uB098\uB294 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uC57C" })] })) }))] }))] })) }))] })));
}
exports.default = App;
