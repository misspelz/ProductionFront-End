import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const Modal = ({ isOpen, onClose, children }) => {
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);
  const modalRef = useRef(null);

  // Handle backdrop and modal visibility on mount/unmount
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("overflow-auto");
      setIsBackdropVisible(true);
    } else {
      body.classList.remove("overflow-auto");
      setIsBackdropVisible(false);
    }
  }, [isOpen]);

  // Handle close on modal click (excluding backdrop)
  const handleClose = (event) => {
    if (modalRef.current && event.target !== modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      className={`z-50 flex pt-96 md:pt-5 lg:pt-96 xl:pt-96 items-center overflow-y-auto justify-center ${
        isBackdropVisible ? "backdrop-open" : ""
      }`}
      //   onClick={handleClose}
    >
      <div
        className={`bg-white rounded-lg p-4 md:mt-5 lg:mt-16 xl:mt-16 overflow-y-auto shadow-md mx-10 ${
          children ? "overflow-auto" : ""
        }`}
        ref={modalRef}>
        {children}
        <button
          className="mt-4 bg-[#4F0DA3] text-white px-4 py-2 rounded font-bold focus:outline-none"
          onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
