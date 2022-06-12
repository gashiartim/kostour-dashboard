import React, { ChangeEvent, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import cs from "classnames";
import { SelectHTMLAttributes } from "react";
import { ClearDataButton } from "../ClearDataButton/ClearDataButton";

export interface Option {
  id: number | string;
  name: string;
  unavailable?: boolean;
}

interface Props {
  name: string;
  error?: string | any;
  label: string;
  className?: string;
  options: Array<Option>;
  value: Option | undefined;
  onChange: (event: any, name: string) => void;
  inputRef?: any;
  onClear?: (fieldName: string) => void;
  isDirty?: boolean;
  buttonClassName?: string;
  isLoading?: boolean;
  selectedOptions?: any[];
}

export const Select = ({
  name,
  label,
  error,
  className,
  onChange,
  value,
  options,
  inputRef,
  onClear,
  isDirty = false,
  buttonClassName,
  isLoading = false,
  selectedOptions,
}: Props) => {
  function handleChange(e: any) {
    onChange(e, name);
  }

  return (
    <div className={cs("my-4 relative ", className)}>
      <label
        htmlFor={name}
        className="block mb-1 mr-auto text-sm font-semibold w-max"
      >
        {label}
      </label>

      <Listbox value={value} onChange={handleChange} refName={inputRef}>
        <div className="relative mt-1">
          <Listbox.Button
            className={cs(
              "px-5 h-10 w-full rounded bg-[#f9f9f9] border border-transparent active:outline-none outline-none border-gray-50 text-left",
              buttonClassName
            )}
          >
            <span className="block truncate">
              {value?.name && isDirty ? (
                value.name
              ) : !isDirty ? (
                value?.name || (
                  <span className="text-black text-opacity-40">{label}</span>
                )
              ) : (
                <span className="text-black text-opacity-40">{label}</span>
              )}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {!isLoading &&
                Boolean(options.length) &&
                options?.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `${active ? "bg-zinc-600 text-white " : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected || selectedOptions?.includes(person.id)
                              ? "font-medium"
                              : "font-normal"
                          } block truncate`}
                        >
                          {person.name}
                        </span>
                        {selected || selectedOptions?.includes(person.id) ? (
                          <span
                            className={`${
                              active ? "text-white" : "text-blue-600"
                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
          {value && onClear && (
            <ClearDataButton
              className="absolute -mt-1 lg:-mt-[3px] top-2 -right-10 w-max -mr-[1px] lg:-mr-[6px] rounded-full max-h-7 lg:max-h-10"
              onClick={() => onClear(name)}
              showText={false}
            />
          )}
        </div>
      </Listbox>
      {error && (
        <pre className="absolute left-0 mr-auto font-sans text-xs text-red-600 -bottom-4 w-max">
          {error?.message || error}
        </pre>
      )}
    </div>
  );
};
