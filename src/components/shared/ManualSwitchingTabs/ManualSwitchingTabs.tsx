import React from "react";
import { Tab } from "@headlessui/react";

export interface IPanel {
  id: string;
  element: React.ReactNode;
}

export interface IManualSwitchingTabsProps {
  activeTab: number;
  panels: Array<IPanel>;
}

export const ManualSwitchingTabs = (props: IManualSwitchingTabsProps) => {
  return (
    <div>
      <Tab.Group manual selectedIndex={props.activeTab}>
        <Tab.List className="hidden">
          {props.panels.map((panel) => {
            return <Tab key={`panel-tab-${panel.id}`}></Tab>;
          })}
        </Tab.List>
        <Tab.Panels>
          {props.panels.map((panel) => (
            <Tab.Panel key={panel.id}>{panel.element}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
