import { useState } from "react";
import { MdOutlineAddPhotoAlternate, MdEdit } from "react-icons/md";
import ModalHeader from "./ModalHeader";
import ModalWrapper from "./ModalWrapper";
import img from "../../assets/profile_images/profile-cover.png";
import ProfileInput from "../ProfileComponents/ProfileInput";
import ProfileEditOption from "../ProfileComponents/ProfileEditOption";
import ModalButton from "./ModalButton";
import CustomDropdown from "./CustomDropdown";
import { day, genderData, month, years } from "utils/helper";
import { useEditProfile } from "pages/Profile/useEditProfile";
import ErrorMessage from "./ErrorMessage";
import Spinner from "components/Spinner";
import { useProfileDetails } from "pages/Profile/useProfileDetails";
import { mainURL } from "services/profile_business_API";

const EditProfile = ({ onModalClose }) => {
  const { profile: userInfo } = useProfileDetails();
  const { updateStatus, updating } = useEditProfile();

  const [cover, setCover] = useState("");
  const [profile, setProfile] = useState("");
  const [data, setData] = useState({
    first_name: userInfo?.data?.user?.first_name || "",
    last_name: userInfo?.data?.user?.last_name || "",
    occupation: userInfo?.data?.occupation || "",
    city: userInfo?.data?.address?.city || "",
    bio: userInfo?.data?.bio || "",
    day: new Date(userInfo?.data?.date_of_birth).getDate() || "",
    month: new Date(userInfo?.data?.date_of_birth).getMonth() + 1 || "",
    year: new Date(userInfo?.data?.date_of_birth).getFullYear() || "",
    gender: userInfo?.data?.gender || "",
    cover_image: userInfo?.data?.cover_image || "",
    profile_picture: userInfo?.data?.profile_picture || "",
  });
  const [bioValidate, setBioValidate] = useState(false);

  const handleCover = (event) => {
    const file = event.target.files[0];

    setData((prev) => ({
      ...prev,
      cover_image: file,
    }));

    setCover(URL.createObjectURL(file));
  };

  const handleProfile = (event) => {
    const file = event.target.files[0];

    setData((prev) => ({
      ...prev,
      profile_picture: file,
    }));

    setProfile(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setBioValidate(false);

    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bioChar = data.bio.split(" ");

    if (bioChar.length > 50) {
      return setBioValidate(true);
    }

    const dateOfBirth = `${data.year}-${data.month}-${data.day}`;

    /**
     * Inserting data
     */

    const formData = new FormData();

    formData.append("first_name", data?.first_name);
    formData.append("last_name", data?.last_name);
    formData.append("city", data?.address?.city);
    formData.append("date_of_birth", dateOfBirth);
    formData.append("bio", data.bio);
    formData.append("occupation", data.occupation);
    formData.append("gender", "Male"); //data?.gender
    formData.append("profile_picture", data.profile_picture);
    formData.append("cover_image", data.cover_image);

    updating(formData);
  };

  return (
    <ModalWrapper>
      <ModalHeader header="Edit profile" onModalClose={onModalClose} />

      <form
        className="overflow-y-auto lg:overflow-y-hidden px-[20px] py-[10px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <div className="relative w-full h-[150px] shadow-md">
            <div className="w-full h-full">
              {cover ? (
                <img
                  src={cover}
                  alt="User"
                  className="w-full h-full object-cover "
                />
              ) : (
                <div
                  className={`w-full h-full flex justify-center items-center flex-col text-white gap-[10px]`}
                  style={{
                    background: data?.cover_image
                      ? `url('${mainURL}${data?.cover_image}')`
                      : "#4f0da3",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <MdOutlineAddPhotoAlternate className="text-[20px]" />
                  <h2 className="text-[14px]">Add cover photo</h2>
                </div>
              )}
            </div>

            <input
              type="file"
              id="cover"
              accept="image/*"
              className="hidden"
              onChange={handleCover}
            />
            <label
              htmlFor="cover"
              className="absolute right-[6px] bottom-[6px] w-[32px] h-[32px] bg-[#ff8a15] cursor-pointer rounded-full flex justify-center items-center text-white text-[18px]"
            >
              <MdEdit />
            </label>
          </div>

          <div className="-mt-[7.5rem] h-[200px] flex justify-center items-center flex-col gap-[13px]">
            <div className="relative w-[130px] h-[130px]">
              {profile ? (
                <img
                  src={profile}
                  alt="Main"
                  className="absolute w-full h-full object-cover rounded-full"
                />
              ) : (
                <div
                  className="w-full h-full rounded-[80%] border-[#4f0da3] bg-[#f3f3f3]"
                  style={{
                    background: data?.profile_picture
                      ? `url('${mainURL}${data?.profile_picture}')`
                      : "#4f0da3",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              )}

              <input
                type="file"
                id="profile"
                accept="image/*"
                className="hidden"
                onChange={handleProfile}
              />
              <label
                htmlFor="profile"
                className="absolute right-[6px] bottom-[6px] w-[32px] h-[32px] bg-[#ff8a15] rounded-full cursor-pointer flex justify-center items-center text-white text-[18px]"
              >
                <MdEdit />
              </label>
            </div>

            <p className="text-[14px] font-light">
              Add profile picture (you can select up to 5)
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="edit_profile_content_direct_wrapper">
            <ProfileInput
              placeholder="First name"
              name="first_name"
              onChange={handleChange}
              value={data?.first_name || ""}
            />
            <ProfileInput
              placeholder="Last name"
              name="last_name"
              onChange={handleChange}
              value={data?.last_name || ""}
            />
          </div>

          <div className="edit_profile_content_direct_wrapper">
            <ProfileInput
              placeholder="Occupation"
              name="occupation"
              onChange={handleChange}
              value={data?.occupation || ""}
            />
            <ProfileInput
              placeholder="Current city"
              name="city"
              onChange={handleChange}
              value={data?.city || ""}
            />
          </div>

          <div className="edit_profile_content_direct_wrapper">
            <ProfileEditOption header="Date of Birth">
              <CustomDropdown
                stallValue={data?.day || "Day"}
                menu={day}
                name="day"
                setData={setData}
              />
              <CustomDropdown
                stallValue={data?.month || "Month"}
                menu={month}
                name="month"
                setData={setData}
              />
              <CustomDropdown
                stallValue={data?.year || "Year"}
                menu={years}
                name="year"
                setData={setData}
              />
            </ProfileEditOption>

            <ProfileEditOption header="Gender">
              <CustomDropdown
                stallValue={data?.gender || "Gender"}
                menu={genderData}
                name="gender"
                setData={setData}
              />
            </ProfileEditOption>
          </div>

          <div className="edit_profile_input_and_textarea_container">
            <textarea
              placeholder="Bio"
              onChange={handleChange}
              name="bio"
              className="!w-full h-[80px] resize-none lg:h-[70px] xl:h-[90px]"
              value={data?.bio}
            ></textarea>

            <span className="self-end">Max 50 words</span>
          </div>
          {bioValidate && <ErrorMessage>Maximum of 50 words</ErrorMessage>}

          <ModalButton>
            {updateStatus === "pending" ? <Spinner /> : "Save & Continue"}
          </ModalButton>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default EditProfile;
