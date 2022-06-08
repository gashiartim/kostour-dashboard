import React from "react";
import { Button } from "../Button/Button";

type Props = {
  text: string;
  noHorizontalLine?: boolean;
  toggleTab?: () => void;
  showEditButton?: boolean;
};

const TitleWithHrLine = ({
  text,
  noHorizontalLine = false,
  toggleTab,
  showEditButton = false,
}: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold ">{text}</h2>
        {showEditButton && (
          <Button
            className="text-blue-600 bg-transparent link hover:bg-transparent ative:!ring-0 !ring-transparent "
            onClick={toggleTab}
          >
            Edit
          </Button>
        )}
      </div>
      {!noHorizontalLine && <hr />}
    </div>
  );
};

export default TitleWithHrLine;
