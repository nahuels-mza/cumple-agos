import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "mui-image"
import photo from "../../assets/photo1.png";
import useInviteStyles from "./Invite.module";
import Timer from "../Timer/Timer"
import Gift from "../Gift/Gift"

const Invite = () => {
  const classes = useInviteStyles()

  return (
    <Box component="section" className={classes.container}>
      <Box component="section" className={classes.imageContainer}>
        <Image
          className={classes.image}
          height="100vh"
          width="100vh"
          fit="cover"
          src={photo}
        />
      <Box className={classes.nameContainer}>
        <Typography variant="h2" textAlign="center" className={classes.name}>
          AGOS
        </Typography>
      </Box>
      <Box component="div" className={classes.textContainer}>
        <Typography variant="h2" textAlign="center" className={classes.title}>
          save the date
        </Typography>
        <Box className={classes.dateContainer}>
          <Typography variant="h4" textAlign="center" className={classes.date}>
            08 | 10 | 22
          </Typography>
          </Box>
          <Timer />
        <Gift />
        </Box>
        </Box>
    </Box>
  )
}


export default Invite
