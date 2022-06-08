import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormProps } from "react-hook-form";
import * as YUP from "yup";
import { IThumbnail } from "../../../../api/interfaces";

export type EditCategoryFormValues = {
  name: string;
  parent_id?: string;
  top_category?: any;
  sub_categories?: Array<{
    name: string;
    parent_id: string;
    top_category?: boolean;
  }>;
};

export const EditCategoryFormSchema = YUP.object().shape({
  name: YUP.string().required("Category name is required"),
  parent_id: YUP.string().nullable(),
  top_category: YUP.boolean().nullable(),
  sub_categories: YUP.array()
    .of(
      YUP.object().shape({
        name: YUP.string().required(),
        parent_id: YUP.string().required(),
        top_category: YUP.boolean().nullable(),
      })
    )
    .nullable(),
});

export function useEditCategoryForm(options?: UseFormProps) {
  return useForm<EditCategoryFormValues>({
    mode: "all",
    ...options,
    resolver: yupResolver(EditCategoryFormSchema),
  });
}

export type EditCategoryForm = ReturnType<typeof useEditCategoryForm>;
