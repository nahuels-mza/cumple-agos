import { makeStyles } from '@mui/styles'

const useLocationStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        bottom: 0,
        width: "100%",
        backgroundColor: "#e6e6e699",
        minHeight: "100px",
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        flexDirection:"column"

    },
     icon: {
      cursor: "pointer",
      color: "#3cbc6d",
      minHeight: "120"
    },
    imageContainer: {
      backgroundSize: "cover !important",
      backgroundPosition: "0% 18% !important",
      position: "relative",
      height: "100vh",
      [theme.breakpoints.down("sm")]: {
        backgroundPosition: "initial !important",
        backgroundSize: "contain !important",
        height: "75vh",
      },
    },
    parallax: {
      willChange: "contents",
      overflow: "hidden",
    },
}));

  export default useLocationStyles