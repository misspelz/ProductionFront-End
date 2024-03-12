import React from "react";
import CardImage from "../Assets/Image5.jpeg";

export default function NewCard({ category, img, artist }) {
  return (
    <div className="min-w-[168px] max-w-[168px] max-h-[192px]">
      <div className="w-full">
        <img
          src={img ? img : CardImage}
          width={"100%"}
          //   style={{ minHeight: 99.9, maxHeight: 99.9 }}
          className="rounded-md max-h-[150px] min-h-[150px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center align-middle">
        <span className="text-base font-normal">
          {category ? category : "Are we annoyed?"}
        </span><br/>
        <span className="font-normal text-xs text-[#403F3F]">
          {artist ? artist : "Billie Eilish"}
        </span>
      </div>
    </div>
  );
}
