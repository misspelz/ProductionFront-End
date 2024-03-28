import React, { useEffect, useState } from "react";
import ChartCard from "../../Components/ChartCard";
import Ad from "../../Assets/AD.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import NothingHere from "../../Assets/nothing_here.json"

export default function Charts() {
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

  const GetTrendingSongs = () => {
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
    GetTrendingSongs()
    
  },[])
  return (
    <div>
      <div className="mx-3">
        <span className="text-xl font-medium">Popular Albums</span>
      </div>
      <div
        className={topAlbums.length>0?"flex gap-3 mx-3 mt-2 overflow-x-scroll align-middle items-center":null}
        style={{ scrollbarWidth: "none" }}>
          {topAlbums?.length>0?topAlbums?.map(res=>{
                  return (
                    <ChartCard
                    title={res.name}
                    // no={"100"}
                    img={res.cover_image?`https://development.2geda.net${res.cover_image}`:null}
                  />
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
        {/* <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        /> */}
      </div>
      {/* <div className="mx-3 mt-4">
        <span className="text-xl font-medium">Popular Songs</span>
      </div>
      <div
        className={quickpicks.length>0?"flex mt-2 gap-3 mx-3 overflow-x-scroll align-middle items-center":null}
        style={{ scrollbarWidth: "none" }}>
          {quickpicks?.length>0?quickpicks?.map(res=>{
                  return (
                    <ChartCard
          title={res.title}
          // no={"100"}
          img={res.cover_image?`https://development.2geda.net${res.cover_image}`:null} artist={res.artist.artist_name} audio={res.audio_file?`https://development.2geda.net${res.audio_file}`:null}
        />
                  // <PicksCard title={res.title} img={res.cover_image?`https://development.2geda.net${res.cover_image}`:null} artist={res.artist.artist_name} audio={res.audio_file?`https://development.2geda.net${res.audio_file}`:null} id={res.id}/>
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>} */}
        {/* <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        /> */}
      {/* </div> */}
      {/* ad */}
      <div className="mt-4" style={{}}>
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
      <div className="mx-3 mt-4">
        <span className="text-xl font-medium">Popular Songs</span>
      </div>
      <div
        className={quickpicks.length>0?"flex mt-2 gap-3 mx-3 overflow-x-scroll align-middle items-center":null}
        style={{ scrollbarWidth: "none" }}>
          {quickpicks?.length>0?quickpicks?.map(res=>{
                  return (
                    <ChartCard
          title={res.title}
          // no={"100"}
          img={res.cover_image?`https://development.2geda.net${res.cover_image}`:null} 
          artist={res.artist.artist_name} audio={res.audio_file?`https://development.2geda.net${res.audio_file}`:null}
        />
                  // <PicksCard title={res.title} img={res.cover_image?`https://development.2geda.net${res.cover_image}`:null} artist={res.artist.artist_name} audio={res.audio_file?`https://development.2geda.net${res.audio_file}`:null} id={res.id}/>
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
      {/* <div
        className="flex mt-4 gap-3 mx-3 overflow-x-scroll align-middle items-center"
        style={{ scrollbarWidth: "none" }}>
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
      </div>
      <div
        className="flex mt-4 gap-3 mx-3 overflow-x-scroll align-middle items-center"
        style={{ scrollbarWidth: "none" }}>
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />
        <ChartCard
          title={"Top 100 new release"}
          no={"100"}
          img={require("../../Assets/Component 14.png")}
        />*/}
      </div> 
    </div>
  );
}
