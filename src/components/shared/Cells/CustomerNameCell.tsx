import React from "react";
import cs from "classnames";
import { Link } from "react-router-dom";

interface Props {
  value: string;
  columnProps: any;
}

export const CustomerNameCell = ({ value, columnProps }: Props) => {
  return (
    <div
      className={cs({
        "": true,
      })}
    >
      <span className="font-medium link default-transition decoration-white">
        <Link to={"/search/customers/123"}>{value}</Link>
      </span>
    </div>
  );
};
