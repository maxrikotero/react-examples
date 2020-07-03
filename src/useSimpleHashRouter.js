import { useLocationHash } from "./useLocationHash";

export const useSimpleHashRouter = (routes) => {
  const hash = useLocationHash();
  // Exclude '#' when calculating hash.
  const currentRoute = routes[hash.substr(1)];

  if (currentRoute) return currentRoute;
  else return null;
};
