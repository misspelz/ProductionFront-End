import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "services/profile_business_API";

export const useProfileDetails = () => {
  const {
    status: profileStatus,
    data: profile,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileData,
  });

  return { profileStatus, profile, error };
};
