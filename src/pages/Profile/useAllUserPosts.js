import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getUserPosts } from "services/profile_business_API";

export const useAllUserPosts = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const currentTab = tab ? tab : "all";

  const { status: userPostsStatus, data: userPosts } = useQuery({
    queryKey: [`profile ${currentTab}`],
    queryFn: async () => await getUserPosts(currentTab),
  });

  return { userPostsStatus, userPosts, tab };
};
