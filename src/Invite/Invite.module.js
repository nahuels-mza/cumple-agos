import { makeStyles } from '@mui/styles'

const useInviteStyles = makeStyles((theme) => {
    console.log({theme})
    return {
        container: {

                [theme.breakpoints.down("sm")]: {
                    width: "100% !important",
                    // height: "100% !important",
                }

        },
        imageContainer: {
            "& div": {
                margin: "auto",
                [theme.breakpoints.down("sm")]: {
                    width: "100% !important",
                    // height: "100% !important",
                }
            }
        },
        image: {
            objectPosition: "20% 37%",
            margin: "auto",
        },
        textContainer: {
            position: "absolute",
            top: "35%",
            left:"28%",
            width: "calc(45vw)",
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
                width: "calc(90vw)",
                left: 0,
                top: "15%",
            }
        },
        icon:{
            cursor: "pointer"
        }
    }
});

  export default useInviteStyles