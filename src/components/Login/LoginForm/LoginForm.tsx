import React from "react";
import { ILoginRequest } from "../../../api/User";
import { useAuthContext } from "../../../lib/context/AuthContext/AuthContext";
import { encodeData } from "../../../lib/helpers/encodeData";
import { useLoginForm } from "../../../lib/hooks/forms/auth/useLoginForm";
import { useLogin } from "../../../lib/hooks/mutations/useLogin";
import { Button } from "../../shared/Button/Button";
import { Input } from "../../shared/Input/Input";

interface Props {
  toggleTab: () => void;
}

export const LoginForm = ({ toggleTab }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useLoginForm();
  const login = useLogin();

  const authCtx = useAuthContext();

  function submitHandler(data: ILoginRequest) {
    login.mutate(encodeData({ ...data, grant_type: "password" }));
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
        <Input
          name="password"
          type="password"
          label="Password"
          register={register}
          error={errors.password?.message}
        />
        <Button className="w-full my-1" loading={false} type="submit">
          Login
        </Button>
      </form>
      <h6 className="inline-block link" onClick={toggleTab}>
        Forgot password?
      </h6>
    </div>
  );
};
