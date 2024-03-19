import React, { useEffect, useState } from "react";
import SpecialPicksCard from "../../Components/SpecialPicksCard";
import Ad from "../../Assets/AD.jpeg";
import NewCard from "../../Components/NewCard";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import NothingHere from "../../Assets/nothing_here.json"
import axios from "axios";

export default function New() {
  const [recentAlbums, setRecentAlbums] = useState([])
  const [quickpicks, setQuickPicks] = useState([])
  const authToken = localStorage.getItem("authToken")
  const navigation = useNavigate()
  

  const GetRecentAlbums = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/albums/recent-album/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setRecentAlbums(res?.data?.data);
        console.log(recentAlbums + "newAlbums state===");
        console.log(JSON.stringify(res.data) + "newAlbums====");
      });
  };

  useEffect(()=>{
    GetRecentAlbums()
  },[])
  return (
    <div>
      <div className="mx-3">
        <span className="text-xl font-medium">New Release</span>
      </div>
      <div
        className="flex overflow-x-scroll gap-2 mx-3 mt-3"
        style={{ scrollbarWidth: "none" }}>
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <NewCard />
        <NewCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <NewCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
      </div>

      <div className="mx-3 mt-5">
        <span className="text-xl font-medium">New Albums</span>
      </div>
      <div
        className={recentAlbums?.length>0?"flex mx-3 gap-3 overflow-x-scroll justify-between h-full":null}
        style={{ scrollbarWidth: "none" }}>
          {recentAlbums?.length>0?recentAlbums?.map(res=>{
                  return (
                  <NewCard category={res.name} img={res.cover_image?`https://development.2geda.net${res.cover_image}`:null} artist={res.artist.artist_name} />
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
        
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
    </div>
  );
}
