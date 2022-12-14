import React from "react"
import { Box, Link, Typography } from "@mui/material"
import Image from "mui-image"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"


import useInviteStyles from "./Invite.module";
import photo from "../assets/agosMainPic.jpg";
import Timer from "../Timer/Timer";
import Gift from '../Gift/Gift'
const Invite = () => {
  const classes = useInviteStyles();

  // TODO ADD FORMAT HERE
  const whatsMessage = // eslint-disable-next-line
    "Hola Agos confirmo mi asistencia para el cumple%0a \
    Cantidad de Adultos:%0a \
    Cantidad de Niños (de 3 a 10): %0a \
    Menu especial: Veggie/Celiaco %0a \
    Tienes alguna alergia o restricción alimentaria?";

  // FROM https://mailto.vercel.app/
  const emailMessage = `mailto:bloin.lourdes@gmail.com?cc=nahuelcalderon@gmail.com&subject=${encodeURIComponent(
    "Confirmo asistencia al cumple de Agos",
  )}&body=Cantidad de Adultos:%0a \
  Cantidad de Niños (de 3 a 10): %0a \
  Menu especial: Veggie/Celiaco %0a \
  Tienes alguna alergia o restricción alimentaria?`;

  return (
    <Box component="div" className={classes.container}>
      <Box component="div" className={classes.imageContainer}>
        <Image
          className={classes.image}
          height="100vh"
          width="100vh"
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
        <Box className={classes.dateContainer}>
          <Typography variant="h4" textAlign="center" className={classes.date}>
            08 | 10 | 22
          </Typography>
        </Box>
        <Timer />
        <Link target="_blank" href="https://goo.gl/maps/73ZTibLhouNxPVN19">
          <LocationOnIcon
            className={`${classes.icon} ${classes.mapIcon}`}
            fontSize="large"
          />
        </Link>
        <Typography variant="h5" color="#ffffff">No olvides confirmar!</Typography>
        <Box flexDirection="row" className={classes.confirmation} margin="10px 0">
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
        <Gift />
       </Box>
    </Box>
  );
};

export default Invite;
