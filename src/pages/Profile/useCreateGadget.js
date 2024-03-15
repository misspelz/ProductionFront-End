import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGadget as createGadgetAPI } from "../../services/profile_business_API";
import toast from "react-hot-toast";
import { useModal } from "Hooks/useModal";

export const useCreateGadget = () => {
  const { setModal } = useModal();
  const queryClient = useQueryClient();

  const { status: gadgetStatus, mutate: createGadget } = useMutation({
    mutationFn: createGadgetAPI,

    onSuccess: (data) => {
      if (data.status) {
        setModal({});

        queryClient.invalidateQueries({
          queryKey: ["gadgets"],
        });

        toast.success("Gadget updated successfully");
      }
    },
  });

  return { gadgetStatus, createGadget };
};
