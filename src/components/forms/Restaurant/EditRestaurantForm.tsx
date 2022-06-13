import React from "react";
import { IRestaurant } from "../../../api/Restaurant";
import { useCreateFormData } from "../../../lib/helpers/useCreateFormData";
import {
  EditRestaurantFormValues,
  useEditRestaurantForm,
} from "../../../lib/hooks/forms/Restaurant/useEditRestaurantForm";
import useEditRestaurant from "../../../lib/hooks/mutations/Restaurant/useEditRestaurant";
import useLocations from "../../../lib/hooks/queries/Location/useLocations";
import { InputField } from "../../../types";
import ControllerFileInput from "../../shared/ControllerFileInput/ControllerFileInput";
import ControllerSelectInput from "../../shared/ControllerSelectInput/ControllerSelectInput";
import Form from "../../shared/Form/Form";
import { Input } from "../../shared/Input/Input";

type Props = {
  data: IRestaurant | undefined;
};

const EditRestaurantForm = ({ data }: Props) => {
  const { createFormData } = useCreateFormData();

  const { data: locationsData, isLoading } = useLocations();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    setValue,
    getValues,
  } = useEditRestaurantForm({
    defaultValues: {
      name: data?.name,
      description: data?.description,
      open_hours: data?.open_hours,
      location: data?.location,
      thumbnail: data?.thumbnail,
    },
  });

  console.log({ "data?.thumbnail": data?.thumbnail });

  const editRestaurant = useEditRestaurant();

  function onSubmit(editRestaurantFormData: EditRestaurantFormValues) {
    const formData = createFormData(
      {
        ...editRestaurantFormData,
        location_id: editRestaurantFormData.location.id,
        location: null,
        thumbnail: getValues("thumbnail"),
      },
      ["sub_categories"]
    );
    // console.log({ editRestaurantFormData });

    // console.log(getValues("thumbnail"));

    editRestaurant.mutate({ id: data?.id || "", formData });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} control={control}>
      {inputFields.map((input, index) => {
        return (
          <Input
            {...input}
            key={`edit-user-form-${index}`}
            register={register}
            error={errors[input.name as keyof typeof errors]?.message}
          />
        );
      })}
      <ControllerSelectInput
        name="location"
        label="Select Location"
        control={control}
        isLoading={isLoading}
        options={locationsData?.data || []}
      />
      <ControllerFileInput
        className="mt-3"
        name="thumbnail"
        label="Profile Pic"
        control={control}
        isLoading={false}
      />
    </Form>
  );
};

const inputFields: Array<InputField> = [
  {
    name: "name",
    type: "text",
    label: "Name",
    disabled: false,
  },
  {
    name: "description",
    type: "text",
    label: "Description",
    disabled: false,
  },
  {
    name: "open_hours",
    type: "text",
    label: "Open Hours",
    disabled: false,
  },
];

export default EditRestaurantForm;
