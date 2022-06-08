import React from "react";
import logo from "../../../assets/images/logo2.png";
import cs from "classnames";
import { Icon } from "../Icon/Icon";

interface Props {
  imageContainerClasses?: string;
  imageClasses?: string;
}

export const Logo = (props: Props) => {
  return (
    <div className={cs("bg-[#f1c40f] ", props.imageContainerClasses)}>
      <Icon icon="kostour-logo" className="" />
    </div>
  );
};
