export const serviceMap: Record<string, string> = {
  ftl: "Carga Completa (FTL)",
  ltl: "Carga Fracionada (LTL)",
  armazenagem: "Armazenagem",
  expresso: "Frete Expresso",
};

export const getServiceNameBySlug = (slug?: string): string | undefined => {
  if (!slug) return undefined;
  return serviceMap[slug];
};
