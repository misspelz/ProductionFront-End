import React from "react";

export default function LibraryCard({ img, title, no }) {
  return (
    <div className="w-full h-[189]">
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
        <span className="font-medium text-sm">{title}</span>
<<<<<<< HEAD
        <span className="font-normal text-xs text-[#403F3F]">{no} songs</span>
=======
        {/* <span className="font-normal text-xs text-[#403F3F]">{no} songs</span> */}
>>>>>>> 8b76aa43bd0779e5a4c51e23d4d00fb7681df0f9
        <span></span>
      </div>
    </div>
  );
}
