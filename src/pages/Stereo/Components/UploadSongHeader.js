import React from "react";
import Arrow from "../Assets/arrowback.svg";
import Search from "../Assets/NEW full color-1 1.svg";
import Music from "../Assets/file-music.svg";
import Navbar from "../Layout/Navbar";
import DesktopNavbar from "../Layout/DesktopNavbar";

export default function UploadSongHeader({title, link}) {
  return (
    <div
      className="fixed w-full z-10 bg-white top-0"
      style={{ fontFamily: "Ubuntu" }}>
      <div
        className="flex lg:hidden xl:hidden"
        style={{
          justifyContent: "space-between",
          // display: "flex",
          fontFamily: "Ubuntu",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <button style={{ widows: 24, height: 24 }}>
          <img src={Arrow} />
        </button>

        <p style={{ fontSize: 20, fontWeight: "700" }} fontSize={"20px"}>
          {title ?title : "Upload" }
        </p>

        <div style={{ alignItems: "center", display: "flex", gap: 10 }}>
          <button style={{ width: 40, height: 40 }}>
            <img src={Search} width={40} height={40} />
          </button>
        </div>
      </div>
      <div
        style={{
          borderBottomWidth: 0.1,
          borderColor: "#E4E4E4",
          width: "100%",
        }}
      />
      <div className="hidden lg:block xl:block">
        {/* <Navbar /> */}
        <DesktopNavbar />
      </div>
    </div>
  );
}
