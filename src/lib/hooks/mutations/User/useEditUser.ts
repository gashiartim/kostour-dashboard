import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { IUpdateUserRequest, updateUser } from "../../../../api/User";
import userKeys from "../../keys/userKeys";

export default function useEditUser(
  options?: UseMutationOptions<IUpdateUserRequest, any, any, unknown>
) {
  const clientQuery = useQueryClient();
  return useMutation(updateUser, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(userKeys.users());
      toast.success("User edited successfully");
    },
    onError: (err) => {
      toast.error(
        err.response.data.error ||
          "Couldn't edit user, something wrong happened"
      );
    },
    ...options,
  });
}
