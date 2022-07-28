import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";

const useConfirmationStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    bottom: 0,
    width: "100%",
    backgroundColor: "#b9f2da",
    minHeight: "100px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px",
  },

  icon: {
    cursor: "pointer",
    color: "#3cbc6d",
    minHeight: "120",
  },
  confirmation: {
    "& svg": {
      fill: "#ab83ab",
    },
  },
}));

export default useConfirmationStyles;
