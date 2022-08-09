import { makeStyles } from "@mui/styles";

const useGiftStyles = makeStyles((theme) => ({
  gifIcon: {
    fontSize: "2rem !important",
    margin: "0 12px",

    [theme.breakpoints.down("sm")]: {
      margin: "0 8px",
    },
  },
  accountText: {
    marginRight: "12px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px",
    },
  },
  displayNone: {
    zIndex: "-10",
    position: "relative",
    left: "-30%",
    top: "10px",
    whiteSpace: "nowrap",
    width: "-webkit-fill-available",
  },
}));

export default useGiftStyles;
