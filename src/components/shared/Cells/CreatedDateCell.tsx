import React from "react";

type Props = {
  value: string;
};

const CreatedDateCell = ({ value }: Props) => {
  return <div>{new Date(value).toISOString().split("T")[0]}</div>;
};

export default CreatedDateCell;
