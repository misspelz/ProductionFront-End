import React from "react";

const Message = () => {
  return (
    <div className="flex items-center w-full gap-2 justify-between p-4">
      <div
        className="w-[45px] h-[45px] rounded-full bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      ></div>
      <div>
        <div className="w-full flex justify-between gap-6">
          <div className="text-[10px]">Abraham Adesanya</div>
          <div className="text-[8px] text-[#c2a0a099]">12:00</div>
        </div>
        <div className="w-full flex justify-between gap-6">
          <div className="text-[8px] text-[#c2a0a099] w-[150px]">
            How was your flight Joe, i couldnt text last night
          </div>
          <div className="w-[10px] h-[10px] rounded-full bg-primaryColor"></div>
        </div>
      </div>
    </div>
  );
};

export default Message;
