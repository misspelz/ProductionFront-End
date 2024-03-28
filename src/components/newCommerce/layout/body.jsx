import { Box, Stack } from "@mui/material";
import Header from "../typography/txtHeader";
import InputField from "../shared/inputField";
import {
  trendSales,
  Automobile,
  Kids,
  Furniture,
  Beauty,
} from "../data/commerceMock";
import Stacked from "../shared/Stacked";
import Template from "../shared/template";
import Adds from "../../../assets/images/adds-section.png";
import { Link } from "react-router-dom";
import sugBusiess from "../data/suggestedBusiness";
import Suggested from "./suggestedBus";
const inpStyle = {
  div: {
    borderRadius: "10px",
  },
  input: {
    padding: "8px 12px",
    textIndent: "30px",
    width: "350px",
    fontFamily: "Ubuntu !important",
    "&::placeholder": {
      color: "#000000 !important",
      fontStyle: "italic",
      fontSize: "12px",
      fontFamily: "Inter",
    },
  },
};
const Body = () => {
  return (
    <Box
      pt={3}
      bgcolor="#F5F5F5"
      sx={{}}
      flex={8}
      pb={2}
      className="main_container"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          paddingLeft: { sm: "10px", xs: "10px", lg: "0px", xl: "0px" },
        }}
      >
        <Header title="Buy and sell instantly" />
        <InputField placeholder="Search products" styles={inpStyle} />
      </Stack>

      {/* call-to-action-areas */}
      <Stack direction="column" gap={3} mt={2}>
        {/* trnending-section */}
        <Box bgcolor="#ffff" pt={2} pb={2} pr={2} pl={2} className="box_trend">
          <Header title="Trending and Hot" sx={{ textAlign: "left" }} />
          <Box pt={1} className="grid_commerce">
            <Template content={trendSales} />
          </Box>
        </Box>
        {/* adds-section */}
        <Box
          sx={{
            paddingInline: { sm: "10px", xs: "10px", lg: "0px", xl: "0px" },
          }}
        >
          <img
            src={Adds}
            alt="adds-section"
            className="img_ads"
            style={{ width: "100%" }}
          />
        </Box>

        {/* automobile-section */}
        <Box bgcolor="#ffff" pt={2} pb={2} pr={2} pl={2} className="box_trend">
          <Stacked d="row" jc="space-between" ai="center">
            <Header title="Automobile" sx={{ fontSize: "1rem" }} />
            <Link
              to=""
              style={{
                color: "#4F0DA3",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              View more&gt;&gt;
            </Link>
          </Stacked>
          <Box pt={1} className="grid_commerce">
            <Template content={Automobile} />
          </Box>
        </Box>

        {/* Suggested-business-stick- */}
        <Box bgcolor="#ffff" p={2}>
          <Header
            title="Suggested Business"
            sx={{
              textAlign: "left",
              paddingTop: ".2rem",
              paddingBottom: ".9rem",
            }}
          />
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{ rowGap: "1px" }}
          >
            {sugBusiess.map((business) => {
              return <Suggested list={business} key={business.id} />;
            })}
          </Stack>
        </Box>

        {/* kids-and toys */}
        <Box bgcolor="#ffff" pt={2} pb={2} pr={2} pl={2} className="box_trend">
          <Stacked d="row" jc="space-between" ai="center">
            <Header title="Kids and Toys" sx={{ fontSize: "1rem" }} />
            <Link
              to=""
              style={{
                color: "#4F0DA3",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              View more&gt;&gt;
            </Link>
          </Stacked>
          <Box pt={1} className="grid_commerce">
            <Template content={Kids} />
          </Box>
        </Box>
        {/* Furniture-and-Decorations */}
        <Box bgcolor="#ffff" pt={2} pb={2} pr={2} pl={2} className="box_trend">
          <Stacked d="row" jc="space-between" ai="center">
            <Header
              title="Furniture and Decoration"
              sx={{ fontSize: "1rem" }}
            />
            <Link
              to=""
              style={{
                color: "#4F0DA3",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              View more&gt;&gt;
            </Link>
          </Stacked>
          <Box pt={1} className="grid_commerce">
            <Template content={Furniture} />
          </Box>
        </Box>
        {/*Beauty*/}
        <Box bgcolor="#ffff" pt={2} pb={2} pr={2} pl={2} className="box_trend">
          <Stacked d="row" jc="space-between" ai="center">
            <Header title="Beauty" sx={{ fontSize: "1rem" }} />
            <Link
              to=""
              style={{
                color: "#4F0DA3",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              View more&gt;&gt;
            </Link>
          </Stacked>
          <Box pt={1} className="grid_commerce">
            <Template content={Beauty} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
export default Body;
