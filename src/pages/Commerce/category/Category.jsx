import { Box, Stack } from "@mui/material";
import Stacked from "components/newCommerce/shared/Stacked";
import { BsArrowLeft } from "react-icons/bs";
import Header from "components/newCommerce/typography/txtHeader";
import { useParams } from "react-router-dom";
import InputField from "components/newCommerce/shared/inputField";
import Template from "components/newCommerce/shared/template";
import { trendSales } from "components/newCommerce/data/commerceMock";
import Adds from "../../../assets/images/adds-section.png";
import sugBusiess from "components/newCommerce/data/suggestedBusiness";
import Suggested from "components/newCommerce/layout/suggestedBus";
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
const Category = () => {
  const { category } = useParams();
  return (
    <Box flex={8} bg="#f5f5f5" pb={2} pt={3}>
      <Stacked
        d="row"
        ai="center"
        jc="space-between"
        styles={{
          paddingLeft: { sm: "10px", xs: "10px", lg: "0px", xl: "0px" },
        }}
      >
        <div className="flex flex-row items-center gap-3 ">
          <BsArrowLeft fontSize="20px" onClick={() => window.history.back()} />
          <Header title={category} sx={{ textTransform: "capitalize" }} />
        </div>
        <InputField placeholder="Search products" styles={inpStyle} />
      </Stacked>

      {/* C-T-A */}

      <Stack direction="column" gap={3} mt={2}>
        {/* top-list */}
        <Box bgcolor="#ffff" pt={2} pb={2} pr={2} pl={2} className="box_trend">
          <Box pt={1} className="grid_commerce">
            <Template content={trendSales} />
          </Box>
        </Box>
        {/* adds-section */}
        <Box>
          <img src={Adds} alt="adds-section" style={{ width: "100%" }} />
        </Box>

        {/* second-top-list */}
        <Box bgcolor="#ffff" pt={2} pb={2} pr={2} pl={2} className="box_trend">
          <Box pt={1} className="grid_commerce">
            <Template content={trendSales} />
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

        {/* next-list */}
        <Box bgcolor="#ffff" pt={2} pb={2} pr={2} pl={2} className="box_trend">
          <Box pt={1} className="grid_commerce">
            <Template content={trendSales} />
          </Box>
        </Box>

        {/* final-list */}
        <Box bgcolor="#ffff" pt={2} pb={2} pr={2} pl={2} className="box_trend">
          <Box pt={1} className="grid_commerce">
            <Template content={trendSales} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Category;
