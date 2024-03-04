import { Dialog } from "@mui/material";
import { ModalContext } from "Context/ModalContext";
import MainLayout from "Layout/MainLayout";
import {
  ActivePollsApi,
  EndedPollsApi,
  MyPollsApi,
  getLoginToken,
} from "api/services/auth&poll";
import axios from "axios";
import ClosePoll from "components/Modals/Vote/ClosePoll";
import CreatePoll from "components/Modals/Vote/CreatePoll/CreatePoll";
import PollResult from "components/Modals/Vote/PollResult";
import { FindPolls } from "components/PollsComp/FindPolls";
import { MyPollsCategories } from "components/PollsComp/MyPollsCategories";
import { Polls } from "components/PollsComp/Polls";
import { PollsNotification } from "components/PollsComp/RightComp";
import Spin from "components/Spin/Spin";
import { useCallback, useContext, useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { formatDate } from "utils/helper";
import { url } from "utils/index";
import "./styles.css";
import DeletePoll from "components/Modals/Vote/DeletePoll";
import toast from "react-hot-toast";
import AD1 from "assets/images/AD1.png";
import AD2 from "assets/images/AD2.png";
import AD3 from "assets/images/AD3.png";
import AD4 from "assets/images/AD3.png";

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
    loading,
  } = useContext(ModalContext);

  const goBack = () => nav("/Voting");

  const [Notify, setNotify] = useState(false);
  const [viewType, setViewType] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [singleClosePoll, setSingleClosePoll] = useState(false);
  const [singleDeletePoll, setSingleDeletePoll] = useState(false);
  const [singlePollResult, setSinglePollResult] = useState(false);
  const [viewResults, setViewResults] = useState(false);

  const nav = useNavigate();

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

  const handleViewResults = (poll) => {
    setSinglePollResult(poll);
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
        const filteredActivePolls =
          activePolls &&
          activePolls.filter((poll) => poll?.options?.length > 1);
        if (loading) {
          return <Spin />;
        } else if (filteredActivePolls.length === 0) {
          return <p className="mt-20">No polls to display</p>;
        } else {
          return (
            filteredActivePolls &&
            filteredActivePolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  authorName={poll.creator.username}
                  createdAt={formatDate(poll.created_at)}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={formatDate(poll.close_time)}
                  isClosed={poll.is_closed}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={() => handleViewResults(poll)}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                />
              ))
          );
        }
      case "ended":
        const filteredEndedPolls =
          endedPolls && endedPolls.filter((poll) => poll?.options?.length > 1);
        if (loading) {
          return <Spin />;
        } else if (filteredEndedPolls.length === 0) {
          return <p className="mt-20">No polls to display</p>;
        } else {
          return (
            filteredEndedPolls &&
            filteredEndedPolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  authorName={poll.creator.username}
                  createdAt={formatDate(poll.created_at)}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={formatDate(poll.close_time)}
                  isClosed={poll.is_closed}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={() => handleViewResults(poll)}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                />
              ))
          );
        }
      case "all":
      default:
        const allPolls =
          polls && polls.filter((poll) => poll?.options?.length > 1);
        if (loading) {
          return <Spin />;
        } else if (allPolls.length === 0) {
          return <p className="mt-20">No polls to display</p>;
        } else {
          return (
            allPolls.length > 0 &&
            allPolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  onClick={() => HandlePoll(poll)}
                  authorName={poll.creator.username}
                  createdAt={formatDate(poll.created_at)}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={formatDate(poll.close_time)}
                  isClosed={poll.is_closed}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={() => handleViewResults(poll)}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                />
              ))
          );
        }
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["images/fifa.png", AD1, AD2, AD3, AD4];

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    handleMyPolls();
    handleActivePolls();
    handleEndedPolls();
  }, []);

  const [searchText, setSearchText] = useState("");

  const onSearch = (text) => {
    setSearchText(text);
    onFetchPolls(text);
  };

  const onFetchPolls = useCallback(
    async (text) => {
      try {
        let res;

        // if (text === "") {
        //   await MyPollsApi();
        //   await ActivePollsApi();
        //   await EndedPollsApi();
        // } else {
        //   res = await axios.get(`${url}/api/polls/find/`, {
        //     params: { find: text },
        //     headers: {
        //       Authorization: `Token ${getLoginToken()}`,
        //     },
        //   });
        // }
        res = await axios.get(`${url}/api/polls/find/`, {
          params: { find: text },
          headers: {
            Authorization: `Token ${getLoginToken()}`,
          },
        });

        console.log("mypollsres", res);

        if (res?.data?.status) {
          setPolls(res?.data?.data);
          setActivePolls(res?.data?.data);
          setEndedPolls(res?.data?.data);
        }
      } catch (error) {
        console.log("findpolls", error);
        toast.error(error.response.data.message || "Something went wrong!");
      }
    },
    [setPolls, setActivePolls, setEndedPolls]
  );

  // useEffect(() => {
  //   if (searchText !== "") {
  //     onFetchPolls(searchText);
  //   } else {
  //     onFetchPolls();
  //   }
  // }, [searchText, onFetchPolls]);

  return (
    <MainLayout>
      <div className=" lg:bg-[#f5f5f5] lg:flex w-full pt-36  lg:px-10 lg:gap-6 ">
        {!Notify && !CastVote && !showMyPolls && (
          <div className=" lg:w-[60%] overflow-x-hidden bg-[#fff] py-10 px-6 pb-[40px] lg:pt-5 flex flex-col">
            <div className="flex gap-3 items-center">
              <FaArrowLeftLong
                size={20}
                onClick={goBack}
                className="cursor-pointer text-lg mb-[0.5rem]"
              />
              <h1>My Polls</h1>
            </div>

            <img
              src={images[currentIndex]}
              alt="slider-pics"
              className="mt-6 w-full lg:mt-10"
            />

            <FindPolls
              onSearch={onSearch}
              onFetchPolls={onFetchPolls}
              searchText={searchText}
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
              <PollResult
                closeModal={handleViewResults}
                singlePollResult={singlePollResult}
              />
            </Dialog>
          </div>
        )}

        {/* MOBILE */}
        {CastVote && (
          <div className="px-4 lg:hidden pb-[40px]">
            <FindPolls onSearch={onSearch} onFetchPolls={onFetchPolls} />

            <img
              src={images[currentIndex]}
              alt="slider-pics"
              className="mt-6 w-full lg:mt-10"
            />
            {/* <FindPolls
              onSearch={onSearch}
              onFetchPolls={onFetchPolls}
              searchText={searchText}
            /> */}
            <MyPollsCategories viewType={viewType} setViewType={setViewType} />
            {renderPolls()}
          </div>
        )}

        {showMyPolls && (
          <div className="px-4 lg:hidden pb-[40px]">
            <FindPolls onSearch={onSearch} onFetchPolls={onFetchPolls} />

            <img
              src={images[currentIndex]}
              alt="slider-pics"
              className="mt-6 w-full lg:mt-10"
            />
            <FindPolls
              onSearch={onSearch}
              onFetchPolls={onFetchPolls}
              searchText={searchText}
            />
            <MyPollsCategories viewType={viewType} setViewType={setViewType} />
            {renderPolls()}
          </div>
        )}

        {/* WEB */}
        <div className="md:w-[30%]  bg-[#fff] hidden md:block fixed top-[90px] right-10 ">
          <PollsNotification
            setNotify={setNotify}
            showCreateModal={() => setShowCreateModal((prev) => !prev)}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default MyPolls;
