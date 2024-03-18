import React from "react";
import Artist from "../Assets/artist.jpeg";

export default function ArtistTabCard({ onClick, name, image }) {
  return (
    <button
      onClick={onClick}
      className="w-[97.71px] h-[122.02px] flex flex-col justify-center align-middle items-center text-center">
      <img
        src={image?image:Artist}
        style={{ width: "100%", height: 97.71, borderRadius: "50%" }}
      />
      <p className="text-sm font-normal">{name?name:"Bella Shrmuda"}</p>
    </button>
  );
}
