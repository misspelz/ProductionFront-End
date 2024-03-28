import React, { useEffect, useState } from 'react'
import LayoutMain from '../Layout/LayoutMain'
import Arrow from "../Assets/arrowback.svg";
import Search from "../Assets/majesticons_search-line.svg";
import Header1 from '../Components/Header1';
import axios from 'axios';
import Lottie from "lottie-react";
import NothingHere from "../Assets/nothing_here.json"
import MoreCard from '../Components/MoreCard';
import ArtistTabCard from '../Components/ArtistTabCard';

export default function StereoSearchPage() {
  const [active, setActive] = useState(1)
  const [songs, setSongs] = useState([])
  const [artist, setArtist] = useState([])
  const [albums, setAlbums] = useState([])
  const authToken = localStorage.getItem("authToken")

  const GetAllSongs = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/songs/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        // Filter the items where plays < 3
        // const filteredHits = res?.data?.data.filter((item) => item.plays > 0);
        // Assuming setBigHit is a function to update state
        setSongs(res.data.data);
        console.log(res.data.data,"bighits==="); // This will log the filtered items
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const GetAlbums = async() => {
    await axios
      .get(`https://development.2geda.net/api/stereo/albums/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setAlbums(res?.data.data);
        console.log(albums + "recent upload state===");
        console.log(JSON.stringify(res.data) + "recentUpload====");
      });
  };

  const GetArtists = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/artists/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setArtist(res.data.data);
        console.log(JSON.stringify(artist) + "artist state===");
        console.log(JSON.stringify(res.data.data) + "artists====");
      });
  };


  const handleActiveTab = (id) => {
    setActive(id)
  }

  useEffect(()=>{
    GetAllSongs()
    GetAlbums()
    GetArtists()
  },[])
  return (
    <LayoutMain>
        <div>
          <Header1/>
        <section
              id="iconwrapper"
              className="flex items-center mx-2 space-x-3">
              <button style={{ width: 24, height: 24 }}>
                <img src={Arrow} />
              </button>
              <span style={{ fontSize: 20, fontWeight: "700" }} fontSize={"20px"}>
                Search
              </span>
            </section>
            <div className="relative mt-3 mx-3">
        <input
          type="text"
          className="w-full bg-[#F5F5F5] py-2 rounded-3xl pl-10"
        />
        <img src={Search} className="absolute top-2 left-2" />
      </div>

      <main className="flex items-center space-x-8 my-4 mx-2">
        <button onClick={()=>{handleActiveTab(1)}} className={active===1?'bg-[#4F0DA3] rounded-3xl px-8 py-2': 'bg-transparent px-8 py-2'}>
          <span className={active===1?"text-white text-xl":"text-xl text-[#403F3F]"}>All</span>
        </button>
        <button onClick={()=>{handleActiveTab(2)}} className={active===2?'bg-[#4F0DA3] rounded-3xl px-8 py-2': 'bg-transparent px-8 py-2'}>
          <span className={active===2?"text-white text-xl":"text-xl text-[#403F3F]"}>Songs</span>
        </button>
        <button onClick={()=>{handleActiveTab(3)}} className={active===3?'bg-[#4F0DA3] rounded-3xl px-8 py-2': 'bg-transparent px-8 py-2'}>
          <span className={active===3?"text-white text-xl":"text-xl text-[#403F3F]"}>Artists</span>
        </button>
      </main>
      <main className='mx-2'>
        {active === 1 && <div className="flex flex-col gap-4">
          {songs?.length>0?songs?.map(res=>{
                  return (
                  <MoreCard title={res.title} img={res.cover_image?res.cover_image:null} artist={res.artist.artist_name} audio={res.audio_file?`https://development.2geda.net${res.audio_file}`:null} id={res.id}/>
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}

<div
                className={artist?.length>0?"flex mx-3 gap-3 overflow-x-scroll h-full":null}
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
                    {artist?.length>0?artist?.map(res=>{
                  return (
                  <ArtistTabCard name={res?.artist_name} image={res?.brand_image?res?.brand_image:null} artist={res?.artist_name} audio={res?.audio_file?`https://development.2geda.net${res?.audio_file}`:null} id={res?.id}/>
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
              </div>

              {albums?.length>0?albums?.map(res=>{
                  return (
                  <MoreCard title={res.name} img={res.cover_image?res.cover_image:null} artist={res.artist.artist_name} audio={res.audio_file?`https://development.2geda.net${res.audio_file}`:null} id={res.id}/>
                  )
                }):<div className="flex justify-center items-center"><Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
          </div>}
        {active === 2 && <div></div>}
        {active === 3 && <div></div>}
      </main>
        </div>
    </LayoutMain>
  )
}
