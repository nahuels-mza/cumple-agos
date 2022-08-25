import { makeStyles } from "@mui/styles";

const useInviteStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    // height: "500px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  parallax: {
    minHeight: "100vh",
    filter: 'grayscale(80%)',
    backgroundAttachment: "fixed",
    backgroundPosition: "0% 25%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "30%",
    },
  },
  image: {
    objectPosition: "0% 20% !important",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      objectPosition: "50% 200% !important",
      objectFit: "contain !important",
    },
  },
  textContainer: {
    // position: "absolute",
    // top: "20%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#b9daf252",
    // mixBlendMode: "hard-light",
    flexDirection: "column",
    minHeight: "8rem",
    borderRadius: "20px",
    alignItems: "center",
    padding: "10px 20px",
    [theme.breakpoints.down("sm")]: {
      top: "8%",
      // width: "90vw",
      // padding: "50px 10px 20px",
    },
  },
  confirmation: {
    "& svg": {
      fill: "#b247a49e",
    },
  },
  icon: {
    cursor: "pointer",
    transition: "transform .2s",
  },
  mapIcon: {
    fontSize: "3rem !important",
  },
  gifIcon: {
    fontSize: "2rem !important",
  },
  title: {
    fontFamily: "Brusher !important",
    fontSize: "5rem !important",
    background: "-webkit-linear-gradient(45deg, #09009f, #9500ffa6 80%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem !important",
    },
  },
  nameContainer: {
    borderRadius: "50%",
    backgroundColor: "black",
    width: "130px",
    height: "130px",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "1%",
    zIndex: "1",
    background: "-webkit-linear-gradient(45deg, #09009f, #9500ffa6 80%)",
    [theme.breakpoints.down("sm")]: {
      width: "17vw !important",
      height: "17vw !important",
    },
  },
  name: {
    color: "white",
    fontFamily: "Brusher !important",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem !important",
    },
  },
  dateContainer: {
    margin: "1rem 0",
    borderTop: "2px solid black",
    borderBottom: "2px solid black",

    borderBottomStyle: "dashed",
    borderTopStyle: "dashed",
    padding: "5px",
  },
  date: {
    fontSize: "4rem !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem !important",
    },
  },
}));

export default useInviteStyles;
