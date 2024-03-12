import React, { useEffect } from "react";
import Arrow from "../Assets/arrowback.svg";
import Logo from "../Assets/NEW full color-1 1.svg";
import TopSongsCard from "../Components/TopSongsCard";
import RightIcon from "../Assets/icon-park_right.svg";
import SpecialPicksCard from "../Components/SpecialPicksCard";

const ArtistProfile = ({ handleArtistProClose, onClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="xl:pt-40">
      {/* header */}
      <header className="hidden sm:block">
        <div className="flex justify-between items-center py-5 px-5 container">
          <button onClick={onClick}>
            <img src={Arrow} />
          </button>
          <p className="font-medium text-4xl">Artist profile</p>
          <div></div>
        </div>
        <div className="border-b border-[rgba(0, 0, 0, 0.2)]" />
      </header>
      <header className="block sm:hidden">
        <div className="flex justify-between items-center py-5 px-5 container">
          <button onClick={onClick}>
            <img src={Arrow} />
          </button>
          <p className="font-bold text-xl">Profile</p>
          <img src={Logo} height={40} width={40} />
        </div>
        <div className="border-b border-[rgba(0, 0, 0, 0.2)]" />
      </header>

      <section
        className="bg-gradient-to-b flex flex-col md:flex-row justify-between px-5 py-10 items-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(79, 13, 163, 0) 26.04%,rgba(79, 13, 163, 0.2) 100%",
        }}>
        <div className="w-full  md:max-w-[759.4px]">
          <p className="font-bold text-2xl mb-4">Bella Shrmuda</p>
          <p className="text-xl font-normal">
            Bella Shrmuda is an emerging indie pop sensation known for his
            captivating lyrics and soulful melodies. With a unique blend of
            nostalgia and modernity, his music speaks to the heart.
          </p>
        </div>
        <div className="w-full h-208 md:max-w-[337px] md:max-h-[250px] rounded-3xl mt-10">
          <img
            src={require("../Assets/artist.jpeg")}
            style={{ objectFit: "cover" }}
            className="w-full h-208  md:w-[337px] md:max-h-[250px] rounded-3xl"
          />
        </div>
      </section>

      <section className="px-5 mt-10">
        <div className="flex items-center justify-between mb-5">
          <p className="font-medium text-base">Top songs</p>
          <a
            href="#"
            className="flex items-center text-xs font-normal text-[#4F0DA3]">
            View all songs
            <img src={RightIcon} />
          </a>
        </div>
        {/* <TopSongsCard /> */}
        <ol
          className="list-decimal space-y-4 align-middle items-center LINE-H"
          style={{ listStyleType: "decimal", listStyle: "none" }}>
          <li style={{ alignItems: "center" }}>
            <TopSongsCard id={1} />
          </li>
          <li>
            <TopSongsCard id={2} />
          </li>
          <li>
            <TopSongsCard id={3} />
          </li>
          <li>
            <TopSongsCard id={4} />
          </li>
          <li>
            <TopSongsCard id={5} />
          </li>
        </ol>
      </section>

      <section className="px-5 mt-10">
        <p className="font-medium text-base">Albums</p>
        <div
          className="flex flex-row my-[10px] gap-[10px] mt-5 overflow-x-scroll"
          style={{ scrollbarWidth: "none" }}>
          <SpecialPicksCard />
          <SpecialPicksCard
            img={require("../Assets/Image6.jpeg")}
            category={"Life of the party"}
          />
          <SpecialPicksCard
            img={require("../Assets/Image3.jpeg")}
            category={"Afrojams"}
          />
          <SpecialPicksCard />
          <SpecialPicksCard
            img={require("../Assets/Image6.jpeg")}
            category={"Life of the party"}
          />
          <SpecialPicksCard
            img={require("../Assets/Image3.jpeg")}
            category={"Afrojams"}
          />
          <SpecialPicksCard />
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;
