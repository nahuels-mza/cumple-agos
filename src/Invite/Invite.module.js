import { makeStyles } from "@mui/styles";

const useInviteStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
  imageContainer: {
    backgroundSize: "cover !important",
    backgroundPosition: "0% 18% !important",
    position: "relative",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "30% 18% !important",
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
      left: 0,
      top: "15%",
    },
  },
  font: {
    fontFamily: "fantasy !important",
    fontWeight: `600 !important`,
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
