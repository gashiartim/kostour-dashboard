import React from "react";
import {
  IChangePasswordRequest,
  useChangePasswordForm,
} from "../../../lib/hooks/forms/auth/useChangePasswordForm";
import { useChangePassword } from "../../../lib/hooks/mutations/useChangePassword";
import { Button } from "../../shared/Button/Button";
import { Input } from "../../shared/Input/Input";

export const ChangePasswordForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useChangePasswordForm();

  const changePasswordMutation = useChangePassword(() => {
    reset();
  });

  function onSubmit(data: IChangePasswordRequest) {
    changePasswordMutation.mutate({
      old_password: data.oldPassword,
      new_password: data.newPassword,
      confirm_password: data.confirmPassword,
    });
  }

  return (
    <div className="flex flex-col-reverse items-center p-5 bg-white lg:flex-row">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-1/2">
        <Input
          label="Old Password"
          id="oldPassword"
          name="oldPassword"
          type="password"
          register={register}
          error={errors.oldPassword?.message}
        />
        <Input
          label="New Password"
          id="newPassword"
          name="newPassword"
          type="password"
          register={register}
          error={errors.newPassword?.message}
        />
        <Input
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword?.message}
          className="mb-6"
        />
        <Button type="submit">Change Password</Button>
      </form>
      <div className="mb-5 lg:ml-5 lg:mb-0">
        <h4 className="text-xl font-bold">Change Password</h4>
        <ul className="">
          <li>-Password must be at least 6 characters long.</li>
          <li>-New Password should match with Confirm Password</li>
        </ul>
      </div>
    </div>
  );
};
