import { useQuery } from "@tanstack/react-query";
import { getAccountData } from "services/profile_business_API";

export const useAccountProfile = () => {
  const {
    status: accountStatus,
    data: accountProfile,
    error,
  } = useQuery({
    queryKey: ["account"],
    queryFn: getAccountData,
  });

  return { accountStatus, accountProfile, error };
};
