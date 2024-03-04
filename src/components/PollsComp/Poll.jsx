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
  return (
    <label
      htmlFor={title}
      className="cursor-pointer w-[100%] relative flex py-3 bg-[#000] rounded-[10px]  mt-4 gap-3 items-center"
    >
      <div
        className="absolute h-full w-[75%] bg-purple-900 rounded-[10px]"
        style={{ width: `${percent}%` }}
      ></div>
      <div className="w-full flex justify-between">
        <span className="text-white font-bold z-50 pl-6 text-[12px] lg:text-[14px]">
          {title}
        </span>
        <span className="text-white font-bold pr-6 z-50 text-[12px] lg:text-[14px] ">
          {percent}%
        </span>
      </div>
      {cast && (
        <input
          type="radio"
          name={name}
          id={id}
          value={title}
          className="cursor-pointer w-6 mr-6 z-[999]"
          onChange={() => {
            console.log("Clicked radio button for:", id);
            handleOptionChange(id);
          }}
          checked={selectedOptionId === id}
        />
      )}
    </label>
  );
};
