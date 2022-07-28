import { makeStyles } from "@mui/styles";

const useInviteStyles = makeStyles((theme) => ({
  imageContainer: {
    backgroundSize: "cover !important",
    backgroundPosition: "0% 18% !important",
    position: "relative",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "initial !important",
      backgroundSize: "contain !important",
      height: "75vh",
    },
  },
  textContainer: {
    width: "100%",
    display: "flex",
    marginTop: "12rem",
    backgroundColor: "#e6e6e699",
    mixBlendMode: "hard-light",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "calc(90vw)",
      marginTop: "9rem",
    },
  },
  font: {
    fontFamily: "fantasy !important",
    fontWeight: `600 !important`,
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px !important",
    },
  },
  confirmation: {
    "& svg": {
      fill: "#ab83ab",
    },
  },
  icon: {
    cursor: "pointer",
  },
  parallax: {
    willChange: "contents",
    overflow: "hidden",
  },
}));

export default useInviteStyles;
