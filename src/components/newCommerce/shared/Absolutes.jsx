import { useState } from "react";
import { Fab } from "@mui/material";
import { MdAddShoppingCart } from "react-icons/md";
import Stacked from "../shared/Stacked";
import Star from "../../../assets/images/one_star.png";
import Pic from "../shared/ImageBordered";
import Description from "../typography/txtDescription";
//this is for absolute icons on the images bg
export const Absolutes = ({ item }) => {
  const [bg, toggleBg] = useState(true);
  //toggle adding cart bg
  const addCart = () => {
    toggleBg(!bg);
    console.log(bg);
  };
  const fabStyles = {
    background: bg ? "rgb(118 94 147 / 30%)" : "rgb(54 3 119)",
    width: "38px",
    height: "38px",
    zIndex: "9",
    position: "absolute",
    boxShadow: "none !important",
    top: "8px",
    right: "8px",

    "&:hover": {
      background: bg ? "rgb(118 94 147 / 30%)" : "rgb(54 3 119)",
    },
  };
  const abs = {
    position: "absolute",
    bottom: "8px",
    left: "8px",
    borderRadius: "15px",
    paddingBlock: "3px",
    paddingInline: "6px",
  };

  return (
    <>
      <Fab sx={fabStyles} onClick={addCart}>
        <MdAddShoppingCart fontSize="20px" fill="rgb(220 225 225 / .9)" />
      </Fab>
      <Stacked d="row" ai="center" g="4px" styles={abs} bg="#ffff">
        <Pic look={Star} styles={{ borderRadius: "none" }} />
        <Description
          title={item.product_rating || item.similar_rating}
          sx={{ fontSize: "12px", color: "#00000", fontWeight: "500" }}
        />
      </Stacked>
    </>
  );
};
