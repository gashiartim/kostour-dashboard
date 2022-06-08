import { useMutation, UseMutationOptions } from "react-query";
import { toast } from "react-toastify";
import { changePassword, IChangePasswordData } from "../../../api/User";

export function useChangePassword(
  success?: any,
  options?: UseMutationOptions<any, any, IChangePasswordData, unknown>
) {
  return useMutation(changePassword, {
    onSuccess: (res: any) => {
      toast.success(res.message);
      success();
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
    ...options,
  });
}
