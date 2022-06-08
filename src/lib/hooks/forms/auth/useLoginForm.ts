import { useForm, UseFormProps } from "react-hook-form";
import * as YUP from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginRequest } from "../../../../api/User";

export const LoginFormSchema = YUP.object().shape({
  email: YUP.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: YUP.string()
    .required("Password is required")
    .min(6, "Password should be more than 6 letters"),
});

export function useLoginForm(options?: UseFormProps) {
  return useForm<ILoginRequest>({
    mode: "all",
    ...options,
    resolver: yupResolver(LoginFormSchema),
  });
}

export type LoginForm = ReturnType<typeof useLoginForm>;
