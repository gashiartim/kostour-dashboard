import React from "react";

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
  message?: string;
};

const LoadingBoundary = ({
  isLoading,
  children,
  message = "Loading data...",
}: Props) => {
  if (isLoading) {
    return <div className="flex justify-center w-full">{message}</div>;
  }

  return <>{children}</>;
};

export default LoadingBoundary;
