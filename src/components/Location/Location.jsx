import React from "react";
import useLocationStyles from "./Location.module";
import { Box, Link, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import background from "../../assets/locationBackground.png"

const Location = () => {
  const classes = useLocationStyles();
  return (
  <Box component="div" className={classes.imageContainer} padding={4}
  sx={{
    background: `url(${background}) center`,
  }}
  background-size= "cover"
  width= "100%"
  height= "200px"
  >
      <Typography variant="h2" textAlign="center">
        Location
      </Typography>
      <Typography variant="h4" textAlign="center">
        Quinta Las Rosas
        <Link target="_blank" href="https://goo.gl/maps/73ZTibLhouNxPVN19" background={background}>
          <LocationOnIcon className={classes.icon} fontSize="large" />
        </Link>
      </Typography>

    </Box>

  );
};

export default Location;
