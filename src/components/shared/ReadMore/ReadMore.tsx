import React, { useState } from "react";
import cs from "classnames";

type Props = {
  children: any;
  className?: string;
  maxCharacters?: number;
};

const ReadMore = ({ children, className, maxCharacters = 30 }: Props) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={cs("", className)}>
      {isReadMore ? text.slice(0, maxCharacters) : text}
      {children.length > maxCharacters && (
        <span
          onClick={toggleReadMore}
          className="italic font-medium text-gray-400 cursor-pointer"
        >
          {isReadMore ? "...read more" : " show less"}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
