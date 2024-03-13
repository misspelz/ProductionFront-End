import "./style.css";
import ProfileOverview from "../../components/ProfileComponents/ProfileOverview";
import ProfileAds from "../../components/ProfileComponents/ProfileAds";
import ProfileStickersAndMessages from "../../components/ProfileComponents/ProfileStickersAndMessages";

const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile_overview">
        <ProfileOverview heading="Personal" />
      </div>

      <div className="profile_ads">
        <ProfileAds />
      </div>

      <div className="profile_users">
        <ProfileStickersAndMessages />
      </div>
    </div>
  );
};

export default Profile;
