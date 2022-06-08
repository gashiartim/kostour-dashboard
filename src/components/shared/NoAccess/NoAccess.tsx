import React from "react";

interface INoAccessProps {}

export const NoAccess = (props: INoAccessProps) => {
  return (
    <div className="p-5 font-semibold text-center text-red-700">
      Sorry, you have no access to view this page!
    </div>
  );
};
