import { useMutation, UseMutationOptions } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { forgotPassword, IForgotPasswordRequest } from "../../../api/User";

export function useForgotPassword(
  options?: UseMutationOptions<any, any, IForgotPasswordRequest, unknown>
) {
  const navigate = useNavigate();

  return useMutation(forgotPassword, {
    onSuccess: (res: any) => {
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
    ...options,
  });
}
