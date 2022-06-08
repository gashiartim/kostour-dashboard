import localforage from "localforage";
import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { NoAccess } from "../components/shared/NoAccess/NoAccess";
import { useAuthContext } from "../lib/context/AuthContext/AuthContext";
import { Permissions } from "../lib/helpers/useHasPermission/permissions";
import {
  Roles,
  usePermissions,
} from "../lib/helpers/useHasPermission/usePermissions";

export interface IPrivateRouteProps {
  children: JSX.Element;
}

export function PrivateRoute({ children }: IPrivateRouteProps) {
  // let auth = null;
  let location = useLocation();
  const authCtx = useAuthContext();

  if (!authCtx.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // if (!permissions) return children;

  // if (!hasPermissions(permissions)) return <NoAccess />;

  return children;
}
