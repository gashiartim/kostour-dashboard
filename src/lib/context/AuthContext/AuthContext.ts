import { createContext, useContext } from "react";

export interface IAuthContextType {
  isAuthenticated: boolean;
  user: any;
  isLoading: boolean;
  error: any;
  login: (user: any) => void;
  logout: () => void;
}

const voidFunction = () => {};

export const AuthContextInitialValues: IAuthContextType = {
  isAuthenticated: false,
  user: undefined,
  isLoading: false,
  error: undefined,
  login: voidFunction,
  logout: voidFunction,
};

export const AuthContext = createContext<IAuthContextType>(
  AuthContextInitialValues
);

export const useAuthContext = () => useContext(AuthContext);
