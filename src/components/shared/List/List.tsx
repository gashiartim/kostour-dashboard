import React from "react";
import cs from "classnames";

type Props = {
  data: Array<any>;
  className?: string;
  minLabelWidth?: string;
};

//dont use w-[${dynamicData like this}]
const List = ({ minLabelWidth = "220px", className, data }: Props) => {
  return (
    <div className={cs(className)}>
      <ul>
        {data.map((element: any) => {
          return (
            <li className="my-2 text-sm" key={element.label + "element"}>
              <span
                className={`font-semibold inline-block`}
                style={{ minWidth: minLabelWidth }}
              >
                {element.label}
              </span>
              <span>{element.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
