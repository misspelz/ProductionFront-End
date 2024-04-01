import React, { useEffect, useState } from 'react'
import Arrow from "../Assets/whiteback.svg";
import Logo from "../Assets/2gedaLogo.svg";
import Music from "../Assets/MusicImg.svg";
import MoreCard from "../Components/MoreCard";
import Ad from "../Assets/AD.jpeg";
import LayoutMain from "../Layout/LayoutMain";
import Arrow2 from "../Assets/arrowback.svg";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Lottie from "lottie-react";
import NothingHere from "../Assets/nothing_here.json"


export default function TopAlbums() {
    const [activeTab, setActiveTab] = useState(0);
    const [topAlbums, setTopAlbums] = useState([])
  const navigation = useNavigate()
  const authToken = localStorage.getItem("authToken")


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
      }).catch(e=>console.log(e));
  };
  
  

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  useEffect(()=>{
    GetTopAlbums()
  },[])
  return (
    <div>
      <LayoutMain>
      <div className="bg-white pb-10 sm:mx-5 sm:pt-8">
      <div
          id="iconwrapper"
          className="hidden sm:flex mx-3 mb-5 align-middle items-center space-x-2">
          <button style={{ width: 24, height: 24 }}>
            <img src={Arrow2} />
          </button>
          <span style={{ fontSize: 20, fontWeight: "700" }} fontSize={"20px"}>
          Top albums
          </span>
        </div>
        {/* Tab Section */}
        <div
            className="mt-20 sm:mt-0 sm:pt-5"
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
                  borderRadius: activeTab === 0 ? 20 : 0,
                  paddingLeft: activeTab === 0 ? 15 : 2,
                  paddingRight: activeTab === 0 ? 15 : 2,
                  paddingTop: 2,
                  paddingBottom: 2,
                }}
                onClick={() => handleTabClick(0)}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: activeTab === 0 ? "white" : "black",
                  }}>
                  All
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
                  Afrobeats
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
                  Pop
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
                  Rock
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
                  Country
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
                  RnB
                </span>
              </button>
              <button
                style={{
                  backgroundColor: activeTab === 6 ? "#4F0DA3" : "white",
                  borderRadius: activeTab === 6 ? 25 : 0,
                  paddingLeft: activeTab === 6 ? 10 : 2,
                  paddingRight: activeTab === 6 ? 10 : 2,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
                onClick={() => handleTabClick(6)}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: activeTab === 6 ? "white" : "black",
                  }}>
                  Jazz
                </span>
              </button>
            </div>
            </div>

            <section style={{ marginTop: 0 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 10,
              marginLeft: 10,
              gap: 20,
            }}>
              {topAlbums?.length>0?topAlbums?.map(res=>{
                  return (
                  <MoreCard title={res.name} img={res.cover_image?`https://development.2geda.net${res.cover_image}`:null} artist={res.artist.artist_name} />
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
    </div>
  )
}
