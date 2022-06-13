import { useQuery, UseQueryOptions } from "react-query";
import {
  getAllLocations,
  IGetAllLocationsResponse,
} from "../../../../api/Locations";
import locationKeys from "../../keys/locationKeys";

export default function useLocations(
  options?: UseQueryOptions<
    IGetAllLocationsResponse,
    any,
    IGetAllLocationsResponse,
    any
  >
) {
  return useQuery<IGetAllLocationsResponse, any, IGetAllLocationsResponse, any>(
    locationKeys.locations(),
    getAllLocations,
    { useErrorBoundary: true, ...options }
  );
}
