import { Dialog } from "@mui/material";
import { ModalContext } from "Context/ModalContext";
import MainLayout from "Layout/MainLayout";
import { getLoginToken } from "api/services/auth&poll";
import axios from "axios";
import ClosePoll from "components/Modals/Vote/ClosePoll";
import CreatePoll from "components/Modals/Vote/CreatePoll/CreatePoll";
import PollResult from "components/Modals/Vote/PollResult";
import { FindPolls } from "components/PollsComp/FindPolls";
import { MyPollsCategories } from "components/PollsComp/MyPollsCategories";
import { Polls } from "components/PollsComp/Polls";
import { PollsNotification } from "components/PollsComp/RightComp";
import Spin from "components/Spin/Spin";
import { useContext, useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { formatDate } from "utils/helper";
import { url } from "utils/index";
import "./styles.css";
import DeletePoll from "components/Modals/Vote/DeletePoll";
import toast from "react-hot-toast";

const MyPolls = () => {
  const {
    singlePoll,
    setSinglePoll,
    polls,
    setPolls,
    activePolls,
    setActivePolls,
    endedPolls,
    setEndedPolls,
    handleMyPolls,
    handleActivePolls,
    handleEndedPolls,
    setShowAction,
  } = useContext(ModalContext);

  const goBack = () => nav("/Voting");

  const [Notify, setNotify] = useState(false);
  const [viewType, setViewType] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [singleClosePoll, setSingleClosePoll] = useState(false);
  const [singleDeletePoll, setSingleDeletePoll] = useState(false);
  const [viewResults, setViewResults] = useState(false);

  const nav = useNavigate();

  const [loading, setLoading] = useState(true);
  const [CastVote, setCastVote] = useState(false);
  const [showMyPolls, setShowMyPolls] = useState(false);
  const [PaidPoll, setPaidPoll] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [showPaidVotes, setShowPaidVotes] = useState(false);

  const HandlePoll = (pollData) => {
    setSelectedPoll(pollData);
    setShowPaidVotes(false);
  };

  const handleShowcloseModal = (poll) => {
    setSingleClosePoll(poll);
    setShowCloseModal((prev) => !prev);
  };

  const handleShowDeleteModal = (poll) => {
    setSingleDeletePoll(poll);
    setShowDeleteModal((prev) => !prev);
    setShowAction(false);
  };

  const HandleDelete = (poll) => {
    setSingleDeletePoll(poll);
    setShowDeleteModal((prev) => !prev);
  };

  const handleViewResults = () => {
    setViewResults((prev) => !prev);
  };

  const handleShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const HandleEdit = (poll) => {
    setSinglePoll(poll);
    setShowCreateModal(true);
  };

  const renderPolls = () => {
    switch (viewType) {
      case "active":
        if (activePolls && activePolls?.length === 0) {
          return <p className="mt-20">No polls to display</p>;
        } else {
          const filteredActivePolls =
            activePolls &&
            activePolls.filter((poll) => poll?.options?.length > 1);
          return (
            filteredActivePolls &&
            filteredActivePolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  authorName={"authorName"}
                  createdAt={"createdAt"}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={formatDate(poll.close_time)}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={handleViewResults}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                />
              ))
          );
        }
      case "ended":
        if (endedPolls && endedPolls?.length === 0) {
          return <p className="mt-20">No polls to display</p>;
        } else {
          const filteredEndedPolls =
            endedPolls &&
            endedPolls.filter((poll) => poll?.options?.length > 1);
          return (
            filteredEndedPolls &&
            filteredEndedPolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  authorName={"authorName"}
                  createdAt={"createdAt"}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={formatDate(poll.close_time)}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={handleViewResults}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                />
              ))
          );
        }
      case "all":
      default:
        if (polls && polls.length === 0) {
          return <Spin />;
        } else {
          const allPolls =
            polls && polls.filter((poll) => poll?.options?.length > 1);
          return allPolls.length > 0 ? (
            allPolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  onClick={() => HandlePoll(poll)}
                  authorName={"authorName"}
                  createdAt={"createdAt"}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={formatDate(poll.close_time)}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={handleViewResults}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                />
              ))
          ) : (
            <p className="mt-20">No polls to display</p>
          );
        }
    }
  };

  const [searchText, setSearchText] = useState("");

  const onSearch = (text) => {
    setSearchText(text);
    onFetchPolls(text);
  };

  const onFetchPolls = async (text) => {
    try {
      let res;

      if (text === "") {
        res = await axios.get(`${url}/api/polls/find/`, {
          headers: {
            Authorization: `Token ${getLoginToken()}`,
          },
        });
      } else {
        res = await axios.get(`${url}/api/polls/find/`, {
          params: { find: text },
          headers: {
            Authorization: `Token ${getLoginToken()}`,
          },
        });
      }
      
      setPolls(res?.data?.data);
      setActivePolls(res?.data?.data);
      setEndedPolls(res?.data?.data);
    } catch (error) {
      console.log("findpolls", error);
      toast.error(error.response.data.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    if (searchText !== "") {
      onFetchPolls(searchText);
    }
  }, [searchText]);

  useEffect(() => {
    handleMyPolls();
    handleActivePolls();
    handleEndedPolls();
  }, []);

  return (
    <MainLayout>
      <div className=" lg:bg-[#f5f5f5] lg:flex w-full pt-36  lg:px-10 lg:gap-6 ">
        {!Notify && !CastVote && !showMyPolls && (
          <div className=" lg:w-[60%] overflow-x-hidden bg-[#fff] py-10 px-6 pb-[40px] lg:pt-5 flex flex-col">
            <div className="flex gap-3 items-center">
              <FaArrowLeftLong
                size={20}
                onClick={goBack}
                className="cursor-pointer text-lg"
              />
              <h1>My Polls</h1>
            </div>

            <div className="hidden lg:block">
              <FindPolls onSearch={onSearch} onFetchPolls={onFetchPolls} />
            </div>

            <img
              src="images/fifa.png"
              alt="fifa"
              className="mt-6 w-full lg:mt-10"
            />

            <div className="pb-[40px] ">
              <MyPollsCategories
                viewType={viewType}
                setViewType={setViewType}
              />
              {renderPolls()}
            </div>
            <Dialog
              open={showCreateModal}
              onClose={() => setShowCreateModal((prev) => !prev)}
              fullWidth
            >
              <CreatePoll
                onClose={setShowCreateModal}
                fetchPolls={handleMyPolls}
                selectedPoll={selectedPoll}
              />
            </Dialog>
            <Dialog open={showCloseModal} onClose={handleShowcloseModal}>
              <ClosePoll
                closeModal={handleShowcloseModal}
                singlePoll={singlePoll}
                singleClosePoll={singleClosePoll}
              />
            </Dialog>
            <Dialog open={showDeleteModal} onClose={handleShowDeleteModal}>
              <DeletePoll
                closeModal={handleShowDeleteModal}
                singlePoll={singlePoll}
                singleDeletePoll={singleDeletePoll}
              />
            </Dialog>
            <Dialog open={viewResults} onClose={handleViewResults} fullWidth>
              <PollResult closeModal={handleViewResults} />
            </Dialog>
          </div>
        )}

        {/* MOBILE */}
        {CastVote && (
          <div className="px-4 lg:hidden pb-[40px]">
            <FindPolls onSearch={onSearch} onFetchPolls={onFetchPolls} />

            <img
              src="images/fifa.png"
              alt="fifa"
              className="mt-6 w-full lg:mt-10"
            />
            <MyPollsCategories viewType={viewType} setViewType={setViewType} />
            {renderPolls()}
          </div>
        )}

        {showMyPolls && (
          <div className="px-4 lg:hidden pb-[40px]">
            <FindPolls onSearch={onSearch} onFetchPolls={onFetchPolls} />

            <img
              src="images/fifa.png"
              alt="fifa"
              className="mt-6 w-full lg:mt-10"
            />
            <MyPollsCategories viewType={viewType} setViewType={setViewType} />
            {renderPolls()}
          </div>
        )}

        {/* WEB */}
        <div className="lg:w-[30%]  bg-[#fff] hidden lg:block fixed top-[90px] right-10">
          <PollsNotification
            setNotify={setNotify}
            onShowCreateModal={handleShowCreateModal}
            singlePoll={singlePoll}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default MyPolls;
