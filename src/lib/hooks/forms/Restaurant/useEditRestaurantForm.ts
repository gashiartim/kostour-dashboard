import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormProps } from "react-hook-form";
import * as YUP from "yup";
import { IThumbnail } from "../../../../api/interfaces";
import { ILocation } from "../../../../api/Restaurant";
import { IRole } from "../../../../api/Role";

export type EditRestaurantFormValues = {
  name: string;
  description: string;
  open_hours: string;
  location: ILocation | any;
  thumbnail: any | IThumbnail;
};

export const EditRestaurantFormSchema = YUP.object().shape({
  name: YUP.string().required("Name is required"),
  description: YUP.string().required("Description is required"),
  open_hours: YUP.string().required("Openning hours are required"),
  location: YUP.object()
    .shape({
      id: YUP.string(),
      name: YUP.string(),
    })
    .required("Role is required"),
  thumbnail: YUP.object()
    .shape({
      id: YUP.string(),
      media_id: YUP.string(),
      entity: YUP.string(),
      entity_id: YUP.string(),
      related_field: YUP.string(),
      order: YUP.string(),
      media: YUP.string(),
    })
    .nullable(),
});

export function useEditRestaurantForm(
  options?: UseFormProps<EditRestaurantFormValues>
) {
  return useForm<EditRestaurantFormValues>({
    mode: "all",
    ...options,
    resolver: yupResolver(EditRestaurantFormSchema),
  });
}

export type EditRestaurantForm = ReturnType<typeof useEditRestaurantForm>;
