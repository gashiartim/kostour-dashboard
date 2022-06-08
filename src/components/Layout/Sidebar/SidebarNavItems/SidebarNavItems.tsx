import React from "react";
import {
  BeakerIcon,
  BriefcaseIcon,
  ClipboardListIcon,
  CogIcon,
  ColorSwatchIcon,
  DocumentIcon,
  GlobeAltIcon,
  MenuAlt1Icon,
  PencilAltIcon,
  PlusCircleIcon,
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
    label: "Businesses",
    icon: <BriefcaseIcon className="w-6 mr-1" />,
    to: "businesses",
    routes: ["/businesses", "/businesses/create"],
    childrenOptions: [
      {
        id: 2,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        to: "businesses",
      },
      {
        id: 3,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        to: "businesses/create",
      },
    ],
  },
  {
    id: 4,
    label: "Categories",
    icon: <MenuAlt1Icon className="w-6 mr-1" />,
    permissions: [],
    to: "categories",
    routes: ["/categories", "/categories/create"],
    childrenOptions: [
      {
        id: 5,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        permissions: [],
        to: "categories",
      },
      {
        id: 6,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        permissions: [],
        to: "categories/create",
      },
    ],
  },
  {
    id: 7,
    label: "Colors",
    icon: <ColorSwatchIcon className="w-6 mr-1" />,
    permissions: [],
    to: "colors",
    routes: ["/colors", "/colors/create"],
    childrenOptions: [
      {
        id: 8,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        permissions: [],
        to: "colors",
      },
      {
        id: 9,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        permissions: [],
        to: "colors/create",
      },
    ],
  },
  {
    id: 10,
    label: "Contents",
    icon: <ViewListIcon className="w-6 mr-1" />,
    permissions: [],
    to: "contents",
    routes: ["/contents", "/contents/create"],
    childrenOptions: [
      {
        id: 11,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        permissions: [],
        to: "contents",
      },
      {
        id: 12,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        permissions: [],
        to: "contents/create",
      },
    ],
  },
  {
    id: 13,
    label: "Materials",
    icon: <BeakerIcon className="w-6 mr-1" />,
    permissions: [],
    to: "materials",
    routes: ["/materials", "/materials/create"],
    childrenOptions: [
      {
        id: 14,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        permissions: [],
        to: "materials",
      },
      {
        id: 15,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        permissions: [],
        to: "materials/create",
      },
    ],
  },
  {
    id: 16,
    label: "Sizes",
    icon: <ClipboardListIcon className="w-6 mr-1" />,
    permissions: [],
    to: "sizes",
    routes: ["/sizes", "/sizes/create"],
    childrenOptions: [
      {
        id: 17,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        permissions: [],
        to: "sizes",
      },
      {
        id: 18,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        permissions: [],
        to: "sizes/create",
      },
    ],
  },
  {
    id: 19,
    label: "Product",
    icon: <DocumentIcon className="w-6 mr-1" />,
    to: "products",
    routes: ["/products", "/products/create"],
    childrenOptions: [
      {
        id: 20,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        to: "products",
      },
      {
        id: 21,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        to: "products/create",
      },
    ],
  },
  {
    id: 22,
    label: "Social Networks",
    icon: <GlobeAltIcon className="w-6 mr-1" />,
    to: "social-networks",
    routes: ["/social-networks", "/social-networks/create"],
    childrenOptions: [
      {
        id: 23,
        label: "List",
        icon: <ViewListIcon className="w-5 mr-1" />,
        to: "social-networks",
      },
      {
        id: 24,
        label: "New",
        icon: <PlusCircleIcon className="w-5 mr-1" />,
        to: "social-networks/create",
      },
    ],
  },
  {
    id: 3,
    label: "settings",
    icon: <CogIcon className="w-6 mr-1" />,
    permissions: [],
    to: "settings/change-password",
    routes: ["/settings/change-password"],
    childrenOptions: [
      {
        id: 9,
        label: "change-password",
        icon: <PencilAltIcon className="w-5 mr-1" />,
        permissions: [],
        to: "settings/change-password",
      },
    ],
  },
];
