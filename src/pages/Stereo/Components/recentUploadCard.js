import React from "react";
import More from "../Assets/codicon_kebab-vertical.svg";

export default function RecentUploadCard() {
  return (
    <div className="bg-[#F5F5F5] py-3 px-3 rounded-md w-full mb-4">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={require("../Assets/Image2.jpeg")}
            className="w-[35px] h-[35px] rounded-lg"
          />
          <div className="flex flex-col">
            <p className="font-normal text-sm">Dance with me</p>
            <p className="text-sm font-light text-[#403F3F]">Faith increase</p>
          </div>
        </div>
        <buttom>
          <img src={More} />
        </buttom>
      </section>
      <div className="flex justify-center my-4">
        <div className="border-b border-[#D0D5DD] min-w-[315px]" />
      </div>
      <main className="flex justify-between min-w-[100%]">
        <div className="flex flex-col items-center ">
          <p className="font-normal text-lg">2.4K</p>
          <p className="text-xs font-normal text-[#4F0DA3]">Plays</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-normal text-lg">1.9k</p>
          <p className="text-xs font-normal text-[#4F0DA3]">Likes</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-normal text-lg">5</p>
          <p className="text-xs font-normal text-[#4F0DA3]">Playlist entries</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-normal text-lg text-center">100</p>
          <p className="text-xs font-normal text-[#4F0DA3] text-center">
            Downloads
          </p>
        </div>
      </main>
    </div>
  );
}
