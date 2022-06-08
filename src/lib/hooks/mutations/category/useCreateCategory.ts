import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  createCategory,
  ICategory,
  ICreateCategory,
} from "../../../../api/Category";
import { categoryKeys } from "../../keys/categoryKeys";

export function useCreateCategory(
  options?: UseMutationOptions<ICategory, any, ICreateCategory, unknown>
) {
  const clientQuery = useQueryClient();
  return useMutation(createCategory, {
    onSuccess: (res) => {
      clientQuery.invalidateQueries(categoryKeys.categories());
      toast.success("Category created successfully");
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
    ...options,
    useErrorBoundary: true,
  });
}
