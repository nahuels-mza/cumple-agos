import React from "react";
import { Box, Typography } from "@mui/material";
import photo from "../../assets/photo1.png";
import useInviteStyles from "./Invite.module";

const Invite = () => {
  const classes = useInviteStyles();

  return (
    <Box
      component="section"
      className={`${classes.imageContainer} ${classes.parallax}`}
      sx={{
        background: `url(${photo}) no-repeat center fixed`,
      }}
      width="100%"
    >
      <Box component="div" className={classes.textContainer}>
        <Typography variant="h2" textAlign="center" className={classes.font}>
          save the date
        </Typography>
        <Typography variant="h4" textAlign="center" className={classes.font}>
          08 / 10 / 22
        </Typography>
        <Typography variant="h4" className={classes.font} textAlign="center">
          Te espero!
        </Typography>
      </Box>
    </Box>
  );
};

export default Invite;
