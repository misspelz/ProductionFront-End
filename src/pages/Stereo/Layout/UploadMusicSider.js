import React, { useState } from "react";
import person from "../Assets/artist.jpeg";
import ModalWrapper2 from "../Components/Modals/ModalWrapper2";
import Edit from "../Assets/ic_round-edit.svg";

export default function UploadMusicSider() {
  const [isOpen1, setIsOpen1] = useState(false);
  return (
    <div className="bg-white lg:px-10 xl:px-10 md:px-5 pt-5 w-auto h-full mx-10">
      <div className="flex justify-between items-center lg:mt-5 xl:mt-5">
        <span className="font-medium text-2xl">About artist</span>
      </div>

      <div className="flex items-center gap-3 mt-7 mb-7">
        <img src={person} className="w-[50px] h-[50px] rounded-full" />
        <div className="flex flex-col">
          <span className="font-normal text-xl">Bella Shrmuda</span>
          <button
            className="flex justify-between"
            onClick={() => setIsOpen1(!isOpen1)}>
            <span className="text-sm font-light text-[#4F0DA3] underline">
              Edit profile
            </span>
          </button>
        </div>
      </div>

      <button className="bg-[#4F0DA3] flex text-white justify-between w-full px-2 py-3 rounded-lg mb-4 mt-4">
        <span className="font-normal text-base">New upload</span>
        <span className="font-normal text-base">+</span>
      </button>

      <section>
        <span className="font-medium text-2xl">Artist Overview</span>

        <section className="grid grid-cols-2 mt-4 gap-3">
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <span className="text-2xl font-normal">2.5b</span>
            <span className="font-normal text-sm text-[#4F0DA3]">Plays</span>
          </main>
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <span className="text-2xl font-normal">15</span>
            <span className="font-normal text-sm text-[#4F0DA3]">
              Playlist entries
            </span>
          </main>
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <span className="text-2xl font-normal">28k</span>
            <span className="font-normal text-sm text-[#4F0DA3]">Stickers</span>
          </main>
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <span className="text-2xl font-normal">200k</span>
            <span className="font-normal text-sm text-[#4F0DA3]">Downloads</span>
          </main>
        </section>
      </section>
      {/* modal */}
      <ModalWrapper2 isOpen={isOpen1} closeModal={() => setIsOpen1(!isOpen1)}>
        <div className="">
          <div className="flex flex-col justify-center items-center mx-10">
            <div className="relative my-10">
              <img
                src={require("../Assets/artist.jpeg")}
                className="w-[134px] h-[134px] rounded-full"
              />
              <button className="absolute top-44 left-40 w-[17.46px] h-[17.46px] rounded-full bg-[#FF8A15] flex justify-center items-center">
                <img className="w-[9.53px] h-[9.53px]" src={Edit} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Artist name"
              className="w-full h-[48px] px-5 border-[#F5F5F5] border rounded-md my-4"
            />
            <textarea
              rows={6}
              placeholder="Bio"
              className="w-full px-5 py-2 border-[#F5F5F5] border rounded-md my-4"></textarea>

            <button className="bg-[#4F0DA3] px-24 py-2 text-white my-10 rounded-md">
              Save
            </button>
          </div>
        </div>
      </ModalWrapper2>
    </div>
  );
}
