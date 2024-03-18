import React, { useContext, useState } from "react";
import { Poll } from "./Poll";
import { BsEye } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { FaVoteYea } from "react-icons/fa";
import { ModalContext } from "Context/ModalContext";
import { formatDate } from "utils/helper";

export const Polls = ({
  onClick,
  authorName,
  createdAt,
  question,
  options,
  daysRemaining,
  backgroundImageUrl,
  className = "border w-full lg:max-w-[360px] p-6 mt-4 rounded-[25px] cursor-pointer flex-shrink-0",
  myPolls,
  onClose,
  onView,
  cast,
  HandleEdit,
  HandleDelete,
  selectedOptionId,
  handleOptionChange,
  isClosed,
  HandlePromote
}) => {
  const { showAction, setShowAction } = useContext(ModalContext);

  const toggleShowAction = () => {
    setShowAction(!showAction);
  };

  const totalNumVotes =
    options && options.reduce((total, option) => total + option.votes, 0);

  const isCloseTimeReached = (closeTime) => {
    const closeDate = new Date(closeTime);
    const currentDate = new Date();
    return currentDate.getTime() >= closeDate.getTime();
  };

  return (
    <div
      className={className}
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      onClick={onClick}
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div
            className=" rounded-full relative"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "40px",
              height: "40px",
            }}
          ></div>
          <span className="text-[14px] font-[500] text-[#000] capitalize">
            {authorName}
          </span>
        </div>
        <span className="text-[#403F3F] text-[12px]">
          {formatDate(createdAt)}
        </span>
      </div>

      <h6 className="text-[12px] lg:text-[14px] mt-4 text-[#000]">
        {question}
      </h6>

      {options &&
        options.map((o, index) => (
          <Poll
            key={o.id}
            title={o.content}
            allVotes={o.votes}
            totalVotes={totalNumVotes}
            id={o.id}
            cast={cast}
            handleOptionChange={handleOptionChange}
            selectedOptionId={selectedOptionId}
            onClick={() => toggleShowAction(index)}
          />
        ))}

      <div className="flex justify-between mt-4">
        <div className="flex gap-2 items-center">
          <img src="images/time.png" alt="time-icon" />
          <div className="text-[#000] text-[12px] lg:text-[14px] font-[500]">
            {isClosed ? (
              <span className="text-orange-600">Ended</span>
            ) : isCloseTimeReached(formatDate(daysRemaining)) ? (
              <span className="text-red-600">Ended</span>
            ) : (
              <span className="text-yellow-600">
                Ends: {formatDate(daysRemaining)}
              </span>
            )}
          </div>
        </div>
        <div className="text-primaryColor text-[12px] lg:text-[14px]  font-[500]">
          Total Votes: {totalNumVotes}
        </div>
      </div>

      {myPolls && (
        <div className="w-full flex flex-row mt-4 gap-6 lg:gap-10">
          <div className=" flex flex-col w-full gap-4 justify-start">
            <div className="flex  gap-3 self-start  ">
              <BsEye className="text-black text-xl" />
              <div className="">
                <h2 className="text-black ">0K</h2>
                <span className="text-black text-[12px] lg:text-[14px]">
                  views
                </span>
              </div>
            </div>
            <button
              className="w-full h-[30px] lg:h-[40px] flex justify-center items-center rounded-[15px] text-lg sm:text-xl  !font-normal bg-[#000] hover:bg-[#F5F5F5] hover:text-[#000] transition duration-500 uppercase"
              onClick={onView}
            >
              View result
            </button>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-between items-center relative">
              <div className="flex  gap-3 self-start">
                <FaVoteYea className="text-black text-xl" />
                <div>
                  <h2 className="text-black">{totalNumVotes}</h2>
                  <span className="text-black text-[12px] lg:text-[14px]">
                    votes
                  </span>
                </div>
              </div>
              {/* Pass the index to toggleShowAction */}
              <div onClick={() => toggleShowAction()}>
                <CiMenuKebab className="text-black text-xl" />
              </div>
              {/* Show actions based on the corresponding index */}
              {showAction && (
                <div className="absolute flex flex-col items-start gap-4 right-8 bottom-2 bg-white rounded-lg shadow-md shadow-gray-300 py-[1.5rem] px-[1rem]">
                  <button
                    onClick={HandleEdit}
                    className="text-[1rem] md:text-[1.4rem] text-black text-start font-bold"
                  >
                    Edit Poll
                  </button>
                  <button
                    onClick={HandleDelete}
                    className="text-[1rem] md:text-[1.4rem] text-red-500 font-bold"
                  >
                    Delete Poll
                  </button>
                  <button
                    onClick={HandlePromote}
                    className="text-[1rem] md:text-[1.4rem] text-black font-bold"
                  >
                    Promote Poll
                  </button>
                </div>
              )}
            </div>
            {/* Render closed or close poll button based on isClosed */}
            {isClosed ? (
              <div className="text-black font-bold flex items-center justify-center w-full h-[30px] lg:h-[40px] rounded-[15px] text-lg sm:text-xl bg-[#F5F5F5]">
                CLOSED
              </div>
            ) : (
              <button
                className="bg-[#F5F5F5] w-full h-[30px] lg:h-[40px] flex justify-center items-center rounded-[15px] text-lg sm:text-xl text-[#403f3f] !font-normal hover:bg-red-600 hover:text-white transition duration-500 uppercase"
                onClick={onClose}
              >
                Close poll
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
