import React from "react";

export default function ChartCard({ img, title, no }) {
  return (
    <div className="sm:max-w-[251.07px] sm:min-w-[251.07px] max-w-[168px] min-w-[168px] max-h-[282.62px]">
      <img
        className="w-full"
        src={img}
        style={{
          //   maxWidth: 168,
          //   minWidth: 168,
          //   width: "168px",
          maxHeight: 148,
          minHeight: 148,
          //   borderRadius: 6,
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col">
        <span className="font-medium text-xl">{title}</span><br/>
        <span className="font-normal text-lg text-[#403F3F]">{no? `${no} songs`: null}</span>
        <p></p>
      </div>
    </div>
  );
}
