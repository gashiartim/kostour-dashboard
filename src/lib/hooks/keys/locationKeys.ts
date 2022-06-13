export default {
  locations: (filters?: any) =>
    ["locations", ...Object.values(filters || [])] as const,
  location: (id: string) => ["locations", id] as const,
};
