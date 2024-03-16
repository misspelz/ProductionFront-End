import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGadget as deleteGadgeAPI } from "services/profile_business_API";

export const useDeletePhone = () => {
  const queryClient = useQueryClient();

  const {
    gadgetStatus,
    deleteGadget,
    error: deleteGadgetError,
  } = useMutation({
    mutationFn: deleteGadgeAPI,

    onSuccess: (response) => {
      if (response.status) {
        console.log(response);

        queryClient.invalidateQueries({
          queryKey: ["gadgets"],
        });
      }
    },
  });

  return { gadgetStatus, deleteGadget, deleteGadgetError };
};
