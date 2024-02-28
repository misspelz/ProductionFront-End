import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import MainLayout from "Layout/MainLayout";
import { Polls } from "components/PollsComp/Polls";
import { PollsNotification } from "components/PollsComp/RightComp";
import { FindPolls } from "components/PollsComp/FindPolls";
import CreatePoll from "components/Modals/Vote/CreatePoll/CreatePoll";
import { Dialog } from "@mui/material";
import { MyPollsCategories } from "components/PollsComp/MyPollsCategories";
import ClosePoll from "components/Modals/Vote/ClosePoll";
import PollResult from "components/Modals/Vote/PollResult";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { PollsApi } from "api/services/auth&poll";
import Spin from "components/Spin/Spin";
import { ModalContext } from "Context/ModalContext";
import { formatDate } from "utils/helper";

const MyPolls = () => {
  const { singlePoll, setSinglePoll } = useContext(ModalContext);

  const goBack = () => nav("/Voting");
  const [polls, setPolls] = useState([]);
  const [Notify, setNotify] = useState(false);
  const [viewType, setViewType] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [viewResults, setViewResults] = useState(false);

  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [CastVote, setCastVote] = useState(false);
  const [showMyPolls, setShowMyPolls] = useState(false);
  const [PaidPoll, setPaidPoll] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [showPaidVotes, setShowPaidVotes] = useState(false);

  const handleMyPolls = async (e) => {
    try {
      const resp = await PollsApi();
      console.log("pollsres", resp);
      if (resp.data.status) {
        setPolls(resp?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandlePoll = (pollData) => {
    setSelectedPoll(pollData);
    setShowPaidVotes(false);
  };

  const handleShowcloseModal = () => {
    setShowCloseModal((prev) => !prev);
  };

  const handleViewResults = () => {
    setViewResults((prev) => !prev);
  };

  const [showAction, setShowAction] = useState(false);
  const HandleActions = () => {
    setShowAction((prev) => !prev);
  };

  const handleShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const HandleEdit = (poll) => {
    setSinglePoll(poll);
    setShowCreateModal(true);
    setShowAction((prev) => !prev);
  };

  const HandleDelete = (poll) => {
    alert("Are you sure you want to delete this poll?");
    setSinglePoll(poll);
    setShowAction((prev) => !prev);
  };

  const renderPolls = () => {
    switch (viewType) {
      case "active":
        if (polls?.length === 0) {
          return <Spin />;
        } else {
          const isActive = polls
            .filter(
              (poll) => poll.is_closed === false && poll?.options?.length > 1
            )
            .reverse();
          return isActive?.length > 0 ? (
            isActive?.map((poll, index) => (
              <Polls
                key={index}
                authorName={"authorName"}
                createdAt={"createdAt"}
                question={poll.question}
                options={poll?.options?.length > 1 && poll?.options}
                daysRemaining={formatDate(poll.close_time)}
                totalVotes={"totalVotes"}
                backgroundImageUrl={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                myPolls={true}
                onClose={handleShowcloseModal}
                onView={handleViewResults}
                HandleDelete={() => HandleDelete(poll)}
                HandleEdit={() => HandleEdit(poll)}
                HandleActions={HandleActions}
                showAction={showAction}
                className="border p-3 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
              />
            ))
          ) : (
            <p className="mt-20">No polls to display</p>
          );
        }
      case "ended":
        if (polls?.length === 0) {
          return <Spin />;
        } else {
          const isClosed = polls
            .filter((poll) => poll.is_closed && poll?.options?.length > 1)
            .reverse();
          return isClosed?.length > 0 ? (
            isClosed?.map((poll, index) => (
              <Polls
                key={index}
                authorName={"authorName"}
                createdAt={"createdAt"}
                question={poll.question}
                options={poll?.options?.length > 1 && poll?.options}
                daysRemaining={formatDate(poll.close_time)}
                totalVotes={"totalVotes"}
                backgroundImageUrl={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                myPolls={true}
                onClose={handleShowcloseModal}
                onView={handleViewResults}
                HandleDelete={() => HandleDelete(poll)}
                HandleEdit={() => HandleEdit(poll)}
                HandleActions={HandleActions}
                showAction={showAction}
                className="border p-3 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
              />
            ))
          ) : (
            <p className="mt-20">No polls to display</p>
          );
        }
      case "all":
      default:
        if (polls.length === 0) {
          return <Spin />;
        } else {
          const allPolls = polls.filter((poll) => poll?.options?.length > 1);
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
                  totalVotes={"totalVotes"}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={handleShowcloseModal}
                  onView={handleViewResults}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  HandleActions={HandleActions}
                  showAction={showAction}
                  className="border p-3 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                />
              ))
          ) : (
            <p className="mt-20">No polls to display</p>
          );
        }
    }
  };

  const onSearch = () => {};
  const onFilterClick = () => {};

  useEffect(() => {
    handleMyPolls();
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
              <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />
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
              />
            </Dialog>
            <Dialog open={showCloseModal} onClose={handleShowcloseModal}>
              <ClosePoll closeModal={handleShowcloseModal} />
            </Dialog>
            <Dialog open={viewResults} onClose={handleViewResults} fullWidth>
              <PollResult closeModal={handleViewResults} />
            </Dialog>
          </div>
        )}

        {/* MOBILE */}
        {CastVote && (
          <div className="px-4 lg:hidden pb-[40px]">
            <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />

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
            <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />

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
