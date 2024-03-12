import React from "react";
import { BiSolidHome } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Home from "../Assets/House.svg";
import Connect from "../Assets/UsersThree.svg";
import Commerce from "../Assets/Storefront.svg";
import Directory from "../Assets/bxs_book.svg";
import Chat from "../Assets/Frame 232.svg";
import Profile from "../Assets/UserCircle.svg";
import Tickets from "../Assets/icon-park-solid_tickets-two.svg";
import Live from "../Assets/material-symbols_live-tv-sharp.svg";
import Stereo from "../Assets/majesticons_music.svg";
import Tv from "../Assets/ph_television-fill.svg";
import Vote from "../Assets/fa-solid_vote-yea.svg";
import Education from "../Assets/bi_book.svg";
import SignOut from "../Assets/SignOut.svg";

export default function Sider() {
  return (
    <div className="bg-[#4F0DA3] h-full fixed w-[50%] z-40 sm:w-1/6 top-0 left-0">
      <div class="px-4 py-6">
        <ul class="space-y-1 mt-20">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Home} />
              <div className="text-white font-semibold text-base">Home</div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Connect} />
              <div className="text-[#C47EFB] font-light text-base">Connect</div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Commerce} />
              <div className="text-[#C47EFB] font-light text-base">
                Commerce
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Directory} />
              <div className="text-[#C47EFB] font-light text-base">
                Business Directory
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Chat} />
              <div className="text-[#C47EFB] font-light text-base">Chat</div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Profile} />
              <div className="text-[#C47EFB] font-light text-base">Profile</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Tickets} />
              <div className="text-[#C47EFB] font-light text-base">Tickets</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Live} />
              <div className="text-[#C47EFB] font-light text-base">Live</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Stereo} />
              <div className="text-[#C47EFB] font-light text-base">Stereo</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Tv} />
              <div className="text-[#C47EFB] font-light text-base">Tv</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Vote} />
              <div className="text-[#C47EFB] font-light text-base">Voting</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle"
                  : "side-item items-center flex align-middle"
              }>
              <img src={Education} />
              <div className="text-[#C47EFB] font-light text-base">
                Education
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_link side-item flex items-center align-middle mt-10"
                  : "side-item items-center flex align-middle"
              }>
              <img src={SignOut} />
              <div className="text-[#fff] font-normal text-base">Sign out</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
