import { useQuery } from "@tanstack/react-query";
import { stickerSingleUser } from "services/profile_business_API";

export const useStickerUser = (userId) => {
  const {
    status: stickerStatus,
    data: stickerData,
    error,
    refetch,
  } = useQuery({
    queryKey: ["stickers", userId],
    queryFn: async () => await stickerSingleUser(userId),
    enabled: false,
  });

  return { error, stickerStatus, stickerData, refetch };
};
