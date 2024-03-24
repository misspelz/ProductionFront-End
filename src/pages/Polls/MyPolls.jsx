import { Dialog } from "@mui/material";
import { ModalContext } from "Context/ModalContext";
import {
  ClosePollApi,
  FindUserPollsApi,
  PromotePollApi,
} from "api/services/auth&poll";
import AD1 from "assets/images/AD1.png";
import AD2 from "assets/images/AD2.png";
import { default as AD3, default as AD4 } from "assets/images/AD3.png";
import promote from "assets/promote.png";
import ActionButton from "components/Commons/Button";
import Modal from "components/Modals/Modal";
import ClosePoll from "components/Modals/Vote/ClosePoll";
import CreatePoll from "components/Modals/Vote/CreatePoll/CreatePoll";
import DeletePoll from "components/Modals/Vote/DeletePoll";
import EditPoll from "components/Modals/Vote/EditPoll/EditPoll";
import PollResult from "components/Modals/Vote/PollResult";
import PricingComponent from "components/PollPomotion";
import { FindPolls } from "components/PollsComp/FindPolls";
import { MyPollsCategories } from "components/PollsComp/MyPollsCategories";
import { Polls } from "components/PollsComp/Polls";
import { PollsNotification } from "components/PollsComp/RightComp";
import Spin from "components/Spin/Spin";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./styles.css";

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
    isPageLoading,
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
  const [searchText, setSearchText] = useState("");
  const [findPolls, setFindPolls] = useState([]);

  const nav = useNavigate();

  const [CastVote, setCastVote] = useState(false);
  const [showMyPolls, setShowMyPolls] = useState(false);
  const [PaidPoll, setPaidPoll] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [showPaidVotes, setShowPaidVotes] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPromoteModal, setShowPromoteModal] = useState(false);
  const [PromoteSuccess, setPromoteSuccess] = useState(false);

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

  const HandleEdit = (poll) => {
    setSinglePoll(poll);
    setShowEditModal(true);
  };

  const handleShowCreateModal = () => {
    setSelectedPoll(null);
    setShowCreateModal(true);
  };

  const HandleClose = () => {
    setShowCreateModal(false);
    setShowAction(false);
  };

  const handleCloseEditModal = () => {
    setSinglePoll(null);
    setShowEditModal(false);
  };

  const HandlePromote = (poll) => {
    setSinglePoll(poll);
    setShowPromoteModal(true);
  };

  const HandlePromoteModal = () => {
    setShowPromoteModal(false);
    setShowAction(false);
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
          return <p className="mt-20 text-center">No polls to display</p>;
        } else {
          return (
            filteredActivePolls &&
            filteredActivePolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  authorName={poll.creator.username}
                  createdAt={poll.created_at}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={poll.close_time}
                  isClosed={poll.is_closed}
                  tag={poll.is_paid}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={() => handleViewResults(poll)}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  HandlePromote={() => HandlePromote(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                  id={poll.id}
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
          return <p className="mt-20 text-center">No polls to display</p>;
        } else {
          return (
            filteredEndedPolls &&
            filteredEndedPolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  authorName={poll.creator.username}
                  createdAt={poll.created_at}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={poll.close_time}
                  isClosed={poll.is_closed}
                  tag={poll.is_paid}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={() => handleViewResults(poll)}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  HandlePromote={() => HandlePromote(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                  id={poll.id}
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
          return <p className="mt-20 text-center">No polls to display</p>;
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
                  createdAt={poll.created_at}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={poll.close_time}
                  isClosed={poll.is_closed}
                  tag={poll.is_paid}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={() => handleViewResults(poll)}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  HandlePromote={() => HandlePromote(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                  id={poll.id}
                />
              ))
          );
        }
    }
  };

  const renderFindPolls = () => {
    switch (viewType) {
      case "active":
        const filteredActivePolls =
          findPolls && findPolls.filter((poll) => poll?.options?.length > 1);
        if (loading) {
          return <Spin />;
        } else if (filteredActivePolls.length === 0) {
          return (
            <p className="mt-20 text-center">No matching polls to display</p>
          );
        } else {
          return (
            filteredActivePolls &&
            filteredActivePolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  authorName={poll.creator.username}
                  createdAt={poll.created_at}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={poll.close_time}
                  isClosed={poll.is_closed}
                  tag={poll.is_paid}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={() => handleViewResults(poll)}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  HandlePromote={() => HandlePromote(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                  id={poll.id}
                />
              ))
          );
        }
      case "ended":
        const filteredEndedPolls =
          findPolls && findPolls.filter((poll) => poll?.options?.length > 1);
        if (loading) {
          return <Spin />;
        } else if (filteredEndedPolls.length === 0) {
          return (
            <p className="mt-20 text-center">No matching polls to display</p>
          );
        } else {
          return (
            filteredEndedPolls &&
            filteredEndedPolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  authorName={poll.creator.username}
                  createdAt={poll.created_at}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={poll.close_time}
                  isClosed={poll.is_closed}
                  tag={poll.is_paid}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={() => handleViewResults(poll)}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  HandlePromote={() => HandlePromote(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                  id={poll.id}
                />
              ))
          );
        }
      case "all":
      default:
        const allFindPolls =
          findPolls && findPolls.filter((poll) => poll?.options?.length > 1);
        if (loading) {
          return <Spin />;
        } else if (allFindPolls.length === 0) {
          return (
            <p className="mt-20 text-center">No matching polls to display</p>
          );
        } else {
          return (
            allFindPolls.length > 0 &&
            allFindPolls
              ?.reverse()
              .map((poll, index) => (
                <Polls
                  key={index}
                  onClick={() => HandlePoll(poll)}
                  authorName={poll.creator.username}
                  createdAt={poll.created_at}
                  question={poll.question}
                  options={poll?.options?.length > 1 && poll?.options}
                  daysRemaining={poll.close_time}
                  isClosed={poll.is_closed}
                  tag={poll.is_paid}
                  backgroundImageUrl={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  myPolls={true}
                  onClose={() => handleShowcloseModal(poll)}
                  onView={() => handleViewResults(poll)}
                  HandleDelete={() => HandleDelete(poll)}
                  HandleEdit={() => HandleEdit(poll)}
                  HandlePromote={() => HandlePromote(poll)}
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                  id={poll.id}
                />
              ))
          );
        }
    }
  };

  const isSearching = searchText.trim() !== "";

  const renderPollsOrFindPolls = () => {
    if (isSearching) {
      return renderFindPolls();
    } else {
      return renderPolls();
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPromoteLoading, setIsPromoteLoading] = useState(false);

  const images = ["images/fifa.png", AD1, AD2, AD3, AD4];

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onFetchPolls = async (text) => {
    try {
      const res = await FindUserPollsApi(text);
      console.log("finduserpollsres", res);

      if (res?.data?.status) {
        setFindPolls(res?.data?.data);
      }
    } catch (error) {
      console.log("finduserpollserror", error);
      toast.error(error.response.data.message || "Something went wrong!");
    }
  };

  const onSearch = (text) => {
    setSearchText(text);
  };

  const [selectedPrice, setSelectedPrice] = useState(null);

  const CheckOut = async () => {
    try {
      setIsPromoteLoading(true);
      const res = await PromotePollApi(selectedPrice, singlePoll.id);
      console.log("promote", res);

      if (res.data.data.paystack[1].status) {
        const resp = res.data.data.paystack[1].data.authorization_url;
        console.log("url", res);
        window.location.href = resp;
        setIsPromoteLoading(false);
      }
    } catch (error) {
      console.log("finduserpollserror", error);
      toast.error(error.response.data.message || "Something went wrong!");
    } finally {
      setIsPromoteLoading(false);
    }
  };

  const HandlePromotedPoll = () => {
    setPromoteSuccess(false);
    setShowPromoteModal(false);
    setShowAction(false);
  };

  const handleSelect = (priceInfo) => {
    setSelectedPrice(priceInfo);
  };

  useEffect(() => {
    handleMyPolls();
    handleActivePolls();
    handleEndedPolls();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const closeExpiredPolls = async () => {
      try {
        polls.forEach(async (poll) => {
          const closeTime = new Date(poll.close_time);
          const currentTime = new Date();

          if (currentTime >= closeTime) {
            await ClosePollApi(poll.id);
          }
        });
      } catch (error) {
        console.error("Error closing polls:", error);
        toast.error(error.message || "Error closing polls!");
      }
    };
    closeExpiredPolls();

    const intervalId = setInterval(closeExpiredPolls, 60000);
    return () => clearInterval(intervalId);
  }, []);

  if (isPageLoading) {
    return <Spin />;
  }

  return (
    <div className="lg:bg-[#f5f5f5] h-full overflow-scroll  lg:flex w-full  lg:px-10 lg:gap-6 relative">
      {!Notify && !CastVote && !showMyPolls && (
        <div className=" lg:w-[60%] overflow-x-hidden bg-[#fff] py-10 px-6 pb-[40px] lg:pt-5 flex flex-col">
          <div className="flex flex-col gap-3 ">
            <div className="flex gap-6 items-center">
              <FaArrowLeftLong
                size={20}
                onClick={goBack}
                className="cursor-pointer text-lg mb-[0.5rem]"
              />

              <h1>My Polls</h1>
            </div>

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
              {renderPollsOrFindPolls()}
            </div>

            <Dialog open={showCreateModal} onClose={HandleClose} fullWidth>
              <CreatePoll onClose={HandleClose} fetchPolls={handleMyPolls} />
            </Dialog>
            <Dialog open={showCloseModal} onClose={handleShowcloseModal}>
              <ClosePoll
                closeModal={handleShowcloseModal}
                singlePoll={singlePoll}
                singleClosePoll={singleClosePoll}
              />
            </Dialog>
            <Dialog
              open={showEditModal}
              onClose={handleCloseEditModal}
              fullWidth
            >
              <EditPoll
                fetchPolls={handleMyPolls}
                onClose={handleCloseEditModal}
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

          {/* MOBILE */}
          {CastVote && (
            <div className="px-4 lg:hidden pb-[40px]">
              {/* <FindPolls onSearch={onSearch} onFetchPolls={onFetchPolls} /> */}
              <img
                src={images[currentIndex]}
                alt="slider-pics"
                className="mt-6 w-full lg:mt-10"
              />
              <MyPollsCategories
                viewType={viewType}
                setViewType={setViewType}
              />
              {renderPollsOrFindPolls()}
            </div>
          )}

          {/* {showMyPolls && (
          <div className="px-4 lg:hidden pb-[40px]">
            // <FindPolls onSearch={onSearch} onFetchPolls={onFetchPolls} />

            <img
              src={images[currentIndex]}
              alt="slider-pics"
              className="mt-6 w-full lg:mt-10"
            />
            <FindPolls
              // onSearch={onSearch}
              onFetchPolls={onFetchPolls}
              // searchText={searchText}
            />
            <MyPollsCategories viewType={viewType} setViewType={setViewType} />
            {renderPolls()}
          </div>
        )} */}

          {/* WEB */}
          <div className="md:w-[30%]  bg-[#fff] hidden md:block fixed top-[101px] right-10 ">
            <PollsNotification
              setNotify={setNotify}
              handleShowCreateModal={handleShowCreateModal}
            />
          </div>
        </div>
      )}

      {showMyPolls && !showPromoteModal && (
        <div className="px-4 lg:hidden pb-[40px]">
          <FindPolls
            onSearch={onSearch}
            onFetchPolls={onFetchPolls}
            searchText={searchText}
          />

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
          {renderPollsOrFindPolls()}
        </div>
      )}

      <div className="flex lg:hidden">
        {showPromoteModal &&
          !Notify &&
          !CastVote &&
          !showMyPolls &&
          !showMyPolls &&
          !PromoteSuccess && (
            <Modal>
              <div className="h-[90vh]  bg-white rounded-t-[30px] w-full absolute bottom-0 z-[999] p-8 ">
                <div
                  onClick={HandlePromoteModal}
                  className="cursor-pointer flex justify-end"
                >
                  <FaTimes className="text-black text-xl" />
                </div>

                <img
                  src={promote}
                  alt="promote-poll-pics"
                  className="h-[150px] w-full object-contain"
                />

                <h2 className="font-bold text-center text-[18px]">
                  Promote your polls
                </h2>
                <p className="text-center">
                  Promote your poll, attract a wider audience, and boost poll
                  interaction effortlessly
                </p>

                <h3 className="font-bold text-[14px] mt-10">Select a plan</h3>

                <div className="flex gap-2 w-full mt-4">
                  <PricingComponent
                    title="Basic"
                    price={1000}
                    duration="1 day"
                    onSelect={handleSelect}
                  />
                  <PricingComponent
                    title="Standard"
                    price={5000}
                    duration="7 days"
                    onSelect={handleSelect}
                  />
                </div>
                <div className="flex gap-2 w-full mt-4">
                  <PricingComponent
                    title="Premium"
                    price={9000}
                    duration="14 days"
                    onSelect={handleSelect}
                  />
                  <PricingComponent
                    title="Pro"
                    price={14000}
                    duration="30 days"
                    onSelect={handleSelect}
                  />
                </div>

                <div className="absolute bottom-10 w-[90%]">
                  <ActionButton
                    label={"Proceed to Checkout"}
                    bg={"pruplr"}
                    loading={isPromoteLoading}
                    onClick={CheckOut}
                  />
                </div>
              </div>
            </Modal>
          )}
      </div>

      <div className="hidden lg:flex">
        {showPromoteModal &&
          !Notify &&
          !CastVote &&
          !showMyPolls &&
          !showMyPolls &&
          !PromoteSuccess && (
            <div>
              <Modal>
                <div className="bg-white w-[50%] p-14">
                  <div
                    onClick={HandlePromoteModal}
                    className="cursor-pointer flex justify-end"
                  >
                    <FaTimes className="text-black text-xl" />
                  </div>

                  <img
                    src={promote}
                    alt="promote-poll-pics"
                    className="h-[150px] w-full object-contain"
                  />

                  <h2 className="font-bold text-center text-[18px]">
                    Promote your polls
                  </h2>
                  <p className="text-center">
                    Promote your poll, attract a wider audience, and boost poll
                    interaction effortlessly
                  </p>

                  <h3 className="font-bold text-[14px] mt-10">Select a plan</h3>

                  <div className="flex gap-2 w-full mt-4">
                    <PricingComponent
                      title="Basic"
                      price={1000}
                      duration="1 day"
                      onSelect={handleSelect}
                    />
                    <PricingComponent
                      title="Standard"
                      price={5000}
                      duration="7 days"
                      onSelect={handleSelect}
                    />
                  </div>
                  <div className="flex gap-2 w-full mt-4">
                    <PricingComponent
                      title="Premium"
                      price={9000}
                      duration="14 days"
                      onSelect={handleSelect}
                    />
                    <PricingComponent
                      title="Pro"
                      price={14000}
                      duration="30 days"
                      onSelect={handleSelect}
                    />
                  </div>

                  <div className="mt-10 w-full">
                    <ActionButton
                      label={"Proceed to Checkout"}
                      bg={"pruplr"}
                      loading={isPromoteLoading}
                      onClick={CheckOut}
                    />
                  </div>
                </div>
              </Modal>
            </div>
          )}
      </div>

      {PromoteSuccess && (
        <Modal>
          <div className="w-[90%] lg:w-[30%] mx-auto bg-white px-16 py-20">
            <div className="flex justify-center">
              <img src="images/success.png" alt="payment-success-pics" />
            </div>
            <h6 className="mt-8 text-[16px] text-center">Payment Successful</h6>

            <div className="mt-8 ">
              <ActionButton
                label={"Continue to Events"}
                bg={"pruplr"}
                onClick={HandlePromotedPoll}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MyPolls;
