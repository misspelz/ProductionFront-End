import { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
// import DashMessage from "../../components/Dashboard/DasMess";
// import Follower from "../../components/Dashboard/Follower";
import "./style.css";
import ConnectSearch from "../../components/ConnectComp/ConnectSearch";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GiShare } from "react-icons/gi";
import ProfileStick from "../../components/Commons/ProfileStick";
import SearchBusinessCard from "../../components/SearchComp/SearchBusinessCard";
import BusinessStick from "../../components/Commons/BusinessStick";
import ClamBuss from "../BussinessDirectory/ClamBuss";
import logo from "../../assets/2gedalogo.svg";
import filter from "../../assets/filter.svg";
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

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleTabClick = (text) => {
    setActiveTab(text);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  // const connectUsersImages = [user1, user2, user3];
  const connectUsersImages = [
    { src: user1, text: "Mike Ade" },
    { src: user2, text: "Mercy John" },
    { src: user3, text: "Ade Pelz" },
  ];

  const NextImage = () => {
    setCurrentUserIndex((prevIndex) =>
      prevIndex === connectUsersImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const PrevImage = () => {
    setCurrentUserIndex((prevIndex) =>
      prevIndex === 0 ? connectUsersImages.length - 1 : prevIndex - 1
    );
  };

  const images = [AD1, AD2, AD3, AD4];

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

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
                  {/* <img src={filter} alt="filter-icon" /> */}
                </div>

                <div className="flex lg:hidden">
                  <ConnectSearch />
                </div>

                <div className="hidden lg:flex ">
                  <ConnectSearch />
                  {/* <div className="p-3 bg-white rounded-[10px]">
                    <img src={filter} alt="filter-icon" />
                  </div> */}
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

              {activeTab === "People nearby" ? (
                <div className="bg-[#00000099]">
                  <div className="flex relative w-full">
                    {currentUserIndex !== connectUsersImages.length - 1 && (
                      <div className="text-[40px] absolute top-[45%] right-0 lg:right-40 z-[999]">
                        <IoIosArrowDroprightCircle
                          size={40}
                          color="#fff"
                          onClick={NextImage}
                        />
                      </div>
                    )}
                    <div className="relative">
                      <img
                        src={connectUsersImages[currentUserIndex].src}
                        alt="connect-user-images"
                        className="w-full"
                      />
                      <div className="absolute bottom-20 left-0 right-0   text-white text-[20px] font-bold text-left">
                        {connectUsersImages[currentUserIndex].text}
                      </div>
                    </div>
                    {currentUserIndex !== 0 && (
                      <div className="text-[40px] absolute top-[45%] left-0 lg:left-40 z-[999]">
                        <IoIosArrowDropleftCircle
                          size={40}
                          color="#fff"
                          onClick={PrevImage}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : null}

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

        <div className="flex gap-[20px] w-[50%]">
          <div className="middle-side-container mvmm w-full">
            <img src="images/ads1.png" alt="" className="w-full" />
          </div>
          <div className="right-side-container e-full">
            <SelectCategory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
