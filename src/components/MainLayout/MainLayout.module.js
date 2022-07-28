import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
}));

export default useStyles;
