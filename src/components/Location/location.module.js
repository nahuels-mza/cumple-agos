import { makeStyles } from '@mui/styles'

const useLocationStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        bottom: 0,
        width: "100%",
        backgroundColor: "#ffff",
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

}));

  export default useLocationStyles