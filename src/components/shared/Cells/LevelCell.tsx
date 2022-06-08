import React from "react";
import cs from "classnames";

interface Props {
  value: number;
  columnProps: any;
}

export const LevelCell = ({ value, columnProps }: Props) => {
  return (
    <div>
      {value === 0 && "Parent Category"}
      {value === 1 && "Sub Category"}
      {value === 2 && "Third level Category"}
    </div>
  );
};
