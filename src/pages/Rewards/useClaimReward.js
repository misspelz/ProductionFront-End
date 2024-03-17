import { useQuery } from "@tanstack/react-query";
import { claimReward as claimRewardAPI } from "services/profile_business_API";

export const useClaimReward = () => {
  const { status: claming, data: claimReward } = useQuery({
    queryKey: ["claim_reward"],
    queryFn: claimRewardAPI,
  });

  return { claming, claimReward };
};
