import React from "react";
import { Button } from "../Button/Button";

import cs from "classnames";
import ReturnButton from "../ReturnButton/ReturnButton";

type Props = {
  showCancelBtn?: boolean;
  showReturnBtn?: boolean;
  showSubmitBtn?: boolean;
  showCompleteBtn?: boolean;
  showAmlBtn?: boolean;
  showSaveBtn?: boolean;

  disabled?: boolean;

  onCancel?: () => void;
  onReturn?: () => void;
  onSubmit?: () => void;
  onComplete?: () => void;
  onAml?: () => void;

  className?: string;
};

const ActionButtons = ({
  showCancelBtn = false,
  showReturnBtn = true,
  showSubmitBtn = false,
  showCompleteBtn = true,
  showAmlBtn = true,
  showSaveBtn = false,
  disabled = false,
  onCancel,
  onReturn,
  onSubmit,
  onComplete,
  onAml,
  className,
}: Props) => {
  return (
    <div className={cs("flex items-center", className)}>
      {showCancelBtn && (
        <Button
          className="py-2 mr-3 btn-secondary"
          onClick={onCancel}
          type="reset"
        >
          Cancel
        </Button>
      )}
      {showReturnBtn && (
        <ReturnButton onClick={onReturn} className="py-2 mr-3" />
      )}
      {showSubmitBtn && (
        <Button
          className="mr-3"
          disabled={disabled}
          onClick={onSubmit}
          type="submit"
        >
          Submit
        </Button>
      )}
      {showSaveBtn && (
        <Button
          className="mr-3"
          disabled={disabled}
          onClick={onSubmit}
          type="submit"
        >
          Save
        </Button>
      )}
      {showCompleteBtn && (
        <Button className="mr-3" disabled={disabled} onClick={onComplete}>
          Complete
        </Button>
      )}
      {showAmlBtn && <Button onClick={onAml}>Hold AML</Button>}
    </div>
  );
};

export default ActionButtons;
