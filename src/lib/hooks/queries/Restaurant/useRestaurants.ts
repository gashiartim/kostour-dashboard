import { useQuery, UseQueryOptions } from "react-query";
import {
  getAllRestaurants,
  IGetAllRestaurantsResponse,
} from "../../../../api/Restaurant";
import restaurantKeys from "../../keys/restaurantKeys";

export default function useRestaurants(
  options?: UseQueryOptions<
    IGetAllRestaurantsResponse,
    any,
    IGetAllRestaurantsResponse,
    any
  >
) {
  return useQuery<
    IGetAllRestaurantsResponse,
    any,
    IGetAllRestaurantsResponse,
    any
  >(restaurantKeys.restaurants(), getAllRestaurants, {
    useErrorBoundary: true,
    ...options,
  });
}
