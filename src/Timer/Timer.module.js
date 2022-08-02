import { makeStyles } from "@mui/styles";

const useTimerStyles = makeStyles((theme) => ({
font:{
    fontSize:"30px",
    fontStyle:"italic",
    color:"#ffffff",

    [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
        fontStyle: "italic",
        fontWeight: "700",
      },
}

}))

export default useTimerStyles