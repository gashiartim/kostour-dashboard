import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cs from "classnames";
import { Permissions } from "../../../../../lib/helpers/useHasPermission/permissions";
import {
  Roles,
  usePermissions,
} from "../../../../../lib/helpers/useHasPermission/usePermissions";

export interface INavItem {
  id: number;
  label: string;
  icon?: JSX.Element;
  permissions?: Array<Permissions>;
  to: string;
  childrenIds?: Array<number>;
  childrenOptions?: Array<INavItem>;
  routes?: string[];
}

export const NavItem = ({
  id,
  label,
  icon,
  permissions,
  to,
  childrenIds,
  childrenOptions,
  routes,
}: INavItem) => {
  const { pathname } = useLocation();
  const [opened, setOpened] = useState<boolean>(() =>
    Boolean(routes?.includes(pathname))
  );

  function handleClick() {
    setOpened(!opened);
  }

  return (
    <div
      className={cs({
        "bg-[#1D1D1D]": opened,
      })}
    >
      <div
        onClick={handleClick}
        className={cs({
          "flex items-center px-6 py-3 text-sm font-medium transition-all duration-75 ease-in-out hover:bg-zinc-600 hover:text-white hover:cursor-pointer":
            true,
          "text-white": pathname.includes(
            label.split(" ")[0].toLowerCase() || label.toLowerCase()
          ),
        })}
      >
        {icon} {label}
      </div>

      <ul
        className={cs({
          "transition-all duration-75 ease-in-out": true,
          "h-0 leading-0 opacity-0 hidden": !opened,
          "h-max leading-3 opacity-1": opened,
        })}
      >
        {childrenOptions?.map(({ id, to, icon, label, permissions }) => {
          return (
            <Link key={`children-${id}`} to={to}>
              <div
                key={`children-${to}`}
                className={cs({
                  "flex items-center py-3 pl-16 pr-10 text-sm font-medium transition-all duration-75 ease-in-out hover:bg-zinc-600 hover:text-white":
                    true,
                  "text-white": pathname === "/" + to,
                })}
              >
                {icon} {label}
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
