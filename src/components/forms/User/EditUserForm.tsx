import React from "react";
import { Controller } from "react-hook-form";
import { IRole } from "../../../api/Role";
import { IUser } from "../../../api/User";
import {
  EditUserFormValues,
  useEditUserForm,
} from "../../../lib/hooks/forms/User/useEditUserForm";
import useEditUser from "../../../lib/hooks/mutations/User/useEditUser";
import useRoles from "../../../lib/hooks/queries/Role/useRoles";
import { InputField } from "../../../types";
import Form from "../../shared/Form/Form";
import { Input } from "../../shared/Input/Input";
import { Select } from "../../shared/Select/Select";

type Props = {
  data: IUser | undefined;
};

const EditUserForm = ({ data }: Props) => {
  const { data: roles, isLoading } = useRoles();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useEditUserForm({
    defaultValues: {
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email,
      phone: data?.phone,
      role: data?.role,
    },
  });

  const editUser = useEditUser();

  function onRoleSelection(data: IRole) {
    setValue("role", data);
  }

  function onSubmit(editUserFormData: EditUserFormValues) {
    editUser.mutate({ ...editUserFormData, id: data?.id || "" });
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

      <Controller
        control={control}
        name="role"
        render={({
          field: { onChange, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => {
          if (isLoading)
            return (
              <div className="flex items-center justify-start">
                <p className="mt-5">Loading roles...</p>
              </div>
            );
          return (
            <Select
              label="User Role"
              name={name}
              onChange={onRoleSelection}
              value={
                (Boolean(roles?.length) &&
                  roles?.find((role) => role?.id === value?.id)) || {
                  id: "",
                  name: "",
                }
              }
              options={roles || []}
              error={errors?.role?.name?.message}
              inputRef={ref}
              isDirty={isDirty}
              isLoading={isLoading}
            />
          );
        }}
      />
    </Form>
  );
};

const inputFields: Array<InputField> = [
  {
    name: "first_name",
    type: "text",
    label: "First Name",
    disabled: false,
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
    disabled: false,
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    disabled: false,
  },
  {
    name: "phone",
    type: "text",
    label: "Phone Number",
    disabled: false,
  },
];

export default EditUserForm;
