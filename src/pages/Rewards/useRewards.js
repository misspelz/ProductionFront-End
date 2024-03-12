import { useQuery } from "@tanstack/react-query";
import { getRewards } from "services/profile_business_API";

export const useRewards = () => {
  const { status, data: rewards } = useQuery({
    queryKey: ["rewards"],
    queryFn: getRewards,
  });

  return { status, rewards };
};
