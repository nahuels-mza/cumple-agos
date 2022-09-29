import { makeStyles } from "@mui/styles";

const useTimerStyles = makeStyles((theme) => ({
  container: {
    border: 'solid 0,4px',
    borderRadius: '100px 50px',
    borderStyle: 'groove',
    padding: '1.2rem',
    backgroundColor: '#b9daf252'
  },
  font: {
    fontSize: "30px !important",
    fontStyle: "italic",
    color: "#1506a6",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      fontStyle: "italic",
      fontWeight: "700",
    },
  },
}));

export default useTimerStyles;
