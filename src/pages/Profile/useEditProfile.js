import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "services/profile_business_API";

export const useEditProfile = () => {
  const { status: updateStatus, mutate: updating } = useMutation({
    mutationFn: updateProfile,

    onSuccess: (response) => {
      console.log(response);
    },
  });

  return { updateStatus, updating };
};
