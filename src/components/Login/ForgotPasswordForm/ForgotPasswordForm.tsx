import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IForgotPasswordRequest } from "../../../api/User";
import { useForgotPassword } from "../../../lib/hooks/forms/auth/useForgotPasswordForm";
import { useForgotPassword as useForgotPw } from "../../../lib/hooks/mutations/useForgotPassword";
import { Button } from "../../shared/Button/Button";
import { Input } from "../../shared/Input/Input";

interface Props {
  toggleTab: () => void;
}

export const ForgotPasswordForm = ({ toggleTab }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForgotPassword();

  const { mutate } = useForgotPw({
    onSuccess: (res) => {
      toast.success(res.message);

      setTimeout(() => {
        toggleTab();
      }, 2000);
    },
  });

  function submitHandler(data: IForgotPasswordRequest) {
    mutate(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          name="email"
          type="text"
          label="Email"
          placeholder="john@doe.com"
          register={register}
          error={errors.email?.message}
        />

        <Button className="w-full my-1" loading={false} type="submit">
          Send Email
        </Button>
      </form>
      <h6 className="inline-block link" onClick={toggleTab}>
        Sign in to your account
      </h6>
    </div>
  );
};
