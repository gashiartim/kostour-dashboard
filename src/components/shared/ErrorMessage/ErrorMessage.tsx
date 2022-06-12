import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";

interface Props {}

export const ErrorMessage = ({ error, resetErrorBoundary }: any) => {
  const navigate = useNavigate();

  return (
    <div className="container relative mx-auto mt-9 md:max-w-2xl lg:max-w-4xl xl:max-w-largeScreen">
      <h2 className="">Something went wrong while loading the data</h2>
      <h4 className="text-sm font-medium text-red-700">{error?.message}</h4>
      <Button
        onClick={() => {
          return navigate("/");
        }}
        className="mt-2"
      >
        Try again
      </Button>
    </div>
  );
};
