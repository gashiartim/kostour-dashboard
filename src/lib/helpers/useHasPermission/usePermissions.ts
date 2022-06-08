import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { Permissions } from "./permissions";
import {
  adminPermissions,
  backOfficeAdminPermissions,
  complianceOfficerPermissions,
  csrAdvancedPermissions,
  csrBasicPermissions,
  financeAdminPermissions,
  techPermissions,
} from "./rolesPermissions";

// interface Props {
//   role: Roles;
//   permission: Permissions | Permissions[];
//   isArray?: boolean;
// }

export enum Roles {
  "ADMIN" = "admin",
  "BACK_OFFICE_ADMIN" = "back_office_admin",
  "COMPLIANCE_OFFICER" = "compliance_officer",
  "CSR_ADVANCED" = "csr_advanced",
  "CSR_BASIC" = "csr_basic",
  "FINANCE_ADMIN" = "finance_admin",
  "TECH" = "tech",
}

export const RolesPermissions = {
  admin: adminPermissions,
  back_office_admin: backOfficeAdminPermissions,
  compliance_officer: complianceOfficerPermissions,
  csr_advanced: csrAdvancedPermissions,
  csr_basic: csrBasicPermissions,
  finance_admin: financeAdminPermissions,
  tech: techPermissions,
};

export function usePermissions() {
  const authCtx = useAuthContext();
  const rolePermissions: Permissions[] =
    RolesPermissions[
      (authCtx.user?.role?.slug as keyof typeof RolesPermissions) || "admin"
    ];

  const hasPermissions = (permissions: Permissions[]) => {
    let noPermission: boolean = false;

    permissions.forEach((perm: Permissions) => {
      if (Boolean(perm.length) && !rolePermissions.includes(perm)) {
        noPermission = true;
      }
    });

    if (rolePermissions.includes(Permissions.FULL_ACCESS)) noPermission = false;

    //false if no permission
    return !noPermission;
  };

  return {
    hasPermissions,
  };
}
