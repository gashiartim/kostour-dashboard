import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import cs from "classnames";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
  placeholder?: string;
  name: string;
  type: string;
  register?: UseFormRegister<any>;
  className?: string;
}

export const Input = ({
  label,
  error,
  placeholder,
  name,
  type,
  className,
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
      <input
        className="px-5 h-10 w-full rounded bg-[#f9f9f9] border border-transparent active:outline-none outline-none border-gray-50"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...register?.(name)}
        {...rest}
      />
      {error && (
        <pre className="absolute left-0 mr-auto font-sans text-xs text-red-600 -bottom-4 w-max">
          {error}
        </pre>
      )}
    </div>
  );
};
