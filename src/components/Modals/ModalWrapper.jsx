const ModalWrapper = ({ children }) => {
  return (
    <div className="w-full h-full relative bg-[#fff] lg:w-[65%] lg:h-auto xl:w-[50%] transition-all duration-300 ease-in-out animate-[modalBox_1s_ease-in-out]">
      {children}
    </div>
  );
};

export default ModalWrapper;
