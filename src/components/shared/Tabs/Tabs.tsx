import React from "react";
import { Tab } from "@headlessui/react";
import cs from "classnames";
import TabListLabel from "../TabListLabel/TabListLabel";

export interface IPanel {
  id: string;
  element: React.ReactNode;
}

export interface ITab {
  id: string;
  label: string;
  icon: JSX.Element;
  iconOnly?: boolean;
  labelOnly?: boolean;
  path?: string;
}

export interface ITabsProps {
  tabList: Array<ITab>;
  panels: Array<IPanel>;
  activeTab?: number;
  handleTabClick?: (path: string) => void;
}

export const Tabs = (props: ITabsProps) => {
  const { activeTab = 0, handleTabClick } = props;

  return (
    <Tab.Group selectedIndex={activeTab} manual={true}>
      <Tab.List className="flex items-end justify-end ml-auto text-sm ">
        {props.tabList.map((tab, index) => {
          return (
            <div
              title={tab.label}
              onClick={() =>
                handleTabClick && tab.path && handleTabClick(tab.path)
              }
              key={tab.id}
              className={cs({
                "p-2 font-medium": true,
                "bg-white bg-opacity-60 translate-y-[1px] hover:bg-opacity-10 hover:bg-gray-300":
                  activeTab !== index,
                "bg-white shadow-sm default-transition border-b-0 shadow-b-0 hover:bg-opacity-70":
                  activeTab === index,
              })}
            >
              <Tab>
                <TabListLabel tab={tab} />
              </Tab>
            </div>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        {props.panels.map((panel) => (
          <Tab.Panel key={panel.id}>{panel.element}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
