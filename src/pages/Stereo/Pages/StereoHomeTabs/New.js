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
  const [songs, setSongs] = useState([])
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

  const GetSongs = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/songs/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setSongs(res?.data?.data);
        console.log(songs + "songs state===");
        console.log(JSON.stringify(res.data) + "songs====");

        
      });
  };

  
  

  useEffect(()=>{
    GetRecentAlbums()
    GetSongs()
  },[])
  return (
    <div>
      <div className="mx-3">
        <span className="text-xl font-medium">New Release</span>
      </div>
      <div
        className={songs.length>0?"flex overflow-x-scroll gap-2 mx-3 mt-3":null}
        style={{ scrollbarWidth: "none" }}>
          {songs?.length>0?songs?.map(res=>{
                  return (
                    <NewCard img={res.cover_image} category={res.title} artist={res?.artist.artist_name} plays={res?.plays.toString()} likes={res?.likes.toString()} downloads={res?.downloads.toString()} entries={res?.entries} />
                  )
                }).reverse():<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
        {/* <NewCard />
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
        /> */}
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
