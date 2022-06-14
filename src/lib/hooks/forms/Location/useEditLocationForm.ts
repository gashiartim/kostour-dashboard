import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormProps } from "react-hook-form";
import * as YUP from "yup";

export type EditLocationFormValues = {
  name: string;
  description: string;
  whatCanYouDo: string;
  categories: string[];
  thumbnail?: any;
};

export const EditLocationFormSchema = YUP.object().shape({
  name: YUP.string().required("Name is required"),
  description: YUP.string().required("Description is required"),
  whatCanYouDo: YUP.string().required("What can you do is required"),
  categories: YUP.array()
    .of(
      YUP.object()
        .shape({
          id: YUP.string().required("Category id is required"),
          name: YUP.string().required("Category name is required"),
        })
        .nullable()
    )
    .nullable(),
  thumbnail: YUP.object()
    .shape({
      id: YUP.string().nullable(),
      media_id: YUP.string().nullable(),
      entity: YUP.string().nullable(),
      entity_id: YUP.string().nullable(),
      related_field: YUP.string(),
      order: YUP.string().nullable(),
      media: YUP.object().nullable(),
    })
    .nullable(),
});

export function useEditLocationForm(
  options?: UseFormProps<EditLocationFormValues>
) {
  return useForm<EditLocationFormValues>({
    mode: "all",
    ...options,
    resolver: yupResolver(EditLocationFormSchema),
  });
}

export type EditLocationForm = ReturnType<typeof useEditLocationForm>;
