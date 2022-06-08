import localforage from "localforage";
import React, { useEffect } from "react";
import { useAuthContext } from "../../../lib/context/AuthContext/AuthContext";
import { checkTokenExpiration } from "../../../lib/helpers/checkTokenExpiration";

type Props = {};

export const TokenExpire = (props: Props) => {
  const { logout } = useAuthContext();

  useEffect(() => {
    async function getToken() {
      const token = await localforage.getItem<string | string>(
        "LOCAL_STORAGE_KEY"
      );

      if (token && checkTokenExpiration(token)) {
        logout();
      }
    }

    getToken();
  }, []);

  return null;
};
