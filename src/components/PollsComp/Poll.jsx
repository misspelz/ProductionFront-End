import ImageModal from "components/Modals/PollImageModal";
import { useState } from "react";

export const Poll = ({
  title,
  allVotes,
  totalVotes,
  name,
  id,
  cast,
  selectedOptionId,
  handleOptionChange,
}) => {
  const percent =
    totalVotes !== 0 ? Math.round((allVotes / totalVotes) * 100) : 0;

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const HandleZoomedImage = () => {
    setModalOpen(true);
  };

  return (
    <label
      htmlFor={title}
      className="cursor-pointer w-[100%] relative flex py-3 bg-[#000] rounded-[10px]  mt-4 gap-3 items-center"
    >
      <div
        className="absolute h-full w-[75%] bg-purple-900 rounded-[10px]"
        style={{ width: `${percent}%` }}
      ></div>
      <div className="w-full flex justify-between items-center">
        <span className="text-white font-bold z-50 pl-6 text-[12px] lg:text-[14px]">
          {title}
        </span>
        <div className="flex items-center">
          <span className="text-white font-bold pr-6 z-50 text-[12px] lg:text-[14px] ">
            {percent}%
          </span>
          {/* {image && <img src={image} alt={title} className="w-10 h-10 mr-3 rounded-full" />}  */}
          <img
            src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={"poll-pics"}
            className="w-10 h-10 mr-3 rounded-full z-50"
            onClick={HandleZoomedImage}
          />
        </div>
      </div>
      {cast && (
        <input
          type="radio"
          name={name}
          id={id}
          value={title}
          className="cursor-pointer w-6 mr-6 z-[999]"
          onChange={() => {
            handleOptionChange(id);
          }}
          checked={selectedOptionId === id}
        />
      )}

      {modalOpen && <ImageModal onClose={toggleModal} />}
    </label>
  );
};
