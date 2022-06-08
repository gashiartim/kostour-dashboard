import { DevTool } from "@hookform/devtools";
import React, { ChangeEvent, useState } from "react";
import { Controller } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { ICategory } from "../../../api/Category";
import { useCreateFormData } from "../../../lib/helpers/useCreateFormData";
import { CreateCategoryFormValues } from "../../../lib/hooks/forms/category/useCreateCategoryForm";
import {
  EditCategoryFormValues,
  useEditCategoryForm,
} from "../../../lib/hooks/forms/category/useEditCategoryForm";
import { categoryKeys } from "../../../lib/hooks/keys/categoryKeys";
import { useEditCategory } from "../../../lib/hooks/mutations/category/useEditCategory";
import { useCategories } from "../../../lib/hooks/queries/Category/useCategories";
import useTags from "../../../lib/hooks/shared/useTags";
import { InputField } from "../../../types";
import ActionButtons from "../../shared/ActionButtons/ActionButtons";

import BooleanInput from "../../shared/BooleanInput/BooleanInput";
import FileUploader from "../../shared/FileUploader/FileUploader";
import { Input } from "../../shared/Input/Input";
import { Select } from "../../shared/Select/Select";
import TagInput, { TagStateType } from "../../shared/TagInput/TagInput";

interface Props {
  data: ICategory | EditCategoryFormValues | undefined | any;
}

const EditCategoryForm = (props: Props) => {
  const [profilePic, setProfilePic] = useState<Blob | MediaSource | undefined>(
    undefined
  );

  const { href, name, email, tags, onAdd, onChange, onClearTag } = useTags(
    props.data.links
  );
  const [selectedCategory, setSelectedCategory] = useState<any>(
    () => props.data.parent_category || undefined
  );

  const { categoryId, subCategoryId } = useParams();
  const { data, isLoading } = useCategories({ top_level_categories: true });

  const clientQuery = useQueryClient();
  const { createFormData } = useCreateFormData();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    resetField,
  } = useEditCategoryForm({
    defaultValues: {
      ...props.data,
    },
  });

  const { mutate } = useEditCategory();

  const navigate = useNavigate();

  //sends us back (consider to refact and set it to send us back to /businesses)
  function handleCancel() {
    if (subCategoryId) {
      clientQuery.invalidateQueries(
        categoryKeys.category(categoryId as string)
      );
      return navigate(`/categories/edit/${categoryId}`);
    }
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
    delete props.data.created_at;
    delete props.data.updated_at;
    delete data.thumbnail;

    if (!props.data.id) {
      return;
    }
    console.log({ tags });

    const formData = createFormData(
      {
        ...data,
        thumbnail: profilePic ? profilePic : null,
        links: tags.map((tag) => ({
          href: tag.href,
          email: tag.email,
          name: tag.name,
        })),
      },
      ["sub_categories"]
    );

    mutate({ id: props.data.id, formData });
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
          initialValue={props.data.top_category}
        />
      </div>

      <FileUploader
        file={profilePic}
        onUpdate={handleFileUpdate}
        label="Profile Picture"
        placeholder={props.data.thumbnail?.media.url}
        className="mx-auto md:mx-[0]"
      />
      <TagInput
        onAdd={onAdd}
        onChange={onChange}
        data={{ name, href, email, tags }}
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

export default EditCategoryForm;

const inputFields: Array<InputField> = [
  {
    name: "name",
    type: "text",
    label: "Name*",
    disabled: false,
  },
];
