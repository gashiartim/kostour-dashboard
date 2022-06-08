import React from "react";

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

const LoadingBoundary = (props: Props) => {
  if (props.isLoading) {
    return <div className="flex justify-center w-full">Loading data...</div>;
  }

  return <>{props.children}</>;
};

export default LoadingBoundary;
