import { UserIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../lib/context/AuthContext/AuthContext";

type Props = {
  name?: string;
  pic?: string;
  role?: string;
};

export const UserInfo = (props: Props) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/home");
  }

  return (
    <div
      className="flex p-6 bg-[#1D1D1D] cursor-pointer"
      onClick={navigateToHome}
    >
      <div className="w-[40px] h-[40px] rounded-full bg-[#979797] flex items-baseline">
        <UserIcon className="w-[40px] text-[#1D1D1D] translate-y-1" />
      </div>
      <div className="ml-3">
        <h5 className="font-semibold text-white">{user?.first_name}</h5>
        {user?.role?.name && (
          <h6 className="text-xs uppercase">{user?.role?.name}</h6>
        )}
      </div>
    </div>
  );
};
