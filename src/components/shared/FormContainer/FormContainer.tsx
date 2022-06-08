import React, { PropsWithChildren } from "react";

type Props = {};

const FormContainer = (props: PropsWithChildren<Props>) => {
  return (
    <div className="grid w-full gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {props.children}
    </div>
  );
};

export default FormContainer;
