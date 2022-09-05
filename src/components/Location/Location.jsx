import React from "react";
import useLocationStyles from "./location.module";
import { Box, Link, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Location = () => {
  const classes = useLocationStyles();
  return (
    <Box
      component="div"
      className={classes.imageContainer}
      padding={4}
      sx={{
        // background: `url(${background}) center`,
        backgroundColor: '#b9daf27d'
      }}
      background-size="cover"
      width="100%"
      height="250px"
    >
      <Link
        target="_blank"
        href="https://goo.gl/maps/73ZTibLhouNxPVN19"
        sx={{ textDecoration: "none", color: "inherit" }}
        className={classes.linkContainer}
      >
        <Typography variant="h2" textAlign="center" className={classes.locationTitle} >
          Lugar
        </Typography>
        <Box display='flex' justifyContent='center' marginY={2}>
          <LocationOnIcon className={`${classes.icon}`} fontSize="large"/>
        </Box>
        <Typography variant="h4" textAlign="center" color='#575756eb'>
          Quinta Las Rosas
        </Typography>
      </Link>
    </Box>
  );
};

export default Location;
