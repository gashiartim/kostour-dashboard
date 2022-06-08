import React from "react";

type Props = {};

const BusinessCell = ({ value, columnProps }: any) => {
  return <div>{value?.name}</div>;
};

export default BusinessCell;
