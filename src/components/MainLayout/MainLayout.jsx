import Spotify from "../Spotify/Spotify";
import Location from "../Location/Location";
import Confirmation from "../Confirmation/Confirmation";
import useStyles from "./MainLayout.module";
import Invite from "../Invite/Invite";
import { Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const MainLayout = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.container}>
      <Invite />
      <Confirmation />
      <Carousel />
      <Location />
      <Spotify />
    </Box>
  );
};

export default MainLayout;
