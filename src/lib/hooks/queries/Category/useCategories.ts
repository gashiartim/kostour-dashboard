import { useQuery, UseQueryOptions } from "react-query";
import { getCategories, IFilters } from "../../../../api/Category";
import { categoryKeys } from "../../keys/categoryKeys";

export function useCategories(
  filters?: IFilters,
  options?: UseQueryOptions<unknown, unknown, any, any>
) {
  return useQuery(
    categoryKeys.categories(filters),
    () => getCategories(filters),
    {
      ...options,
      useErrorBoundary: true,
    }
  );
}
