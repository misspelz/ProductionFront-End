const buttonStyle =
  "w-full h-[35px] p-[10px] gap-[10px] flex-1 rounded-[10px] text-center border-none text-[#fff] text-[14px] font-light transition-all duration-300 ease-in-out";

const IMELPhone = () => {
  return (
    <div className="flex p-[10px] flex-col gap-[10px] rounded-[10px] border border-[#d0d5dd]">
      <div className="py-[8px] px-[14px] rounded-[7px] border border-[#d0d5dd]">
        <h4 className="text-[14px] font-normal m-0 text-gray-950">Phone 1</h4>
        <p className="overflow-hidden text-[14px] font-thin p-0 text-left text-ellipsis w-[70%]">
          #q34567345679864432345569097
        </p>
      </div>

      <div className="flex gap-[10px]">
        <button className={buttonStyle + " bg-[#f00] hover:bg-[#d60808]"}>
          Delete
        </button>
        <button className={buttonStyle + " bg-[#4f0da3] hover:bg-[#3c0a7e]"}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default IMELPhone;
