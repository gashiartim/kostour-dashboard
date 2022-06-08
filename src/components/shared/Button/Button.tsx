import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cs from "classnames";
import Loader from "../Loader/Loader";
import { SearchIcon } from "@heroicons/react/solid";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean;
  icon?: JSX.Element;
}

export const Button = (props: ButtonProps) => {
  const { className, children, loading, icon, ...rest } = props;
  return (
    <button className={cs("btn-primary ", className)} {...rest}>
      {icon} {loading ? <Loader className="!text-white" /> : children}
    </button>
  );
};
