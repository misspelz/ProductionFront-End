import React, { useEffect, useState } from "react";
import Image from "../Assets/Image7.jpeg";
import Kebab from "../Assets/optBlack.svg";

export default function MoreCard({ title, img, artist }) {
  const [formatedTitle, setFormatedTitle] = useState();
  useEffect(() => {
    const length = 29;
    const string =
      title?.length > length ? title.substring(0, length - 3) + "..." : title;
    setFormatedTitle(string);
  }, [title]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4" space={2}>
          <img
            src={Image}
            style={{ minHeight: 75 }}
            width={75}
            className="rounded-md"
          />
          <div className="flex flex-col justify-between gap-1" space={1} justifyContent={"space-between"}>
            <label
              style={{fontSize:"16px",
              fontWeight:"400",
              color:"black",
              // lineHeight={"18.38px"}
              width:"151px"}}>
              {title ? formatedTitle : "Take me home ft Bella Keys..."}
            </label>
            <label style={{fontSize:"12px", fontWeight:"400", color:"black"}}>
              {artist ? artist : "TPrince"}
            </label>
          </div>
        </div>

        <button style={{width: "24px", height: "24px", backgroundColor:"none"}}>
          <img src={Kebab} width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
