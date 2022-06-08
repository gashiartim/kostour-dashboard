import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { ICategory, updateCategory } from "../../../../api/Category";
import { categoryKeys } from "../../keys/categoryKeys";

export function useEditCategory(
  options?: UseMutationOptions<ICategory, any, any, unknown>
) {
  const clientQuery = useQueryClient();
  return useMutation(updateCategory, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(categoryKeys.categories());
      toast.success("Category updated successfully");
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
    ...options,
  });
}
