import React from "react";
import More from "../Assets/codicon_kebab-vertical.svg";

export default function TopSongsCard({ id }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <p className="font-normal text-base">{id}.</p>
        <img
          src={require("../Assets/Image4.jpeg")}
          className="min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] rounded-md"
        />
        <p className="text-base font-normal">Damn!</p>
      </div>
      <button className="w-[24] h-[24]">
        <img src={More} />
      </button>
    </div>
  );
}
