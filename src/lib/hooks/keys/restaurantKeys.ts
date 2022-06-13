export default {
  restaurants: (filters?: any) =>
    ["restaurants", ...Object.values(filters || [])] as const,
  restaurant: (id: string) => ["restaurants", id] as const,
};
