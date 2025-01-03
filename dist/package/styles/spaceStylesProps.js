"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spaceStylesProps = void 0;
var spaceStylesProps = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    if (!props)
        return {};
    return {
        paddingTop: ((_a = props.padding) === null || _a === void 0 ? void 0 : _a.all) || ((_b = props.padding) === null || _b === void 0 ? void 0 : _b.vertical) || ((_c = props.padding) === null || _c === void 0 ? void 0 : _c.top),
        paddingBottom: ((_d = props.padding) === null || _d === void 0 ? void 0 : _d.all) || ((_e = props.padding) === null || _e === void 0 ? void 0 : _e.vertical) || ((_f = props.padding) === null || _f === void 0 ? void 0 : _f.bottom),
        paddingRight: ((_g = props.padding) === null || _g === void 0 ? void 0 : _g.all) || ((_h = props.padding) === null || _h === void 0 ? void 0 : _h.horizontal) || ((_j = props.padding) === null || _j === void 0 ? void 0 : _j.right),
        paddingLeft: ((_k = props.padding) === null || _k === void 0 ? void 0 : _k.all) || ((_l = props.padding) === null || _l === void 0 ? void 0 : _l.horizontal) || ((_m = props.padding) === null || _m === void 0 ? void 0 : _m.left),
        marginTop: ((_o = props.margin) === null || _o === void 0 ? void 0 : _o.all) || ((_p = props.margin) === null || _p === void 0 ? void 0 : _p.vertical) || ((_q = props.margin) === null || _q === void 0 ? void 0 : _q.top),
        marginBottom: ((_r = props.margin) === null || _r === void 0 ? void 0 : _r.all) || ((_s = props.margin) === null || _s === void 0 ? void 0 : _s.vertical) || ((_t = props.margin) === null || _t === void 0 ? void 0 : _t.bottom),
        marginRight: ((_u = props.margin) === null || _u === void 0 ? void 0 : _u.all) || ((_v = props.margin) === null || _v === void 0 ? void 0 : _v.horizontal) || ((_w = props.margin) === null || _w === void 0 ? void 0 : _w.right),
        marginLeft: ((_x = props.margin) === null || _x === void 0 ? void 0 : _x.all) || ((_y = props.margin) === null || _y === void 0 ? void 0 : _y.horizontal) || ((_z = props.margin) === null || _z === void 0 ? void 0 : _z.left),
    };
};
exports.spaceStylesProps = spaceStylesProps;
