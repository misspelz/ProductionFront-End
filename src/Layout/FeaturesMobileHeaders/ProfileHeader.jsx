import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

import MobileProfileOptions from "components/ProfileComponents/MobileProfileOptions";
import { useNavigate } from "react-router-dom";

export const ProfileHeader = ({ type, navigate }) => {
  const [mobileProfileOptions, setMobileProfileOptions] = useState(false);
  const navigateHook = useNavigate();

  const handleMobileProfileOptions = () => {
    setMobileProfileOptions(true);
  };

  return (
    <>
      <div className="bg-[#4f0da3] w-full flex justify-between items-center h-[8vh] text-white px-8 lg:hidden">
        <div onClick={() => navigateHook(navigate)}>
          <GoArrowLeft className="text-[25px] cursor-pointer" />
        </div>

        <div className="text-[20px]">{type}</div>

        <div onClick={handleMobileProfileOptions}>
          <BsThreeDots className="text-[25px] cursor-pointer" />
        </div>
      </div>

      {/* MOBILE VERSION */}
      <MobileProfileOptions
        mobileProfileOptions={mobileProfileOptions}
        setMobileProfileOptions={setMobileProfileOptions}
      />
    </>
  );
};
