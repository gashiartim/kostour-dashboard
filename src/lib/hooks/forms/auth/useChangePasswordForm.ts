import * as YUP from "yup";
import { useForm, UseFormProps } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const ChangePasswordFormSchema = YUP.object().shape({
  oldPassword: YUP.string().required("Old Password is required"),
  newPassword: YUP.string()
    .required("New Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: YUP.string()
    .required("Confirm Password is required")
    .min(6)
    .oneOf([YUP.ref("newPassword"), null], "Passwords must match"),
});

export function useChangePasswordForm(options?: UseFormProps) {
  return useForm<IChangePasswordRequest>({
    mode: "all",
    ...options,
    resolver: yupResolver(ChangePasswordFormSchema),
  });
}

export type ChangePasswordForm = ReturnType<typeof useChangePasswordForm>;
