import React, { useEffect, useState } from "react";
import Search from "../Assets/Vector.svg";
import LibraryCard from "../Components/LibraryCard";
import Close from "../Assets/Vector (8).png";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";
import AlbumCard from "../Components/AlbumCard";
import ArtistTabCard from "../Components/ArtistTabCard";
// import Modal from "../Components/Modals/ModalWrapper1"
import ArtistProfile from "../Pages/ArtistProfile";
import Modal from "../Components/Modals/ModalWrapper1";
import axios from "axios";
import Lottie from "lottie-react";
import NothingHere from "../Assets/nothing_here.json"
import UploadSongHeader from "../Components/UploadSongHeader";

export default function Library() {
    const [activeTab, setActiveTab] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const authToken = localStorage.getItem("authToken")

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
        setArtists(res.data.data);
        console.log(JSON.stringify(artists) + "artist state===");
        console.log(JSON.stringify(res.data.data) + "artists====");
      });
  };


  useEffect(()=>{
    GetAlbums()
    GetArtists()
  },[])
  return (
    <div>
        <UploadSongHeader/>
      <div className="bg-white px-10 lg:px-10 xl:px-10 md:px-5 pt-10 w-auto h-full">
      {/* <header></header> */}
      <div
        className="flex gap-1 justify-between my-5 flex-shrink-0 overflow-x-scroll mx-2"
        style={{ scrollbarWidth: "none" }}>
        {activeTab ? (
          <button
            onClick={() => setActiveTab(null)}
            className="bg-[#4F0DA3] px-3 py-1 rounded-full">
            {/* <p className="text-lg text-white">x</p> */}
            <HiOutlineXMark color="white" size={11.67} />
          </button>
        ) : null}
        <button
          onClick={() => setActiveTab(1)}
          className={`${
            activeTab === 1 ? "bg-[#4F0DA3]" : "bg-[#F5F5F5]"
          } rounded-full px-4 py-2`}>
          <span
            className={`font-normal text-sm ${
              activeTab === 1 ? "text-white" : "text-black"
            }`}>
            Playlists
          </span>
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`${
            activeTab === 2 ? "bg-[#4F0DA3]" : "bg-[#F5F5F5]"
          } rounded-full px-4 py-2`}>
          <span
            className={`font-normal text-sm ${
              activeTab === 2 ? "text-white" : "text-black"
            }`}>
            Album
          </span>
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`${
            activeTab === 3 ? "bg-[#4F0DA3]" : "bg-[#F5F5F5]"
          } rounded-full px-4 py-2`}>
          <span
            className={`font-normal text-sm ${
              activeTab === 3 ? "text-white" : "text-black"
            }`}>
            Artists
          </span>
        </button>
        <button
          onClick={() => setActiveTab(4)}
          className={`${
            activeTab === 4 ? "bg-[#4F0DA3]" : "bg-[#F5F5F5]"
          } rounded-full px-4 py-2`}>
          <span
            className={`font-normal text-sm ${
              activeTab === 4 ? "text-white" : "text-black"
            }`}>
            Downloaded
          </span>
        </button>
      </div>
      <div className="relative">
        <input
          type="text"
          className="w-full bg-[#F5F5F5] py-2 rounded-3xl pl-10"
        />
        <img src={Search} className="absolute top-2 left-2" />
      </div>

      {activeTab === null && (
        <div className="grid grid-cols-2 gap-4 mt-4 justify-center align-middle items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <LibraryCard
            img={require("../Assets/Frame 1243.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <LibraryCard
            img={require("../Assets/Image2.jpeg")}
            title={"Liked songs"}
            no={"85"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <LibraryCard
            img={require("../Assets/Image2.jpeg")}
            title={"Liked songs"}
            no={"85"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <LibraryCard
            img={require("../Assets/Image2.jpeg")}
            title={"Liked songs"}
            no={"85"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
        </div>
      )}

      {activeTab === 1 && (
        <div className="grid grid-cols-2 gap-2 mt-4 justify-center align-middle items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
        </div>
      )}

      {activeTab === 2 && (
        <div className={albums.length>0?`grid grid-cols-2 gap-2 mt-4 justify-center align-middle items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2`:null}>
          {/* <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          /> */}
          {albums.length>0?albums.map(album=>{
            return <AlbumCard
            img={album.cover_image}
            title={album.name}
            artist={album.artist.artist_name?album.artist.artist_name:"2GEDA Artist"}
          />
          }):<div className="flex justify-center items-center">
          <Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
        </div>
      )}

      {activeTab === 3 && (
        <div className={artists>0?"grid grid-cols-2 gap-2 mt-4 justify-center align-middle items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2":null}>
          {/* <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} />
          <ArtistTabCard onClick={handleOpenModal} /> */}
          {artists.length>0?artists.map(artist =>{
          return(<ArtistTabCard name={artist.artist_name} image={artist.brand_image} onClick={handleOpenModal} />)
        }):<div className="flex justify-center items-center">
          <Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
        </div>
      )}

      {activeTab === 4 && (
        <div className="grid grid-cols-2 gap-2 mt-4 justify-center align-middle items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
          <LibraryCard
            img={require("../Assets/Component 14.png")}
            title={"Liked songs"}
            no={"85"}
          />
          <AlbumCard
            img={require("../Assets/Image2.jpeg")}
            title={"Are we annoyed?"}
            artist={"Billie Eilish"}
          />
        </div>
      )}

      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ArtistProfile onClick={handleCloseModal} />
        </Modal>
      )}
    </div>
    </div>
  )
}
