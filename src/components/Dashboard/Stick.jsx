import { useEffect, useState } from "react";
import PostImage from "../../assets/images/sample-avatar.png";
import { useStickerUser } from "pages/Profile/useStickers";

const Stick = ({ address, username, cover_image, item, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [userId, setUserId] = useState();
  const { error, stickerData, stickerStatus, refetch } = useStickerUser(userId);

  console.log(stickerData, stickerStatus);
  const name = item?.user?.first_name
    ? `${item?.user.first_name} ${item?.user.last_name}`
    : item?.user.email;
  const job = item?.occupation ? item?.occupation : "Unemployed";
  // console.log(username);
  // console.log(cover_image);
  const addr =
    item?.address?.city && item?.address?.country
      ? `${item?.address.city}, ${item?.address?.country}`
      : "Address unknown";
  const hanleClick = (id) => {
    setUserId(id);
    // setIsClicked(!isClicked);
  };
  // useEffect(() => {

  // },[]);

  // console.log(cover_image);
  return (
    <div className="stick-cont">
      <div className="post-profile">
        <img src={PostImage} alt="dum" />

        <div className="post-profile-details">
          <div className="post-profile-name">{name}</div>
          <div className="autor-ooby">{job}</div>
          <div className="autor-location">{addr}</div>
        </div>
      </div>
      <div className="stick-btn">
        <button
          className={isClicked ? "stickin " : " stick-btnn"}
          onClick={() => {
            refetch();
            hanleClick(item?.id);
          }}
        >
          {isClicked ? "Sticking" : "Stick"}
        </button>
      </div>
    </div>
  );
};

export default Stick;
