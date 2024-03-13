import React, { useState } from "react";

const ModalWrapper2 = ({ children, onCancel, isOpen, closeModal, header }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const openModal = () => setIsOpen(true);
  //   const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* <button
        className="bg-rose-500 text-white rounded-md px-4 py-2 hover:bg-rose-700 transition"
        onClick={openModal}
      >
        Click to Open modal
      </button> */}
      {isOpen && (
        <div
          id="modelConfirm"
          className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
          <div className="relative top-40 mx-auto shadow-xl rounded-none bg-white max-w-xl">
            {header?<div className="flex justify-between px-5 py-5 items-center">
              <div></div>
              <div className="text-center items-center">
                <p className="text-xl font-bold">Edit profile</p>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  onClick={closeModal}>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>:null}
            {/* Pass any children as content within the modal */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWrapper2;
