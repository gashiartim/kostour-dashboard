import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import cs from "classnames";

type Props = {
  className?: string;
  onClick?: () => void;
};

const ReturnButton = ({ className, onClick }: Props) => {
  const navigate = useNavigate();

  function handleClick() {
    if (onClick) {
      return onClick();
    }
    navigate(-1);
  }

  return (
    <Button
      onClick={handleClick}
      className={cs("btn-secondary ", className)}
      type="reset"
    >
      Return
    </Button>
  );
};

export default ReturnButton;
