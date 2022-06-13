import React from "react";
import { useCreateFormData } from "../../../lib/helpers/useCreateFormData";
import {
  EditRestaurantFormValues,
  useEditRestaurantForm,
} from "../../../lib/hooks/forms/Restaurant/useEditRestaurantForm";
import useCreateRestaurant from "../../../lib/hooks/mutations/Restaurant/useCreateRestaurant";
import useLocations from "../../../lib/hooks/queries/Location/useLocations";
import { InputField } from "../../../types";
import ControllerFileInput from "../../shared/ControllerFileInput/ControllerFileInput";
import ControllerSelectInput from "../../shared/ControllerSelectInput/ControllerSelectInput";
import Form from "../../shared/Form/Form";
import { Input } from "../../shared/Input/Input";
import LoadingBoundary from "../../shared/LoadingBoundary/LoadingBoundary";

type Props = {};

const CreateRestaurantForm = (props: Props) => {
  const { data: locations, isLoading: locationDataLoading } = useLocations();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    getValues,
  } = useEditRestaurantForm();

  const createRestaurant = useCreateRestaurant();

  const { createFormData } = useCreateFormData();

  function onSubmit(data: EditRestaurantFormValues) {
    const formData = createFormData({
      ...data,
      location_id: data.location?.id,
      thumbnail: getValues("thumbnail"),
    });

    createRestaurant.mutate({ formData });
  }

  return (
    <LoadingBoundary isLoading={false}>
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
          isLoading={locationDataLoading}
          options={locations?.data || []}
        />
        <ControllerFileInput
          className="mt-3"
          name="thumbnail"
          label="Profile Pic"
          control={control}
          isLoading={false}
        />
      </Form>
    </LoadingBoundary>
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

export default CreateRestaurantForm;
