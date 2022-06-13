import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteRestaurant } from "../../../../api/Restaurant";
import restaurantKeys from "../../keys/restaurantKeys";

export default function useDeleteRestaurant(
  options?: UseMutationOptions<any, any, any, unknown>
) {
  const clientQuery = useQueryClient();
  return useMutation(deleteRestaurant, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(restaurantKeys.restaurants());
      toast.success("Restaurant deleted successfully");
    },
    onError: (err) => {
      toast.error(
        err.response.data.error ||
          "Couldn't delete restaurant, something wrong happened"
      );
    },

    ...options,
  });
}
