import { useQuery } from "@tanstack/react-query";
import { getGadgets } from "services/profile_business_API";

export const useGadgets = () => {
  const { status: gadgetStatus, data: gadgets } = useQuery({
    queryKey: ["gadgets"],
    queryFn: getGadgets,
  });

  return { gadgetStatus, gadgets };
};
