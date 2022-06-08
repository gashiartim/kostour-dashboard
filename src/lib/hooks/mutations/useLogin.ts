import { useMutation, UseMutationOptions } from "react-query";
import { toast } from "react-toastify";
import { ILoginRequest, ILoginResponse, login } from "../../../api/User";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export function useLogin(
  options?: UseMutationOptions<ILoginResponse, any, ILoginRequest, unknown>
) {
  const authCtx = useAuthContext();
  return useMutation(login, {
    onSuccess: (res) => {
      //   console.log(res);
      authCtx.login(res);
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
    ...options,
  });
}
