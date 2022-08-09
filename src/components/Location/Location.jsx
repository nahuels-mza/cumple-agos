import React from "react";
import useLocationStyles from "./Location.module";
import { Box, Link, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Location = () => {
  const classes = useLocationStyles();
  return (
    <Box component="section" className={classes.container} padding={4}>
      <Typography variant="h2" textAlign="center">
        Location
      </Typography>
      <Typography variant="h4" textAlign="center">
        Quinta Las Rosas
        <Link target="_blank" href="https://goo.gl/maps/73ZTibLhouNxPVN19">
          <LocationOnIcon
            className={`${classes.icon} ${classes.mapIcon}`}
            fontSize="large"
          />
        </Link>
      </Typography>
    </Box>
  );
};

export default Location;
