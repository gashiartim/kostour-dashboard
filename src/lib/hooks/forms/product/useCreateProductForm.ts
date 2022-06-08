import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormProps } from "react-hook-form";
import * as YUP from "yup";
import { IThumbnail } from "../../../../api/interfaces";

export type CreateProductFormValues = {
  title: string;
  description: string;
  url: string;
  price: string;
  business_id: string;
  sale: boolean;
  shipping: string;
  top_product: boolean;
  thumbnail?: IThumbnail;
  category_id?: string[];
  attributes: IAttribute[];
};

export interface IAttribute {
  attribute_id: string;
  value: string;
  related_field: string;
}

export const CreateProductFormSchema = YUP.object().shape({
  title: YUP.string().required("Title is required"),
  description: YUP.string().required("Description is required"),
  url: YUP.string().required("Url is required"),
  business_id: YUP.string().required("Business is required"),
  sale: YUP.bool().nullable(),
  top_product: YUP.bool().nullable(),
  thumbnail: YUP.object()
    .shape({
      fileName: YUP.string(),
      name: YUP.string(),
      lastModified: YUP.string(),
      fileBits: YUP.mixed(),
    })
    .nullable(),
  category_id: YUP.array()
    .min(1, "Product must have at least 1 category")
    .of(YUP.string()),
  price: YUP.string().required("Price is required"),
  shipping: YUP.string().required("Shipping is required"),
  attributes: YUP.array().of(
    YUP.object().shape({
      attribute_id: YUP.string().required("Attribute is required"),
      value: YUP.string().required("Value is required"),
      related_field: YUP.string().required("Related field is required"),
    })
  ),
});

export function useCreateProductForm(options?: UseFormProps) {
  return useForm<CreateProductFormValues>({
    mode: "all",
    ...options,
    resolver: yupResolver(CreateProductFormSchema),
  });
}

export type CreateProductForm = ReturnType<typeof useCreateProductForm>;
