import { makeStyles } from "@mui/styles";

const useLocationStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    bottom: 0,
    width: "100%",
    backgroundColor: "#e6e6e699",
    minHeight: "400px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    cursor: "pointer",
    color: "#3cbc6d",
    fontSize: "3rem !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem !important",
    },
  },
  imageContainer: {
    backgroundSize: "cover !important",
    backgroundPosition: "0% 18% !important",
    position: "relative",
    backgroundRepeat: "no-repeat !important",
    [theme.breakpoints.down("sm")]: {
      height: "9rem !important",
      backgroundPosition: "0% 5% !important",
      backgroundSize: "contain !important",
    },
  },
  parallax: {
    willChange: "contents",
    overflow: "hidden",
  },
  linkContainer: {
    [theme.breakpoints.down("sm")]: {
      "& h2": {
        fontSize: "2rem !important",
        fontWeight: 600,
        filter: "contrast",
      },
      "& h4": {
        fontSize: "1.5rem !important",
        fontWeight: 600,
        filter: "contrast",
      },
    },
  },
}));

export default useLocationStyles;
