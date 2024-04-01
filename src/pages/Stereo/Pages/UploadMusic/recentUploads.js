import React, { useEffect, useState, useRef } from "react";
import UploadMusicLayout from "../../Layout/UploadMusicLayout";
import Arrow from "../../Assets/arrowback.svg";
import Search from "../../Assets/majesticons_search-line.svg";
import RecentUploadCard from "../../Components/recentUploadCard";
import Ad from "../../Assets/AD.jpeg";
import UploadSongHeader from "../../Components/UploadSongHeader";
import axios from "axios";
import Lottie from "lottie-react";
import NothingHere from "../../Assets/nothing_here.json"
import UploadLayout2 from "pages/Stereo/Layout/UploadLayout2";
import person from "../../Assets/artist.jpeg";
import ModalWrapper2 from "../../Components/Modals/ModalWrapper2";
import Edit from "../../Assets/ic_round-edit.svg";
import { HiXMark } from "react-icons/hi2";
import { BiArrowBack, BiPlus } from "react-icons/bi";
// import axios from "axios";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
// import Lottie from "lottie-react";
import preloader from "../../../../pages/Home/Animation - 1703321875032 (1).json"

export default function RecentUploads() {
  const [recentUpload, setRecentUpload] = useState([])
  const authToken = localStorage.getItem("authToken")
  const [isOpen1, setIsOpen1] = useState(false);
  const [upload1, setUpload1] = useState(false)
  const [upload2, setUpload2] = useState(false)
  const [upload4, setUpload4] = useState(false)
  const [upload5, setUpload5] = useState(false)
  const [audio, setAudio] = useState()
  const [artist, setArtist] = useState()
  const [song, setSong] = useState()
  const [featuring, setFeaturing] = useState()
  const [producer, setProducer] = useState()
  const [uploadRadio, setUploadRadio] = useState()
  // const authToken = localStorage.getItem("authToken")
  const fileInput = useRef(null)
  const [category, setCategory] = useState([])
  const [categoryId, setCategoryId] = useState()
  const [photo, setPhoto] = useState()
  const [albumName, setAlbumName] = useState()
  const [aboutAlbum, setAboutAlbum] = useState()
  const [albumImg, setAlbumImg] = useState()
  const [loading, setLoading] = useState(false)

  const GetCategories = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/categories/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setCategory(res?.data?.data);
        console.log(category + "category state===&&&");
        console.log(JSON.stringify(res.data) + "category====");
      }).catch(e=>console.log(e));
  };


  const UploadSong = () => {
    setLoading(true)
    console.log(audio + categoryId +photo)
    const payload = {
      category_id: categoryId,
      cover_image: photo,
      audio_file: audio,
      title:song,
      // artist: artist
    }
    axios.post(`https://development.2geda.net/api/stereo/artist/songs/`, payload, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": 'multipart/form-data',
        "X-CSRFToken": process.env.REACT_TOKEN,
      },
    }).then(res=>{
      setLoading(true)
      if (res.status === 201) {
        toast.success(res.data.message)
        setLoading(false)
        setUpload1(false)
        setUpload2(false)
        // setUpload3(false)
        setUpload4(false)
        setUpload5(false)
      } else {
        toast.error("Something went wrong")
        setLoading(false)
      }
      console.log(res)
    }).catch(e=>console.log(e))
  }

  const UploadAlbum = () => {
    setLoading(true)
    console.log(albumName + aboutAlbum + albumImg)
    const payload = {
      name: albumName,
      about: aboutAlbum,
      cover_image: albumImg,
      
    }
    axios.post(`https://development.2geda.net/api/stereo/artist/albums/`, payload, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": 'multipart/form-data',
        "X-CSRFToken": process.env.REACT_TOKEN,
      },
    }).then(res=>{
      setLoading(false)
      console.log(res)
      if (res.status === 201) {
        setLoading(false)
        toast.success(res.data.message)
        setUpload1(false)
        setUpload2(false)
        // setUpload3(false)
        setUpload4(false)
        setUpload5(false)
      } else {
        toast.error("Something went wrong")
        setLoading(false)
      }
    }).catch(err=>{
      console.log(err)
      setLoading(false)
    })
  }

  
  

  const GetRecentUploads = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/artist/songs/recent_upload/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setRecentUpload(res?.data?.data);
        console.log(recentUpload + "recent upload state===");
        console.log(JSON.stringify(res.data) + "recentUpload====");
      }).catch(e=>console.log(e));
  };

  useEffect(()=>{
    GetRecentUploads()
    GetCategories()
  },[])
  return (
    <>
      <UploadLayout2>
        <UploadSongHeader title={"Recent uploads"} />
        <div className="pt-20 sm:mt-0 bg-white">
          <div className="bg-white w-full pb-10 sm:mx-5">
            <div
              id="container"
              className="sm:flex hidden mx-3 pt-6 justify-between align-middle items-center bg-white">
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
                    <RecentUploadCard title={res.title} artist={res?.artist.artist_name} plays={res?.plays.toString()} likes={res?.likes.toString()} downloads={res?.downloads.toString()} entries={res?.entries} />
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
        <div class="fixed bottom-40 right-4 flex lg:hidden xl:hidden">
    <button onClick={()=>setUpload1(!upload1)} class="bg-[#FF8A15] hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full shadow-lg">
      
      <span className="text-4xl font-light text-white">+</span>
    </button>
  </div>

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
            <input type="radio" name="upload" value={"Album"} className="flex items-end justify-end" onChange={()=>{setUpload5(true); setUpload1(false); setUploadRadio("Album")}}/>
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
          <div class="file-upload-content">
    <label>Profile Picture</label>
    <div class="form-group custom-drop-file text-center mb-3">
      <input type="file" class="form-control" id="img-upload" placeholder="Upload a picture" onChange={(e)=>setPhoto(e.target.files[0])}/>
      <main className="flex flex-col justify-center items-center">
        <div className="rounded-full mb-4 bg-[#FF8A15] flex justify-center items-center w-[62px] h-[62px]">
          <span className="text-4xl font-light text-white">+</span>
        </div>
        <span className="font-medium text-sm">Tap here to select a file</span>
        </main>
      {/* <p>Upload Picture</p> */}
    </div>
  </div>
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
                
                <select value={categoryId} onChange={(e)=>setCategoryId(e.target.value)} placeholder={"Category"} className="max-w-[351px] px-3 text-black mb-2 rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]">
                  {category.map(res=>{
                    return(
                    <option className="text-black" value={res.id}>{res.name}</option>
                    )
                  })}
                </select>
        </div>
        <div className="flex justify-center items-center pb-4 mt-5">
        {loading ?<Lottie
              animationData={preloader}
              style={{
                width: "300px",
                height: "100px",
              }}
            />:<button onClick={()=>UploadSong()} className="bg-[#4F0DA3] rounded-md py-2 w-1/2 text-white">Upload</button>}
        </div>
      </ModalWrapper2>

      {/* upload album */}

      <ModalWrapper2 header={false} isOpen={upload5} closeModal={() => setUpload5(!upload5)}>
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex gap-2 items-center">
          <button className="h-[24] w-[24]" onClick={()=>{setUpload5(!upload5); setUpload1(!upload1)}}>
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
          <div class="file-upload-content">
    <label>Profile Picture</label>
    <div class="form-group custom-drop-file text-center mb-3">
      <input type="file" class="form-control" id="img-upload" placeholder="Upload a picture" onChange={(e)=>setAlbumImg(e.target.files[0])}/>
      <main className="flex flex-col justify-center items-center">
        <div className="rounded-full mb-4 bg-[#FF8A15] flex justify-center items-center w-[62px] h-[62px]">
          <span className="text-4xl font-light text-white">+</span>
        </div>
        <span className="font-medium text-sm">Tap here to select a file</span>
        </main>
      {/* <p>Upload Picture</p> */}
    </div>
  </div>
        <input
        onChange={(e)=>setAlbumName(e.target.value)}
                  type="text"
                  placeholder="Album Name"
                  className="max-w-[351px] px-3 mb-2 text-black rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                />
                <input
                onChange={(e)=>setAboutAlbum(e.target.value)}
                  type="text"
                  placeholder="About Album"
                  className="max-w-[351px] px-3 mb-2 text-black rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]"
                />
                
                {/* <select value={categoryId} onChange={(e)=>setCategoryId(e.target.value)} placeholder={"Category"} className="max-w-[351px] px-3 text-black mb-2 rounded-lg py-3 w-full border border-[rgba(40, 40, 40, 0.15)]">
                  {category.map(res=>{
                    return(
                    <option className="text-black" value={res.id}>{res.name}</option>
                    )
                  })}
                </select> */}
        </div>
        <div className="flex justify-center items-center pb-4 mt-5">
        {loading ? <Lottie
              animationData={preloader}
              style={{
                width: "300px",
                height: "100px",
              }}
            />:<button onClick={()=>UploadAlbum()} className="bg-[#4F0DA3] rounded-md py-2 w-1/2 text-white">Upload</button>}
        </div>
      </ModalWrapper2>
      </UploadLayout2>
    </>
  );
}
