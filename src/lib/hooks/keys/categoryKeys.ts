import { IFilters } from "../../../api/Category";

export const categoryKeys = {
  categories: (filters?: IFilters) =>
    ["categories", ...Object.values(filters || [])] as const,
  category: (id: string) => ["categories", id] as const,
};
