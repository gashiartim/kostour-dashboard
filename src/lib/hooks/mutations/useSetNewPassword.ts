import { useMutation, UseMutationOptions } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ISetNewPasswordRequest, setNewPassword } from "../../../api/User";

export function useSetNewPassword(
  options?: UseMutationOptions<any, any, ISetNewPasswordRequest, unknown>
) {
  const navigate = useNavigate();

  return useMutation(setNewPassword, {
    onSuccess: (res: any) => {
      toast.success(res.message);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
    ...options,
  });
}
