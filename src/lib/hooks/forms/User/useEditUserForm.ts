import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormProps } from "react-hook-form";
import * as YUP from "yup";
import { IThumbnail } from "../../../../api/interfaces";
import { IRole } from "../../../../api/Role";

export type EditUserFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: IRole | any;
  password?: string;
  password_confirm?: string;
};

export const EditUserFormSchema = YUP.object().shape({
  first_name: YUP.string().required("First name is required"),
  last_name: YUP.string().required("Last name is required"),
  email: YUP.string().email().required("Email is required"),
  phone: YUP.string().nullable(),
  role: YUP.object()
    .shape({
      id: YUP.string(),
      name: YUP.string(),
      slug: YUP.string(),
    })
    .required("Role is required"),
  password: YUP.string().nullable(),
  password_confirm: YUP.string().nullable(),
});

export function useEditUserForm(options?: UseFormProps<EditUserFormValues>) {
  return useForm<EditUserFormValues>({
    mode: "all",
    ...options,
    resolver: yupResolver(EditUserFormSchema),
  });
}

export type EditUserForm = ReturnType<typeof useEditUserForm>;
