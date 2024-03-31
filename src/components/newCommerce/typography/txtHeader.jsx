import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Header = ({ title, sx, fs, fw, cl, cname }) => {
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Ubuntu",
          fontSize: fs || "1.5rem",
          fontWeight: fw || 500,
          color: cl,
          ...sx,
        }}
        className={cname}
      >
        {title}
      </Typography>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
