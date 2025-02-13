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
exports.spaceStylesProps = void 0;
var getSpaceValue = function (spaceObj, dir) {
    if (!spaceObj)
        return undefined;
    var value = spaceObj[dir];
    return value === 0 ? "0px" : value;
};
var spaceStylesProps = function (props) {
    if (!props)
        return {};
    var createSpaceProps = function (spaceObj, prefix) {
        var _a;
        return (_a = {},
            _a["".concat(prefix, "Top")] = getSpaceValue(spaceObj, "all") ||
                getSpaceValue(spaceObj, "vertical") ||
                getSpaceValue(spaceObj, "top"),
            _a["".concat(prefix, "Bottom")] = getSpaceValue(spaceObj, "all") ||
                getSpaceValue(spaceObj, "vertical") ||
                getSpaceValue(spaceObj, "bottom"),
            _a["".concat(prefix, "Right")] = getSpaceValue(spaceObj, "all") ||
                getSpaceValue(spaceObj, "horizontal") ||
                getSpaceValue(spaceObj, "right"),
            _a["".concat(prefix, "Left")] = getSpaceValue(spaceObj, "all") ||
                getSpaceValue(spaceObj, "horizontal") ||
                getSpaceValue(spaceObj, "left"),
            _a);
    };
    return __assign(__assign({}, createSpaceProps(props.padding, "padding")), createSpaceProps(props.margin, "margin"));
};
exports.spaceStylesProps = spaceStylesProps;
