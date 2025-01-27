"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backgroundStylesProps = void 0;
var backgroundStylesProps = function (props) {
    if (!props)
        return {};
    return {
        backgroundColor: props.fill,
        backgroundRepeat: props.repeat,
        backgroundSize: props.size,
        backgroundPosition: props.position,
        backgroundImage: (props === null || props === void 0 ? void 0 : props.imageUrl) ? "url(".concat(props === null || props === void 0 ? void 0 : props.imageUrl, ")") : undefined,
        backgroundClip: props.clip,
        filter: !!props.blur ? "blur(".concat(props.blur, "px)") : undefined,
    };
};
exports.backgroundStylesProps = backgroundStylesProps;
