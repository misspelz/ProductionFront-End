import { ModalContext } from "Context/ModalContext";
import { DeletePollApi } from "api/services/auth&poll";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

const DeletePoll = ({ closeModal, singleDeletePoll }) => {
  const [loading, setLoading] = useState(false);

  const { handleMyPolls, handleActivePolls, handleEndedPolls } =
    useContext(ModalContext);

  const HandleDeletePoll = async () => {
    try {
      setLoading(true);
      const res = await DeletePollApi(singleDeletePoll.id);

      if (res.data.status) {
        toast.success(res.data.message);
        handleMyPolls();
        handleActivePolls();
        handleEndedPolls();
        closeModal();
      }
    } catch (error) {
      console.log("DeletePollerror", error);
      toast.error(error.response.data.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 20,
          background: "white",
          borderRadius: 10,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <div onClick={closeModal} className="cursor-pointer">
            <FaTimes className="text-black text-xl" />
          </div>
        </div>
        <p
          style={{
            fontSize: "16px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Are you sure?
        </p>
        <div
          style={{
            color: "black",
            fontSize: 14,
            fontFamily: "Ubuntu",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          This poll will be deleted permanently! Are you sure you want to delete this poll?
        </div>
        <button
          className="w-[165px] h-[40px] flex items-center justify-center text-white bg-[#ff0000] rounded-[64px] text-lg"
          onClick={HandleDeletePoll}
        >
          {loading ? "Please wait..." : "Delete poll"}
        </button>
      </div>
    </div>
  );
};

export default DeletePoll;
