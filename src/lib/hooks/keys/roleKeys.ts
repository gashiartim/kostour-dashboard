export default {
  roles: (filters?: any) => ["roles", ...Object.values(filters || [])] as const,
  role: (id: string) => ["roles", id] as const,
};
