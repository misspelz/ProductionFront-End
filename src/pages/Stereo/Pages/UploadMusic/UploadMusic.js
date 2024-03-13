import React from "react";
import UploadMusicLayout from "../../Layout/UploadMusicLayout";
import Arrow from "../../Assets/arrowback.svg";
import PromoCard from "../../Components/PromoCard";
import PromoCard2 from "../../Components/PromoCard2";
import RightArrow from "../../Assets/icon-park_right.svg";
import RecentUploadCard from "../../Components/recentUploadCard";
import UploadSongHeader from "../../Components/UploadSongHeader";
import Ad from "../../Assets/AD.jpeg";

export default function UploadMusic() {
  return (
    <>
      <div className="pt-20 md:pt-10 lg:pt-10 xl:pt-0">
        <div className="sm:hidden flex flex-col px-5">
          <span className="font-medium text-base mt-4">Artist Overview</span>
          <section className="grid grid-cols-2 mt-4 gap-3">
            <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
              <span className="text-2xl font-normal">2.5b</span>
              <span className="font-normal text-sm text-[#4F0DA3]">Plays</span>
            </main>
            <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
              <span className="text-2xl font-normal">15</span>
              <span className="font-normal text-sm text-[#4F0DA3]">
                Playlist entries
              </span>
            </main>
            <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
              <span className="text-2xl font-normal">28k</span>
              <span className="font-normal text-sm text-[#4F0DA3]">
                Stickers
              </span>
            </main>
            <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
              <span className="text-2xl font-normal">200k</span>
              <span className="font-normal text-sm text-[#4F0DA3]">
                Downloads
              </span>
            </main>
          </section>
          {/* ad */}
          <div className="mt-4">
            <img
              src={Ad}
              alt="Advertisement"
              style={{
                height: "80px",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="bg-white w-full pb-10 sm:mx-5">
          <div
            id="container"
            className="sm:flex hidden mx-3 pt-6 justify-between align-middle items-center"
          >
            <div
              id="iconwrapper"
              className="flex align-middle items-center space-x-2"
            >
              <button style={{ widows: 24, height: 24 }}>
                <img src={Arrow} />
              </button>
              <span
                style={{ fontSize: 20, fontWeight: "700" }}
                fontSize={"20px"}
              >
                Upload
              </span>
            </div>
          </div>

          <main className="mt-10">
            {/* promotion */}
            <div className="mx-5">
              <label className="font-medium text-xl pb-4">Promotions</label>
            </div>
            <div
              className="px-5 bg-white"
              style={{
                display: "flex",
                // paddingLeft: 10,
                // marginRight: 10,
                gap: 10,
                overflowX: "scroll",
                scrollbarWidth: "none",
                justifyContent: "space-between",
                height: "100%",

                // position: "unset"
              }}
            >
              <PromoCard2 />
              <PromoCard2 />
              <PromoCard2 />
              <PromoCard2 />
              <PromoCard2 />
              <PromoCard2 />
              <PromoCard2 />
              <PromoCard2 />
            </div>

            {/* second body */}
            <div
              className="mx-5"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // marginLeft: 10,
                // marginRight: 10,
                justifyContent: "space-between",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
                Recent Uploads
              </span>

              <button backgroundColor={"none"}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      color: "#4F0DA3",
                    }}
                  >
                    More
                  </span>
                  <img src={RightArrow} />
                </div>
              </button>
            </div>
            <div className="mx-5">
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
            </div>
            {/* ad */}
            <div className="mx-5 mt-4">
              <img
                src={Ad}
                alt="Advertisement"
                style={{
                  height: "80px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>
          </main>
        </div>

        <div></div>
      </div>
    </>
  );
}
