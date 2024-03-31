import { useQuery } from "@tanstack/react-query";
import { getRewardsById } from "services/profile_business_API";

export const useReward = (rewardId) => {
  const {
    status: rewardStatus,
    data: getReward,
    refetch,
  } = useQuery({
    queryKey: ["reward", rewardId],
    queryFn: async () => await getRewardsById(rewardId),
    enabled: false,
  });

  return { rewardStatus, getReward, refetch };
};
