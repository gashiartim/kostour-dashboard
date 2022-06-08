import React from "react";
import { Logo } from "../Logo/Logo";

interface Props {}

export const LoadingScreen = (props: Props) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-screen font-bold bg-white md:text-3xl">
      <Logo imageClasses="!w-[80px]" />
      <h3 className="ml-4">Loading...</h3>
    </div>
  );
};
