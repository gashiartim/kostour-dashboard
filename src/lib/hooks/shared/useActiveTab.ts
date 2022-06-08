import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useActiveTab(tabs: Array<string>) {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState<number>(0);

  const getActiveTab = (): number => {
    for (let i = 0; i < tabs.length; i++) {
      if (pathname.includes(tabs[i])) {
        return i + 1;
      }
    }

    return 0;
  };

  useEffect(() => {
    const tab = getActiveTab();

    setActiveTab(tab);
  }, [tabs]);

  return { activeTab, getActiveTab };
}
