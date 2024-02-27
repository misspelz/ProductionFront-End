import React, { useState, useEffect, useContext } from "react";
import "./CreatePoll.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CreatePollApi, UpdatePollApi } from "api/services/auth&poll";
import toast from "react-hot-toast";
import { ModalContext } from "Context/ModalContext";

const durationOptions = [
  { label: "12 hours", value: 12 * 60 * 60 * 1000 },
  { label: "24 hours", value: 24 * 60 * 60 * 1000 },
  { label: "36 hours", value: 36 * 60 * 60 * 1000 },
  { label: "2 days", value: 2 * 24 * 60 * 60 * 1000 },
  { label: "3 days", value: 3 * 24 * 60 * 60 * 1000 },
];

const CreatePoll = ({ onClose, fetchPolls }) => {
  const { singlePoll } = useContext(ModalContext);
  console.log("singlePoll", singlePoll);
  const [isLoading, setIsLoading] = useState(false);
  const initialPollData = {
    question: "",
    poll_type: "",
    poll_access: "",
    close_time: new Date().toISOString(),
    is_paid: false,
    amount: "0",
    options: [""],
  };

  const [pollData, setPollData] = useState(
    singlePoll ? { ...singlePoll } : initialPollData
  );

  console.log("pollData", pollData);

  const handleInputChange = (name, value) => {
    if (name === "is_paid" && !value) {
      setPollData((prevState) => ({
        ...prevState,
        is_paid: false,
        amount: "0",
      }));
    } else if (name === "poll_type" && value === "Free") {
      setPollData((prevState) => ({
        ...prevState,
        poll_type: "Free",
        amount: "0",
        is_paid: false,
      }));
    } else if (name === "poll_type" && value === "Paid") {
      setPollData((prevState) => ({
        ...prevState,
        poll_type: "Paid",
        is_paid: true,
      }));
    } else if (name === "poll_duration") {
      const durationInMs =
        durationOptions.find((option) => option.label === value)?.value || 0;
      const now = new Date();
      const localTime = new Date(
        now.getTime() - now.getTimezoneOffset() * 60000
      );
      const closeTime = new Date(localTime.getTime() + durationInMs);
      setPollData((prevState) => ({
        ...prevState,
        close_time: closeTime.toISOString(),
      }));
    } else if (name === "options") {
      const updatedOptions = value.map((option) => {
        if (typeof option === "string") {
          return { content: option };
        } else {
          return option;
        }
      });
      setPollData((prevState) => ({
        ...prevState,
        options: updatedOptions,
      }));
    } else {
      setPollData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleCreateandEditPoll = async (e) => {
    e.preventDefault();
  
    if (!pollData.question || !pollData.options || pollData.options.length === 0) {
      toast.error("Missing required fields");
      return;
    }
  
    try {
      setIsLoading(true);
  
      let apiCall;
      if (singlePoll) {
        apiCall = UpdatePollApi;
      } else {
        apiCall = CreatePollApi;
      }
  
      const resp = await apiCall(pollData, singlePoll ? singlePoll.id : null);
      console.log(resp, "createpoll");
      if (resp.data.status) {
        toast.success(singlePoll ? "Poll updated successfully" : "Poll created successfully");
      }
      
    } catch (error) {
      console.error("createpollerror", error);
    } finally {
      fetchPolls();
      setIsLoading(false);
      onClose();
    }
  };
  

  useEffect(() => {
    if (singlePoll) {
      const { question, poll_type, poll_access } = singlePoll;
      if (question) {
        setPollData((prevState) => ({
          ...prevState,
          question,
          poll_type,
          poll_access,
        }));
      }
    }
  }, [singlePoll]);

  return (
    <form className="form-wrapper" onSubmit={handleCreateandEditPoll}>
      <div
        className="createTop"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          paddingBottom: "20px",
        }}
      >
        <FaArrowLeftLong
          style={{ fontSize: "20px" }}
          onClick={() => onClose(false)}
          className="cursor-pointer"
        />
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          {singlePoll ? "Edit Poll" : "Create Poll"}
        </span>
      </div>
      <div className="form-field">
        <label htmlFor="question">Poll question</label>
        <input
          type="text"
          id="question"
          name="question"
          placeholder="Enter your question"
          className="outline-none p-[9px]"
          value={pollData.question}
          onChange={(e) => handleInputChange("question", e.target.value)}
        />
      </div>

      {pollData.options.map((option, index) => (
        <div className="form-field" key={`option-${index}`}>
          <label htmlFor={`options${index + 1}`}>{`Option ${index + 1}`}</label>
          <input
            type="text"
            id={`options${index + 1}`}
            placeholder="Type option"
            value={option.content}
            className="outline-none p-[9px]"
            onChange={(e) => {
              const updatedOptions = [...pollData.options];
              updatedOptions[index] = e.target.value;
              handleInputChange("options", updatedOptions);
            }}
          />
        </div>
      ))}

      <div
        className="add-option"
        onClick={() => handleInputChange("options", [...pollData.options, ""])}
      >
        <div className="option-icon">+</div>
        <span>Add option</span>
      </div>

      <div className="form-field">
        <label htmlFor="poll_type">Poll type</label>
        <select
          id="poll_type"
          name="poll_type"
          className="outline-none"
          value={pollData.poll_type}
          onChange={(e) => handleInputChange("poll_type", e.target.value)}
        >
          <option value="" disabled selected>
            Choose poll type
          </option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      {pollData.poll_type === "Paid" && (
        <div className="flex gap-2 lg:gap-4 items-center justify-center">
          <div className="form-field w-full">
            <label htmlFor="amount">Amount per vote</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="outline-none p-[9px]"
              value={pollData.amount}
              onChange={(e) => handleInputChange("amount", e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="form-field">
        <label htmlFor="close_time">Poll duration</label>
        <select
          id="poll_duration"
          name="poll_duration"
          className="outline-none"
          defaultValue=""
          value={pollData.poll_duration}
          onChange={(e) => handleInputChange("poll_duration", e.target.value)}
        >
          <option value="" disabled>
            Choose poll duration
          </option>
          {durationOptions.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="poll_access">Poll access</label>
        <select
          id="poll_access"
          name="poll_access"
          className="outline-none"
          value={pollData.poll_access}
          onChange={(e) => handleInputChange("poll_access", e.target.value)}
        >
          <option value="" disabled selected>
            Choose poll access
          </option>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </div>

      {/* <div className="form-field">
        <label htmlFor="is_paid">Is paid?</label>
        <input
          type="checkbox"
          id="is_paid"
          name="is_paid"
          className="outline-none p-[9px]"
          checked={pollData.is_paid}
          onChange={(e) => handleInputChange("is_paid", e.target.checked)}
        />
      </div> */}

      <button
        className="create-poll-btn outline-none"
        type="submit"
        disabled={isLoading}
      >
        {singlePoll
          ? isLoading
            ? "Updating Poll..."
            : "Update Poll"
          : isLoading
          ? "Creating Poll..."
          : "Create Poll"}
      </button>
    </form>
  );
};

export default CreatePoll;
