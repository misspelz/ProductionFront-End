import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGadget as updateGadgeAPI } from "services/profile_business_API";

export const useUpdateGadget = () => {
  const queryClient = useQueryClient();

  const { gadgetStatus, updateGadget } = useMutation({
    mutationFn: updateGadgeAPI,

    onSuccess: (response) => {
      if (response.status) {
        console.log(response);

        queryClient.invalidateQueries({
          queryKey: ["gadgets"],
        });
      }
    },
  });

  return { gadgetStatus, updateGadget };
};
