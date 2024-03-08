import React from "react";
import CardImage from "../Assets/Image5.jpeg";

export default function TrendingCard({ category, img, artist }) {
  return (
    <div
      //   style={{ minWidth: 263.38, maxWidth: 263.38 }}
      className="min-w-[263.38px] max-w-[263.38px]">
      <div className="w-full">
        <img
          src={img ? img : CardImage}
          width={"100%"}
          style={{ objectFit: "cover" }}
          className="rounded-md max-h-[235.16px] min-h-[235.16px] content-center"
        />
      </div>
      <div className="flex flex-col justify-start items-start sm:justify-center sm:items-center sm:align-middle">
        <span
          className="font-normal text-lg sm:text-2xl"
          //   style={{ fontSize: "25.08px", lineHeight: "28.82px" }}
        >
          {category ? category : "When we fall asleep"}
        </span><br/>
        <span
          className="font-normal text-sm sm:text-lg text-[#403F3F]"
          //   style={{ fontSize: "18.81px", lineHeight: "21.62px" }}
        >
          {artist ? artist : "Billie Eilish"}
        </span>
      </div>
    </div>
  );
}
