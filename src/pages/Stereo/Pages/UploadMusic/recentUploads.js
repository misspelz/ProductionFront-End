import React, { useEffect, useState } from "react";
import UploadMusicLayout from "../../Layout/UploadMusicLayout";
import Arrow from "../../Assets/arrowback.svg";
import Search from "../../Assets/majesticons_search-line.svg";
import RecentUploadCard from "../../Components/recentUploadCard";
import Ad from "../../Assets/AD.jpeg";
import UploadSongHeader from "../../Components/UploadSongHeader";
import axios from "axios";
import Lottie from "lottie-react";
import NothingHere from "../../Assets/nothing_here.json"

export default function RecentUploads() {
  const [recentUpload, setRecentUpload] = useState([])
  const authToken = localStorage.getItem("authToken")

  const GetRecentUploads = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/artists/songs/recent_upload/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setRecentUpload(res?.data?.data);
        console.log(recentUpload + "recent upload state===");
        console.log(JSON.stringify(res.data) + "recentUpload====");
      });
  };

  useEffect(()=>{
    GetRecentUploads()
  },[])
  return (
    <>
      <UploadMusicLayout>
        <UploadSongHeader title={"Recent uploads"} />
        <div className="mt-20 sm:mt-0">
          <div className="bg-white w-full pb-10 sm:mx-5">
            <div
              id="container"
              className="sm:flex hidden mx-3 pt-6 justify-between align-middle items-center">
              <div
                id="iconwrapper"
                className="flex align-middle items-center space-x-2">
                <button style={{ widows: 24, height: 24 }}>
                  <img src={Arrow} />
                </button>
                <span
                  style={{ fontSize: 20, fontWeight: "700" }}
                  fontSize={"20px"}>
                  Recent uploads
                </span>
              </div>
            </div>
            <section className="mx-5 relative my-4 mt-10">
              <input
                type="text"
                className="w-full bg-[#F5F5F5] py-2 rounded-xl pl-12 pr-2"
              />
              <img src={Search} className="absolute top-1 left-3" />
            </section>

            <section className="mx-5">
              {/* <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard />
              <RecentUploadCard /> */}
              {recentUpload?.length>0?recentUpload?.map(res=>{
                  return (
                    <RecentUploadCard title={res.title} artist={res?.artist} plays={res?.plays.toString()} likes={res?.likes.toString()} downloads={res?.downloads.toString()} entries={res?.entries} />
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}

            </section>
            {/* ad */}
            <div className="mt-4 mx-5">
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
        </div>
      </UploadMusicLayout>
    </>
  );
}
