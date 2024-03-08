import React from "react";
import Artist from "../Assets/artist.jpeg";

export default function ArtistCardStick() {
  return (
    <div className="flex align-middle items-center justify-between">
      <div className="flex align-middle items-center">
        <img src={Artist} className="w-[35px] h-[35px] rounded-full" />
        <p className="font-normal text-sm">Bella Shrmuda</p>
      </div>
      <button className="bg-[#4F0DA3] py-1">Stick</button>
    </div>
  );
}
