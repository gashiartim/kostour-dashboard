import React from "react";
import { Control, Controller } from "react-hook-form";
import { Option, Select } from "../Select/Select";

type Props = {
  name: string;
  label: string;
  control: Control<any, object> | undefined;
  isLoading: boolean;
  // onChange: (event: any, name: string) => void;
  // value: Option | undefined;
  options: Option[];
};

const ControllerSelectInput = ({
  name,
  label,
  control,
  isLoading,
  // onChange,
  // value,
  options,
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => {
        if (isLoading)
          return (
            <div className="flex items-center justify-start">
              <p className="mt-5">Loading {name}s...</p>
            </div>
          );
        return (
          <Select
            label={label}
            name={name}
            onChange={onChange}
            value={options.find((option) => option.id === value?.id)}
            options={options}
            error={error?.message}
            inputRef={ref}
            isDirty={isDirty}
            isLoading={isLoading}
          />
        );
      }}
    />
  );
};

export default ControllerSelectInput;
