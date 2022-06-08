import * as React from "react";
import { Login as LoginComponent } from "../../components/Login/Login";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  return (
    <div className="flex items-center justify-center h-full ">
      <LoginComponent />
    </div>
  );
}
