import React from "react";
import { ILocation } from "../../../api/Locations";
import { RuntimeForm } from "../../../lib/classes/RuntimeForm";
import { useCreateFormData } from "../../../lib/helpers/useCreateFormData";
import {
  EditLocationFormValues,
  useEditLocationForm,
} from "../../../lib/hooks/forms/Location/useEditLocationForm";
import useEditLocation from "../../../lib/hooks/mutations/Location/useEditLocation";
import { useCategories } from "../../../lib/hooks/queries/Category/useCategories";
import { InputField } from "../../../types";
import ControllerFileInput from "../../shared/ControllerFileInput/ControllerFileInput";
import Form from "../../shared/Form/Form";
import { Input } from "../../shared/Input/Input";
import MultipleSelect from "../../shared/MultipleSelect/MultipleSelect";

type Props = { data: ILocation | undefined };

const EditLocationForm = ({ data }: Props) => {
  const { createFormData } = useCreateFormData();
  const { data: categoriesData } = useCategories(undefined, {
    select: (data) => data?.map(({ id, name, ...category }) => ({ id, name })),
  });

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    getValues,
    setValue,
  } = useEditLocationForm({
    defaultValues: {
      name: data?.name,
      categories: data?.categories,
      description: data?.description,
      whatCanYouDo: data?.whatCanYouDo,
      thumbnail: data?.thumbnail,
    },
  });

  console.log({ errors });

  const editLocation = useEditLocation();

  function handleSelectChanges(data: any[]) {
    setValue("categories", data);
  }

  function onSubmit(editLocationFormValues: EditLocationFormValues) {
    console.log({ editLocationFormValues });

    const formData = createFormData({
      ...editLocationFormValues,
      thumbnail: getValues("thumbnail"),
      categories: getValues("categories").map((category: any) => category?.id),
    });

    editLocation.mutate({ id: data?.id || "", formData: formData as any });
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
        options={categoriesData as any}
        initialSelections={data?.categories}
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
export default EditLocationForm;
