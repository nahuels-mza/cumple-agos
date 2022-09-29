// import Spotify from "../Spotify/Spotify";
import Location from "../Location/Location";
import Confirmation from "../Confirmation/Confirmation";
import Gift from "../Gift/Gift";
import useStyles from "./MainLayout.module";
import Invite from "../Invite/Invite";
import { Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Timer from '../Timer/Timer'
import Redes from '../Redes/Redes'

const MainLayout = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.container}>
      <Invite />
      <Timer />
      <Location />
      <Confirmation />
      <Carousel />
      <Gift />
      {/* <Spotify /> */}
      <Redes />
    </Box>
  );
};

export default MainLayout;
