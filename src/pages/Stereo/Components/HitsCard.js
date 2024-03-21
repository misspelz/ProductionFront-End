import React from "react";
import CardImg from "../Assets/Image2.jpeg";

export default function HitsCard({ img, name, artist }) {
  return (
    <div
      style={{ minWidth: 168, minHeight: 192, maxWidth: 168, maxHeight: 192 }}>
      <div width={"100%"}>
        <img
          src={img ? img : CardImg}
          width={"100%"}
          style={{ minHeight: 150, maxHeight: 150 }}
          className="rounded-md"
        />
      </div>
      <main className="flex flex-col justify-center items-center">
        <label style={{fontSize:"16px", fontWeight:"400", color:"black"}}>
          {name ? name : "Are we annoyed?"}
        </label>
        <label style={{fontSize:"12px", fontWeight:"400", color:"#403F3F"}}>
          {artist ? artist : "2GEDA Artist"}
        </label>
      </main>
    </div>
  );
}
