import React from "react";
import { useToggle } from "../../lib/hooks/shared/useToggle";
import { useWindowWidth } from "../../lib/hooks/shared/useWindowWidth";
import { SlideOver } from "../shared/SlideOver/SlideOver";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

export interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const [open, toggle] = useToggle();
  const { tablet, mobile, desktop } = useWindowWidth();

  return (
    <div className="relative bg-primaryColor h-[100vh] overflow-hidden">
      <Header toggle={toggle} />
      <main className="flex h-[94vh] max-h-[94vh] overflow-auto ">
        {mobile ? (
          <SlideOver toggle={toggle} show={open}>
            <Sidebar />
          </SlideOver>
        ) : (
          <Sidebar />
        )}

        <div className="p-[30px] w-full h-full max-h-[94vh]">
          {props.children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
