import * as React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useAuthContext } from "../lib/context/AuthContext/AuthContext";

export function RestrictedRoute({ children }: { children: JSX.Element }) {
  //pages that user cant see if he's logged in, ex: forgot password
  const authCtx = useAuthContext();

  if (authCtx.isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return children;
}
