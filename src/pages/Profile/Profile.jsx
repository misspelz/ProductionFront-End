import "./style.css";
import ProfileOverview from "../../components/ProfileComponents/ProfileOverview";
import ProfileAds from "../../components/ProfileComponents/ProfileAds";
import ProfileStickersAndMessages from "../../components/ProfileComponents/ProfileStickersAndMessages";

const Profile = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-4 overflow-hidden">
      <div className="overflow-auto h-[90vh] col-span-8">
        <ProfileOverview />
      </div>

      <div className="hidden lg:block cursor-pointer col-span-1">
        <ProfileAds />
      </div>

      <div className="col-span-3 hidden lg:block ">
        <ProfileStickersAndMessages />
      </div>
    </div>
  );
};

export default Profile;
