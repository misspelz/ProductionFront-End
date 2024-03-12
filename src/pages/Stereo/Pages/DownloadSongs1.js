import React from "react";
import MoreBg from "../Assets/moreBg.jpeg";
import Arrow from "../Assets/whiteback.svg";
import Logo from "../Assets/2gedaLogo.svg";
import Music from "../Assets/Image2.jpeg";
import MoreCard from "../Components/MoreCard";
import Ad from "../Assets/AD.jpeg";
import downloadIcon from "../Assets/tabler_download.svg";
import LayoutMain from "../Layout/LayoutMain";

export default function DownloadSongs1() {
  return (
    <LayoutMain>
      <div className="bg-white sm:mx-5 sm:pt-8">
        <header
          className="relative relative overflow-x-hidden h-[164px] sm:rounded-xl sm:mx-3 sm:h-[258px] sm:flex sm:justify-center sm:align-middle sm:items-center"
          // style={{ height: 164 }}
        >
          <img src={MoreBg} width={"100%"} style={{ height: "100%" }} />
          <div
            className="align-middle flex flex-col justify-center"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 2,
              backgroundColor: "rgba(255, 138, 21, 0.85)",
            }}>
            <div className="flex justify-between align-middle items-center sm:hidden">
              <button
                style={{ width: 24, backgroundColor: "none", height: 24 }}>
                <img src={Arrow} width={24} height={24} />
              </button>
              <img src={Logo} width={35} height={35} />
            </div>

            {/* <div
              className="mt-[25px] w-full sm:flex sm:justify-center sm:align-middle sm:mt-[8%] sm:mb-[8%] md:mt-[18%] md:mb-[18%] lg:mt-[8%] lg:mb-[8%]"
              // style={{ marginTop: 25, width: "100%" }}
            > */}
            <div className="inline-block align-bottom mt-8">
              <div
                className="flex sm:justify-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                }}>
                <img
                  src={Music}
                  width={75}
                  height={75}
                  style={{ borderRadius: 5 }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}>
                  <span
                    style={{ fontSize: 20, fontWeight: "500", color: "white" }}>
                    When we all fall asleep
                  </span>
                  <span
                    style={{ fontSize: 14, fontWeight: "400", color: "white" }}>
                    8 songs
                  </span>
                  <div
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: "400",
                        color: "white",
                      }}>
                      Billie Eilish
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <button
                style={{
                  borderWidth: 0.5,
                  borderColor: "white",
                  borderRadius: 5,
                }}
                className="px-2 flex flex-row align-middle items-center gap-2">
                <img src={downloadIcon} style={{ width: 12, height: 12 }} />
                <span className="text-white" style={{ fontSize: 10 }}>
                  Download all
                </span>
              </button>
            </div>
          </div>
        </header>
        <section style={{ marginTop: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 4,
              marginLeft: 4,
              gap: 20,
            }}>
            <MoreCard />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
          </div>
          {/* ad */}
          <div style={{ margin: "10px 10px" }}>
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
        </section>
      </div>
    </LayoutMain>
  );
}
