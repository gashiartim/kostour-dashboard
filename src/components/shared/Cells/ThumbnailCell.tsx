import React from "react";
import cs from "classnames";
import { Link } from "react-router-dom";
import imgPlaceholder from "../../../assets/images/image-placeholder.jpeg";

interface Props {
  value: any;
  columnProps: any;
}

export const ThumbnailCell = ({ value, columnProps }: Props) => {
  return (
    <div
      className={cs({
        "w-[40px] max-h-[60px] h-full  bg-gray-400 ml-[22px] flex items-center justify-center":
          true,
        "!bg-transparent": value?.media?.url,
      })}
    >
      {value?.media?.url ? (
        <img
          src={process.env.REACT_APP_PHOTOS_API + "" + value.media.url}
          alt={value.media.name}
          className="w-full h-[60px] object-cover"
        />
      ) : (
        <img
          src={imgPlaceholder}
          alt="Placeholder"
          className="w-full h-[60px] object-cover"
        />
      )}
    </div>
  );
};
