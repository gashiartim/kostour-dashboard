import { useQuery, UseQueryOptions } from "react-query";
import { getAllUsers, getUser, IUser } from "../../../../api/User";
import userKeys from "../../keys/userKeys";

export default function useUser(
  id: string,
  options?: UseQueryOptions<IUser, any, IUser, any>
) {
  return useQuery<IUser, any, IUser, any>(
    userKeys.user(id),
    () => getUser(id),
    {
      useErrorBoundary: true,
      ...options,
    }
  );
}
