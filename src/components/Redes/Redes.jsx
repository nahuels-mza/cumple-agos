import { Box, Button, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

const Redes = () => {

    return (
        <Box component="section" display="flex" width="100%" alignItems="center" justifyContent="center" paddingY={3} sx={{backgroundColor: "#ff00d53d"}}>

            <InstagramIcon />
            <Typography marginLeft={1}>#15agos8Octubre22</Typography>
        </Box>
    )
}

export default Redes