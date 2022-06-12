import React from "react";
import { Controller } from "react-hook-form";
import { IRole } from "../../../api/Role";
import {
  EditUserFormValues,
  useEditUserForm,
} from "../../../lib/hooks/forms/User/useEditUserForm";
import useCreateUser from "../../../lib/hooks/mutations/User/useCreateUser";
import useRoles from "../../../lib/hooks/queries/Role/useRoles";
import { InputField } from "../../../types";
import Form from "../../shared/Form/Form";
import { Input } from "../../shared/Input/Input";
import LoadingBoundary from "../../shared/LoadingBoundary/LoadingBoundary";
import { Select } from "../../shared/Select/Select";

type Props = {};

const CreateUserForm = (props: Props) => {
  const { data: roles, isLoading } = useRoles();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useEditUserForm();

  const createUser = useCreateUser();

  function onRoleSelection(data: IRole) {
    setValue("role", data);
  }

  function onSubmit(editUserFormData: EditUserFormValues) {
    createUser.mutate({ ...editUserFormData });
  }

  return (
    <LoadingBoundary isLoading={createUser.isLoading}>
      <Form onSubmit={handleSubmit(onSubmit)} control={control}>
        {inputFields.map((input, index) => {
          return (
            <Input
              {...input}
              key={`edit-user-form-${index}`}
              register={register}
              placeholder={input.placeholder}
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
    </LoadingBoundary>
  );
};

const inputFields: Array<InputField> = [
  {
    name: "first_name",
    type: "text",
    label: "First Name",
    placeholder: "John",
    disabled: false,
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
    placeholder: "Doe",
    disabled: false,
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "johndoe@test.com",
    disabled: false,
  },
  {
    name: "phone",
    type: "text",
    label: "Phone Number",
    placeholder: "+383-44-XXX-XXX",
    disabled: false,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "******",
    disabled: false,
  },
  {
    name: "password_confirm",
    type: "password",
    label: "Confirm Password",
    placeholder: "******",
    disabled: false,
  },
];

export default CreateUserForm;
