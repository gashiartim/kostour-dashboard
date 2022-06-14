import { useMutation, UseMutationOptions, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createLocation,
  ICreateLocationRequest,
  ILocation,
} from "../../../../api/Locations";
import locationKeys from "../../keys/locationKeys";

export default function useCreateLocation(
  options?: UseMutationOptions<ILocation, any, ICreateLocationRequest, any>
) {
  const clientQuery = useQueryClient();
  const navigate = useNavigate();

  return useMutation(createLocation, {
    onSuccess: async () => {
      clientQuery.invalidateQueries(locationKeys.locations());
      toast.success("Location created successfully");
      navigate(-1);
    },
    onError: (err: any) => {
      toast.error(
        err.response?.data?.error ||
          "Couldn't create location, something wrong happened"
      );
    },
    ...options,
  });
}
