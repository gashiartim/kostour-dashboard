import React from "react";
import { MenuIcon } from "@heroicons/react/solid";
import cs from "classnames";
import { unAuthorizedRoute } from "../../../routes/Routes";
import { useLocation } from "react-router-dom";
import { Logo } from "../../shared/Logo/Logo";

interface Props {
  toggle: any;
}

export const Header = ({ toggle }: Props) => {
  const { pathname } = useLocation();

  return (
    <div
      className={cs({
        "w-full px-[30px] shadow-md h-[6vh] min-h-[60px] flex items-center bg-[#FFFFFF] justify-between":
          true,
        hidden: unAuthorizedRoute.includes(pathname),
      })}
    >
      <h3 className="-ml-[5px] text-xl font-bold">
        <Logo />
      </h3>
      <MenuIcon
        className={cs({
          "w-10 transition-all duration-75 ease-in-out rounded-md hover:bg-gray-50 hover:cursor-pointer hover:text-opacity-90 md:hidden":
            true,
          hidden: unAuthorizedRoute.includes(pathname),
        })}
        onClick={toggle}
      />
    </div>
  );
};
