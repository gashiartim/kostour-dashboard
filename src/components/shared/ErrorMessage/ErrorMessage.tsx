import React from "react";

export const ErrorMessage = (props: any): any => (
  <div className="container relative mx-auto mt-9 ">
    <h2 className="">Something went wrong while loading data</h2>
    <h4 className="text-sm font-medium text-red-700">{props.error?.message}</h4>
  </div>
);
