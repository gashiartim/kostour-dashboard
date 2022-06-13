import React from "react";
import { Control, Controller } from "react-hook-form";
import FileUploader from "../FileUploader/FileUploader";
import cs from "classnames";

type Props = {
  name: string;
  label: string;
  control: Control<any, object> | undefined;
  isLoading: boolean;
  className?: string;
  // value: Option | undefined;
};

const ControllerFileInput = ({
  name,
  label,
  control,
  isLoading,
  className,
}: // value,
Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name } }) => {
        let placeholderImage = value?.media?.url;

        if (isLoading)
          return (
            <div className="flex items-center justify-start">
              <p className="mt-5">Loading {name}s...</p>
            </div>
          );
        return (
          <FileUploader
            file={value}
            onUpdate={(data) => {
              onChange(data.target.files[0]);
              placeholderImage = null;
            }}
            label={label}
            placeholder={placeholderImage}
            className={cs("mx-auto md:mx-[0]")}
            wrapperClassName={className}
          />
        );
      }}
    />
  );
};

export default ControllerFileInput;
