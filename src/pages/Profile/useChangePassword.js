import { useMutation } from "@tanstack/react-query";
import { changePassword } from "services/profile_business_API";

export const useChangePassword = () => {
  const { status: changingStatus, mutate: updatingPassword } = useMutation({
    mutationFn: changePassword,
  });

  return { changingStatus, updatingPassword };
};
