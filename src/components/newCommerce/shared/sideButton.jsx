import { Button } from "@mui/material";
export const ButtonSide = ({
  title,
  bg,
  cl,
  styles,
  align,
  w,
  type,
  route,
  click,
  jc,
  cp,
  className,
}) => {
  return (
    <>
      <Button
        component={cp}
        type={type}
        to={route}
        title={title}
        pl={2}
        variant="contained"
        className={className}
        sx={{
          width: w,
          textTransform: "capitalize",
          justifyContent: jc || "flex-start",
          textAlign: `${align}`,
          fontFamily: "Ubuntu",
          fontSize: "13px",
          borderRadius: "10px",
          paddingBlock: ".5rem",
          background: bg,
          color: cl,
          ...styles,
        }}
        onClick={click}
      >
        {title}
      </Button>
    </>
  );
};
