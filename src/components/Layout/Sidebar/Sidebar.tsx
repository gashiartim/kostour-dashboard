import React from "react";
import { SidebarNavItems } from "./SidebarNavItems/SidebarNavItems";
import { UserInfo } from "./UserInfo/UserInfo";
import cs from "classnames";
import { useLocation } from "react-router-dom";
import { unAuthorizedRoute } from "../../../routes/Routes";

export interface Props {}

export const Sidebar = (props: Props) => {
  const { pathname } = useLocation();

  return (
    <div
      className={cs({
        "w-full md:max-w-[255px] bg-secondaryColor text-[#979797]": true,
        hidden: unAuthorizedRoute.includes(pathname),
      })}
    >
      <UserInfo />

      <SidebarNavItems />
    </div>
  );
};
