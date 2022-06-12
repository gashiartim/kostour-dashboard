export default {
  users: (filters?: any) => ["users", ...Object.values(filters || [])] as const,
  user: (id: string) => ["users", id] as const,
};
