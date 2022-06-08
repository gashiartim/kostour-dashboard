import { nanoid } from "nanoid";
import React from "react";
import { useManualSwitchingTabs } from "../../lib/hooks/shared/useManualSwitchingTabs";
import { Logo } from "../shared/Logo/Logo";
import {
  IPanel,
  ManualSwitchingTabs,
} from "../shared/ManualSwitchingTabs/ManualSwitchingTabs";
import { ForgotPasswordForm } from "./ForgotPasswordForm/ForgotPasswordForm";
import { LoginForm } from "./LoginForm/LoginForm";

interface Props {}

export const Login = (props: Props) => {
  const { activeTab, toggleTab } = useManualSwitchingTabs();

  const panels: Array<IPanel> = [
    {
      id: nanoid(),
      element: <LoginForm toggleTab={toggleTab} />,
    },
    {
      id: nanoid(),
      element: <ForgotPasswordForm toggleTab={toggleTab} />,
    },
  ];

  return (
    <div className="px-5 py-8 text-center bg-white shadow-md w-full max-w-[450px]">
      <Logo imageContainerClasses="flex items-center justify-center" />
      <h6 className="text-lg text-gray-400">Login to access your account</h6>

      <ManualSwitchingTabs activeTab={activeTab} panels={panels} />
    </div>
  );
};
