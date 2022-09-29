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
  locationTitle: {
    border: 'solid 1px #5757568f',
    backgroundColor: '#61acce',
    padding: '10px 19px',
    color: 'white',
    width: 'fit-content',
    margin: 'auto !important',
    borderRadius: '30px',
    fontFamily: 'initial !important',

  },
  icon: {
    fill: '#5757568f !important',
    cursor: "pointer",
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
