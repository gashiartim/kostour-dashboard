import React from "react";

interface Props {
  value: any;
  columnProps: any;
}

export const AttributesCell = ({ value, columnProps }: Props) => {
  return <div className="">{value?.name || value?.value}</div>;
};
