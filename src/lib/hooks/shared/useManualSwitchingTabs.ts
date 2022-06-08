import { useState } from "react";

export function useManualSwitchingTabs(numberOfTabs?: number) {
  const [activeTab, setActiveTab] = useState<0 | 1 | number>(0);

  function toggleTab() {
    setActiveTab((old) => (old === 0 ? 1 : 0));
  }

  function setTab(tab: number) {
    if (numberOfTabs && tab > numberOfTabs) {
      return;
    }

    setActiveTab(tab);
  }

  return {
    activeTab,
    toggleTab,
    setTab,
  };
}
