import Stick from "components/Dashboard/Stick";
import ProfileAds from "components/ProfileComponents/ProfileAds";
import ProfileStickersAndMessages from "components/ProfileComponents/ProfileStickersAndMessages";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useAccountProfile } from "./useAccountProfiles";

const Stickers = () => {
  const navigateHook = useNavigate();
  const { accountStatus, accountProfile } = useAccountProfile();
  console.log(accountProfile);
  return (
    <div>
      <div className="lg:grid lg:grid-cols-12 gap-4 overflow-hidden">
        <div className="px-6 lg:p-0 lg:px-[22px] lg:pb-6 overflow-auto h-[93vh] col-span-8">
          <div className="you-may-know">
            <div className="flex items-start gap-[10px] mb-[35px]">
              <GoArrowLeft
                onClick={() => navigateHook(-1)}
                className="text-[20px] cursor-pointer"
              />
              <h3 className="text-[20px] font-normal">Stickers</h3>
            </div>
            <div className="may-know-box">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <Stick key={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block cursor-pointer col-span-1">
          <ProfileAds />
        </div>

        <div className="col-span-3 hidden lg:block">
          <ProfileStickersAndMessages />
        </div>
      </div>
    </div>
  );
};

export default Stickers;
