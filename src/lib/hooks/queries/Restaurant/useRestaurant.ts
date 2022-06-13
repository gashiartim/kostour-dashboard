import { useQuery, UseQueryOptions } from "react-query";
import { getRestaurant, IRestaurant } from "../../../../api/Restaurant";
import restaurantKeys from "../../keys/restaurantKeys";

export default function useRestaurant(
  id: string,
  options?: UseQueryOptions<IRestaurant, any, IRestaurant, any>
) {
  return useQuery<IRestaurant, any, IRestaurant, any>(
    restaurantKeys.restaurant(id),
    () => getRestaurant(id),
    {
      useErrorBoundary: true,
      ...options,
    }
  );
}
