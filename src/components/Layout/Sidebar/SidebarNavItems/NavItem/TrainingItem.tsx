import { AcademicCapIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../../lib/context/AuthContext/AuthContext";
import cs from "classnames";

interface Props {
  routes: string[];
}

export const TrainingItem = ({ routes }: Props) => {
  const authCtx = useAuthContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [opened, setOpened] = useState<boolean>(() =>
    Boolean(routes?.includes(pathname))
  );

  function handleClick() {
    setOpened(true);
    navigate("/training");
  }

  return (
    <li
      className={cs({
        "flex items-center px-6 py-3 text-sm font-medium transition-all duration-75 ease-in-out hover:bg-zinc-600 hover:text-white hover:cursor-pointer":
          true,
        "text-white": opened && routes && routes.includes(pathname),
      })}
      onClick={handleClick}
    >
      <AcademicCapIcon className="w-6 mr-1" /> Training
    </li>
  );
};
