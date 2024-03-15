import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

import DesktopProfileOptions from "./DesktopProfileOptions";
import MobileProfileOptions from "./MobileProfileOptions";
// import backArrow from '../../assets/profile_images/back-arrow.svg';
import optionIcon from "../../assets/profile_images/option-icon.svg";
import mobileOption from "../../assets/profile_images/mobileOptionIcon.svg";

const ProfileOverviewNav = ({ type }) => {
  const [desktopProfileOptions, setDesktopProfileOptions] = useState(false);
  const [mobileProfileOptions, setMobileProfileOptions] = useState(false);

  const handleDesktopProfileOptions = () => {
    setDesktopProfileOptions(true);
  };

  const handleMobileProfileOptions = () => {
    setMobileProfileOptions(true);
  };

  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <button>
          <FaArrowLeft className="text-[#767676] text-[17px]" />
        </button>
        <span className="text-[#000] text-center text-[20px] font-normal">
          {type} Profile
        </span>
      </div>

      {/* <div className="lg:hidden">Profile</div> */}

      <div className="relative">
        <button>
          <img
            src={optionIcon}
            alt="Option"
            onClick={handleDesktopProfileOptions}
            className="w-[24px] h-[24px] hidden lg:block"
          />
          <img
            src={mobileOption}
            alt="Option"
            onClick={handleMobileProfileOptions}
            className="lg:hidden"
          />
        </button>

        {/* DESKTOP VERSION */}
        {desktopProfileOptions && (
          <DesktopProfileOptions
            setDesktopProfileOptions={setDesktopProfileOptions}
          />
        )}
      </div>

      {/* MOBILE VERSION */}
      <MobileProfileOptions
        mobileProfileOptions={mobileProfileOptions}
        setMobileProfileOptions={setMobileProfileOptions}
      />
    </nav>
  );
};

export default ProfileOverviewNav;
