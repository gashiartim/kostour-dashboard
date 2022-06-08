import React, { ChangeEvent } from "react";
import { UseFormRegister } from "react-hook-form";
import cs from "classnames";

interface Props {
  label: string;
  error?: string;
  placeholder: string;
  name: string;
  register?: UseFormRegister<any>;
  className?: string;
  textAreaClassName?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  rows?: number;
}

export const TextArea = ({
  label,
  error,
  placeholder,
  name,
  className,
  textAreaClassName,
  register,

  ...rest
}: Props) => {
  return (
    <div className={cs("my-4 relative ", className)}>
      <label
        htmlFor={name}
        className="block mb-1 mr-auto text-sm font-semibold w-max"
      >
        {label}
      </label>
      <textarea
        className={cs(
          "px-5 py-2 min-h-10 w-full rounded bg-[#f9f9f9] border border-transparent active:outline-none outline-none border-gray-50",
          textAreaClassName
        )}
        name={name}
        id={name}
        placeholder={placeholder}
        {...register?.(name)}
        {...rest}
      />
      {error && (
        <pre className="absolute left-0 mr-auto font-sans text-xs text-red-600 -bottom-3 w-max">
          {error}
        </pre>
      )}
    </div>
  );
};
