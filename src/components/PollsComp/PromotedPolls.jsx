import { PromotedPollsApi } from "api/services/auth&poll";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatDate } from "utils/helper";
import { Polls } from "./Polls";
import Spin from "components/Spin/Spin";

export const PromotedPolls = ({ HandlePoll }) => {
  const [loading, setLoading] = useState(true);

  const [PromotedPolls, setPromotedPolls] = useState([]);

  const GetPromotedPolls = async (e) => {
    try {
      const resp = await PromotedPollsApi();

      if (resp.data.status) {
        setPromotedPolls(resp?.data?.data);
      }
      setLoading(false);
    } catch (error) {
      console.log("PromotedPollserror", error);

      toast.error(error.response.data.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    GetPromotedPolls();
  }, []);

  if (loading) {
    return <Spin />;
  }

  if (!PromotedPolls || PromotedPolls.length === 0) {
    return <p className="mt-5">No polls to display</p>;
  }

  const filteredPromotedPolls =
    PromotedPolls && PromotedPolls.filter((poll) => poll?.options?.length > 1);

  return (
    <>
      <div className="flex w-full gap-6  overflow-auto">
        {filteredPromotedPolls.slice(0, 4).map((poll, index) => (
          <Polls
            key={index}
            onClick={() => HandlePoll(poll)}
            authorName={"authorName"}
            createdAt={"createdAt"}
            question={poll.question}
            options={poll?.options?.length > 1 && poll?.options}
            daysRemaining={formatDate(poll.close_time)}
            totalVotes={"totalVotes"}
            backgroundImageUrl={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
          />
        ))}
      </div>
    </>
  );
};
