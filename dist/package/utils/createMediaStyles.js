"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaStyles = void 0;
var react_1 = require("@emotion/react");
var mediaScreenSize_1 = require("./mediaScreenSize");
function createMediaStyles(_mq, ExtendedStyles) {
    return mediaScreenSize_1.mediaScreenSize.map(function (size) {
        var breakpointKey = "w".concat(size);
        var styles = _mq === null || _mq === void 0 ? void 0 : _mq[breakpointKey];
        return (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      @media (max-width: ", "px) {\n        ", "\n      }\n    "], ["\n      @media (max-width: ", "px) {\n        ", "\n      }\n    "])), size, styles ? ExtendedStyles(styles) : "");
    });
}
exports.createMediaStyles = createMediaStyles;
var templateObject_1;
