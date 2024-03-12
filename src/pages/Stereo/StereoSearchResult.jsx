import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import QuickPickCol from "../../components/StereoComp/QuickPickCol";
import ArtisitStereoSearchResult from "../../components/StereoComp/ArtisitStereoSearchResult";
import LayoutMain from "./Layout/LayoutMain";

const DataPlay = [
  {
    text: "All",
  },
  {
    text: "Songs",
  },
  {
    text: "Artist",
  },
];

const StereoSearchResult = ({ handleStrSearchClose }) => {
  const [activeListTab, setActiveListTab] = useState("All");

  const handleListTabClick = (text) => {
    setActiveListTab(text);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
    <div className="quik-container-box bg-white ml-10 px-3 py-10">
      <div className="profile-dot-bx flex red-wid">
        <div className="prof-back flex items-center">
          <AiOutlineArrowLeft size={24} onClick={handleStrSearchClose} />
          <div className="head-line bus-dir">Search</div>
        </div>
      </div>
      <div className="relative mt-4">
        <input
          type="text"
          className="w-full pl-12 bg-[#F5F5F5] border-none rounded-3xl"
          placeholder="Search here"
        />
        <BiSearch size={16} className="absolute top-5 ml-4" />
      </div>
      <div className="mt-3">
        <div className="flex items-center gap-20">
          {DataPlay.map((item, index) => (
            <div
              key={index}
              className={`tab-item ${
                item.text === activeListTab
                  ? "sel-act inc-wid"
                  : "anot-wid  inc-wid"
              }`}
              onClick={() => handleListTabClick(item.text)}
            >
              <div className="dis-sel-name conn-t-txt">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      {activeListTab === "All" ? (
        <div className="picks-row-cont mt-5">
          <QuickPickCol />
          <QuickPickCol />
          <ArtisitStereoSearchResult />
        </div>
      ) : null}
      {activeListTab === "Songs" ? (
        <div className="picks-row-cont">
          <QuickPickCol />
          <QuickPickCol />
        </div>
      ) : null}
      {activeListTab === "Artist" ? (
        <div className="picks-row-cont">
          <QuickPickCol />
          <QuickPickCol />
        </div>
      ) : null}
    </div>
    </LayoutMain>
  );
};

export default StereoSearchResult;
