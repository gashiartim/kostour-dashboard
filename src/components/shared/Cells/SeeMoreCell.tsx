import React from "react";
import ReadMore from "../ReadMore/ReadMore";

type Props = { value: string };

const SeeMoreCell = ({ value }: Props) => {
  return (
    <div className="max-w-[220px] w-max">
      <ReadMore>{value}</ReadMore>
    </div>
  );
};

export default SeeMoreCell;
