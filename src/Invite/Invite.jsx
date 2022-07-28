import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "mui-image";

import photo from '../assets/photo1.png'

import useInviteStyles from "./Invite.module";
import Spotify from '../Spotify/Spotify'
import Location from '../Location/Location'
import Confirmation from '../Confirmation/Confirmation'

const Invite = () => {
  const classes = useInviteStyles();

  return (
    <Box component="div" className={classes.container}>
      <Box component="div" className={classes.imageContainer}>
        <Image
          className={classes.image}
          height="calc(100vh)"
          width="calc(100vh)"
          fit="cover"
          src={photo}
        />
      </Box>

      <Box component="div" className={classes.textContainer}>
        <Typography variant="h2" textAlign="center">
          SAVE THE DATE!
        </Typography>
        <Typography variant="h1" textAlign="center">
          08 / 10 / 22
        </Typography>

      </Box>
      <Spotify />
      <Location />
      <Confirmation />
    </Box>
  );
};

export default Invite;
