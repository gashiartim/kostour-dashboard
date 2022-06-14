import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ILocation,
  IUpdateLocationRequest,
  updateLocation,
} from "../../../../api/Locations";
import locationKeys from "../../keys/locationKeys";

export default function useEditLocation(
  options?: UseMutationOptions<ILocation, any, IUpdateLocationRequest, any>
) {
  const clientQuery = useQueryClient();
  const navigate = useNavigate();

  return useMutation(updateLocation, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(locationKeys.locations());
      toast.success("Location edited successfully");
      navigate(-1);
    },
    onError: (err: any) => {
      toast.error(
        err.response?.data?.error ||
          "Couldn't edit location, something wrong happened"
      );
    },
    ...options,
  });
}
