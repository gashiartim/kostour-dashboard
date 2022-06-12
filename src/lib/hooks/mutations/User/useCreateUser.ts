import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser, IUpdateUserRequest } from "../../../../api/User";
import userKeys from "../../keys/userKeys";

export default function useCreateUser(
  options?: UseMutationOptions<IUpdateUserRequest, any, any, unknown>
) {
  const clientQuery = useQueryClient();
  const navigate = useNavigate();

  return useMutation(createUser, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(userKeys.users());
      toast.success("User created successfully");
      navigate(-1);
    },
    onError: (err) => {
      toast.error(
        err.response.data.error ||
          "Couldn't create user, something wrong happened"
      );
    },
    ...options,
  });
}
