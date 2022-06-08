import React, { useEffect, useState } from "react";
import SwitchComponent from "../Switch/Switch";
import cs from "classnames";

type Props = {
  label: string;
  placeholder?: string;
  className?: string;
  onChange: (data: boolean) => void;
  initialValue?: boolean;
  name?: string;
};

const BooleanInput = ({
  className,
  label,
  onChange,
  initialValue = false,
  name,
}: Props) => {
  const [enabled, setEnabled] = useState(() => initialValue || false);

  useEffect(() => {
    onChange(enabled);
  }, [enabled]);

  return (
    <div className={cs("my-4 relative ", className)}>
      <label className="block mb-1 mr-auto text-sm font-semibold w-max">
        {label}
      </label>
      <div className="h-full">
        <SwitchComponent
          className="mt-2"
          enabled={enabled}
          setEnabled={setEnabled}
          name={name}
        />
      </div>
    </div>
  );
};

export default BooleanInput;
