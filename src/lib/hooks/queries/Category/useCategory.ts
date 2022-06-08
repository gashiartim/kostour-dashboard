import { useQuery, UseQueryOptions } from "react-query";
import { getCategory, ICategory } from "../../../../api/Category";
import { categoryKeys } from "../../keys/categoryKeys";

export function useCategory(
  id: string,
  options?: UseQueryOptions<ICategory, any>
) {
  return useQuery<ICategory, any>(
    categoryKeys.category(id),
    () => getCategory(id),
    {
      useErrorBoundary: true,
      ...options,
    }
  );
}
