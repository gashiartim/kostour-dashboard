import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormProps } from "react-hook-form";
import * as YUP from "yup";
import { IThumbnail } from "../../../../api/interfaces";

export type CreateCategoryFormValues = {
  name: string;
  parent_id?: string;
  top_category?: any;
  thumbnail?: IThumbnail;
};
export const CreateCategoryFormSchema = YUP.object().shape({
  name: YUP.string().required("Category name is required"),
  parent_id: YUP.string().nullable(),
  top_category: YUP.string().nullable(),
});

export function useCreateCategoryForm(options?: UseFormProps) {
  return useForm<CreateCategoryFormValues>({
    mode: "all",
    ...options,
    resolver: yupResolver(CreateCategoryFormSchema),
    defaultValues: {
      top_category: false,
    },
  });
}

export type CreateCategoryForm = ReturnType<typeof useCreateCategoryForm>;
