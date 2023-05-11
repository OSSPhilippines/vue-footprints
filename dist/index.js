"use strict";

var t = require("vue");
var e = function e(t, _e) {
    var _t$matched;
    return (_t$matched = t.matched) === null || _t$matched === void 0 ? void 0 : _t$matched.map(function (o) {
      var _o$meta;
      if (!((_o$meta = o.meta) !== null && _o$meta !== void 0 && _o$meta.footprint)) return null;
      var r = t.name === o.name,
        n = _e !== null && _e !== void 0 && _e.returnRoute ? t : {
          name: o.name,
          path: o.path,
          meta: o.meta
        };
      return {
        footprint: o.meta.footprint,
        active: r,
        route: n
      };
    }).filter(Boolean);
  },
  o = {
    install: function install(t, o) {
      t.mixin({
        computed: {
          $footprints: function $footprints() {
            return e(this.$route, o);
          }
        }
      });
    }
  };
exports.VueFootprintsMixin = o, exports.useFootprints = function (o, r) {
  return {
    footprints: t.computed(function () {
      return e(o, r);
    })
  };
};
