import { LogoutIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../../lib/context/AuthContext/AuthContext";

export const LogoutItem = () => {
  const authCtx = useAuthContext();
  const navigate = useNavigate();

  function handleLogout() {
    authCtx.logout();
    navigate("/");
  }

  return (
    <li
      className="flex items-center px-6 py-3 text-sm font-medium transition-all duration-75 ease-in-out hover:bg-zinc-600 hover:text-white hover:cursor-pointer"
      onClick={handleLogout}
    >
      <LogoutIcon className="w-6 mr-1" /> Logout
    </li>
  );
};
