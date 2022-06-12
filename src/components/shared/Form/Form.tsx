import { DevTool } from "@hookform/devtools";
import React from "react";
import { Control } from "react-hook-form";
import ActionButtons from "../ActionButtons/ActionButtons";

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  children: React.ReactNode | any;
  handleCancel?: () => void;
  control: Control<any, object> | undefined;
};

const Form = ({ onSubmit, children, control, handleCancel }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="grid w-full gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {children}
      </div>
      <ActionButtons
        className="justify-end w-full"
        showSubmitBtn={false}
        showAmlBtn={false}
        showCancelBtn={false}
        showReturnBtn={true}
        showCompleteBtn={false}
        showSaveBtn={true}
        onReturn={handleCancel}
      />
      <DevTool control={control} />
    </form>
  );
};

export default Form;
