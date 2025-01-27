import React, { useEffect, useState } from "react";
import MoreBg from "../Assets/moreBg.jpeg";
import Arrow from "../Assets/whiteback.svg";
import Logo from "../Assets/2gedaLogo.svg";
import Music from "../Assets/MusicImg.svg";
import MoreCard from "../Components/MoreCard";
import Ad from "../Assets/AD.jpeg";
import LayoutMain from "../Layout/LayoutMain";
import Arrow2 from "../Assets/arrowback.svg";
import axios from "axios";
import Lottie from "lottie-react";
import NothingHere from "../Assets/nothing_here.json"
import Header1 from "../Components/Header1";

export default function More() {
  const [quickpicks, setQuickPicks] = useState([])
  const authToken = localStorage.getItem("authToken")
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
      }).catch(e=>console.log(e));
  };

  useEffect(()=>{
    GetQuickPicks()
  },[])

  return (
    <LayoutMain>
      {/* <Header1/> */}
      <div className="bg-white pb-10 sm:mx-5 sm:pt-8">
        <div
          id="iconwrapper"
          className="hidden sm:flex mx-3 mb-5 align-middle items-center space-x-2">
          <button style={{ width: 24, height: 24 }}>
            <img src={Arrow2} />
          </button>
          <span style={{ fontSize: 20, fontWeight: "700" }} fontSize={"20px"}>
            Quick picks
          </span>
        </div>
        <header
          className="relative overflow-x-hidden h-[164px] sm:rounded-xl sm:mx-3 sm:h-[258px] sm:flex sm:justify-center sm:align-middle sm:items-center"
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
              backgroundColor: "rgba(79, 13, 163, 0.85)",
            }}>
            <div className="flex justify-between sticky top-0 align-middle items-center sm:hidden">
              <button
                style={{ width: 24, backgroundColor: "none", height: 24 }}>
                <img src={Arrow} width={24} height={24} />
              </button>
              <img src={Logo} width={35} height={35} />
            </div>

            {/* <div
              className="mt-[25px] w-full sm:flex sm:justify-center sm:align-middle sm:mt-[10%] sm:mb-[10%] md:mt-[20%] md:mb-[20%] lg:mt-[10%] lg:mb-[10%]"
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
                    Quick picks
                  </span>
                  <span
                    style={{ fontSize: 14, fontWeight: "400", color: "white" }}>
                    {quickpicks.length} songs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section style={{ marginTop: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 10,
              marginLeft: 10,
              gap: 20,
            }}>

{quickpicks?.length>0?quickpicks?.map(res=>{
                  return (
                  <MoreCard title={res.title} img={res.cover_image?`https://development.2geda.net${res.cover_image}`:null} artist={res.artist.artist_name} audio={res.audio_file?`https://development.2geda.net${res.audio_file}`:null} id={res.id}/>
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}

            {/* <MoreCard />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} /> */}
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
