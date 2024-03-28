import Header from "../typography/txtHeader";
import Stacked from "../shared/Stacked";
import { ModalContext } from "Context/ModalContext";
// import { BsArrowLeft } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { useContext, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineReport } from "react-icons/md";
const SellHeader = ({ title, hide, hideArr, clickBack, brad, dots, cname }) => {
  const { isOpen, closeModal, cartContent } = useContext(ModalContext);

  const handleClose = () => {
    isOpen && closeModal();
  };
  const [hideNav, SetNav] = useState(true);

  const action = () => {
    SetNav(!hideNav);
  };

  // window.addEventListener("click", (e) => {
  //   if (!e.target.matches("mobile-btns")) {
  //     !hideNav && SetNav(true);
  //   }else {
  //     SetNav(!hideNav);
  //   }
  // });
  return (
    <>
      <Stacked
        pt={2.5}
        // styles={styleBt}
        bg="#ffff"
        pl={3}
        pr={3}
        pb={1}
        ai="center"
        jc="space-between"
        d="row"
        cname={cname}
        styles={{
          borderBottom: brad || "2px solid #d9d9d9",
          position: "relative",
          display: cartContent === "ordercompleted" && "none",
        }}
      >
        <FiArrowLeft
          className={`${hideArr ? "invisible" : "visible"}`}
          onClick={() => {
            // go-back
            clickBack ? clickBack() : window.history.back();
            // window.history.back();
          }}
          fontSize="25px"
          stroke="rgba(0, 0, 0, 0.6)"
        />
        <Header fs="20px" fw="700" cl="#000000" title={title} />

        {/* show-on-condtition */}
        <div className={`${hide ? "invisible" : "visible"} mobile-btns`}>
          {dots ? (
            <div
              onClick={() => {
                action();
              }}
            >
              <BiDotsVerticalRounded fontSize="20px" />
            </div>
          ) : (
            <div onClick={handleClose}>
              <LiaTimesSolid fontSize="25px" stroke="rgba(0, 0, 0, 0.6)" />
            </div>
          )}
        </div>
        {hideNav ? null : <AbsoluteNav nav={hideNav} config={SetNav} />}
      </Stacked>
    </>
  );
};

const AbsoluteNav = ({ nav, config }) => {
  const { isOpen, openModal, setModalContent } = useContext(ModalContext);

  const showReview = (payload) => {
    !nav && config(true);
    setModalContent(payload);
    !isOpen && openModal();
  };
  return (
    <div className="absolute top-9 right-12 bg-[#ffff] rounded-lg flex flex-col py-2 px-2 gap-y-4 shadow-lg ">
      {/* share-modal-button */}
      <div
        className="flex flex-row gap-x-2 items-center cursor-pointer hover:bg-[#d9d9d9] p-y-2 px-1 rounded-lg select-none"
        onClick={() => showReview("sharemodal")}
      >
        <CiShare2 fontSize="20px" stroke="#222222" />
        <span className="text-left">Share product</span>
      </div>
      {/* report-seller */}
      <div className="flex flex-row gap-x-2 items-center cursor-pointer hover:bg-[#d9d9d9] p-y-2 px-1 rounded-lg select-none">
        <MdOutlineReport fontSize="20px" stroke="#222222" />
        <span className="text-left">Report seller</span>
      </div>
      {/* report-item */}
      <div className="flex flex-row gap-x-2 items-center cursor-pointer hover:bg-[#d9d9d9] p-y-2 px-1 rounded-lg select-none">
        <MdOutlineReport fontSize="20px" stroke="#222222" />
        <span className="text-left">Report thie item</span>
      </div>
    </div>
  );
};
export default SellHeader;
