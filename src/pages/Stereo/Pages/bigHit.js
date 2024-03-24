import React, { useEffect, useState } from "react";
import MoreBg from "../Assets/moreBg.jpeg";
import Arrow from "../Assets/whiteback.svg";
import Logo from "../Assets/2gedaLogo.svg";
import Music from "../Assets/MusicImg.svg";
import MoreCard from "../Components/MoreCard";
import Ad from "../Assets/AD.jpeg";
import LayoutMain from "../Layout/LayoutMain";
import Arrow2 from "../Assets/arrowback.svg";
import downloadIcon from "../Assets/tabler_download.svg";
import axios from "axios";
import Lottie from "lottie-react";
import NothingHere from "../Assets/nothing_here.json"

export default function BigHit() {
  const [bighit, setBigHit] = useState([])
  const authToken = localStorage.getItem("authToken")

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
        console.log(filteredHits,"bighits"); // This will log the filtered items
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(()=>{
    GetBigHits()
  },[])

  return (
    <LayoutMain>
      <div className="bg-white pb-10 sm:mx-5 sm:pt-8">
        <div
          id="iconwrapper"
          className="hidden sm:flex mx-3 mb-5 align-middle items-center space-x-2">
          <button style={{ widows: 24, height: 24 }}>
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
            <div className="flex justify-between align-middle items-center sm:hidden">
              <button
                style={{ width: 24, backgroundColor: "none", height: 24 }}>
                <img src={Arrow} width={24} height={24} />
              </button>
              <img src={Logo} width={35} height={35} />
            </div>

            {/* <div
              className="mt-[25px] w-full sm:flex sm:justify-center sm:align-middle sm:mt-[8%] sm:mb-[8%] md:mt-[16%] md:mb-[16%] lg:mt-[8%] lg:mb-[8%]"
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
                    Today’s big hits
                  </span>
                  <span
                    style={{ fontSize: 14, fontWeight: "400", color: "white" }}>
                    {bighit.length} songs
                  </span>
                </div>

                {/* </div> */}
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
              marginRight: 10,
              marginLeft: 10,
              gap: 20,
            }}>
              {bighit?.length>0?bighit?.map(res=>{
                  return (
                  <MoreCard title={res.title} img={res.cover_image?res.cover_image:null} artist={res.artist.artist_name} audio={res.audio_file?res.audio_file:null} id={res.id}/>
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
