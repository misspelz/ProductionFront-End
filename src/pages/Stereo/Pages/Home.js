import React, { useEffect, useState } from "react";
import Header1 from "../Components/Header1";

import RightArrow from "../Assets/icon-park_right.svg";
import PicksCard from "../Components/PicksCard";
import Ad from "../Assets/AD.jpeg";
import HitsCard from "../Components/HitsCard";
import SpecialPicksCard from "../Components/SpecialPicksCard";
import Plus from "../Assets/plus.svg";
import MainLayout from "../Layout/MainLayout";
import Arrow from "../Assets/arrowback.svg";
import Search from "../Assets/majesticons_search-line.svg";
import LayoutMain from "../Layout/LayoutMain";
import Explore from "./StereoHomeTabs/Explore";
import New from "./StereoHomeTabs/New";
import TopTracks from "./StereoHomeTabs/TopTracks";
import Charts from "./StereoHomeTabs/Charts";
import Artists from "./StereoHomeTabs/Artists";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";
import NothingHere from "../Assets/nothing_here.json"

export default function StereoHome() {
  const [activeTab, setActiveTab] = useState(0);
  const [topAlbums, setTopAlbums] = useState([])
  const [quickpicks, setQuickPicks] = useState([])
  const [bighit, setBigHit] = useState([])
  const authToken = localStorage.getItem("authToken")
  const navigation = useNavigate()
  

  const GetTopAlbums = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/albums/top-album/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setTopAlbums(res?.data?.data);
        console.log(topAlbums + "topAlbums state===");
        console.log(JSON.stringify(res.data) + "topAlbums====");
      });
  };
  const GetBigHits = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/songs/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        // Filter the items where plays < 3
        const filteredHits = res?.data?.data.filter((item) => item.plays > 0);
        // Assuming setBigHit is a function to update state
        setBigHit(filteredHits);
        console.log(filteredHits,"bighits==="); // This will log the filtered items
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const GetQuickPicks = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/songs/trending/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setQuickPicks(res?.data?.data);
        console.log(quickpicks + "quickpicks state===");
        console.log(JSON.stringify(res.data) + "quickpicks====");
      });
  };

  useEffect(()=>{
    GetTopAlbums()
    GetQuickPicks()
    GetBigHits()
  },[])

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <LayoutMain>
      <div>
        <Header1 />

        <div className="bg-white w-full pb-10 sm:mx-5">
          {/* <div style={{}}> */}
          {/* <Header1 /> */}
          <div
            id="container"
            className="sm:flex hidden mx-3 pt-6 justify-between align-middle items-center">
            <section
              id="iconwrapper"
              className="flex items-center space-x-2">
              <button style={{ width: 24, height: 24 }}>
                <img src={Arrow} />
              </button>
              <span style={{ fontSize: 20, fontWeight: "700" }} fontSize={"20px"}>
                Stereo
              </span>
            </section>
            <button style={{ width: 24, height: 24 }}>
              <img src={Search} />
            </button>
          </div>

          {/* Tab Section */}
          <div
            className="pt-20 sm:mt-0 sm:pt-5"
            style={{ overflowX: "hidden" }}>
            <div
              className="mx-3"
              style={{
                // marginLeft: 10,
                // marginRight: 10,
                display: "flex",
                flexDirection: "row",
                gap: 5,
                overflowX: "scroll",
                paddingBottom: 20,
                justifyContent: "space-between",
              }}>
              <button
                style={{
                  backgroundColor: activeTab === 0 ? "#4F0DA3" : "white",
                  borderRadius: activeTab === 0 ? 25 : 0,
                  paddingLeft: activeTab === 0 ? 10 : 2,
                  paddingRight: activeTab === 0 ? 10 : 2,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
                onClick={() => handleTabClick(0)}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: activeTab === 0 ? "white" : "black",
                  }}>
                  Home
                </span>
              </button>

              <button
                style={{
                  backgroundColor: activeTab === 1 ? "#4F0DA3" : "white",
                  borderRadius: activeTab === 1 ? 25 : 0,
                  paddingLeft: activeTab === 1 ? 10 : 2,
                  paddingRight: activeTab === 1 ? 10 : 2,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
                onClick={() => handleTabClick(1)}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: activeTab === 1 ? "white" : "black",
                  }}
                  className={`${
                    activeTab === 1 ? "text-white" : "text-black"
                  }`}>
                  Explore
                </span>
              </button>
              <button
                style={{
                  backgroundColor: activeTab === 2 ? "#4F0DA3" : "white",
                  borderRadius: activeTab === 2 ? 25 : 0,
                  paddingLeft: activeTab === 2 ? 10 : 2,
                  paddingRight: activeTab === 2 ? 10 : 2,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
                onClick={() => handleTabClick(2)}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: activeTab === 2 ? "white" : "black",
                  }}>
                  New
                </span>
              </button>
              <button
                style={{
                  backgroundColor: activeTab === 3 ? "#4F0DA3" : "white",
                  borderRadius: activeTab === 3 ? 25 : 0,
                  paddingLeft: activeTab === 3 ? 10 : 2,
                  paddingRight: activeTab === 3 ? 10 : 2,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
                onClick={() => handleTabClick(3)}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: activeTab === 3 ? "white" : "black",
                  }}>
                  Top tracks
                </span>
              </button>
              <button
                style={{
                  backgroundColor: activeTab === 4 ? "#4F0DA3" : "white",
                  borderRadius: activeTab === 4 ? 25 : 0,
                  paddingLeft: activeTab === 4 ? 10 : 2,
                  paddingRight: activeTab === 4 ? 10 : 2,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
                onClick={() => handleTabClick(4)}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: activeTab === 4 ? "white" : "black",
                  }}>
                  Charts
                </span>
              </button>
              <button
                style={{
                  backgroundColor: activeTab === 5 ? "#4F0DA3" : "white",
                  borderRadius: activeTab === 5 ? 25 : 0,
                  paddingLeft: activeTab === 5 ? 10 : 2,
                  paddingRight: activeTab === 5 ? 10 : 2,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
                onClick={() => handleTabClick(5)}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: activeTab === 5 ? "white" : "black",
                  }}>
                  Artists
                </span>
              </button>
            </div>
          </div>

          {/* Body */}
          {activeTab === 0 && (
            <main>
              <div
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 10,
                  justifyContent: "space-between",
                }}>
                <span style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
                  Quick picks
                </span>

                <button onClick={()=>navigation("/stereo/quickpicks")}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#4F0DA3",
                      }}
                      fontSize={"14px"}
                      fontWeight={"400"}
                      color={"primary.50"}>
                      More
                    </span>
                    <img src={RightArrow} />
                  </div>
                </button>
              </div>
              {/* cards1 */}
              <div style={{ overflowX: "hidden" }}>
                <div
                className={quickpicks?.length>0?"flex mx-3 gap-3 overflow-x-scroll justify-between h-full":null}
                  style={{
                  //   display: "flex",
                  //   marginLeft: 10,
                  //   marginRight: 10,
                  //   gap: 10,
                  //   overflowX: "scroll",
                    scrollbarWidth: "none",
                  //   justifyContent: "space-between",
                  //   height: "100%",
                  //   // position: "unset"
                  }}
                  >
                    {quickpicks?.length>0?quickpicks?.map(res=>{
                  return (
                  <PicksCard title={res.title} img={res.cover_image?`https://development.2geda.net${res.cover_image}`:null} artist={res.artist.artist_name} audio={res.audio_file?`https://development.2geda.net${res.audio_file}`:null} id={res.id}/>
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}

                  {/* <PicksCard />
                  <PicksCard title={"Take me home ft Alan Walker"} />
                  <PicksCard />
                  <PicksCard />
                  <PicksCard />
                  <PicksCard />
                  <PicksCard />
                  <PicksCard />
                  <PicksCard />
                  <PicksCard /> */}
                </div>
              </div>
              {/* </div> */}
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

              {/* second body */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                  marginRight: 10,
                  justifyContent: "space-between",
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <span style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
                  Today’s big hits
                </span>

                <button onClick={()=>navigation("/stereo/bighit")} backgroundColor={"none"}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#4F0DA3",
                      }}>
                      More
                    </span>
                    <img src={RightArrow} />
                  </div>
                </button>
              </div>

              {/* second card */}

              <div
              className={bighit?.length>0?"flex mx-3 gap-3 overflow-x-scroll justify-between h-full":null}
                style={{
                  // marginLeft: 10,
                  // marginRight: 10,
                  // display: "flex",
                  // gap: 10,
                  // overflowX: "scroll",
                  scrollbarWidth: "none",
                  // justifyContent: "space-between",
                  height: "100%",
                }}>
                  {bighit?.length>0?bighit?.map(res=>{
                  return (
                  <HitsCard name={res.title} img={res.cover_image?res.cover_image:null} artist={res.artist.artist_name} audio={res.audio_file?res.audio_file:null} id={res.id}/>
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
                {/* <HitsCard />
                <HitsCard
                  img={require("../Assets/Image3.jpeg")}
                  name={"Life"}
                  artist={"Burna Boy"}
                />
                <HitsCard img={require("../Assets/Image4.jpeg")} />
                <HitsCard />
                <HitsCard
                  img={require("../Assets/Image3.jpeg")}
                  name={"Life"}
                  artist={"Burna Boy"}
                />
                <HitsCard img={require("../Assets/Image4.jpeg")} />
                <HitsCard /> */}
              </div>

              {/* 3rd Card */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                  marginRight: 10,
                  justifyContent: "space-between",
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <span style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
                  Top albums
                </span>

                <button backgroundColor={"none"} onClick={()=>navigation("/stereo/topAlbums")}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#4F0DA3",
                      }}>
                      More
                    </span>
                    <img src={RightArrow} />
                  </div>
                </button>
              </div>
              <div
              className={topAlbums?.length>0?"flex mx-3 gap-3 overflow-x-scroll justify-between h-full":null}
                style={{
                  // display: "flex",
                  // marginLeft: 10,
                  // marginRight: 10,
                  // gap: 10,
                  // overflowX: "scroll",
                  scrollbarWidth: "none",
                  // justifyContent: "space-between",
                  // height: "100%",
                }}>
                                      {topAlbums?.length>0?topAlbums?.map(res=>{
                  return (
                  <HitsCard name={res.name} img={res.cover_image?`https://development.2geda.net${res.cover_image}`:null} artist={res.artist.artist_name} />
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
                {/* <HitsCard name={"When we fall asleep"} />
                <HitsCard
                  img={require("../Assets/Image3.jpeg")}
                  name={"I told them"}
                  artist={"Burna Boy"}
                />
                <HitsCard img={require("../Assets/Image4.jpeg")} />
                <HitsCard />
                <HitsCard img={require("../Assets/Image4.jpeg")} />
                <HitsCard />
                <HitsCard img={require("../Assets/Image4.jpeg")} />
                <HitsCard /> */}
              </div>

              {/* special picks */}
              <div
                style={{
                  display: "flex",
                  marginLeft: 10,
                  marginRight: 10,
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 10,
                  justifyContent: "space-between",
                }}>
                <span style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
                  Special picks for you
                </span>
              </div>

              <div
                className="mx-[10px] flex flex-row my-[10px] gap-[10px] overflow-x-scroll"
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
            </main>
          )}

          {activeTab === 1 && <Explore />}
          {activeTab === 2 && <New />}
          {activeTab === 3 && <TopTracks />}
          {activeTab === 4 && <Charts />}
          {activeTab === 5 && <Artists />}

          {/* flooating toogler */}
          {/* <Fab
        color="#4F0DA3"
        aria-label="add"
        style={{
          position: "sticky",
          bottom: 20,
          left: "80%",
          backgroundColor: "#4F0DA3",
          zIndex: 1050,
        }}>
        <img src={Plus} width={24} height={24} />
      </Fab> */}
        </div>
      </div>
    </LayoutMain>
  );
}
