import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModal } from "Hooks/useModal";
import toast from "react-hot-toast";
import { updateProfile } from "services/profile_business_API";

export const useEditProfile = () => {
  const queryClient = useQueryClient();
  const { setModal } = useModal();

  const { status: updateStatus, mutate: updating } = useMutation({
    mutationFn: updateProfile,

    onSuccess: (response) => {
      if (response.status) {
        queryClient.invalidateQueries({
          queryKey: ["profile"],
        });

        toast.success("Profile updated successfully! 🤝");

        setModal({});
      }
    },
  });

  return { updateStatus, updating };
};
