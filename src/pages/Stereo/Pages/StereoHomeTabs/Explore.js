import React, { useEffect, useState } from "react";
import SpecialPicksCard from "../../Components/SpecialPicksCard";
import Ad from "../../Assets/AD.jpeg";
import axios from "axios";
import Lottie from "lottie-react";
import NothingHere from "../../Assets/nothing_here.json"

export default function Explore() {
  const [songs, setSongs] = useState([])
  const [Afrobeats, setAfrobeats] = useState([])
  const authToken = localStorage.getItem("authToken")

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

        // Afrobeats

        // Filter the items where plays < 3
        const afroHits = res?.data?.data.filter((item) => item.category.name === "Afro beats");
        // Assuming setBigHit is a function to update state
        setAfrobeats(afroHits);
        console.log(afroHits,"afrohits");
      });
  };

  useEffect(()=>{
    GetSongs()
  },[])
  return (
    <div>
      <div className="mx-3">
        <span className="text-xl font-medium">African Vibe</span>
      </div>
      <div
        className={songs.length>0?"flex overflow-x-scroll gap-1 sm:gap-5 mx-3 mt-3":null}
        style={{ scrollbarWidth: "none" }}>

{songs?.length>0?songs?.map(res=>{
                  return (
                    <SpecialPicksCard img={res.cover_image} category={res.title} artist={res?.artist} plays={res?.plays.toString()} likes={res?.likes.toString()} downloads={res?.downloads.toString()} entries={res?.entries} />
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}

        {/* <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        /> */}
      </div>

      <div className="mx-3 mt-5">
        <span className="text-xl font-medium">Best of Afrobeats</span>
      </div>
      <div
        className={Afrobeats.length>0?"flex overflow-x-scroll gap-1 sm:gap-5 mx-3 mt-3":null}
        style={{ scrollbarWidth: "none" }}>
          {Afrobeats?.length>0?Afrobeats?.map(res=>{
                  return (
                    <SpecialPicksCard img={res.cover_image} category={res.title} artist={res?.artist} plays={res?.plays.toString()} likes={res?.likes.toString()} downloads={res?.downloads.toString()} entries={res?.entries} />
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
        {/* <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        /> */}
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
      <div className="mx-3 mt-5">
        <span className="text-xl font-medium">Recommended</span>
      </div>
      <div
        className={songs.length>0?"flex overflow-x-scroll gap-1 sm:gap-5 mx-3 mt-3":null}
        style={{ scrollbarWidth: "none" }}>
          {songs?.length>0?songs?.map(res=>{
                  return (
                    <SpecialPicksCard img={res.cover_image} category={res.title} artist={res?.artist} plays={res?.plays.toString()} likes={res?.likes.toString()} downloads={res?.downloads.toString()} entries={res?.entries} />
                  )
                }).reverse():<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
        {/* <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        /> */}
      </div>
      <div className="mx-3 mt-5">
        <span className="text-xl font-medium">Pop for you</span>
      </div>
      <div
        className={songs.length>0?"flex overflow-x-scroll gap-1 sm:gap-5 mx-3 mt-3":null}
        style={{ scrollbarWidth: "none" }}>
          {songs?.length>0?songs?.map(res=>{
                  return (
                    <SpecialPicksCard img={res.cover_image} category={res.title} artist={res?.artist} plays={res?.plays.toString()} likes={res?.likes.toString()} downloads={res?.downloads.toString()} entries={res?.entries} />
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
        {/* <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        />
        <SpecialPicksCard />
        <SpecialPicksCard
          img={require("../../Assets/Image6.jpeg")}
          category={"Life of the party"}
        />
        <SpecialPicksCard
          img={require("../../Assets/Image3.jpeg")}
          category={"Afrojams"}
        /> */}
      </div>
    </div>
  );
}
