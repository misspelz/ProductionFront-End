import { useEffect, useState } from "react";
import "./style.css";
import ConnectSearch from "../../components/ConnectComp/ConnectSearch";
import ProfileStick from "../../components/Commons/ProfileStick";
import SearchBusinessCard from "../../components/SearchComp/SearchBusinessCard";
import BusinessStick from "../../components/Commons/BusinessStick";
import ClamBuss from "../BussinessDirectory/ClamBuss";
import logo from "../../assets/2gedalogo.svg";
import AD1 from "assets/images/AD1.png";
import AD2 from "assets/images/AD2.png";
import user1 from "assets/userconnect.svg";
import user2 from "assets/connectuser2.svg";
import user3 from "assets/connectuser3.svg";
import { default as AD3, default as AD4 } from "assets/images/AD3.png";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import RightBar from "components/RightBar";
import { NearbyUsersApi } from "api/services/connect";
import Spin from "components/Spin/Spin";
import toast from "react-hot-toast";

const Data = [
  {
    text: "People nearby",
  },
  {
    text: "Businesses nearby",
  },
];

const Connect = () => {
  const [activeTab, setActiveTab] = useState("People nearby");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isBussinessOpen, setIsBussinessOpen] = useState(false);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [isClaimModalOpenOne, setIsClaimModalOpenOne] = useState(false);
  const [isClaimModalOpenTwo, setIsClaimModalOpenTwo] = useState(false);
  const [isClaimModalOpenThree, setIsClaimModalOpenThree] = useState(false);
  const [isClaimModalOpenDone, setIsClaimModalOpenDone] = useState(false);

  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [NearbyUsers, setNearbyUsers] = useState([]);
  console.log("nearbyUsers", NearbyUsers);

  const images = [AD1, AD2, AD3, AD4];

  const handleClaimClickDone = (e) => {
    e.preventDefault();
    setIsClaimModalOpenDone(true);
  };

  const handleClaimClickCloseDone = () => {
    setIsClaimModalOpenDone(false);
    setIsClaimModalOpenThree(false);
    setIsClaimModalOpenTwo(false);
    setIsClaimModalOpenOne(false);
    setIsClaimModalOpen(false);
  };

  const handleClaimClickThree = (e) => {
    e.preventDefault();
    setIsClaimModalOpenThree(true);
  };

  const handleClaimClickCloseThree = () => {
    setIsClaimModalOpenThree(false);
  };

  const handleClaimClickTwo = (e) => {
    e.preventDefault();
    setIsClaimModalOpenTwo(true);
  };

  const handleClaimClickCloseTwo = () => {
    setIsClaimModalOpenTwo(false);
  };

  const handleClaimClickOne = (e) => {
    e.preventDefault();
    setIsClaimModalOpenOne(true);
  };

  const handleClaimClickCloseOne = () => {
    setIsClaimModalOpenOne(false);
  };

  const handleClaimClick = () => {
    setIsClaimModalOpen(true);
  };

  const handleClaimClickClose = () => {
    setIsClaimModalOpen(false);
  };

  const handleBussinessClose = () => {
    setIsBussinessOpen(false);
  };

  const handleBussinessClick = () => {
    setIsBussinessOpen(true);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  const handleTabClick = (text) => {
    setActiveTab(text);
  };

  // Nearby users
  const nearbyUsers = async () => {
    try {
      const res = await NearbyUsersApi();
      if (res.data.status) {
        setNearbyUsers(res.data.data);
      }
    } catch (error) {
      console.log("nearbyUsers", error);
      toast.error(
        error.response.data.message ||
          error.response.message ||
          "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  const Users = NearbyUsers.map((user, index) => (
    <div key={user.id}>
      <div className="lg:text-[20px]">
        {user?.user?.first_name || "Faith"} {user?.user?.last_name || "Moses"}
      </div>
      <div className="lg:text-[14px] lg:text-secondaryColor">
        {user?.user?.email}
      </div>
      <div className="font-thin text-[14px] lg:text-[16px]">
        @{user?.user?.first_name || "mosesfaith"}
      </div>
      <div className="font-thin text-[14px] lg:text-[16px]">
        {user?.address?.country || "Abeokuta"}, {user?.distance || "120"}km from
        you
      </div>
      {user?.bio && (
        <div className="font-thin text-[14px] lg:text-[16px]">
          {user?.bio || "No one knows tomorrow!"}
        </div>
      )}
    </div>
  ));

  const NextImage = () => {
    setCurrentUserIndex((prevIndex) =>
      prevIndex === NearbyUsers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const PrevImage = () => {
    setCurrentUserIndex((prevIndex) =>
      prevIndex === 0 ? NearbyUsers.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    nearbyUsers();
  }, []);

  // if (loading) {
  //   return <Spin />;
  // }

  return (
    <>
      <ClamBuss
        handleClaimClickDone={handleClaimClickDone}
        handleClaimClickCloseDone={handleClaimClickCloseDone}
        handleClaimClickThree={handleClaimClickThree}
        handleClaimClickCloseThree={handleClaimClickCloseThree}
        handleClaimClickTwo={handleClaimClickTwo}
        handleClaimClickCloseTwo={handleClaimClickCloseTwo}
        handleClaimClickOne={handleClaimClickOne}
        handleClaimClickCloseOne={handleClaimClickCloseOne}
        handleClaimClickClose={handleClaimClickClose}
        handleClaimClick={handleClaimClick}
        isClaimModalOpen={isClaimModalOpen}
        isClaimModalOpenOne={isClaimModalOpenOne}
        isClaimModalOpenTwo={isClaimModalOpenTwo}
        isClaimModalOpenThree={isClaimModalOpenThree}
        isClaimModalOpenDone={isClaimModalOpenDone}
      />
      <div className="main-containe bus-box-con">
        <div className="left-side-container buss-all-container">
          {isProfileOpen && (
            <ProfileStick handleProfileClose={handleProfileClose} />
          )}
          {isBussinessOpen && (
            <BusinessStick handleBussinessClose={handleBussinessClose} />
          )}
          {!isProfileOpen && !isBussinessOpen && (
            <>
              <div>
                <div className="head-line bus-dir flex justify-between w-full items-center mb-[16px] lg:hidden">
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" />
                    <div>Connect with other users</div>
                  </div>
                </div>

                <div className="flex lg:hidden">
                  <ConnectSearch />
                </div>

                <div className="hidden lg:flex ">
                  <ConnectSearch />
                </div>

                <div className="mt-[16px]">
                  <img
                    src={images[currentIndex]}
                    alt="banner"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="select-what-display w-dis">
                {Data.map((item, index) => (
                  <div
                    key={index}
                    className={`tab-item ${
                      item.text === activeTab
                        ? "sel-act connect-tab"
                        : "anot-wid add-bor  connect-tab"
                    }`}
                    onClick={() => handleTabClick(item.text)}
                  >
                    <div className="dis-sel-name conn-t-txt">{item.text}</div>
                  </div>
                ))}
              </div>

              {activeTab === "People nearby" && loading ? (
                <Spin />
              ) : (
                <div className="bg-[#00000099]">
                  <div className="flex relative w-full justify-center">
                    {NearbyUsers !== NearbyUsers.length - 1 && (
                      <div className="text-[40px] absolute top-[45%] right-0 lg:right-40 z-[999]">
                        <IoIosArrowDroprightCircle
                          size={40}
                          color="#fff"
                          onClick={NextImage}
                          className="cursor-pointer"
                        />
                      </div>
                    )}
                    <div className="relative">
                      <img
                        src={
                          NearbyUsers[currentUserIndex]?.cover_image || user1
                        }
                        alt="connect-user-images"
                        className="w-full lg:my-20 rounded-[10px]"
                      />
                      <div className="absolute bottom-40 left-4 right-0   text-white text-[20px] font-bold text-left">
                        {Users[currentUserIndex]}
                      </div>
                      <div className="flex absolute bottom-10 transform translate-x-[5%]  lg:translate-x-[28%] gap-3 lg:gap-6">
                        <div className="bg-primaryColor text-white w-[140px] h-[50px] rounded-[30px] flex items-center justify-center text-[16px] cursor-pointer">
                          Chat
                        </div>
                        <div className="bg-secondaryColor text-white w-[140px] h-[50px] rounded-[30px] flex items-center justify-center text-[16px] cursor-pointer">
                          Stick
                        </div>
                      </div>
                    </div>
                    {NearbyUsers !== 0 && (
                      <div className="text-[40px] absolute top-[45%] left-0 lg:left-40 z-[999] ">
                        <IoIosArrowDropleftCircle
                          size={40}
                          color="#fff"
                          onClick={PrevImage}
                          className="cursor-pointer"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "Businesses nearby" ? (
                <div className="csss">
                  <div className=" you-may-know-bo">
                    <div className="may-know-box">
                      <SearchBusinessCard
                        handleClaimClick={handleClaimClick}
                        handleBussinessClick={handleBussinessClick}
                      />
                      <SearchBusinessCard
                        handleClaimClick={handleClaimClick}
                        handleBussinessClick={handleBussinessClick}
                      />
                      <SearchBusinessCard
                        handleClaimClick={handleClaimClick}
                        handleBussinessClick={handleBussinessClick}
                      />
                      <SearchBusinessCard
                        handleClaimClick={handleClaimClick}
                        handleBussinessClick={handleBussinessClick}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>

        <div className="w-[70%]">
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default Connect;
