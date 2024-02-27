import React, { useEffect, useState } from "react";
import { Polls } from "./Polls";
import { MyPollsApi } from "api/services/auth&poll";
import toast from "react-hot-toast";
import optionss from "utils/options.json";

export const PromotedPolls = ({ HandlePoll }) => {
  const [polls, setPolls] = useState([]);
  // console.log("polls", polls);
  // const [loading, setLoading] = useState(true);

  const handleMyPolls = async (e) => {
    // try {
    //   const response = await MyPollsApi();
    //   // console.log("pollsresponse", response);
    //   // console.log("pollsdata", response?.data);
    //   setPolls(response?.data);
    //   setLoading(false);
    // } catch (error) {
    //   toast.error(error);
    // }
  };

  // useEffect(() => {
  //   handleMyPolls();
  // }, []);

  // if (loading) {
  //   return <p className="mt-5">Please wait...</p>;
  // }

  // const isPromoted = polls.filter((poll) => poll.is_promoted);

  return (
    <>
      <div className="flex w-full gap-6  overflow-auto">
        {/* {isPromoted.length > 0 ? ( */}
        {/* // isPromoted.map((poll, index) => ( */}
        <Polls
          // key={index}
          // onClick={()=>HandlePoll(poll)}
          authorName={"authorName"}
          createdAt={"createdAt"}
          question={"question"}
          options={optionss}
          daysRemaining={"daysRemaining"}
          totalVotes={"totalVotes"}
          backgroundImageUrl={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        />
        <Polls
          // key={index}
          // onClick={()=>HandlePoll(poll)}
          authorName={"authorName"}
          createdAt={"createdAt"}
          question={"question"}
          options={optionss}
          daysRemaining={"daysRemaining"}
          totalVotes={"totalVotes"}
          backgroundImageUrl={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        />
        <Polls
          // key={index}
          // onClick={()=>HandlePoll(poll)}
          authorName={"authorName"}
          createdAt={"createdAt"}
          question={"question"}
          options={optionss}
          daysRemaining={"daysRemaining"}
          totalVotes={"totalVotes"}
          backgroundImageUrl={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        />
        {/* )) */}
        {/* ) : ( */}
        {/* <p className="mt-10 text-center w-full">No polls to display</p> */}
        {/* )} */}
      </div>
    </>
  );
};
