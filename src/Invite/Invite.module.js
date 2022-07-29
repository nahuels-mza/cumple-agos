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
    "& div": {
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "100% !important",
        height: "100% !important",
      },
    },
  },
  image: {
    objectPosition: "0% 0% !important",
    margin: "auto",
  },
  textContainer: {
    position: "absolute",
    top: "15%",
    width: "80vh",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#e6e6e699",
    mixBlendMode: "hard-light",
    flexDirection: "column",
    minHeight: "25rem",
    borderRadius: "20px",
    alignItems: "center",
    padding: "60px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      top: "10%",
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
  mapIcon: {
    fontSize: "3rem !important",
  },
  title: {
    fontFamily: "Brusher !important",
    fontSize: "5rem !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem !important",
    },
  },

  nameContainer: {
    borderRadius: "50%",
    backgroundColor: "black",
    width: "135px",
    height: "135px",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "1%",
    zIndex: "2",
  },
  name: {
    color: "white",
    fontFamily: "Brusher !important",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem !important",
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
  },
}));

export default useInviteStyles;
