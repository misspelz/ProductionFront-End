import "./profile.css";
import { useProfileDetails } from "pages/Profile/useProfileDetails";
import ProfileOverviewDetails from "./ProfileOverviewDetails";
import ProfileOverviewNav from "./ProfileOverviewNav";
import ads from "../../assets/profile_images/Jumia-Celebrate-the-Game.png";
import ProfileActivities from "./ProfileActivities";
import ContainerLoading from "components/ContainerLoading";

const ProfileOverview = () => {
  const { profileStatus, profile, error } = useProfileDetails();

  return (
    <div className="lg:p-[5px]">
      {profileStatus === "pending" ? (
        <ContainerLoading height={500} unit="px" />
      ) : error ? (
        "Please check your network"
      ) : (
        <>
          <div className="flex flex-col gap-[10px] py-[15px] px-[10px]">
            <ProfileOverviewNav type="Personal" />
            <ProfileOverviewDetails data={profile.data} />
          </div>

          <div className="hidden lg:block">
            <img src={ads} alt="Ads" className="w-full h-full object-contain" />
          </div>

          <div className="">
            <ProfileActivities />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileOverview;
