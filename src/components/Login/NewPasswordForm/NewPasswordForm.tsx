import React from "react";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { ISetNewPasswordRequest } from "../../../api/User";
import { useQueryParams } from "../../../lib/helpers/useQueryParams/useQueryParams";
import { useSetNewPasswordForm } from "../../../lib/hooks/forms/auth/useSetNewPasswordForm";
import { useForgotPassword as useForgotPw } from "../../../lib/hooks/mutations/useForgotPassword";
import { useSetNewPassword as useSetNewPw } from "../../../lib/hooks/mutations/useSetNewPassword";
import { Button } from "../../shared/Button/Button";
import { Input } from "../../shared/Input/Input";

interface Props {}

export const NewPasswordForm = (props: Props) => {
  const navigate = useNavigate();
  const { getQueryParams } = useQueryParams();
  const { token } = getQueryParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSetNewPasswordForm();

  const { mutate } = useSetNewPw();

  function submitHandler(data: ISetNewPasswordRequest) {
    mutate({ ...data, token });
  }

  function handleLoginBtn() {
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          name="new_password"
          type="password"
          label="Password"
          register={register}
          error={errors.new_password?.message}
        />
        <Input
          name="confirm_password"
          type="password"
          label="Confirm Password"
          register={register}
          error={errors.confirm_password?.message}
        />

        <Button className="w-full my-1" loading={false} type="submit">
          Set New Password
        </Button>
        <Button
          className="w-full py-2 mt-3 btn-secondary"
          loading={false}
          type="reset"
          onClick={handleLoginBtn}
        >
          Login
        </Button>
      </form>
      {/* <h6 className="inline-block link" onClick={toggleTab}>
        Sign in to your account
      </h6> */}
    </div>
  );
};
