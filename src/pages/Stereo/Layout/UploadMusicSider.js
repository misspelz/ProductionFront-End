import React, { useRef, useState } from "react";
import person from "../Assets/artist.jpeg";
import ModalWrapper2 from "../Components/Modals/ModalWrapper2";
import Edit from "../Assets/ic_round-edit.svg";
import { HiXMark } from "react-icons/hi2";
import { BiArrowBack, BiPlus } from "react-icons/bi";
import axios from "axios";

export default function UploadMusicSider() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [upload1, setUpload1] = useState(false)
  const [upload2, setUpload2] = useState(false)
  const [upload4, setUpload4] = useState(false)
  const [audio, setAudio] = useState()
  const [artist, setArtist] = useState()
  const [song, setSong] = useState()
  const [featuring, setFeaturing] = useState()
  const [producer, setProducer] = useState()
  const [uploadRadio, setUploadRadio] = useState()
  const authToken = localStorage.getItem("authToken")
  const fileInput = useRef(null)

  const UploadSong = () => {
    console.log(audio)
    const payload = {
      title:song,
      audio_file: fileInput,
      artist: artist
    }
    axios.post(`https://development.2geda.net/api/stereo/songs/`, payload, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "X-CSRFToken": process.env.REACT_TOKEN,
      },
    }).then(res=>{
      console.log(res)
    })
  }
  return (
    <div className="bg-white lg:px-10 xl:px-10 md:px-5 pt-5 w-auto h-full mx-10">
      <div className="flex justify-between items-center lg:mt-5 xl:mt-5">
        <span className="font-medium text-2xl">About artist</span>
      </div>

      <div className="flex items-center gap-3 mt-7 mb-7">
        <img src={person} className="w-[50px] h-[50px] rounded-full" />
        <div className="flex flex-col">
          <span className="font-normal text-xl">Bella Shrmuda</span>
          <button
            className="flex justify-between"
            onClick={() => setIsOpen1(!isOpen1)}>
            <span className="text-sm font-light text-[#4F0DA3] underline">
              Edit profile
            </span>
          </button>
        </div>
      </div>

      <button onClick={()=>setUpload1(!upload1)} className="bg-[#4F0DA3] flex text-white justify-between w-full px-2 py-3 rounded-lg mb-4 mt-4">
        <span className="font-normal text-base">New upload</span>
        <span className="font-normal text-base">+</span>
      </button>

      <section>
        <span className="font-medium text-2xl">Artist Overview</span>

        <section className="grid grid-cols-2 mt-4 gap-3">
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <span className="text-2xl font-normal">2.5b</span>
            <span className="font-normal text-sm text-[#4F0DA3]">Plays</span>
          </main>
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <span className="text-2xl font-normal">15</span>
            <span className="font-normal text-sm text-[#4F0DA3]">
              Playlist entries
            </span>
          </main>
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <span className="text-2xl font-normal">28k</span>
            <span className="font-normal text-sm text-[#4F0DA3]">Stickers</span>
          </main>
          <main className="bg-[#F5F5F5] flex flex-col w-full h-full justify-center items-center py-8 rounded-md">
            <span className="text-2xl font-normal">200k</span>
            <span className="font-normal text-sm text-[#4F0DA3]">Downloads</span>
          </main>
        </section>
      </section>
      {/* modal */}
      <ModalWrapper2 header={true} isOpen={isOpen1} closeModal={() => setIsOpen1(!isOpen1)}>
        <div className="">
          <div className="flex flex-col justify-center items-center mx-10">
            <div className="relative my-10">
              <img
                src={require("../Assets/artist.jpeg")}
                className="w-[134px] h-[134px] rounded-full"
              />
              <button className="absolute top-44 left-40 w-[17.46px] h-[17.46px] rounded-full bg-[#FF8A15] flex justify-center items-center">
                <img className="w-[9.53px] h-[9.53px]" src={Edit} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Artist name"
              className="w-full h-[48px] px-5 border-[#F5F5F5] border rounded-md my-4"
            />
            <textarea
              rows={6}
              placeholder="Bio"
              className="w-full px-5 py-2 border-[#F5F5F5] border rounded-md my-4"></textarea>

            <button className="bg-[#4F0DA3] px-24 py-2 text-white my-10 rounded-md">
              Save
            </button>
          </div>
        </div>
      </ModalWrapper2>
      {/* upload modal */}
      <ModalWrapper2 header={false} isOpen={upload1} closeModal={() => setUpload1(!upload1)}>
        <div className="flex items-center justify-between px-2 py-4">
          <span className="font-bold text-xl text-black">Upload</span>
          <button onClick={()=>setUpload1(!upload1)} className="w-[16] h-[16]"><HiXMark size={16}/></button>
        </div>
        <div className="flex flex-col px-2 mt-4 mb-2 pb-10 gap-2">
          <span className="text-base font-normal">Select a mode</span>
          <span className="text-sm font-light">Choose between uploading a single or an entire album, and let your creativity flow.</span>
          <div className="mt-3 flex justify-between items-center">
          <main className="flex flex-col gap-2">
            <span className="text-base font-normal">Single</span>
            <span className="text-base font-normal">Album/EP</span>
            {/* <input type="radio" name="upload" value={"Single"} className="flex items-end justify-end"/> */}
          </main>
          <main className="flex flex-col gap-2">
            <input type="radio" name="upload" value={"Single"} className="flex items-end justify-end" onChange={()=>{setUpload2(true); setUpload1(false); setUploadRadio("Single")}}/>
            <input type="radio" name="upload" value={"Album"} className="flex items-end justify-end" onChange={()=>{setUpload2(true); setUpload1(false); setUploadRadio("Album")}}/>
          </main>
        </div>
        </div>
        
      </ModalWrapper2>
      <ModalWrapper2 header={false} isOpen={upload2} closeModal={() => setUpload2(!upload2)}>
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex gap-2 items-center">
          <button className="h-[24] w-[24]" onClick={()=>{setUpload2(!upload2); setUpload1(!upload1)}}>
            <BiArrowBack size={24}/>
          </button>
          <span className="font-bold text-xl text-black">Upload</span>
          </div>
          <button onClick={()=>setUpload1(!upload1)} className="w-[16] h-[16]"><HiXMark size={16}/></button>
        </div>
        <div className="px-2 flex flex-col gap-2 mt-3">
          <span className="text-base font-normal">Select music file</span>
          <span className="text-base font-light">Choose a music file you want to upload. Supported file types include MP3, WAV, and M4A. </span>
        </div>
        <div>
        <div class="relative mx-2 my-4">
    <label title="Click to upload" for="button2" class="cursor-pointer flex flex-col items-center justify-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 active:duration-75 active:before:scale-95">
      
      <div className="relative">
        <div className="flex flex-col justify-center items-center">
        <div className="rounded-full mb-4 bg-[#FF8A15] flex justify-center items-center w-[62px] h-[62px]">
          <span className="text-4xl font-light text-white">+</span>
        </div>
        <span className="font-medium text-sm">Tap here to select a file</span>
        </div>
      </div>
     </label>
    <input hidden="" type="file" ref={fileInput} name="button2" id="button2" onChange={(e)=>setAudio(e.target.files[0])}/>
</div>
        </div>
        <div className="flex justify-center items-center pb-4">
        <button onClick={()=>{setUpload2(!upload2); setUpload4(!upload4)}} className="bg-[#4F0DA3] rounded-md py-2 w-1/2 text-white">Next</button>
        </div>
      </ModalWrapper2>

      <ModalWrapper2 header={false} isOpen={upload4} closeModal={() => setUpload4(!upload4)}>
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex gap-2 items-center">
          <button className="h-[24] w-[24]" onClick={()=>{setUpload4(!upload4); setUpload1(!upload1)}}>
            <BiArrowBack size={24}/>
          </button>
          <span className="font-bold text-xl text-black">Upload</span>
          </div>
          <button onClick={()=>setUpload4(!upload4)} className="w-[16] h-[16]"><HiXMark size={16}/></button>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 gap-3">
          <span className="font-medium text-base">Your song has been uploaded!</span>
          <span className="font-medium text-sm text-gray-400">Follow these steps to complete your upload</span>
        </div>

        <div className="flex flex-col items-center justify-center px-10 mt-5">
        <input
        onChange={(e)=>setArtist(e.target.value)}
                  type="text"
                  placeholder="Artist Name"
                  className="max-w-[351px] px-3 mb-2 text-black rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                />
                <input
                onChange={(e)=>setSong(e.target.value)}
                  type="text"
                  placeholder="Song Title"
                  className="max-w-[351px] px-3 mb-2 text-black rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                />
                <input
                onChange={(e)=>setFeaturing(e.target.value)}
                  type="text"
                  placeholder="Featuring"
                  className="max-w-[351px] px-3 text-black mb-2 rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                />
                <input
                onChange={(e)=>setProducer(e.target.value)}
                  type="text"
                  placeholder="Producer"
                  className="max-w-[351px] px-3 text-black mb-2 rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                />
        </div>
        <div className="flex justify-center items-center pb-4 mt-5">
        <button onClick={()=>UploadSong()} className="bg-[#4F0DA3] rounded-md py-2 w-1/2 text-white">Upload</button>
        </div>
      </ModalWrapper2>
    </div>
  );
}
