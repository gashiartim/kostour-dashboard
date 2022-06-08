import { XIcon } from "@heroicons/react/solid";
import React from "react";
import { Button } from "../Button/Button";
import cs from "classnames";

interface Props {
  onClick: () => void;
  className?: string;
  showText?: boolean;
}

export const ClearDataButton = (props: Props) => {
  const { showText = true } = props;
  return (
    <Button
      className={cs(
        "flex w-full px-1 mt-auto mb-[22px] rounded-md lg:rounded-full md:py-1 md:w-max btn-secondary default-transition max-h-10",
        props.className
      )}
      onClick={props.onClick}
      type="button"
    >
      <XIcon className={cs({ "w-4 md:block": true, hidden: showText })} />
      {showText && <span className="md:hidden">Clear Search</span>}
    </Button>
  );
};
