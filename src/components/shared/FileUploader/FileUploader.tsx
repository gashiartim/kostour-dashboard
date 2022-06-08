import React, { useRef } from "react";
import { UseFormRegister } from "react-hook-form";
import cs from "classnames";
import { PencilIcon } from "@heroicons/react/solid";

import imagePlaceholder from "../../../assets/images/image-placeholder.jpeg";

type Props = {
  file: any;
  className?: string;
  placeholder?: string;
  onUpdate: (value: any) => void;
  label?: string;
  name?: string;
};

const FileUploader = ({
  className,
  onUpdate,
  file,
  placeholder,
  label = "File",
  name = "thumbnail",
}: Props) => {
  const photoInputRef: any = useRef(null);

  function handleClick() {
    photoInputRef.current?.click();
  }

  return (
    <div className="">
      <label
        htmlFor=""
        className="block mb-1 mr-auto text-sm font-semibold w-max"
      >
        {label}
      </label>
      <div
        className={cs(
          "relative max-w-[300px] w-full  min-h-[120px] bg-[#f9f9f9] py-1 cursor-pointer",
          className
        )}
        onClick={handleClick}
      >
        {placeholder || file ? (
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : process.env.REACT_APP_PHOTOS_API + "" + placeholder
            }
            alt=""
            className="w-[300px] h-[100px] bg-gray-400 object-cover object-center"
          />
        ) : (
          <img
            src={imagePlaceholder}
            alt=""
            className="w-[300px] h-[100px] bg-gray-400 object-cover object-center"
          />
        )}

        <input
          type="file"
          placeholder="file"
          onChange={onUpdate}
          name={name}
          className="hidden"
          ref={photoInputRef}
        />
        <div className="absolute top-0 flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 default-transition">
          <PencilIcon className="w-6 text-white" />
        </div>
        <div className="flex items-center pt-[3px] pl-1">
          <h6 className="text-xs font-medium">
            Click to {placeholder || file ? "edit" : "add new photo"}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
