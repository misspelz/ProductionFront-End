import React, { useEffect, useState } from "react";
import MoreCard from "../../Components/MoreCard";
import Ad from "../../Assets/AD.jpeg";
import Lottie from "lottie-react";
import NothingHere from "../../Assets/nothing_here.json"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TopTracks() {
  const [songs, setSongs] = useState([])
  const authToken = localStorage.getItem("authToken")
  const navigation = useNavigate()

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
    GetSongs()
  },[])

  return (
    <div>
      <div>
        <section style={{ marginTop: 10 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 10,
              marginLeft: 10,
              gap: 20,
            }}>
            {songs?.length>0?songs?.map(res=>{
                  return (
                    <MoreCard img={res.cover_image} title={res.title} artist={res?.artist.artist_name} plays={res?.plays.toString()} likes={res?.likes.toString()} downloads={res?.downloads.toString()} entries={res?.entries} />
                  )
                }).reverse():<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
            {/* ad */}
            <div style={{}}>
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
            {/* <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} />
            <MoreCard title={"Take me home"} /> */}
            {/* ad */}
            {/* <div style={{}}>
              <img
                src={Ad}
                alt="Advertisement"
                style={{
                  height: "80px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
