import React from "react";
import PromoImg from "../Assets/promoImg.svg";
import Logo from "../Assets/NEW full color-1 1.svg";

export default function PromoCard2() {
  return (
    <div className="bg-gradient-to-b from-[#4F0DA3] to-[#FFFFFF] max-w-[127.6px] min-w-[127.6px] min-h-[174px] py-4 px-2 rounded-lg shadow-lg shadow-white drop-shadow-2xl">
      <div className="flex flex-col justify-center items-center">
        <p
          className="text-white mb-3"
          style={{ fontSize: 9.11, fontWeight: "300" }}>
          Now on 2geda stereo
        </p>
        <img
          src={PromoImg}
          className="max-w-[109.32px] min-w-[109.32px] max-h-[142.72px] min-h-[142.72px]"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="font-normal text-[#4F0DA3]" style={{ fontSize: 10.63 }}>
            Dance with me
          </p>
          <p className="" style={{ fontSize: 9.11, fontWeight: "300" }}>
            Faithincrease
          </p>
        </div>
      </div>
      <img src={Logo} />
    </div>
  );
}
