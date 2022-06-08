import axios from "axios";
import localforage from "localforage";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getUserDetails,
  ILoginResponse,
  IUser,
  getProfile,
} from "../../../api/User";
import { LoadingScreen } from "../../../components/shared/LoadingScreen/LoadingScreen";
import { checkTokenExpiration } from "../../helpers/checkTokenExpiration";
import { AuthContext, IAuthContextType } from "./AuthContext";
import { RolesPermissions } from "../../helpers/useHasPermission/usePermissions";
import { Permissions } from "../../helpers/useHasPermission/permissions";
import { encodeData } from "../../helpers/encodeData";
import { unAuthorizedRoute } from "../../../routes/Routes";

interface IAccount {
  email: string;
  password: string;
  role: string;
  permissions: Permissions[];
  redirectTo: string;
}

export const redirectUserTo = {
  admin: "search/phone-number",
  back_office_admin: "search/phone-number",
  compliance_officer: "search/phone-number",
  csr_advanced: "search/phone-number",
  csr_basic: "search/phone-number",
  finance_admin: "settings/change-password",
  tech: "search/phone-number",
};

interface Props {
  children: JSX.Element | React.ReactNode | null;
}

export const LOCAL_STORAGE_KEY = "EINFACH_ACCESS_TOKEN";

export const AuthContextProvider = (props: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    authenticate();
  }, []);

  async function authenticate() {
    try {
      const userStorageDetails = await localforage.getItem<string | any>(
        LOCAL_STORAGE_KEY
      );

      // if (!userStorageDetails) {
      //   return;
      // }

      if (!userStorageDetails || checkTokenExpiration(userStorageDetails)) {
        return await logout();
      }

      axios.defaults.headers.common.Authorization = `Bearer ${userStorageDetails}`;
      const userProfile = await getProfile();

      setUser(userProfile);
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function login(data: ILoginResponse) {
    try {
      setIsLoading(true);
      axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
      localforage.setItem(LOCAL_STORAGE_KEY, data.access_token);

      setUser(data.user);
      setIsAuthenticated(true);

      // navigate(
      //   `${redirectUserTo[userExists.role as keyof typeof redirectUserTo]}`
      // );
      // navigate(userExists.redirectTo);
      navigate("/users");
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }
  }

  async function logout() {
    try {
      await localforage.removeItem(LOCAL_STORAGE_KEY);
      setUser(undefined);
      setError(undefined);
      setIsAuthenticated(false);

      if (!unAuthorizedRoute.includes(pathname)) {
        return navigate("/");
      }
      // navigate(pathname);
    } catch (error) {
      console.error(error);
    }
  }

  const ContextValues: IAuthContextType = {
    isAuthenticated,
    user,
    isLoading,
    error,
    login,
    logout,
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <AuthContext.Provider value={ContextValues}>
      {props.children}
    </AuthContext.Provider>
  );
};
