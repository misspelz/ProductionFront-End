// import Nav from "./Navbar";
import Stacked from "../shared/Stacked";
import { Box, Fab } from "@mui/material";
// import SideBar from "../layout/sideBar";
// import { ModalContext } from "Context/ModalContext";
import StackSide from "./sideStack";
// import { useContext } from "react";
// import { FaGreaterThan } from "react-icons/fa6";
import MobileNav from "./mobile/topnavmobile";
// import { Sidebaroverlay } from "../shared/maodalOverlay";

const Container = ({ main }) => {
  // const { slide, togSlide, slideFalse } = useContext(ModalContext);

  // const slideBar = () => {
  //   !slide ? togSlide() : slideFalse();
  // };
  // const fabStyles = {
  //   background: "#4f0da3",
  //   width: "41px",
  //   height: "41px",
  //   zIndex: "99999",
  //   position: "fixed",
  //   top: "8.6rem",
  //   // top: "-4.5rem",
  //   left: !slide ? "-.4rem" : "12.5rem",
  //   transform: !slide ? "none" : "rotate(180deg)",
  //   transition: "all 400ms ease-in-out",
  //   "&:hover": {
  //     background: "#4f0da3",
  //   },
  // };
  return (
    <>
      {/* <Nav route="Commerce" /> */}
      <MobileNav />
      {/* <Slider /> */}
      {/* <Sidebaroverlay /> */}
      <Box
        className="w-full main_commerce"
        sx={{
          background: "#F5F5F5",
          // paddingLeft: "14.8em",
        }}
      >
        {/* <div className="callsidebar">
          <Fab style={fabStyles} onClick={slideBar}>
            <FaGreaterThan fill="#ffff" fontSize="18" />
          </Fab>
        </div> */}
        <Stacked
          d="row"
          g="1rem"
          jc="space-between"
          ai="start"
          cname="layout_main"
        >
          {/* <Body /> */}
          {main}
          {/* stackside-tobereplaced-soon */}
          <Box
            pt={3}
            flex={2}
            bgcolor="#ffff"
            pb={3}
            sx={{ position: "sticky", top: 0 }}
            className="sideStacknav"
          >
            <StackSide />
          </Box>
        </Stacked>
      </Box>
    </>
  );
};

// stylings

export default Container;
