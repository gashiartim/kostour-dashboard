import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteLocation } from "../../../../api/Locations";
import locationKeys from "../../keys/locationKeys";

export default function useDeleteLocation(
  options?: UseMutationOptions<any, any, string, unknown>
) {
  const clientQuery = useQueryClient();
  return useMutation(deleteLocation, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(locationKeys.locations());
      toast.success("Location deleted successfully");
    },
    onError: (err) => {
      toast.error(
        err.response?.data?.error ||
          "Couldn't delete location, something wrong happened"
      );
    },

    ...options,
  });
}
