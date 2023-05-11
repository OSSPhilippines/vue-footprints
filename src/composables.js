import { getFootprints } from './core';
import { computed } from 'vue';

export const useFootprints = (route, options) => {
  const footprints = computed(() => {
    return getFootprints(route, options);
  });
  return {
    footprints,
  };
};
