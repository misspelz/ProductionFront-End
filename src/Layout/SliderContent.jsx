import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { BsPersonCircle, BsTicketFill } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline, IoLogOutOutline } from "react-icons/io5";
import { MdOutlineHowToVote } from "react-icons/md";
import { ModalContext } from "Context/ModalContext";
import toast from "react-hot-toast";

const nav_item_style = {
  active:
    "flex space-x-4 text-[14px] font-medium items-center no-underline text-[#fff]",
  non_active:
    "flex space-x-4 text-[14px] font-light items-center no-underline text-[#c47efb]",
};

export const SliderContent = () => {
  const nav = useNavigate();
  const { setIsAuthenticated } = useContext(ModalContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("2gedaUserInfo");
    setIsAuthenticated(false);
    nav("/");
    toast.success("Successfully Logged Out");
  };

  return (
    <>
      <div className="flex flex-col space-y-10">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? nav_item_style["active"] : nav_item_style["non_active"]
          }
        >
          <BiSolidHome className="text-[23px]" />
          <div>Home</div>
        </NavLink>

        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive ? nav_item_style["active"] : nav_item_style["non_active"]
          }
        >
          <IoChatbubbleEllipsesOutline className="text-[23px]" />
          <div>Chats</div>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? nav_item_style["active"] : nav_item_style["non_active"]
          }
        >
          <BsPersonCircle className="text-[23px]" />
          <div>Profile</div>
        </NavLink>

        <NavLink
          to="/ticket"
          className={({ isActive }) =>
            isActive ? nav_item_style["active"] : nav_item_style["non_active"]
          }
        >
          <BsTicketFill className="text-[23px]" />
          <div>Tickets</div>
        </NavLink>

        <NavLink
          to="/Voting"
          className={({ isActive }) =>
            isActive ? nav_item_style["active"] : nav_item_style["non_active"]
          }
        >
          <MdOutlineHowToVote className="text-[23px]" />
          <div>Voting</div>
        </NavLink>

        <NavLink
          to="/stereo"
          className={({ isActive }) =>
            isActive ? nav_item_style["active"] : nav_item_style["non_active"]
          }
        >
          <MdOutlineHowToVote className="text-[23px]" />
          <div>Stereo</div>
        </NavLink>
      </div>

      <button
        className="flex items-center space-x-2 text-[15px] text-white"
        onClick={handleLogout}
      >
        <IoLogOutOutline className="text-[23px]" />
        <span>Sign out</span>
      </button>
    </>
  );
};
