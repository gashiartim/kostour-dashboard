import { useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import cs from "classnames";

export interface IOption {
  id: string;
  name: string;
}

type Props = {
  name: string;
  label: string;
  onChange: (data: IOption[]) => void;
  initialSelections?: any[];
  options?: IOption[];
  className?: string;
};

const people = [
  { id: "2", name: "test" },
  { id: "1", name: "tesasd" },
];

const MultipleSelect = ({
  options,
  name,
  label,
  initialSelections,
  onChange,
  className,
}: Props) => {
  const [selectedPersons, setSelectedPersons] = useState<IOption[]>(
    () => initialSelections || []
  );

  console.log({ selectedPersons });

  function isSelected(value: IOption) {
    return selectedPersons.find((el) => el.id === value.id) ? true : false;
  }

  function handleSelection(option: any) {
    const selectedResult = selectedPersons.filter(
      (selected) => selected.id === option.id
    );

    if (selectedResult.length) {
      removePerson(option);
    } else {
      setSelectedPersons((currents) => [...currents, option]);
    }
  }

  function removePerson(option: IOption) {
    const removedSelection = selectedPersons.filter(
      (selected) => selected.id !== option.id
    );
    setSelectedPersons(removedSelection);
  }

  useEffect(() => {
    onChange(selectedPersons);
  }, [selectedPersons]);

  return (
    <div className={cs("my-4 relative ", className)}>
      <div className="">
        <Listbox
          refName={name}
          as="div"
          className="space-y-1"
          value={selectedPersons}
          onChange={(test: any) => handleSelection(test)}
        >
          {({ open }) => (
            <>
              <Listbox.Label
                htmlFor={name}
                className="block mb-1 mr-auto text-sm font-semibold w-max"
              >
                {label}
              </Listbox.Label>
              <div className="relative">
                <span className="inline-block w-full rounded-md shadow-sm">
                  <Listbox.Button className="px-5 h-10 w-full rounded bg-[#f9f9f9] border border-transparent active:outline-none outline-none border-gray-50 text-left">
                    {!selectedPersons.length && "One or more selections"}
                    {selectedPersons.map((option: IOption, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center px-1 mt-1 mr-1 text-white bg-gray-400 rounded"
                      >
                        {option.name}
                        <div
                          className="ml-1 bg-gray-100 rounded-full cursor-pointer"
                          onClick={() => removePerson(option)}
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
                              fill="#4A5568"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                </span>

                <Transition
                  show={open}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute w-full mt-1 bg-white rounded-md shadow-lg"
                >
                  <Listbox.Options
                    static
                    className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
                  >
                    {options?.map((option: IOption) => {
                      const selected = isSelected(option);
                      return (
                        <Listbox.Option key={option.id} value={option}>
                          {({ active }) => (
                            <div
                              className={`${
                                active
                                  ? "text-white bg-blue-600"
                                  : "text-gray-900"
                              } cursor-default select-none relative py-2 pl-8 pr-4`}
                            >
                              <span
                                className={`${
                                  selected ? "font-semibold" : "font-normal"
                                } block truncate`}
                              >
                                {option.name}
                              </span>
                              {selected && (
                                <span
                                  className={`${
                                    active ? "text-white" : "text-blue-600"
                                  } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                >
                                  <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default MultipleSelect;
