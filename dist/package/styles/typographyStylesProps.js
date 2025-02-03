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
exports.typographyStylesProps = void 0;
var typographyStylesProps = function (_a) {
    var _b;
    var as = _a.as, txtSize = _a.txtSize, txtWeight = _a.txtWeight, txtAlign = _a.txtAlign, txtColor = _a.txtColor, txtShadow = _a.txtShadow, txtTransform = _a.txtTransform, lineHeight = _a.lineHeight, whiteSpace = _a.whiteSpace, ellipsis = _a.ellipsis, txtDecoration = _a.txtDecoration;
    var TYPOGRAPH_WEIGHT = {
        thin: { fontWeight: "100" },
        extraLight: { fontWeight: "200" },
        lighter: { fontWeight: "300" },
        normal: { fontWeight: "400" },
        medium: { fontWeight: "500" },
        bold: { fontWeight: "600" },
        extraBold: { fontWeight: "700" },
        black: { fontWeight: "800" },
        heavy: { fontWeight: "900" },
    };
    var txtWeightExtend = function () {
        if (txtWeight)
            return TYPOGRAPH_WEIGHT[txtWeight].fontWeight;
        if (as && !txtWeight) {
            if (as === "h1")
                return TYPOGRAPH_WEIGHT["bold"].fontWeight;
            if (as === "h2")
                return TYPOGRAPH_WEIGHT["bold"].fontWeight;
            if (as === "h3")
                return TYPOGRAPH_WEIGHT["bold"].fontWeight;
            if (as === "h4")
                return TYPOGRAPH_WEIGHT["bold"].fontWeight;
            if (as === "h5")
                return TYPOGRAPH_WEIGHT["bold"].fontWeight;
            if (as === "h6")
                return TYPOGRAPH_WEIGHT["bold"].fontWeight;
            if (as === "b")
                return TYPOGRAPH_WEIGHT["bold"].fontWeight;
            if (as === "strong")
                return TYPOGRAPH_WEIGHT["medium"].fontWeight;
            if (as === "i")
                return TYPOGRAPH_WEIGHT["normal"].fontWeight;
            if (as === "p")
                return TYPOGRAPH_WEIGHT["normal"].fontWeight;
            if (as === "span")
                return TYPOGRAPH_WEIGHT["normal"].fontWeight;
            if (as === "div")
                return TYPOGRAPH_WEIGHT["normal"].fontWeight;
        }
        return;
    };
    var txtSizeExtend = function () {
        if (txtSize)
            return typeof txtSize === "string"
                ? txtSize
                : (txtSize !== null && txtSize !== void 0 ? txtSize : 15) / 16 + "rem";
        if (as && !txtSize) {
            if (as === "h1")
                return 54 / 16 + "rem";
            if (as === "h2")
                return 46 / 16 + "rem";
            if (as === "h3")
                return 42 / 16 + "rem";
            if (as === "h4")
                return 38 / 16 + "rem";
            if (as === "h5")
                return 30 / 16 + "rem";
            if (as === "h6")
                return 26 / 16 + "rem";
            if (as === "b")
                return 18 / 16 + "rem";
            if (as === "strong")
                return 18 / 16 + "rem";
            if (as === "i")
                return 15 / 16 + "rem";
            if (as === "p")
                return 15 / 16 + "rem";
            if (as === "span")
                return 13 / 16 + "rem";
            if (as === "div")
                return 15 / 16 + "rem";
            return typeof txtSize === "string"
                ? txtSize
                : (txtSize !== null && txtSize !== void 0 ? txtSize : 15 / 16) + "rem";
        }
    };
    var ellipsisExtend = (ellipsis === null || ellipsis === void 0 ? void 0 : ellipsis.isActive) && {
        overflow: "hidden",
        whiteSpace: "normal",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        wordBreak: "keep-all",
        WebkitLineClamp: (_b = ellipsis.line) !== null && _b !== void 0 ? _b : 1,
        padding: 0,
    };
    return __assign({ fontSize: txtSizeExtend(), fontWeight: txtWeightExtend(), textAlign: txtAlign, color: txtColor, textShadow: txtShadow, textTransform: txtTransform, lineHeight: lineHeight, whiteSpace: whiteSpace, textDecoration: txtDecoration }, ellipsisExtend);
};
exports.typographyStylesProps = typographyStylesProps;
