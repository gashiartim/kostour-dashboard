import { useQuery, UseQueryOptions } from "react-query";
import { getAllUsers, IGetAllUsersResponse } from "../../../../api/User";
import userKeys from "../../keys/userKeys";

export default function useUsers(
  options?: UseQueryOptions<
    IGetAllUsersResponse,
    any,
    IGetAllUsersResponse,
    any
  >
) {
  return useQuery<IGetAllUsersResponse, any, IGetAllUsersResponse, any>(
    userKeys.users(),
    getAllUsers,
    {
      useErrorBoundary: true,
      ...options,
    }
  );
}
