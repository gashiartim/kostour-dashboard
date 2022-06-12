import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteUser } from "../../../../api/User";
import userKeys from "../../keys/userKeys";

export default function useDeleteUser(
  options?: UseMutationOptions<any, any, any, unknown>
) {
  const clientQuery = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(userKeys.users());
      toast.success("User deleted successfully");
    },
    onError: (err) => {
      toast.error(
        err.response.data.error ||
          "Couldn't delete user, something wrong happened"
      );
    },
    ...options,
  });
}
