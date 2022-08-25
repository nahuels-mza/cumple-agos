import React from "react";
import { Box, Link, Typography } from "@mui/material";
import useSpotifyStyles from "./Spotify.module";
import spotify from "../../assets/spotify.png";

const Spotify = () => {
  const style = useSpotifyStyles();
  const playlist =
    "https://open.spotify.com/playlist/2FKKQuINQFvPhavl9gleIG?si=042f61aa87b349f6";
  return (
    <Box
      component="section"
      className={style.container}
      display="flex"
      flexDirection="column"
      height='200px'
      padding={1}
    >
      <Typography variant="h5" textAlign="center" color="#1c7d4199" mt={4} mb={1}>
        Preparate para disfrutar de la Fiesta!
      </Typography>

      <Link target="_blank" href={playlist}>
        <img
          src={spotify}
          width={50}
          fontSize="large"
          fit="cover"
          alt="spotify"
        />
      </Link>
    </Box>
  );
};
export default Spotify;
