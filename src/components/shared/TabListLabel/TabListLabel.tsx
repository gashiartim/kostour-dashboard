import React from "react";

type Props = {
  tab: {
    iconOnly?: boolean;
    labelOnly?: boolean;
    label: string;
    icon: any;
  };
};

const TabListLabel = ({ tab }: Props) => {
  if (tab.iconOnly) {
    return tab.icon;
  }

  if (tab.labelOnly) {
    return tab.label;
  }

  return (
    <span className="flex items-center">
      {tab.icon}
      {tab.label}
    </span>
  );
};

export default TabListLabel;
