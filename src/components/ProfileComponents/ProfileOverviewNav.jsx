import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

import DesktopProfileOptions from "./DesktopProfileOptions";
import optionIcon from "../../assets/profile_images/option-icon.svg";

const ProfileOverviewNav = ({ type }) => {
  const [desktopProfileOptions, setDesktopProfileOptions] = useState(false);

  const handleDesktopProfileOptions = () => {
    setDesktopProfileOptions(true);
  };

  return (
    <nav className="hidden lg:flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <button>
          <FaArrowLeft className="text-[#767676] text-[17px]" />
        </button>
        <span className="text-[#000] text-center text-[20px] font-normal">
          {type} Profile
        </span>
      </div>

      <div className="relative">
        <button>
          <img
            src={optionIcon}
            alt="Option"
            onClick={handleDesktopProfileOptions}
            className="w-[24px] h-[24px] hidden lg:block"
          />
        </button>

        {/* DESKTOP VERSION */}
        {desktopProfileOptions && (
          <DesktopProfileOptions
            setDesktopProfileOptions={setDesktopProfileOptions}
          />
        )}
      </div>
    </nav>
  );
};

export default ProfileOverviewNav;
