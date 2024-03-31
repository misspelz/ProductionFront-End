import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

import { Link } from "react-router-dom";
import Stacked from "../shared/Stacked";
import Description from "../typography/txtDescription";
import Pic from "../shared/ImageBordered";
import Header from "../typography/txtHeader";
import { ButtonSide } from "../shared/sideButton";
import { Absolutes } from "../shared/Absolutes";
const Template = ({ content }) => {
  return (
    <React.Fragment>
      {content.map((content) => {
        return (
          <Box key={content.id}>
            <Stacked d="column" g=".4rem">
              <Box sx={{ position: "relative" }}>
                <Link
                  to={`/commerce/product/${
                    content.product_name || content.item_similar
                  }`}
                >
                  <Pic
                    look={`${content.product_img || content.similar_img}`}
                    alt={`product${
                      content.product_name || content.item_similar
                    }`}
                    styles={{ width: "100%" }}
                  />
                </Link>
                <Absolutes item={content} />
              </Box>
              <Description
                title={`${content.product_name || content.item_similar}`}
                sx={{
                  textAlign: "left !important",
                  paddingLeft: "10px",
                  fontSize: "14px",
                  color: "#959393",
                }}
              />
              <Header
                title={`${content.product_price || content.similar_price}`}
                sx={{
                  textAlign: "left !important",
                  paddingLeft: "10px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              />
              <ButtonSide
                bg="
                  #4F0DA3"
                title="Buy Now"
                styles={{
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: "400",
                  paddingBlock: ".4rem",
                }}
              />
            </Stacked>
          </Box>
        );
      })}
    </React.Fragment>
  );
};

Template.propTypes = {
  content: PropTypes.array.isRequired,
};
export default Template;
