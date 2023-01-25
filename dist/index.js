'use strict';

var index = {
  install: function install(app, options) {
    app.mixin({
      computed: {
        $footprints: function $footprints() {
          var _this$$route$matched,
            _this = this;
          return (_this$$route$matched = this.$route.matched) === null || _this$$route$matched === void 0 ? void 0 : _this$$route$matched.map(function (r) {
            var _r$meta;
            if (!((_r$meta = r.meta) !== null && _r$meta !== void 0 && _r$meta.footprint)) return null;
            var active = _this.$route.name === r.name;
            var returnRoute = options !== null && options !== void 0 && options.returnRoute ? route : {
              name: r.name,
              path: r.path,
              meta: r.meta
            };
            return {
              footprint: r.meta.footprint,
              active: active,
              route: returnRoute
            };
          }).filter(Boolean);
        }
      }
    });
  }
};
module.exports = index;
