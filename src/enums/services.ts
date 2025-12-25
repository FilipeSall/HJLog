import serviceMapData from "../data/service-map.json";

export const serviceMap: Record<string, string> = serviceMapData;

export const getServiceNameBySlug = (slug?: string): string | undefined => {
  if (!slug) return undefined;
  return serviceMap[slug];
};
