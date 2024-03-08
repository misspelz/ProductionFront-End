import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "services/profileRequest";

export const useEditProfile = () => {
  const { status: updateStatus, mutate: updating } = useMutation({
    mutationFn: updateProfile,

    onSuccess: (response) => {
      console.log(response);
    },
  });

  return { updateStatus, updating };
};
