import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import cover from "../../assets/profile_images/cover-photo.jpeg";
import mainProfile from "../../assets/profile_images/main-profile.webp";
import { mainURL } from "services/profile_business_API";
import { Link } from "react-router-dom";

const ProfileOverviewDetails = ({ data }) => {
  const [profileState, setProfileState] = useState(false);

  const handleProfileImage = () => {
    setProfileState(true);
  };

  const {
    cover_image,
    profile_picture,
    user,
    stickers,
    sticking,
    address,
    occupation,
  } = data;

  const name = user?.first_name
    ? `${user.first_name} ${user.last_name}`
    : user.email;

  const job = occupation ? occupation : "Unemployed";

  const addr =
    address.city && address?.country
      ? `${address.city}, ${address?.country}`
      : "Address unknown";

  return (
    <div className="px-0 lg:px-[20px]">
      {profileState && (
        <div className="user_profile_image">
          <div className="cancel_btn">
            <button onClick={() => setProfileState(false)}>
              <IoArrowBackOutline className="arrow_back" />
            </button>
          </div>

          <div className="user_image_container">
            <img
              src={
                profile_picture ? `${mainURL}${profile_picture}` : mainProfile
              }
              alt="Profile"
            />
          </div>
        </div>
      )}

      <div className="cover_image border">
        <img
          src={cover_image ? `${mainURL}${cover_image}` : cover}
          alt="Cover"
        />
      </div>

      <div className="profile_details">
        <img
          src={profile_picture ? `${mainURL}${profile_picture}` : mainProfile}
          alt="Profile"
          onClick={handleProfileImage}
          className="border"
        />

        <h1>{name}</h1>

        <div className="location_expertise">
          <span>{job}</span>
          <span>{addr}</span>
        </div>

        <div className="profile_details_btns">
          <Link to={"/profile/stickers"} className="stickers no-underline">
            <span>Stickers</span>
            <span>{stickers}</span>
          </Link>

          <div className="stickers">
            <span>Sticking</span>
            <span>{sticking}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverviewDetails;
