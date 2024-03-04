import { Dialog } from "@mui/material";
import MainLayout from "Layout/MainLayout";
import {
  PollsApi,
  VoteApi,
  getLoginToken,
  getToken,
} from "api/services/auth&poll";
import ActionButton from "components/Commons/Button";
import Modal from "components/Modals/Modal";
import CreatePoll from "components/Modals/Vote/CreatePoll/CreatePoll";
import { CreateCastActions } from "components/PollsComp/CreateCastActions";
import { FindPolls } from "components/PollsComp/FindPolls";
import { Notifications } from "components/PollsComp/Notification";
import { Polls } from "components/PollsComp/Polls";
import { PromotedPolls } from "components/PollsComp/PromotedPolls";
import { PollsNotification } from "components/PollsComp/RightComp";
import { SuggestedPolls } from "components/PollsComp/SuggestedPolls";
import Spin from "components/Spin/Spin";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import "./styles.css";
import { formatDate } from "utils/helper";
import { url } from "utils/index";
import axios from "axios";
import { FaArrowLeftLong } from "react-icons/fa6";
import AD1 from "assets/images/AD1.png";
import AD2 from "assets/images/AD2.png";
import AD3 from "assets/images/AD3.png";
import AD4 from "assets/images/AD3.png";

const Voting = () => {
  const userInfoString = localStorage.getItem("2gedaUserInfo");
  const userInfo = JSON.parse(userInfoString);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = getToken();
    setToken(token);
  }, []);

  const [polls, setPolls] = useState([]);

  const [selectedPoll, setSelectedPoll] = useState(false);
  const [Notify, setNotify] = useState(false);
  const [CastVote, setCastVote] = useState(false);
  const [viewType, setViewType] = useState("all");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [PaidPoll, setPaidPoll] = useState(false);
  const [showPaidVotes, setShowPaidVotes] = useState(false);
  const [castVotes, setCastVotes] = useState(false);

  const [APoll, setAPoll] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfVotes, setNumberOfVotes] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [payNowAmount, setPayNowAmount] = useState(0);
  const [PayNow, setPayNow] = useState(false);
  const [Success, setSuccess] = useState(false);

  const handleNumberOfVotesChange = (e) => {
    const input = e.target.value;
    if (!isNaN(input)) {
      const votes = parseFloat(input);
      setNumberOfVotes(votes);
      setPayNowAmount(
        votes * 2000 * (selectedCurrency === "USD" ? 1 / 1900 : 1)
      );
    } else {
      setNumberOfVotes("");
    }
  };

  const handleCurrencyChange = (e) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);
    setPayNowAmount(numberOfVotes * 2000 * (currency === "USD" ? 1 / 1900 : 1));
  };

  const HandlePayNow = () => {
    setPayNow(true);
  };

  const HandlePaySuccess = () => {
    setSuccess(true);
  };

  const HandleContinue = () => {
    setSuccess(false);
    setPayNow(false);
    setPaidPoll(false);
    setShowPaidVotes(true);
  };

  const CastPaidVotes = () => {
    setCastVotes(true);
  };

  const [allVotesValue, setAllVotesValue] = useState(0);

  const handleAll = () => {
    setAllVotesValue(numberOfVotes);
  };

  const HandleNotification = () => {
    setNotify(true);
  };

  const HandleCastVote = () => {
    setCastVote(true);
  };

  const goBack = () => {
    setCastVote(false);
  };

  const HandlePoll = (pollData) => {
    setAPoll(pollData);
    setSelectedPoll(true);
  };

  const handleAllPolls = async (e) => {
    try {
      const resp = await PollsApi();
      if (resp.data.status) {
        setPolls(resp?.data?.data);
      }
    } catch (error) {
      console.log("allpolls", error);
      toast.error(error.response.data.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    handleAllPolls();
  }, []);

  const renderPolls = () => {
    switch (viewType) {
      // case "private":
      //   const isPrivate = polls.filter(
      //     (poll) =>
      //       poll.poll_access.toLowerCase() === "private" &&
      //       poll?.options?.length > 1
      //   );
      //   if (isLoading) {
      //     return <Spin />;
      //   } else if (isPrivate.length === 0) {
      //     return <p className="mt-20">No polls to display</p>;
      //   } else {
      //     return isPrivate.length > 0 ? (
      //       isPrivate
      //         ?.reverse()
      //         .map((poll, index) => (
      //           <Polls
      //             key={index}
      //             onClick={() => HandlePoll(poll)}
      //             authorName={poll.creator.username}
      //             createdAt={formatDate(poll.created_at)}
      //             question={poll.question}
      //             options={poll?.options?.length > 1 && poll?.options}
      //             daysRemaining={formatDate(poll.close_time)}
      //             backgroundImageUrl={
      //               "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      //             }
      //             className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
      //           />
      //         ))
      //     ) : (
      //       <p className="mt-20">No polls to display</p>
      //     );
      //   }
      // case "public":
      //   const isPublic = polls.filter(
      //     (poll) =>
      //       poll.poll_access.toLowerCase() === "public" &&
      //       poll?.options?.length > 1
      //   );
      //   if (isLoading) {
      //     return <Spin />;
      //   } else if (isPublic.length === 0) {
      //     return <p className="mt-20">No polls to display</p>;
      //   } else {
      //     return isPublic.length > 0 ? (
      //       isPublic
      //         ?.reverse()
      //         .map((poll, index) => (
      //           <Polls
      //             key={index}
      //             onClick={() => HandlePoll(poll)}
      //             authorName={poll.creator.username}
      //             createdAt={formatDate(poll.created_at)}
      //             question={poll.question}
      //             options={poll?.options?.length > 1 && poll?.options}
      //             daysRemaining={formatDate(poll.close_time)}
      //             backgroundImageUrl={
      //               "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      //             }
      //             className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
      //           />
      //         ))
      //     ) : (
      //       <p className="mt-20">No polls to display</p>
      //     );
      //   }
      case "all":
      default:
        const allPolls = polls.filter(
          (poll) => poll?.options?.length > 1 && !poll.is_closed
        );
        if (isLoading) {
          return <Spin />;
        } else if (allPolls.length === 0) {
          return <p className="mt-20">No polls to display</p>;
        } else {
          return allPolls.length > 0 ? (
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
                  className="border p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
                />
              ))
          ) : (
            <p className="mt-20">No polls to display</p>
          );
        }
    }
  };

  const [selectedOptionId, setSelectedOptionId] = useState(null);

  const handleOptionChange = (id) => {
    setSelectedOptionId(id);
  };

  const handleSubmitVote = async () => {
    const dataOptionId = {
      option_id: selectedOptionId,
    };

    try {
      setLoading(true);
      const resp = await VoteApi(dataOptionId, APoll.id);

      if (resp.data.status) {
        toast.success("Vote casted successfully");
      }
    } catch (error) {
      console.log("vote", error);
      toast.error(error.response.data.message || "Something went wrong!");
    } finally {
      handleAllPolls();
      setLoading(false);
      setAllVotesValue(null);
      setCastVotes(false);
      setNumberOfVotes("");
      setSelectedPoll(null);
    }
  };

  // const [voted, setVoted] = useState(false);

  // const handleVote = () => {
  //   handleSubmitVote();
  //   setVoted(true);
  // };

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["images/fifa.png", AD1, AD2, AD3, AD4];

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [searchText, setSearchText] = useState("");

  const onSearch = (text) => {
    setSearchText(text);
    onFetchPolls(text);
  };

  const onFetchPolls = async (text) => {
    try {
      setIsLoading(true);
      let res;

      if (text === "") {
        res = await PollsApi();
      } else {
        res = await axios.get(`${url}/api/polls/find/`, {
          params: { find: text },
          headers: {
            Authorization: `Token ${getLoginToken()}`,
          },
        });
      }

      if (res.data.status) {
        setPolls(res?.data?.data);
      }
    } catch (error) {
      console.log("findpolls", error);
      toast.error(error.response.data.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (searchText !== "") {
      onFetchPolls(searchText);
    } else {
      onFetchPolls();
    }
  }, [searchText]);

  return (
    <MainLayout>
      {!selectedPoll && (
        <div className=" bg-[#f5f5f5]  w-full pt-36 lg:px-10 gap-6 ">
          <div className="">
            {!Notify && !CastVote && (
              <div className=" overflow-x-hidden bg-[#fff] py-10 px-6 md:hidden">
                <h1>Voting</h1>
                <h2 className="mt-6 ">Hello, {userInfo.username}</h2>
                <span className="text-[14px] ">
                  What do you want to do today ?
                </span>

                <img
                  src={images[currentIndex]}
                  alt="slider-pics"
                  className="mt-6 lg:mt-10"
                />

                <CreateCastActions
                  HandleNotification={HandleNotification}
                  HandleCastVote={HandleCastVote}
                  showCreateModal={() => setShowCreateModal((prev) => !prev)}
                />
              </div>
            )}
          </div>

          {Notify && <Notifications setNotify={setNotify} />}

          {/* Mobile */}
          {CastVote && (
            <div className="lg:w-[60%] px-4 pb-[40px] lg:pt-5 flex md:hidden flex-col bg-[#fff]">
              <div className="flex gap-3 items-center mt-8">
                <FaArrowLeftLong
                  size={20}
                  onClick={goBack}
                  className="cursor-pointer text-lg mb-[0.5rem]"
                />
                <h1>Cast Vote</h1>
              </div>

              <img
                src={images[currentIndex]}
                alt="slider-pics"
                className="mt-6 lg:mt-10"
              />
              <h2 className="mt-4">Suggested Polls</h2>
              <SuggestedPolls HandlePoll={HandlePoll} />

              {/* <h2>Promoted Polls</h2>
              <PromotedPolls HandlePoll={HandlePoll} /> */}

              {/* tabs */}
              <div className=" mt-16 lg:mt-20">
                <div
                  className={`border-1  border-primaryColor text-primaryColor p-3 w-[100%] ${
                    viewType === "all"
                      ? "bg-primaryColor text-white"
                      : "border-1 border-primaryColor"
                  } `}
                  onClick={() => setViewType("all")}
                >
                  <h2 className="text-center">All Polls</h2>
                </div>
                <div className="">
                  <FindPolls
                    onSearch={onSearch}
                    onFetchPolls={onFetchPolls}
                    searchText={searchText}
                  />
                </div>
                {/* <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "public"
                      ? "bg-purple-900 text-white"
                      : "border-1 border-purple-900"
                  }`}
                  onClick={() => setViewType("public")}
                >
                  Public
                </button>
                <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "private"
                      ? "bg-purple-900 text-white"
                      : "border-1 border-purple-900"
                  }`}
                  onClick={() => setViewType("private")}
                >
                  Private
                </button> */}
              </div>
              {renderPolls()}
              <Dialog
                open={showCreateModal}
                onClose={() => setShowCreateModal((prev) => !prev)}
                fullWidth
              >
                <CreatePoll
                  onClose={setShowCreateModal}
                  fetchPolls={handleAllPolls}
                />
              </Dialog>
            </div>
          )}

          {/* Web */}
          <div className="flex flex-row gap-4 ">
            <div className="md:w-[60%] px-4 pb-[40px] md:pt-5 hidden md:flex md:flex-col bg-[#fff]">
              <h1>Voting</h1>

              <img
                src={images[currentIndex]}
                alt="slider-pics"
                className="mt-6 lg:mt-10"
              />
              <h2 className="mt-4">Suggested Polls</h2>
              <SuggestedPolls HandlePoll={HandlePoll} />
              {/* <h2>Promoted Polls</h2>
              <PromotedPolls HandlePoll={HandlePoll} /> */}

              {/* tabs */}
              <div className=" mt-16 md:mt-20">
                <div
                  className={`border-1 mt-6 border-primaryColor text-primaryColor p-3 w-[100%] ${
                    viewType === "all"
                      ? "bg-primaryColor text-white"
                      : "border-1 border-primaryColor"
                  } `}
                  onClick={() => setViewType("all")}
                >
                  <h2 className="text-center">All Polls</h2>
                </div>
                <div className="">
                  <FindPolls
                    onSearch={onSearch}
                    onFetchPolls={onFetchPolls}
                    searchText={searchText}
                  />
                </div>
                {/* <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "public"
                      ? "bg-purple-900 text-white"
                      : "border-1 border-purple-900"
                  }`}
                  onClick={() => setViewType("public")}
                >
                  Public
                </button>
                <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "private"
                      ? "bg-purple-900 text-white"
                      : "border-1 border-purple-900"
                  }`}
                  onClick={() => setViewType("private")}
                >
                  Private
                </button> */}
              </div>
              {renderPolls()}
              <Dialog
                open={showCreateModal}
                onClose={() => setShowCreateModal((prev) => !prev)}
                fullWidth
              >
                <CreatePoll
                  onClose={setShowCreateModal}
                  fetchPolls={handleAllPolls}
                />
              </Dialog>
            </div>

            <div className="md:w-[30%]  bg-[#fff] hidden md:block fixed top-[90px] right-10 ">
              <PollsNotification
                setNotify={setNotify}
                showCreateModal={() => setShowCreateModal((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      )}

      {/* MOBILE */}
      {selectedPoll && (
        <div className="pt-36 lg:pt-48 px-4 flex lg:hidden flex-col justify-between w-full h-screen">
          <div className="lg:hidden w-full">
            <div
              className="cursor-pointer lg:hidden flex justify-between w-[60%]"
              onClick={() => setSelectedPoll(null)}
            >
              <img src="images/backarrow.png" alt="result-icon" width={20} />
              <div className="text-[18px] font-bold">Cast Vote</div>
            </div>

            <Polls
              authorName={APoll.creator.username}
              createdAt={formatDate(APoll.created_at)}
              question={APoll.question}
              daysRemaining={formatDate(APoll.close_time)}
              isClosed={APoll.is_closed}
              cast={APoll.id}
              selectedOptionId={selectedOptionId}
              handleOptionChange={handleOptionChange}
              options={APoll?.options?.length > 1 && APoll?.options}
              backgroundImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            />

            {showPaidVotes && (
              <div className="mt-20 text-center bg-orange-400 py-3 rounded-[30px] w-[35%] mx-auto text-white ">
                You have 40 votes
              </div>
            )}

            <div className="mt-8 ">
              <ActionButton
                label={loading ? "Voting" : "Vote"}
                bg={"pruplr"}
                onClick={handleSubmitVote}
                loading={loading}
              />
            </div>
          </div>
          <img
            src={images[currentIndex]}
            alt="slider-pics"
            className="mt-6 lg:mt-10"
          />
        </div>
      )}

      {/* WEB */}
      {selectedPoll && !PaidPoll && (
        <div className="hidden lg:flex">
          <Modal>
            <div className="bg-white w-[50%] p-14">
              {!castVotes && (
                <div className="w-full flex justify-end">
                  <div className=" flex justify-between w-[60%]">
                    <div className="text-[20px] font-bold">Cast Vote</div>
                    <IoMdClose
                      size={25}
                      onClick={() => setSelectedPoll(null)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {!showPaidVotes && (
                <>
                  <Polls
                    className="lg:max-w-full lg:p-6"
                    authorName={APoll.creator.username}
                    createdAt={formatDate(APoll.created_at)}
                    question={APoll.question}
                    daysRemaining={formatDate(APoll.close_time)}
                    isClosed={APoll.is_closed}
                    cast={APoll.id}
                    selectedOptionId={selectedOptionId}
                    handleOptionChange={handleOptionChange}
                    options={APoll?.options?.length > 1 && APoll?.options}
                    backgroundImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  />
                  <div className="mt-8 ">
                    <ActionButton
                      label={loading ? "Voting" : "Vote"}
                      bg={"pruplr"}
                      onClick={handleSubmitVote}
                      loading={loading}
                    />
                  </div>
                </>
              )}

              {/* {showPaidVotes && !castVotes && (
                <>
                  <Polls
                    onClick={CastPaidVotes}
                    className="w-[100%] p-6 mt-4 cursor-pointer"
                     authorName={"authorName"}
                    createdAt={formatDate(poll.created_at)}
                    question={APoll.question}
                    options={APoll?.options?.length > 1 && APoll?.options}
                    daysRemaining={APoll.close_time}
                    
                    backgroundImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  />
                  <div className="mt-20 text-center bg-orange-400 py-3 rounded-[30px] w-[35%] mx-auto text-white ">
                    You have {numberOfVotes} votes
                  </div>
                </>
              )} */}
            </div>
          </Modal>
        </div>
      )}

      {/* {PaidPoll && !PayNow && (
        <Modal>
          <div className="w-[90%] lg:w-[30%] mx-auto bg-white px-16 py-20">
            <h3 className="font-bold text-center text-[18px]">Paid Poll</h3>
            <h6 className="mt-8 text-[16px] text-center">
              This is a paid poll, your contribution ensures meaningful
              insights. Participate now to support quality content and exclusive
              results
            </h6>

            <div className="mt-8 ">
              <div className="flex gap-4 mb-10">
                <InputField
                  placeholder={"Number of votes"}
                  type={"number"}
                  value={numberOfVotes}
                  onChange={handleNumberOfVotesChange}
                />
                <select
                  name="currency"
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  className="w-[40%] rounded-lg mt-[10px] outline-none"
                >
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <ActionButton
                label={"Proceed to Pay"}
                bg={"pruplr"}
                onClick={HandlePayNow}
                className="font-semibold"
              />
              <ActionButton
                label={"Go Back"}
                className="mt-4 rounded-[10px] hover:text-[#fff] hover:bg-[pruplr] border-[1px] border-purple-600 text-purple-600 font-semibold"
                onClick={() => setPaidPoll(false)}
              />
            </div>
          </div>
        </Modal>
      )} */}

      {/* {PayNow && !Success && (
        <Modal>
          <div className="w-[90%] lg:w-[30%] mx-auto bg-white px-16 py-20">
            <h6 className="text-[16px] text-center">You are paying</h6>

            <h3 className="text-[30px] text-center text-purple-600 mt-4">
              {selectedCurrency === "NGN" ? "NGN" : "$"}
              {payNowAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h3>

            <h6 className="mt-4 text-[16px] text-center">Being payment for</h6>

            <div className="flex justify-center">
              <h3 className="mt-4 text-center p-2 w-[100px] rounded-[10px] bg-purple-300">
                {numberOfVotes} votes
              </h3>
            </div>

            <div className="mt-8 ">
              <ActionButton
                label={"Pay Now"}
                bg={"pruplr"}
                onClick={HandlePaySuccess}
              />
              <ActionButton
                label={"Go Back"}
                className="mt-4 rounded-[10px] hover:text-[#fff] hover:bg-[pruplr] border-[1px] border-purple-600 text-purple-600 font-semibold"
                onClick={() => {
                  setNumberOfVotes("");
                  setSelectedCurrency("NGN");
                  setPayNowAmount(0);
                  setPayNow(false);
                }}
              />
            </div>
          </div>
        </Modal>
      )} */}

      {/* {Success && !castVotes && (
        <Modal>
          <div className="w-[90%] lg:w-[30%] mx-auto bg-white px-16 py-20">
            <div className="flex justify-center">
              <img src="images/success.png" alt="payment-success-pics" />
            </div>
            <h6 className="mt-8 text-[16px] text-center">Payment Successful</h6>

            <div className="mt-8 ">
              <ActionButton
                label={"Continue to Poll"}
                bg={"pruplr"}
                onClick={HandleContinue}
              />
            </div>
          </div>
        </Modal>
      )} */}

      {/* {castVotes && (
        <Modal>
          <div className="w-[90%] lg:w-[30%] mx-auto bg-white px-16 py-20">
            <div className="flex justify-end">
              <IoMdClose
                size={25}
                onClick={() => {
                  setCastVotes(false);
                  setAllVotesValue(null);
                }}
                className="cursor-pointer"
              />
            </div>
            <h6 className="mt-8 text-[16px] text-center">
              How many votes do you want to cast for this selection?
            </h6>
            <div className="relative">
              <InputField
                placeholder={"Enter amount"}
                type="text"
                value={allVotesValue}
                className="text-red-500"
                onChange={(e) => setAllVotesValue(e.target.value)}
              />
              <button
                className="absolute top-[28%] right-2 text-[13px] rounded-[5px] py-2 px-4 font-bold bg-[#D0D5DD]"
                onClick={handleAll}
              >
                All
              </button>
            </div>
            <div className="mt-8 ">
              <ActionButton
                label={"Vote"}
                bg={"pruplr"}
                onClick={HandleVoteSubmit}
              />
            </div>
          </div>
        </Modal>
      )} */}
    </MainLayout>
  );
};
export default Voting;
