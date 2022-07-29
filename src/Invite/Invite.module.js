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
    objectPosition: "20% 37%",
    margin: "auto",
  },
  textContainer: {
    position: "absolute",
    top: "30%",
    width: "80vh",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#e6e6e699",
    mixBlendMode: "hard-light",
    flexDirection: "column",
    minHeight: "25rem",
    borderRadius: "20px",
    alignItems: "center",
    padding: "20px",
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
  h2text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem !important",
    },
  },
}));

export default useInviteStyles;
