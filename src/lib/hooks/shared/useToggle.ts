import { useState } from "react";

type ReturnType = [boolean, () => void];

export const useToggle = (initialLocked = false): ReturnType => {
  const [open, setOpen] = useState<boolean>(initialLocked);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return [open, toggle];
};
