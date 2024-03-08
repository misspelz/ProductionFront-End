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

const EditProfile = ({ onModalClose }) => {
  const [data, setData] = useState({});
  const [cover, setCover] = useState("");
  const [profile, setProfile] = useState("");
  const [bioValidate, setBioValidate] = useState(false);
  const { updateStatus, updating } = useEditProfile();

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
      media: file,
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

    const formData = new FormData();

    const user = JSON.stringify({
      first_name: data.first_name,
      last_name: data.last_name,
    });

    const address = JSON.stringify({
      city: data.city,
    });

    const dateOfBirth = JSON.stringify(
      new Date(`${data.year} ${data.month} ${data.day}`)
    );

    formData.append("media", data.media);
    formData.append("cover_image", data.cover_image);
    formData.append("user", user);
    formData.append("address", address);
    formData.append("bio", data.bio);
    formData.append("occupation", data.occupation);
    formData.append("date_of_birth", dateOfBirth);
    formData.append("gender", data.gender);

    console.log(Object.fromEntries(formData));

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
                  src={cover ? cover : img}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#4f0da3] flex justify-center items-center flex-col text-white gap-[10px]">
                  <MdOutlineAddPhotoAlternate className="text-[20px]" />
                  <h2 className="text-[14px]">Add cover photo</h2>
                </div>
              )}
            </div>

            <input
              type="file"
              id="cover"
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
                <div className="w-full h-full rounded-[80%] border-[#4f0da3] bg-[#f3f3f3]"></div>
              )}

              <input
                type="file"
                id="profile"
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
            />
            <ProfileInput
              placeholder="Last name"
              name="last_name"
              onChange={handleChange}
            />
          </div>

          <div className="edit_profile_content_direct_wrapper">
            <ProfileInput
              placeholder="Occupation"
              name="occupation"
              onChange={handleChange}
            />
            <ProfileInput
              placeholder="Current city"
              name="city"
              onChange={handleChange}
            />
          </div>

          <div className="edit_profile_content_direct_wrapper">
            <ProfileEditOption header="Date of Birth">
              <CustomDropdown
                stallValue="Day"
                menu={day}
                name="day"
                setData={setData}
              />
              <CustomDropdown
                stallValue="Month"
                menu={month}
                name="month"
                setData={setData}
              />
              <CustomDropdown
                stallValue="Year"
                menu={years}
                name="year"
                setData={setData}
              />
            </ProfileEditOption>

            <ProfileEditOption header="Gender">
              <CustomDropdown
                stallValue="Gender"
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
              className="!w-full h-24 resize-none lg:h-[100px] xl:h-[200px]"
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
