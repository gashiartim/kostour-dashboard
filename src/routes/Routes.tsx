import React from "react";
import { Route, RouteProps, Routes as Switch } from "react-router-dom";

import {
  Permissions,
  Permissions as p,
} from "../lib/helpers/useHasPermission/permissions";

import Page404 from "../pages/Page404";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

import NewPassword from "../pages/NewPassword/NewPassword";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/Users";
import User from "../pages/Users/User";
import CreateUser from "../pages/Users/CreateUser";
import EditUser from "../pages/Users/EditUser";

export enum RouteType {
  PUBLIC,
  PRIVATE,
  RESTRICTED,
}

interface IAppRoute extends RouteProps {
  type?: RouteType;
  element: React.ReactElement;
  permissions?: Array<Permissions>;
}

export const AppRoutes: IAppRoute[] = [
  {
    type: RouteType.PRIVATE,
    path: "users",
    permissions: [],
    element: <Users />,
  },
  {
    type: RouteType.PRIVATE,
    path: "users/:userId",
    permissions: [],
    element: <User />,
  },
  {
    type: RouteType.PRIVATE,
    path: "users/create",
    permissions: [],
    element: <CreateUser />,
  },
  {
    type: RouteType.PRIVATE,
    path: "users/edit/:userId",
    permissions: [],
    element: <EditUser />,
  },
  {
    type: RouteType.RESTRICTED,
    path: "set-new-password",
    element: <NewPassword />,
  },
  {
    type: RouteType.RESTRICTED,
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

export const Routes = () => {
  return (
    <Switch>
      {AppRoutes.map((route: IAppRoute) => {
        const { type, path, permissions, ...rest } = route;

        if (type === RouteType.PRIVATE) {
          return (
            <Route
              key={`route-${path}`}
              path={`/${path}`}
              {...rest}
              element={
                <PrivateRoute>{React.cloneElement(route.element)}</PrivateRoute>
              }
            />
          );
        }
        if (type === RouteType.RESTRICTED) {
          return (
            <Route
              {...rest}
              key={`route-${path}`}
              path={`/${path}`}
              element={
                <RestrictedRoute>
                  {React.cloneElement(route.element, route)}
                </RestrictedRoute>
              }
            />
          );
        }

        return (
          <Route
            {...rest}
            key={`${route.path}`}
            path={`/${route.path}`}
            element={rest.element}
          />
        );
      })}
      <Route path="*" element={<Page404 />} />
    </Switch>
  );
};

export const unAuthorizedRoute = ["/", "/set-new-password"];
