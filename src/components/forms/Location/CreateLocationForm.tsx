import React from "react";
import { useCreateFormData } from "../../../lib/helpers/useCreateFormData";
import {
  EditLocationFormValues,
  useEditLocationForm,
} from "../../../lib/hooks/forms/Location/useEditLocationForm";
import useCreateLocation from "../../../lib/hooks/mutations/Location/useCreateLocation";
import { useCategories } from "../../../lib/hooks/queries/Category/useCategories";
import { InputField } from "../../../types";
import ControllerFileInput from "../../shared/ControllerFileInput/ControllerFileInput";
import Form from "../../shared/Form/Form";
import { Input } from "../../shared/Input/Input";
import MultipleSelect from "../../shared/MultipleSelect/MultipleSelect";
import { Option } from "../../shared/Select/Select";

type Props = {};

const CreateLocationForm = (props: Props) => {
  const { createFormData } = useCreateFormData();
  const { data, isLoading } = useCategories();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    getValues,
    setValue,
  } = useEditLocationForm();

  console.log({ errors });
  const createLocation = useCreateLocation();

  function handleSelectChanges(data: any[]) {
    setValue("categories", data);
  }

  function onSubmit(createLocationFormValues: EditLocationFormValues) {
    const formData = createFormData({
      ...createLocationFormValues,
      thumbnail: getValues("thumbnail"),
      categories: getValues("categories").map((category: any) => category?.id),
    });
    createLocation.mutate({ formData: formData as any });
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
      <MultipleSelect
        options={data}
        label="Select categories"
        onChange={handleSelectChanges}
        name="categories"
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
    name: "whatCanYouDo",
    type: "text",
    label: "What can you do",
    disabled: false,
  },
];

export default CreateLocationForm;
