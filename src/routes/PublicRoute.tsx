import { RouteProps } from "react-router-dom";

export interface IPublicRouteProps extends RouteProps {}

export function PublicRoute({ children }: { children: JSX.Element }) {
  return children;
}
