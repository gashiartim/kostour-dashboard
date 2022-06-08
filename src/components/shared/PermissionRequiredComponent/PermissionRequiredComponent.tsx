import React from "react";
import { usePermissions } from "../../../lib/helpers/useHasPermission/usePermissions";

type Props = {
  permissions: Array<any>;
  children: React.ReactNode;
};

const PermissionRequiredComponent = ({ permissions, children }: Props): any => {
  const { hasPermissions } = usePermissions();

  if (hasPermissions(permissions)) {
    return children;
  }
  return null;
};

export default PermissionRequiredComponent;
