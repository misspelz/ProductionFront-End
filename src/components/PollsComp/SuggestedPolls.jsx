import { SuggestedPollsApi } from "api/services/auth&poll";
import Spin from "components/Spin/Spin";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Polls } from "./Polls";

export const SuggestedPolls = ({ HandlePoll }) => {
  const [loading, setLoading] = useState(true);
  const [suggestedPolls, setSuggestedPolls] = useState([]);

  const GetSuggestedPolls = async () => {
    try {
      const resp = await SuggestedPollsApi();

      if (resp.data.status) {
        setSuggestedPolls(resp?.data?.data);
      }
    } catch (error) {
      console.log("SuggestedPollserror", error);
      toast.error(error.response.data.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetSuggestedPolls();
  }, []);

  if (loading) {
    return <Spin />;
  }

  const filteredSuggestedPolls =
    suggestedPolls &&
    suggestedPolls.filter(
      (poll) => poll?.options?.length > 1 && !poll.is_closed
    );

  if (!filteredSuggestedPolls || filteredSuggestedPolls.length === 0) {
    return <p className="mt-5">No polls to display</p>;
  }

  return (
    <div className="flex gap-6 overflow-auto">
      {filteredSuggestedPolls.slice(0, 4).map((poll, index) => (
        <Polls
          key={index}
          onClick={() => HandlePoll(poll)}
          authorName={poll.creator.username}
          createdAt={poll.created_at}
          question={poll.question}
          options={poll?.options?.length > 1 && poll?.options}
          daysRemaining={poll.close_time}
          isClosed={poll.is_closed}
          backgroundImageUrl={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        />
      ))}
    </div>
  );
};
