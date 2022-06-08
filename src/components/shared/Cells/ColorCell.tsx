import React from "react";
import { useGetColorCodes } from "../../../lib/helpers/useGetColorCodes";

export const ColorCell = ({ row }: any) => {
  const { id, name } = row.original;
  const { colorToHex } = useGetColorCodes();

  return (
    <div
      className={`w-[20px] h-[30px] rounded-md`}
      style={{
        backgroundColor: colorToHex(name),
      }}
    ></div>
  );
};
