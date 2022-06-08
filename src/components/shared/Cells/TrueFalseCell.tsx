import React from "react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

interface Props {
  value: "Active" | "Suspended" | "Inactive";
  columnProps: any;
}

export const TrueFalseCell = ({ value, columnProps }: Props) => {
  console.log({ value });

  return (
    <div className="flex justify-center text-center ">
      {value ? (
        <CheckIcon className="w-5 text-green-600" />
      ) : (
        <XIcon className="w-5 text-red-600" />
      )}
    </div>
  );
};
