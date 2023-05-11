import { getFootprints } from './core';

export const VueFootprintsMixin = {
  install: (app, options) => {
    app.mixin({
      computed: {
        $footprints () {
          return getFootprints(this.$route, options);
        },
      },
    });
  },
};
