import { useQuery, UseQueryOptions } from "react-query";
import { getAllRoles, IGettAllRolesResponse } from "../../../../api/Role";
import roleKeys from "../../keys/roleKeys";

export default function useRoles(
  options?: UseQueryOptions<
    IGettAllRolesResponse,
    any,
    IGettAllRolesResponse,
    any
  >
) {
  return useQuery<IGettAllRolesResponse, any, IGettAllRolesResponse, any>(
    roleKeys.roles(),
    getAllRoles,
    {
      useErrorBoundary: true,
      ...options,
    }
  );
}
