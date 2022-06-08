import { DevTool } from "@hookform/devtools";
import React, { ChangeEvent, useState } from "react";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ICategory } from "../../../api/Category";
import {
  CreateCategoryFormValues,
  useCreateCategoryForm,
} from "../../../lib/hooks/forms/category/useCreateCategoryForm";
import { useCreateCategory } from "../../../lib/hooks/mutations/category/useCreateCategory";
import { useCategories } from "../../../lib/hooks/queries/Category/useCategories";
import useTags from "../../../lib/hooks/shared/useTags";
import { InputField } from "../../../types";
import ActionButtons from "../../shared/ActionButtons/ActionButtons";
import BooleanInput from "../../shared/BooleanInput/BooleanInput";
import FileUploader from "../../shared/FileUploader/FileUploader";
import { Input } from "../../shared/Input/Input";
import { Select } from "../../shared/Select/Select";
import TagInput, { TagStateType } from "../../shared/TagInput/TagInput";

interface Props {}

const CreateCategoryForm = (props: Props) => {
  const [profilePic, setProfilePic] = useState<Blob | MediaSource | undefined>(
    undefined
  );
  const { href, name, email, tags, onAdd, onChange, onClearTag, resetTags } =
    useTags([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(undefined);

  const { data, isLoading } = useCategories({ top_level_categories: true });

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    resetField,
    reset,
  } = useCreateCategoryForm();

  const { mutate } = useCreateCategory({
    onSuccess: () => {
      toast.success("Category created successfully");
      resetTags();
      reset();
    },
  });

  const navigate = useNavigate();

  //sends us back (consider to refact and set it to send us back to /businesses)
  function handleCancel() {
    navigate("/categories");
  }

  function handleFileUpdate(data: any) {
    setProfilePic(data.target.files[0]);
  }

  function handleBooleanInputChange(data: boolean) {
    setValue("top_category", data);
  }

  function onParentCategorySelection(data: ICategory) {
    setValue("parent_id", data.id);
    setSelectedCategory(data);
  }

  const handleResetField = (fieldName: any) => {
    resetField(fieldName);
    setSelectedCategory(undefined);
  };

  function onSubmit(data: CreateCategoryFormValues) {
    const formData = new FormData();

    for (const key in data) {
      if (key !== "thumbnail") {
        formData.append(
          key,
          data[key as keyof CreateCategoryFormValues] || " "
        );
      }
    }

    if (profilePic) {
      formData.append("thumbnail", profilePic as any);
    }

    if (Boolean(tags)) {
      tags.forEach((element) => {
        console.log({ element });

        formData.append("links[]", JSON.stringify(element));
      });
    }

    mutate(formData as any);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {inputFields.map((i) => {
          let err: any = errors;
          return (
            <Input
              key={`${i.name}-key`}
              name={i.name}
              id={i.name}
              type={i.type}
              label={`${i.label}`}
              register={register}
              error={err[`${i.name}`]?.message}
              disabled={i.disabled}
            />
          );
        })}
        <Controller
          control={control}
          name="parent_id"
          render={({
            field: { onChange, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <Select
              label="Parent Category"
              name={name}
              onChange={onParentCategorySelection}
              value={selectedCategory}
              options={data}
              className="w-[90%]"
              error={errors?.parent_id}
              inputRef={ref}
              onClear={handleResetField}
              isDirty={isDirty}
              isLoading={isLoading}
            />
          )}
        />
        <BooleanInput
          onChange={handleBooleanInputChange}
          label="Top Category"
        />
      </div>
      <FileUploader
        file={profilePic}
        onUpdate={handleFileUpdate}
        label="Profile Picture"
        className="mx-auto md:mx-[0]"
      />
      <TagInput
        onAdd={onAdd}
        onChange={onChange}
        data={{ tags, name, email, href }}
        onClearTag={onClearTag}
      />
      <div className="flex justify-end">
        <ActionButtons
          showSubmitBtn={false}
          showAmlBtn={false}
          showCancelBtn={false}
          showReturnBtn={true}
          showCompleteBtn={false}
          showSaveBtn={true}
          onReturn={handleCancel}
        />
      </div>
      <DevTool control={control} />
    </form>
  );
};

export default CreateCategoryForm;

const inputFields: Array<InputField> = [
  {
    name: "name",
    type: "text",
    label: "Name*",
    disabled: false,
  },
];
