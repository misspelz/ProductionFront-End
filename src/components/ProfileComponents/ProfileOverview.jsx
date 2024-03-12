import "./profile.css";
import { useProfileDetails } from "pages/Profile/useProfileDetails";
import ProfileOverviewDetails from "./ProfileOverviewDetails";
import ProfileOverviewNav from "./ProfileOverviewNav";
import ads from "../../assets/profile_images/Jumia-Celebrate-the-Game.png";
import ProfileActivities from "./ProfileActivities";
import ContainerLoading from "components/ContainerLoading";

const ProfileOverview = ({ heading }) => {
  const { profileStatus, profile, error } = useProfileDetails();

  return (
    <div className="overview">
      {profileStatus === "pending" ? (
        <ContainerLoading height={500} unit="px" />
      ) : error ? (
        "Please check your network"
      ) : (
        <>
          <div className="profile_top_content">
            <ProfileOverviewNav type={heading} />
            <ProfileOverviewDetails data={profile.data} />
          </div>

          <div className="profile_middle_content">
            <img src={ads} alt="Ads" />
          </div>

          <div className="profile_bottom_content">
            <ProfileActivities />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileOverview;
