import React from "react";
import cs from "classnames";

interface Props {
  value: Array<any>;
  columnProps: any;
}

export const NumberOfSubCatCell = ({ value, columnProps }: Props) => {
  return <div>{value?.length}</div>;
};
