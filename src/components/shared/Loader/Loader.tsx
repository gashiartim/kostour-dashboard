import React from "react";
import cs from "classnames";

interface Props {
  className: string;
}

const Loader = (props: Props) => {
  return (
    <svg
      className={cs("w-4 h-4 text-white animate-spin", props.className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="#D1D1D1"
        strokeWidth="4"
      ></circle>
      <path
        fill="#ffffff"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Loader;
