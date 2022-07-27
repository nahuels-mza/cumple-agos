import React from "react";
import { Box, Link, Typography } from "@mui/material";
import Image from "mui-image";
import foto from "../assets/foto1.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useInviteStyles from "./Invite.module";

const Invite = () => {
  const classes = useInviteStyles();

  // TODO ADD FORMAT HERE
  const whatsMessage =
    "Hola Agos Confirmo mi asistencia para el evento el 8/10.\
    DATOS:\
  Adultos: \
  Niños (de 2 a 12): \
  Menu especial: Veggie/Celiaco";

  // FROM https://mailto.vercel.app/
  const emailMessage =
    "mailto:bloin.lourdes@gmail.com?cc=nahuelcalderon%40gmail.com&subject=Confirmo%20asistencia%20al%20cumple%20de%20Agos!&body=Datos%3A%0D%0ANombre%20y%20Apellido%3A%0D%0AAdultos%20%23%3A%20%0D%0ANi%C3%B1os%20(de%202%20a%2012)%20%23%3A%0D%0AMenu%20especial%3A%20Veggie%2FCeliaco%3A";

  return (
    <Box component="div" className={classes.container}>
      <Box component="div" className={classes.imageContainer}>
        <Image
          className={classes.image}
          height="calc(100vh)"
          width="calc(100vh)"
          fit="cover"
          src={foto}
        />
      </Box>

      <Box component="div" className={classes.textContainer}>
        <Typography variant="h2" textAlign="center">
          SAVE THE DATE!
        </Typography>
        <Typography variant="h4" textAlign="center">
          08 / 10 / 22
        </Typography>
        <Link target="_blank" href="https://goo.gl/maps/73ZTibLhouNxPVN19">
          <LocationOnIcon className={classes.icon} fontSize="large" />
        </Link>
        <Typography>No olvides confirmar!</Typography>
        <Box flexDirection="row">
          <Link href={emailMessage}>
            <EmailIcon className={classes.icon} fontSize="large" />
          </Link>
          <Link
            href={`https://wa.me/5492615261617?text=${whatsMessage}`}
            marginLeft={2}
          >
            <WhatsAppIcon className={classes.icon} fontSize="large" />
          </Link>
        </Box>
        <Typography variant="h4" textAlign="center">
          Te espero!!
        </Typography>
      </Box>
    </Box>
  );
};

export default Invite;
