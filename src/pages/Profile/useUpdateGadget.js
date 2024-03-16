import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateGadget as updateGadgeAPI } from "services/profile_business_API";
import { useModal } from "Hooks/useModal";

export const useUpdateGadget = () => {
  const { setModal } = useModal();
  const queryClient = useQueryClient();

  const { gadgetStatus, updateGadget } = useMutation({
    mutationFn: updateGadgeAPI,

    onSuccess: (response) => {
      if (response.status) {
        setModal({});

        queryClient.invalidateQueries({
          queryKey: ["gadgets"],
        });

        toast.success("Gadget updated successfully");
      }
    },
  });

  return { gadgetStatus, updateGadget };
};
