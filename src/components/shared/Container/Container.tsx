import React from "react";
import cs from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cs("p-5 bg-white rounded-sm", className)}>{children}</div>
  );
};

export default Container;
