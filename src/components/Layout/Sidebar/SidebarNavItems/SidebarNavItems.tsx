import React from "react";
import {
  BeakerIcon,
  BriefcaseIcon,
  ClipboardListIcon,
  CogIcon,
  ColorSwatchIcon,
  DocumentIcon,
  GlobeAltIcon,
  HomeIcon,
  LocationMarkerIcon,
  MenuAlt1Icon,
  PencilAltIcon,
  PlusCircleIcon,
  UserIcon,
  ViewListIcon,
} from "@heroicons/react/solid";
import { INavItem, NavItem } from "./NavItem/NavItem";
import { LogoutItem } from "./NavItem/LogoutItem";

type Props = {};

export const SidebarNavItems = (props: Props) => {
  return (
    <div className="pb-6 overflow-y-auto max-h-[90vh] h-[90vh] bg-secondaryColor">
      <ul>
        {navItems.map((item) => {
          return <NavItem key={item.id} {...item} />;
        })}

        <LogoutItem />
      </ul>
    </div>
  );
};

const navItems: Array<INavItem> = [
  {
    id: 1,
    label: "Locations",
    icon: <LocationMarkerIcon className="w-6 mr-1" />,
    to: "locations",
    routes: ["/locations", "/locations/create"],
    childrenOptions: [
      {
        id: 2,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        to: "locations",
      },
      {
        id: 3,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        to: "locations/create",
      },
    ],
  },
  {
    id: 4,
    label: "Restaurants",
    icon: <HomeIcon className="w-6 mr-1" />,
    permissions: [],
    to: "restaurants",
    routes: ["/restaurants", "/restaurants/create"],
    childrenOptions: [
      {
        id: 5,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        permissions: [],
        to: "restaurants",
      },
      {
        id: 6,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        permissions: [],
        to: "restaurants/create",
      },
    ],
  },
  {
    id: 7,
    label: "Users",
    icon: <UserIcon className="w-6 mr-1" />,
    permissions: [],
    to: "users",
    routes: ["/users", "/users/create"],
    childrenOptions: [
      {
        id: 8,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        permissions: [],
        to: "users",
      },
      {
        id: 9,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        permissions: [],
        to: "users/create",
      },
    ],
  },
];
