import React from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "../Assets/logo.svg";
import notification from "../Assets/carbon_notification.svg";

export default function DesktopNavbar() {
  return (
    // <div>
    <header
      className="p-4 bg-white w-full z-20 sticky top-0"
      style={{
        boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
        overflowX: "hidden",
      }}>
      <div className="flex  justify-between h-9 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2">
          <img src={Logo} />
        </a>
        <div
          className="items-center  hidden space-x-3 md:flex
        ">
          <div className="flex align-middle items-center">
            <div
              class="pt-2 relative mx-auto text-gray-600"
              // style={{ marginRight: 71 }}
            >
              <input
                class="border-2 border-gray-300 w-auto bg-white pl-2 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                style={{ width: "433px", height: "36px" }}
                placeholder="Search Name, Place and Jobs"
              />
              <button type="submit" class="absolute right-0 bottom-3 mt-5 mr-4 w-[17.5] h-[17.5]">
                <CiSearch size={17.5} />
              </button>
            </div>
          </div>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <img src={notification} style={{ width: 32, height: 32 }} />
          <div className="flex flex-col align-middle items-center">
            <img
              className="rounded-full"
              src={require("../Assets/profile.jpeg")}
              style={{ width: "40px", height: "40px", flexShrink: 0 }}
            />
            <span
              style={{
                color: "rgba(0, 0, 0, 0.80)",
                fontFamily: "Ubuntu",
                fontSize: "9px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}>
              My Profile
            </span>
          </div>
        </div>
      </div>
    </header>
    // </div>
  );
}
