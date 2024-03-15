import "./style.css";
import ProfileOverview from "../../components/ProfileComponents/ProfileOverview";
import ProfileAds from "../../components/ProfileComponents/ProfileAds";
import ProfileStickersAndMessages from "../../components/ProfileComponents/ProfileStickersAndMessages";

const Profile = () => {
  return (
    <div className="grid grid-cols-12 gap-4 overflow-hidden">
      <div className="overflow-auto h-[90vh] col-span-8">
        <ProfileOverview />
      </div>

      <div className="cursor-pointer col-span-1">
        <ProfileAds />
      </div>

      <div className="col-span-3">
        <ProfileStickersAndMessages />
      </div>
    </div>
  );
};

export default Profile;
