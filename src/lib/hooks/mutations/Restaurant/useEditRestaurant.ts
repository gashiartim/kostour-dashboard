import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  IUpdateRestaurantRequest,
  updateRestaurant,
} from "../../../../api/Restaurant";

import restaurantKeys from "../../keys/restaurantKeys";

export default function useEditRestaurant(
  options?: UseMutationOptions<IUpdateRestaurantRequest, any, any, unknown>
) {
  const clientQuery = useQueryClient();
  return useMutation<any, any, any, any>(updateRestaurant, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(restaurantKeys.restaurants());
      toast.success("Restaurant edited successfully");
    },
    onError: (err) => {
      toast.error(
        err.response.data.error ||
          "Couldn't edit restaurant, something wrong happened"
      );
    },
    ...options,
  });
}
