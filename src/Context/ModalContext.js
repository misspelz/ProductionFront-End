import {
  ActivePollsApi,
  EndedPollsApi,
  MyPollsApi,
} from "api/services/auth&poll";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState({});

  const [singlePoll, setSinglePoll] = useState(null);
  const [polls, setPolls] = useState([]);
  console.log("mypolls", polls);
  const [activePolls, setActivePolls] = useState([]);
  const [endedPolls, setEndedPolls] = useState([]);
  const [showAction, setShowAction] = useState(false);

  const handleMyPolls = async (e) => {
    try {
      const resp = await MyPollsApi();

      if (resp.data.status) {
        setPolls(resp?.data?.data);
      }
    } catch (error) {
      console.log("mypolls", error);
      toast.error(error.response.data.message || "Something went wrong!");
    }
  };

  const handleActivePolls = async (e) => {
    try {
      const resp = await ActivePollsApi();

      if (resp.data.status) {
        setActivePolls(resp?.data?.data);
      }
    } catch (error) {
      console.log("activepolls", error);
      toast.error(error.response.data.message || "Something went wrong!");
    }
  };

  const handleEndedPolls = async (e) => {
    try {
      const resp = await EndedPollsApi();

      if (resp.data.status) {
        setEndedPolls(resp?.data?.data);
      }
    } catch (error) {
      console.log("endedpolls", error);
      toast.error(error.response.data.message || "Something went wrong!");
    }
  };

  return (
    <ModalContext.Provider
      value={{
        setModal,
        modal,
        setSinglePoll,
        singlePoll,
        polls,
        setPolls,
        activePolls,
        setActivePolls,
        endedPolls,
        setEndedPolls,
        handleMyPolls,
        handleActivePolls,
        handleEndedPolls,
        showAction,
        setShowAction,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
