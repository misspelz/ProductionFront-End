import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import logo_2geda from "./../assets/profile_images/2geda_logo.png";

export const Header = () => {
  return (
    <header className="app_header shadow-lg">
      <div>
        <img src={logo_2geda} alt="2geda Logo" />
      </div>

      <div className="flex items-center space-x-8">
        <form className="flex p-2 space-x-2 rounded-[8px] border border-gray-400 focus-within:bg-slate-200 transition-colors duration-300">
          <input
            type="text"
            placeholder="Search Name, Place and Jobs"
            className="w-[400px] h-8 background-transparent border-none outline-none text-[13px] text-gray-700 font-light placeholder:text-[13px] placeholder:text-gray-700 placeholder:font-light"
          />

          <button>
            <FaMagnifyingGlass className="text-[16px] text-gray-700" />
          </button>
        </form>

        <div className="relative">
          <div>
            <FaRegBell className="text-[25px]" />
          </div>

          <div className="w-[17px] h-[17px] rounded-full bg-[#4f0da3] absolute -top-[2px] -right-[4px] text-white flex items-center justify-center">
            8
          </div>
        </div>

        <button className="flex flex-col space-y-[2px] items-center">
          <img
            src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21pbGluZyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <span className="text-[10px] font-extralight">My Profile</span>
        </button>
      </div>
    </header>
  );
};
