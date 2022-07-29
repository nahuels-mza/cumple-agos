import React from "react";
import { Box, Link, Typography } from "@mui/material";
import Image from "mui-image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import useInviteStyles from "./Invite.module";
import photo from "../assets/photo1.png";
import Timer from "../Timer/Timer";

const Invite = () => {
  const classes = useInviteStyles();

  // TODO ADD FORMAT HERE
  const whatsMessage = // eslint-disable-next-line
    "Hola Agos Confirmo mi asistencia para el evento el 8/10.\n \
    DATOS:\n \
    Adultos: \n \
    Niños (de 2 a 12): \n \
    Menu especial: Veggie/Celiaco";

  // FROM https://mailto.vercel.app/
  const emailMessage = `mailto:bloin.lourdes@gmail.com?cc=nahuelcalderon@gmail.com&subject=${encodeURIComponent(
    "Confirmo asistencia al cumple de Agos",
  )}&body=Datos:%0DNombre y Apellido:%0DAdultos:%0DNiños de 2 a 12 años:%0DMenu especial: Si (Veggie/Celiaco) - No`;

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
      <Box className={classes.nameContainer}>
        <Typography variant="h2" textAlign="center" className={classes.name}>
          AGOS
        </Typography>
      </Box>
      <Box component="div" className={classes.textContainer}>
        <Typography variant="h2" textAlign="center" className={classes.title}>
          save the date
        </Typography>
        <Timer />
        <Box className={classes.dateContainer}>
          <Typography variant="h4" textAlign="center" className={classes.date}>
            08 | 10 | 22
          </Typography>
        </Box>
        <Link target="_blank" href="https://goo.gl/maps/73ZTibLhouNxPVN19">
          <LocationOnIcon
            className={`${classes.icon} ${classes.mapIcon}`}
            fontSize="large"
          />
        </Link>
        <Typography variant="h5">No olvides confirmar!</Typography>
        <Box flexDirection="row" className={classes.confirmation}>
          <Link target="_blank" href="https://forms.gle/mvkm2yPdj5CqsqQ28">
            <ThumbUpAltIcon className={classes.icon} fontSize="large" />
          </Link>
          <Link
            href={`https://wa.me/5492615261617?text=${whatsMessage}`}
            marginLeft={2}
          >
            <WhatsAppIcon className={classes.icon} fontSize="large" />
          </Link>
          <Link href={emailMessage} marginLeft={2}>
            <EmailIcon className={classes.icon} fontSize="large" />
          </Link>
        </Box>
        <Typography variant="h4" textAlign="center">
          Te espero!!
        </Typography>
      </Box>
      {/* <Spotify /> */}
    </Box>
  );
};

export default Invite;
