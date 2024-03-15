import { useQuery } from "@tanstack/react-query";
import { getRewardsById } from "services/profile_business_API";

export const useReward = () => {
  const { status: rewardStatus, data: getReward } = useQuery({
    queryKey: ["reward"],
    queryFn: getRewardsById,
  });

  return { rewardStatus, getReward };
};
