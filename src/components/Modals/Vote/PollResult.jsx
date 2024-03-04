import { FaChevronUp, FaTimes } from "react-icons/fa";

const PollResult = ({ closeModal, singlePollResult }) => {
  console.log("singlePollResult", singlePollResult);
  return (
    <div className="w-full max-w-[641px] p-10">
      <div className=" mb-3 flex justify-end ">
        <FaTimes
          onClick={closeModal}
          className="text-black text-xl cursor-pointer"
        />
      </div>
      <h1 className="text-[20px] text-center mb-3 text-purple-800">
        Poll Result
      </h1>

      <div>
        <h3 className="text-center">{singlePollResult.question}</h3>
        <p style={{ textAlign: "start" }}>
          Total Vote: {singlePollResult.total_votes} votes
        </p>
      </div>

      {singlePollResult.options?.map((option, index) => {
        return (
          <div
            key={option.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
            }}
            className="mt-6 flex items-center justify-between"
          >
            <div className="flex flex-col">
              <h3>{option.content}</h3>
              <p style={{ textAlign: "start", marginBottom: "0px" }}>
                {option.votes} votes
              </p>
            </div>
            <FaChevronUp size={16} />
            {/* 
            <Stick />
            <Stick />
            <Stick />
            <Stick />
            <Stick /> 
           */}
          </div>
        );
      })}
    </div>
  );
};

export default PollResult;
