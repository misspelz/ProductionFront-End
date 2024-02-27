import React, { useState, useEffect } from "react";
import "./styles.css";
import MainLayout from "Layout/MainLayout";
import { Polls } from "components/PollsComp/Polls";
import { PollsNotification } from "components/PollsComp/RightComp";
import { SuggestedPolls } from "components/PollsComp/SuggestedPolls";
import { FindPolls } from "components/PollsComp/FindPolls";
import { Notifications } from "components/PollsComp/Notification";
import { CreateCastActions } from "components/PollsComp/CreateCastActions";
import { PromotedPolls } from "components/PollsComp/PromotedPolls";
import CreatePoll from "components/Modals/Vote/CreatePoll/CreatePoll";
import { Dialog, DialogContent } from "@mui/material";
import Modal from "components/Modals/Modal";
import { IoMdClose } from "react-icons/io";
import InputField from "components/Commons/InputField";
import ActionButton from "components/Commons/Button";
import { CastVoteApi, PollsApi, getToken } from "api/services/auth&poll";
import toast from "react-hot-toast";
import optionss from "utils/options.json";
import { url } from "utils/index";
import Spin from "components/Spin/Spin";

const Voting = () => {
  const userInfoString = localStorage.getItem("2gedaUserInfo");
  const userInfo = JSON.parse(userInfoString);

  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = getToken();
    setToken(token);
  }, []);

  const [polls, setPolls] = useState([]);
  console.log("polls", polls);

  const [selectedPoll, setSelectedPoll] = useState(false);
  const [Notify, setNotify] = useState(false);
  const [CastVote, setCastVote] = useState(false);
  const [viewType, setViewType] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [PaidPoll, setPaidPoll] = useState(false);
  const [PayNow, setPayNow] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [showPaidVotes, setShowPaidVotes] = useState(false);

  const [singlePoll, setSinglePoll] = useState({});
  const [loading, setLoading] = useState(true);
  const [numberOfVotes, setNumberOfVotes] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [payNowAmount, setPayNowAmount] = useState(0);

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

  const HandleNotification = () => {
    setNotify(true);
  };

  const HandleCastVote = () => {
    setCastVote(true);
  };

  const HandlePoll = (pollData) => {
    setSinglePoll(pollData);
    setSelectedPoll(true);
    setShowPaidVotes(false);
  };

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

  useEffect(() => {
    handleMyPolls();
  }, []);

  const renderPolls = () => {
    switch (viewType) {
      case "private":
        if (polls.length === 0) {
          return <Spin />;
        } else {
          const isPrivate = polls.filter(
            (poll) =>
              poll.poll_access.toLowerCase() === "private" &&
              poll?.options?.length > 0
          );
          return isPrivate.length > 0 ? (
            isPrivate?.reverse().map((poll, index) => (
              <Polls
                key={index}
                // onClick={() => HandlePoll(poll)}
                authorName={"authorName"}
                createdAt={"createdAt"}
                question={poll.question}
                options={poll?.options?.length > 1 && poll?.options}
                daysRemaining={poll.close_time}
                totalVotes={"totalVotes"}
                backgroundImageUrl={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                className="border p-3 mt-4 rounded-[25px] cursor-pointer flex-shrink-0"
              />
            ))
          ) : (
            <p className="mt-20">No polls to display</p>
          );
        }
      case "public":
        if (polls.length === 0) {
          return <Spin />;
        } else {
          const isPublic = polls.filter(
            (poll) =>
              poll.poll_access.toLowerCase() === "public" &&
              poll?.options?.length > 0
          );
          return isPublic.length > 0 ? (
            isPublic?.reverse().map((poll, index) => (
              <Polls
                key={index}
                // onClick={() => HandlePoll(poll)}
                authorName={"authorName"}
                createdAt={"createdAt"}
                question={poll.question}
                options={poll?.options?.length > 1 && poll?.options}
                daysRemaining={poll.close_time}
                totalVotes={"totalVotes"}
                backgroundImageUrl={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
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
          const allPolls = polls.filter((poll) => poll?.options?.length > 0);
          return allPolls.length > 0 ? (
            allPolls?.reverse().map((poll, index) => (
              <Polls
                key={index}
                onClick={() => HandlePoll(poll)}
                authorName={"authorName"}
                createdAt={"createdAt"}
                question={poll.question}
                options={poll?.options?.length > 1 && poll?.options}
                daysRemaining={poll.close_time}
                totalVotes={"totalVotes"}
                backgroundImageUrl={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
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

  const HandlePaidPoll = () => {
    if (singlePoll.type.toLowerCase() === "paid") {
      setPaidPoll(true);
    }
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

  const [castVotes, setCastVotes] = useState(false);

  const CastPaidVotes = () => {
    setCastVotes(true);
  };

  const [allVotesValue, setAllVotesValue] = useState(0);

  const handleAll = () => {
    setAllVotesValue(numberOfVotes);
  };

  const handleSubmitFreeVote = async () => {
    const load = {
      post_id: singlePoll.vote_id,
      content: singlePoll.content,
      cost: 12,
    };
    console.log(load, "CastVoteload");

    try {
      setLoading(true);
      const resp = await fetch(`${url}/poll/votes/`, {
        method: "POST",
        headers: {
          Authorization: "Token " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(load),
      });
      const result = await resp.json();

      if (result?.have_Voted) {
        toast.success("Vote casted successfully");
      }
    } catch (error) {
      toast.error("Something went wrong" || error.message);
    } finally {
      handleMyPolls();
      setLoading(false);
      setAllVotesValue(null);
      setCastVotes(false);
      setNumberOfVotes("");
      setSelectedPoll(null);
    }
  };

  const HandleVoteSubmit = () => {
    toast.success("Vote Casted Successfully");
    setAllVotesValue(null);
    setCastVotes(false);
    setNumberOfVotes("");
    setSelectedPoll(null);
  };

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
                  src="images/fifa.png"
                  alt="fifa-pics"
                  className="mt-6 w-full"
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
              <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />
              <img
                src="images/fifa.png"
                alt="fifa-pics"
                className="mt-6 lg:mt-10"
              />
              <h2 className="mt-4">Suggested Polls</h2>
              <SuggestedPolls HandlePoll={HandlePoll} />
              <h2>Promoted Polls</h2>
              <PromotedPolls HandlePoll={HandlePoll} />

              {/* tabs */}
              <div className="flex justify-between mt-16 lg:mt-20">
                <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "all"
                      ? "bg-purple-900 text-white"
                      : "border-1 border-purple-900"
                  }`}
                  onClick={() => setViewType("all")}
                >
                  All
                </button>
                <button
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
                </button>
              </div>
              {renderPolls()}
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
            </div>
          )}

          {/* Web */}
          <div className="flex flex-row gap-4 ">
            <div className="lg:w-[60%] px-4 pb-[40px] lg:pt-5 hidden md:flex md:flex-col bg-[#fff]">
              <FindPolls onSearch={onSearch} onFilterClick={onFilterClick} />

              <img
                src="images/fifa.png"
                alt="fifa-pics"
                className="mt-6 lg:mt-10"
              />
              <h2 className="mt-4">Suggested Polls</h2>
              <SuggestedPolls HandlePoll={HandlePoll} />
              <h2>Promoted Polls</h2>
              <PromotedPolls HandlePoll={HandlePoll} />

              {/* tabs */}
              <div className="flex justify-between mt-16 lg:mt-20">
                <button
                  className={`border-1 border-purple-900 text-purple-900 p-3 rounded-[40px] w-[30%] text-[12px] ${
                    viewType === "all"
                      ? "bg-purple-900 text-white"
                      : "border-1 border-purple-900"
                  }`}
                  onClick={() => setViewType("all")}
                >
                  All
                </button>
                <button
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
                </button>
              </div>
              {renderPolls()}
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
            </div>

            <div className="lg:w-[30%]  bg-[#fff] hidden lg:block fixed top-[90px] right-10 ">
              <PollsNotification
                setNotify={setNotify}
                showCreateModal={() => setShowCreateModal((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      )}

      {/* MOBILE */}
      {/* {selectedPoll && (
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
              // className="w-full"
              onClick={HandlePaidPoll}
              authorName={singlePoll.username}
              createdAt={singlePoll.created_at}
              question={singlePoll.question}
              setContent={setSinglePoll}
              cast={singlePoll.vote_id}
              optionList={singlePoll?.options_list}
              daysRemaining={singlePoll.daysRemaining || "No duration"}
              totalVotes={singlePoll.vote_count}
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
                onClick={handleSubmitFreeVote}
                loading={loading}
              />
            </div>
          </div>
          <img
            src="images/fifa.png"
            alt="fifa-pics"
            className="mb-6 w-full lg:mb-10 lg:hidden"
          />
        </div>
      )} */}

      {/* WEB */}
      {/* {selectedPoll && !PaidPoll && (
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
                    onClick={HandlePaidPoll}
                    className="w-[100%] p-6 mt-4 cursor-pointer"
                    authorName={singlePoll.username}
                    createdAt={singlePoll.created_at}
                    question={singlePoll.question}
                    cast={singlePoll.vote_id}
                    setContent={setSinglePoll}
                    optionList={singlePoll.options_list}
                    daysRemaining={singlePoll.daysRemaining || "No duration"}
                    totalVotes={singlePoll.vote_count}
                    backgroundImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  />
                  <div className="mt-8 ">
                    <ActionButton
                      label={loading ? "Voting" : "Vote"}
                      bg={"pruplr"}
                      onClick={handleSubmitFreeVote}
                      loading={loading}
                    />
                  </div>
                </>
              )}

              {showPaidVotes && !castVotes && (
                <>
                  <Polls
                    onClick={CastPaidVotes}
                    className="w-[100%] p-6 mt-4 cursor-pointer"
                    authorName={singlePoll.username}
                    createdAt={singlePoll.created_at}
                    question={singlePoll.question}
                    // options={options}
                    optionList={singlePoll.options_list}
                    daysRemaining={singlePoll.daysRemaining || "No duration"}
                    totalVotes={singlePoll.vote_count}
                    backgroundImageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  />
                  <div className="mt-20 text-center bg-orange-400 py-3 rounded-[30px] w-[35%] mx-auto text-white ">
                    You have {numberOfVotes} votes
                  </div>
                </>
              )}
            </div>
          </Modal>
        </div>
      )} */}

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
