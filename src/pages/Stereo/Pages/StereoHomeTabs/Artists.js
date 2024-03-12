import React, { useEffect, useState } from "react";
import ArtistTabCard from "../../Components/ArtistTabCard";
import Ad from "../../Assets/AD.jpeg";
import Modal from "../../Components/Modals/ModalWrapper1";
import ArtistProfile from "../ArtistProfile";
import axios from "axios";

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
          Authorization: `Token ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setArtists(JSON.stringify(res?.data?.data));
        console.log(artists + "artist state===");
        console.log(JSON.stringify(res.data) + "artists====");
      });
  };

  useEffect(() => {
    GetArtists();
  }, []);
  return (
    <div className="mx-4">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
        <ArtistTabCard onClick={handleOpenModal} />
        <ArtistTabCard onClick={handleOpenModal} />
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
