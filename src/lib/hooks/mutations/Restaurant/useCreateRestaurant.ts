import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createRestaurant,
  IRestaurant,
  IUpdateRestaurantRequest,
} from "../../../../api/Restaurant";
import restaurantKeys from "../../keys/restaurantKeys";

export default function useCreateRestaurant(
  options?: UseMutationOptions<
    IRestaurant,
    any,
    Omit<IUpdateRestaurantRequest, "id">,
    unknown
  >
) {
  const clientQuery = useQueryClient();
  const navigate = useNavigate();

  return useMutation(createRestaurant, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(restaurantKeys.restaurants());
      toast.success("Restaurant created successfully");
      navigate(-1);
    },
    onError: (err) => {
      toast.error(
        err.response.data.error ||
          "Couldn't create restaurant, something wrong happened"
      );
    },
    ...options,
  });
}
