import { useEffect, useState } from "react";
import { MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { Checkbox } from "antd";
import { IoShieldCheckmark } from "react-icons/io5";
import { category, day, month, years } from "utils/helper";

import ModalWrapper from "../Modals/ModalWrapper";
import ModalHeader from "../Modals/ModalHeader";
import img from "../../assets/profile_images/profile-cover.png";
import mark from "../../assets/profile_images/mark.svg";
import ProfileInput from "../ProfileComponents/ProfileInput";
import ProfileEditOption from "../ProfileComponents/ProfileEditOption";
import ModalButton from "../Modals/ModalButton";
import BusinessSwitch from "./BusinessSwitch";
import CustomDropdown from "components/Modals/CustomDropdown";
import { useProfileDetails } from "pages/Profile/useProfileDetails";

const EditBusinessProfile = ({ onModalClose }) => {
  const [cover, setCover] = useState("");
  const [profile, setProfile] = useState("");
  const [addNumber, setAddNumber] = useState(1);
  const [available, setAvailable] = useState(false);
  const [data, setData] = useState({});

  const { profile: userInfo } = useProfileDetails();

  // using this to updating the checkbox for always available
  useEffect(() => {
    if (data.availability) {
      const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
        data?.availability;

      if (
        monday &&
        tuesday &&
        wednesday &&
        thursday &&
        friday &&
        saturday &&
        sunday
      ) {
        return setAvailable(true);
      }

      setAvailable(false);
    }
  }, [data?.availability]);

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

  const handleAddNumber = () => {
    setAddNumber((num) => (num !== 4 ? num + 1 : 4));
  };

  const handleAvailability = (e) => {
    setData((prev) => ({
      ...data,
      availability: {
        ...prev.availability,
        monday: !available,
        tuesday: !available,
        wednesday: !available,
        thursday: !available,
        friday: !available,
        saturday: !available,
        sunday: !available,
      },
    }));

    setAvailable((available) => !available);
  };

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(userInfo);

  const handleBusiness = () => {
    const formData = new FormData();

    const foundedData = new Date(
      `${data.date_year} ${data.date_month} ${data.date_day}`
    );

    const availability = JSON.stringify({
      monday: data.originalAvailability.monday,
      tuesday: data.originalAvailability.tuesday,
      wednesday: data.originalAvailability.wednesday,
      thursday: data.originalAvailability.thursday,
      friday: data.originalAvailability.friday,
      saturday: data.originalAvailability.saturday,
      sunday: data.originalAvailability.sunday,
    });

    const user = JSON.stringify({
      email: "",
      username: "",
      password: "",
    });

    formData.append("business_name", data.business_name);
    formData.append("category", 4);
    formData.append("address", data.address);
    formData.append("bio", data.bio);
    formData.append("founded_on", foundedData);
    formData.append("availability", availability);
    formData.append("user", user);

    console.log(Object.fromEntries(formData));
  };

  return (
    <ModalWrapper>
      <ModalHeader header="Edit Business Profile" onModalClose={onModalClose} />

      <form
        onSubmit={handleBusiness}
        className="h-[92vh] px-[20px] py-[10px] overflow-y-auto lg:h-[85vh]"
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
              Add business display picture
            </p>
          </div>
        </div>

        <div className="text-center text-[#4F0DA3] text-[15px] font-medium">
          Fill Business Details
        </div>

        <div className="flex flex-col gap-[20px] mt-[5rem]">
          {/* TOP */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[20px] w-full">
              <div className="w-full">
                <ProfileInput
                  placeholder="Profession or business name"
                  name="business_name"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <CustomDropdown
                  stallValue="Category"
                  menu={category}
                  name="category"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex gap-[20px] w-full">
              <ProfileEditOption header="Date Founded">
                <CustomDropdown
                  stallValue="Day"
                  menu={day}
                  name="date_day"
                  onChange={handleChange}
                />
                <CustomDropdown
                  stallValue="Month"
                  menu={month}
                  name="date_month"
                  onChange={handleChange}
                />
                <CustomDropdown
                  stallValue="Year"
                  menu={years}
                  name="date_year"
                  onChange={handleChange}
                />
              </ProfileEditOption>

              <div className="w-full">
                <label className="opacity-0">None</label>

                <ProfileInput
                  placeholder="Address"
                  onChange={handleChange}
                  name="address"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              {Array.from({ length: addNumber }, (_, i) => i + 1).map((num) => (
                <ProfileInput
                  placeholder={`Phone number ${num}`}
                  key={num}
                  name={`phone${num}`}
                  onChange={handleChange}
                />
              ))}

              <button
                onClick={handleAddNumber}
                className="self-end w-[166px] h-[53px] border border-gray-600 rounded-md flex justify-center items-center  gap-[1.5rem] !text-gray-500 text-[19px]"
              >
                <GoPlus /> Add another
              </button>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[20px] w-full">
              <ProfileInput
                placeholder="Create username"
                name="username"
                onChange={handleChange}
              />
              <ProfileInput
                placeholder="Create Password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="bottom_content edit_profile_input_and_textarea_container">
              <textarea
                placeholder="Bio"
                className="resize-none"
                name="bio"
                onChange={handleChange}
              ></textarea>

              <span className="self-end">Max 50 words</span>
            </div>
          </div>

          {/* BOTTOM */}
          <div>
            <div className="flex flex-col gap-[15px] py-[3rem]">
              <h1 className="text-[16px] font-normal text-[#000000cc]">
                Set Business availability
              </h1>

              <div className="flex items-center gap-[5px] text-[13px] font-light text-[#00000099]">
                <span>Always available</span>
                <Checkbox onChange={handleAvailability} checked={available} />
              </div>

              <div className="flex flex-col gap-[10xp]">
                <BusinessSwitch
                  day="Mon"
                  type="monday"
                  setData={setData}
                  checked={data?.availability?.monday}
                />
                <BusinessSwitch
                  day="Tue"
                  type="tuesday"
                  setData={setData}
                  checked={data?.availability?.tuesday}
                />
                <BusinessSwitch
                  day="Wed"
                  type="wednesday"
                  setData={setData}
                  checked={data?.availability?.wednesday}
                />
                <BusinessSwitch
                  day="Thur"
                  type="thursday"
                  setData={setData}
                  checked={data?.availability?.thursday}
                />
                <BusinessSwitch
                  day="Fri"
                  type="friday"
                  setData={setData}
                  checked={data?.availability?.friday}
                />
                <BusinessSwitch
                  day="Sat"
                  type="saturday"
                  setData={setData}
                  checked={data?.availability?.saturday}
                />
                <BusinessSwitch
                  day="Sun"
                  type="sunday"
                  setData={setData}
                  checked={data?.availability?.sunday}
                />
              </div>
            </div>

            <div className="flex justify-center items-center flex-col gap-[20px]">
              <p className="h-[40px] p-[10px] flex items-center gap-[6px] bg-[#f2e9fa] rounded-[3px] text-[12px] font-normal text-[#11132b]">
                <IoShieldCheckmark className="text-[19px]" />{" "}
                <span>
                  Your data is protected under the Standard International User
                  Act
                </span>
              </p>

              <ModalButton>Create business</ModalButton>
            </div>
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default EditBusinessProfile;
