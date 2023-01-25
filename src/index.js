export default {
  install: (app, options) => {
    app.mixin({
      computed: {
        $footprints () {
          return this.$route.matched?.map(r => {
            
            if (!r.meta?.footprint) return null;

            const active = this.$route.name === r.name;
            const returnRoute = options?.returnRoute ? route : { name: r.name, path: r.path, meta: r.meta };
            
            return {
              footprint: r.meta.footprint,
              active,
              route: returnRoute,
            };
            
          }).filter(Boolean);
        },
      },
    });
  },
};
