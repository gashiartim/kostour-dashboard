import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import React, { ChangeEvent, useState } from "react";
import { InputField } from "../../../types";
import { Input } from "../Input/Input";

type Props = {
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  data: TagStateType;
  onAdd(): void;
  onClearTag(indexParam: number): void;
};

export type TagStateType = {
  name: string;
  href: string;
  email?: string;
  error?: string;
  tags: Array<Omit<TagStateType, "tags">>;
};

const TagInput = ({ onAdd, onChange, onClearTag, data }: Props) => {
  return (
    <div className="relative mt-5">
      <div className="flex">
        {data.tags.map((tag, index) => {
          return (
            <div
              key={`tag-${tag.email}-${index}`}
              className="relative p-1 px-2 mr-2 text-xs bg-gray-300 rounded-md"
            >
              <button
                className="absolute -top-[6px] -right-[6px] "
                onClick={() => onClearTag(index)}
                type="button"
              >
                <XCircleIcon className="w-4" />
              </button>
              <h6 className="">{tag.name}</h6>
            </div>
          );
        })}
      </div>
      <div className="flex items-end">
        {inputFields.map((input, index) => {
          return (
            <Input
              key={`${input.name}-key`}
              name={input.name}
              id={input.name}
              type={input.type}
              label={`${index === 0 ? "Add link" : "   "}`}
              placeholder={input.label}
              disabled={input.disabled}
              value={data[input.name as keyof Omit<TagStateType, "tags">]}
              onChange={onChange}
              className="my-0"
            />
          );
        })}
        <button className="h-full mb-[6px] ml-2" onClick={onAdd} type="button">
          <PlusCircleIcon className="w-7" />
        </button>
      </div>

      {data.error && (
        <pre className="absolute left-0 mr-auto font-sans text-xs text-red-600 -bottom-4 w-max">
          {data.error}
        </pre>
      )}
    </div>
  );
};

export default TagInput;

const inputFields: Array<InputField> = [
  {
    name: "name",
    type: "text",
    label: "Name",
    disabled: false,
  },
  {
    name: "href",
    type: "text",
    label: "Href",
    disabled: false,
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    disabled: false,
  },
];
