import "./style.css";
import ProfileOverview from "../../components/ProfileComponents/ProfileOverview";
import ProfileAds from "../../components/ProfileComponents/ProfileAds";
import ProfileStickersAndMessages from "../../components/ProfileComponents/ProfileStickersAndMessages";

import { ProfileHeader } from "Layout/FeaturesMobileHeaders/ProfileHeader";

const Profile = () => {
  return (
    <div className="lg:grid lg:grid-cols-12 gap-4 overflow-hidden">
      <ProfileHeader type="Personal Profile" navigate="/" />

      <div className="px-6 lg:p-0 lg:pb-6 overflow-auto h-[93vh] col-span-8">
        <ProfileOverview />
      </div>

      <div className="hidden lg:block cursor-pointer col-span-1">
        <ProfileAds />
      </div>

      <div className="col-span-3 hidden lg:block">
        <ProfileStickersAndMessages />
      </div>
    </div>
  );
};

export default Profile;
