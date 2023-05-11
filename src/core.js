export const getFootprints = (route, options) => {
  return route.matched?.map(r => {
    if (!r.meta?.footprint) return null;
    const active = route.name === r.name;
    const returnRoute = options?.returnRoute ? route : { name: r.name, path: r.path, meta: r.meta };
    return {
      footprint: r.meta.footprint,
      active,
      route: returnRoute,
    };
  }).filter(Boolean);
};
