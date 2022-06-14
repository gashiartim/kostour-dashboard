import { useQuery, UseQueryOptions } from "react-query";
import {
  getCategories,
  ICategoriesResponse,
  IFilters,
} from "../../../../api/Category";
import { categoryKeys } from "../../keys/categoryKeys";
import { IOption } from "../../../../components/shared/MultipleSelect/MultipleSelect";

export function useCategories(
  filters?: IFilters,
  options?: UseQueryOptions<ICategoriesResponse, any, IOption[], any>
) {
  return useQuery<ICategoriesResponse, any, IOption[], any>(
    categoryKeys.categories(filters),
    () => getCategories(filters),
    {
      ...options,
      useErrorBoundary: true,
    }
  );
}
