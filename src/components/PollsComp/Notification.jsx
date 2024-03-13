import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NotificationsApi } from "api/services/auth&poll";

export const Notifications = ({ setNotify }) => {
  const [notifymsgs, setNotifyMsgs] = useState([]);

  const NotifyMessages = async () => {
    const res = await NotificationsApi();
    if (res.data.status) {
      setNotifyMsgs(res.data.data);
    }
  };

  useEffect(() => {
    NotifyMessages();
  }, []);

  const getTimeDifference = (timestamp) => {
    const now = new Date();
    const createdAt = new Date(timestamp);
    const differenceInSeconds = Math.floor((now - createdAt) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    }
  };

  return (
    <div className="mt-2 px-4 py-2 rounded-[10px] h-screen z-50">
      <div
        className="cursor-pointer lg:hidden"
        onClick={() => setNotify(false)}
      >
        <img src="images/backarrow.png" alt="result-icon" width={20} />
      </div>

      <h2 className="text-[#000] mt-4">Notifications</h2>

      {notifymsgs.map((msg, index) => (
        <div key={msg.id}>
          <div className="mt-8 flex gap-4">
            <div className="bg-[#D0D5DD] rounded-full flex items-center justify-center p-2">
              <img src="images/result.png" alt="result-icon" width={15} />{" "}
            </div>
            <div className="">
              <div className="text-[#000] text-[12px]">{msg.content}</div>
              <div className="text-[#000] text-[10px]">
                {getTimeDifference(msg.created_at)}
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#D0D5DD] mt-4"></div>
        </div>
      ))}

      {/* <div className="mt-8 flex gap-4">
        <div className="bg-[#D0D5DD] rounded-full flex items-center justify-center">
          <img src="images/result.png" alt="result-icon" width={20} />{" "}
        </div>
        <div className="">
          <div className="text-[#000] text-[12px]">
            Your <span className="font-bold">poll</span> has ended
          </div>
          <div className="text-[#000] text-[10px]">10 mins ago</div>
        </div>
      </div> */}
      {/* <div className="text-[#4F0DA3] text-[11px] mt-3 ml-[58px] font-[500] cursor-pointer">
        View result
      </div> */}

      {/* <div className="mt-8 flex gap-4">
        <div className="bg-[#D0D5DD] rounded-full flex items-center justify-center">
          <img src="images/payment.png" alt="result-icon" width={20} />{" "}
        </div>
        <div className="">
          <div className="text-[#000] text-[12px]">
            <span className="font-bold">Kayode Shank</span> made payment for{" "}
            <span className="font-bold">20 votes</span>
          </div>
          <div className="text-[#000] text-[10px]">10 mins ago</div>
        </div>
      </div> */}
    </div>
  );
};

Notifications.propTypes = {
  setNotify: PropTypes.func.isRequired,
};
