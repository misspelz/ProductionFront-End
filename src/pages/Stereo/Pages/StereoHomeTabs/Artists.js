import React, { useEffect, useState } from "react";
import ArtistTabCard from "../../Components/ArtistTabCard";
import Ad from "../../Assets/AD.jpeg";
import Modal from "../../Components/Modals/ModalWrapper1";
import ArtistProfile from "../ArtistProfile";
import axios from "axios";
import Lottie from "lottie-react";
import NothingHere from "../../Assets/nothing_here.json"

export default function Artists() {
  const [isOpen, setIsOpen] = useState(false);
  const [artists, setArtists] = useState([]);
  const authToken = localStorage.getItem("authToken")

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
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

  useEffect(() => {
    GetArtists();
  }, []);
  return (
    <div className="mx-4">
      <div className={artists.length>0?`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6`:null}>
        {artists.length>0?artists.map(artist =>{
          return(<div><ArtistTabCard name={artist.artist_name} image={artist.brand_image} onClick={handleOpenModal} />
          </div>)
        }):<div className="flex justify-center items-center">
          <Lottie
                animationData={NothingHere}
                style={{
                  width: "263.38px",
                  height: "100%",
                }}
              /></div>}
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
        <ArtistTabCard onClick={handleOpenModal} />
        <ArtistTabCard onClick={handleOpenModal} />
        <ArtistTabCard onClick={handleOpenModal} /> */}
      </div>
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
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ArtistProfile onClick={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
}
