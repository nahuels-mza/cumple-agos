import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import Image from 'mui-image'
import foto from '../assets/foto1.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useInviteStyles from "./Invite.module";

const Invite = () => {
  const classes = useInviteStyles()

    return (
      <Box component="div" className={classes.container}>
          <Box component="div" className={classes.imageContainer}>
          <Image className={classes.image} height="calc(100vh)" width="calc(100vh)" fit="cover" src={foto} />
          </Box >

          <Box component="div" className={classes.textContainer}>
              <Typography variant="h2" textAlign="center">SAVE THE DATE!</Typography>
              <Typography variant="h4" textAlign="center">08 / 10 / 22</Typography>
              <Link target="_blank" href="https://goo.gl/maps/73ZTibLhouNxPVN19"><LocationOnIcon className={classes.icon} fontSize="large" /></Link>
              <Typography variant="h4" textAlign="center">Te espero!!</Typography>


            </Box>
      </Box>
    )
  }

export default Invite;
