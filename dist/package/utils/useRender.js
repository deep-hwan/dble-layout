"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useRender() {
    var _a = (0, react_1.useState)(false), isClient = _a[0], setIsClient = _a[1];
    (0, react_1.useEffect)(function () { return setIsClient(true); }, []);
    if (!isClient)
        return null;
}
exports.default = useRender;
