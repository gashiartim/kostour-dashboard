import React from "react";

interface Props {
  value: any;
  columnProps: any;
}

export const LocationNameCell = ({ value, columnProps }: Props) => {
  return <div className="">{value?.name ?? "/"}</div>;
};
