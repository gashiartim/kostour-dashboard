import React from "react";
import { NewPasswordForm } from "../../components/Login/NewPasswordForm/NewPasswordForm";
import { Logo } from "../../components/shared/Logo/Logo";

type Props = {};

const NewPassword = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="px-5 py-8 text-center bg-white shadow-md w-full max-w-[450px]">
        <Logo imageContainerClasses="flex items-center justify-center" />
        <NewPasswordForm />
      </div>
    </div>
  );
};

export default NewPassword;
