import React, { useEffect, useState } from "react";
import Img from "../Assets/Image1.jpeg";
import MoreIcon from "../Assets/MoreIcon.svg";
import Play from "../Assets/ph_play-fill.svg";
import { BiPause } from "react-icons/bi";

export default function PicksCard({ title, artist, img, audio }) {
  const [formatedTitle, setFormatedTitle] = useState();
  const [isPlaying, setIsPlaying] = useState(false)
  const [song] = useState(new Audio(audio))

  const handlePlaySong = () => {
    setIsPlaying(true)
    song.play()
  }
  const handlePauseSong = () => {
    setIsPlaying(false)
    song.pause()
  }
  
  useEffect(() => {
    const length = 18;
    const string =
      title?.length > length ? title.substring(0, length - 3) + "..." : title;
    setFormatedTitle(string);
  }, [title]);
  return (
    <div style={{ minWidth: 168, maxWidth: 250 }}>
      <main position={""}>
        <img src={img?img:Img} className="w-full h-[160px] rounded-md" />

        <button
        
        style={{alignSelf: "flex-end", alignItems: "center", justifyContent: "center", position: "absolute",left: "140px", top: "10px", width: "20px", height: "22px", borderRadius: "50px", backgroundColor:"rgba(255,255,255, 0.2)"}}
        >
          <img
            src={MoreIcon}
            style={{ width: 10, height: 10, color: "white" }}
          />
        </button>
      </main>
      <section className="flex justify-between my-4" my={2}>
        <div className="flex flex-col">
          <label style={{fontSize:"14px", fontWeight:"400", color:"black"}}>
            {title ? formatedTitle : "Dead"}
          </label>
          <label style={{fontSize:"12px", fontWeight:"400", color:"#403F3F"}}>
            {artist ? artist : "Billie Eilish"}
          </label>
        </div>
        {!isPlaying?<button onClick={()=>{handlePlaySong()}} className="flex justify-center items-center" style={{width:"30px",
          height:"30px",
          borderRadius: 30,
          backgroundColor:"rgba(79, 13, 163, 0.25)"}}>
          <img src={Play} />
        </button>: <button onClick={()=>{handlePauseSong()}} className="flex justify-center items-center" style={{width:"30px",
          height:"30px",
          borderRadius: 30,
          backgroundColor:"rgba(79, 13, 163, 0.25)"}}>
          <BiPause size={20}/>
        </button>}
      </section>
    </div>
  );
}
