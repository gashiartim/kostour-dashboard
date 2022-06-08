import { useForm, UseFormProps } from "react-hook-form";
import * as YUP from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISetNewPasswordRequest } from "../../../../api/User";

export const SetNewPasswordFormSchema = YUP.object().shape({
  new_password: YUP.string()
    .required("New password is required")
    .min(6, "Password should be more than 6 letters"),
  confirm_password: YUP.string()
    .required("Confirm password is required")
    .oneOf([YUP.ref("new_password"), null], "Passwords must match"),
});

export function useSetNewPasswordForm(options?: UseFormProps) {
  return useForm<ISetNewPasswordRequest>({
    mode: "all",
    ...options,
    resolver: yupResolver(SetNewPasswordFormSchema),
  });
}

export type SetNewPasswordForm = ReturnType<typeof useSetNewPasswordForm>;
