import { useQuery, UseQueryOptions } from "react-query";
import { getLocation, ILocation } from "../../../../api/Locations";
import locationKeys from "../../keys/locationKeys";

export default function useLocation(
  id: string,
  options?: UseQueryOptions<ILocation, unknown>
) {
  return useQuery<ILocation, unknown>(
    locationKeys.location(id),
    () => getLocation(id),
    {
      useErrorBoundary: true,
      ...options,
    }
  );
}
