import React from "react";
import cs from "classnames";

interface Props {
  value: "Active" | "Suspended" | "Inactive";
  columnProps: any;
}

export const StatusCell = ({ value, columnProps }: Props) => {
  return (
    <div
      className={cs({
        "uppercase text-xs font-medium px-1 py-[2px] default-transition": true,
        "text-green-500 bg-green-100 border border-green-100 rounded-md w-max hover:border-green-200":
          value,
        "text-red-700 bg-red-100 border border-red-100 hover:border-red-200 rounded-md w-max":
          !value,
      })}
    >
      {value ? "True" : "False"}
    </div>
  );
};
