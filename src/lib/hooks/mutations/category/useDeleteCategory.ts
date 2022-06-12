import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteCategory, ICategory } from "../../../../api/Category";
import { categoryKeys } from "../../keys/categoryKeys";

export function useDeleteCategory(
  options?: UseMutationOptions<any, any, any, unknown>
) {
  const clientQuery = useQueryClient();

  return useMutation(deleteCategory, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(categoryKeys.categories());
      toast.success("Category deleted successfully");
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
    ...options,
  });
}
