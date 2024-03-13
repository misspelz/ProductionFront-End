import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const CreateCastActions = ({
  HandleNotification,
  HandleCastVote,
  showCreateModal,
}) => {
  const nav = useNavigate();

  return (
    <div className="px-4 lg:hidden">
      <div
        className="flex items-center gap-6 cursor-pointer"
        onClick={showCreateModal}
      >
        <img src="images/create.png" alt="create-icon" width={25} />
        <span className="text-[13px] font-[500]">Create poll</span>
      </div>

      <div className="flex justify-between mt-14">
        <div
          className="flex items-center gap-6 cursor-pointer"
          onClick={() => nav("/MyPolls")}
        >
          <img src="images/create.png" alt="create-icon" width={25} />
          <span className="text-[13px] font-[500]">My Polls</span>
        </div>

        <div onClick={HandleNotification}>
          <div className="bg-[#D0D5DD] rounded-full flex items-center justify-center relative  ">
            <IoIosNotificationsOutline size={20} className="" />
            <div className="absolute -top-3 right-0 bg-purple-800 text-white rounded-[45%] w-4 text-center">
              0
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-14 flex justify-between ">
          <div
            onClick={HandleCastVote}
            className="flex items-center gap-6 cursor-pointer"
          >
            <img src="images/cast.png" alt="create-icon" width={25} />
            <span className="text-[13px] font-[500]">Cast vote</span>
          </div>

          <div className="bg-[#FF8A15] p-3 text-white rounded-[30px] lg:hidden cursor-pointer">
            0 new polls
          </div>
        </div>
      </div>
    </div>
  );
};

CreateCastActions.propTypes = {
  HandleNotification: PropTypes.func.isRequired,
  HandleCastVote: PropTypes.func.isRequired,
};
