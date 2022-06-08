import { useForm, UseFormProps } from "react-hook-form";
import * as YUP from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IForgotPasswordRequest } from "../../../../api/User";

export const ForgotPasswordFormSchema = YUP.object().shape({
  email: YUP.string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

export function useForgotPassword(options?: UseFormProps) {
  return useForm<IForgotPasswordRequest>({
    mode: "all",
    ...options,
    resolver: yupResolver(ForgotPasswordFormSchema),
  });
}

export type ForgotPasswordForm = ReturnType<typeof useForgotPassword>;
