import {
  ActivePollsApi,
  EndedPollsApi,
  MyPollsApi,
} from "api/services/auth&poll";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [modal, setModal] = useState({});
  const [loading, setLoading] = useState(true);

  const [singlePoll, setSinglePoll] = useState(null);
  const [polls, setPolls] = useState([]);
  const [activePolls, setActivePolls] = useState([]);
  const [endedPolls, setEndedPolls] = useState([]);
  const [showAction, setShowAction] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  // --------------------COMMERCE----------------------
  // sidebar-mobile-functonality
  const [slide, setSlide] = useState(false);

  //function to toggle the slide
  const togSlide = () => {
    setSlide(true);
  };
  //function-to reset to false
  const slideFalse = () => {
    setSlide(false);
  };

  // for-modalpopup-review-sections
  const [isOpen, setOpen] = useState(false);
  //currently active if checking reviews or create/add A review
  const [currentCheck, setCurrentcheck] = useState("readReview");
  const [contentType, setcontentType] = useState("");

  // cart-page-current-modal-popup
  const [cartContent, setCartcontent] = useState("checkoutconfirm");

  // state-to-setandchange-thecart-object that is clicked -through-id and fetch the items data and buyers data

  const [cartParam, setCartparams] = useState(0);

  // fuction-tochange-the state-changes-and-renderings
  const fetchCartid = (paramsid) => {
    setCartparams(paramsid);
  };

  // function-to-setcartcontent-basedoncurrent buy action
  const nextCartPopup = (payload) => {
    setCartcontent(payload);
  };

  //fuction-to-set-isopen-to-false(open modal)
  const openModal = () => {
    setOpen(true);
  };

  // //function-to-close-modal(close modal)-false
  const closeModal = () => {
    setOpen(false);
  };

  //if after checking decides to add then render-the layout-for-add -review
  const movetoAdd = () => {
    setCurrentcheck("addReview");
  };

  // /arrow-back-to-review
  const movetoReview = () => {
    setCurrentcheck("readReview");
  };

  //setmodalcontent
  const setModalContent = (content) => {
    setcontentType(content);
  };

  // -----------------COMMERCE END---------------

  const handleMyPolls = async (e) => {
    try {
      // setLoading(true);
      const resp = await MyPollsApi();

      if (resp.data.status) {
        setPolls(resp?.data?.data);
      }
    } catch (error) {
      console.log("mypolls", error);
      toast.error(error.response.data.message || "Something went wrong!");
    } finally {
      setIsPageLoading(false);
    }
  };

  const handleActivePolls = async (e) => {
    try {
      // setLoading(true);
      const resp = await ActivePollsApi();

      if (resp.data.status) {
        setActivePolls(resp?.data?.data);
      }
    } catch (error) {
      console.log("activepolls", error);
      toast.error(error.response.data.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleEndedPolls = async (e) => {
    try {
      setLoading(true);
      const resp = await EndedPollsApi();

      if (resp.data.status) {
        setEndedPolls(resp?.data?.data);
      }
    } catch (error) {
      console.log("endedpolls", error);
      toast.error(error.response.data.message || "Something went wrong!");
    } finally {
      setIsPageLoading(false);
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
        loading,
        isAuthenticated,
        setIsAuthenticated,
        isPageLoading,
        isOpen,
        openModal,
        closeModal,
        currentCheck,
        movetoAdd,
        movetoReview,
        contentType,
        setModalContent,
        cartContent,
        nextCartPopup,
        cartParam,
        fetchCartid,
        slide,
        togSlide,
        slideFalse,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
