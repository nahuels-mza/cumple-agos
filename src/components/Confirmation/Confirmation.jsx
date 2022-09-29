import React from "react";
import useConfirmationStyles from "./Confirmation.module";
import { Box, Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const Confirmation = () => {
  const classes = useConfirmationStyles();
  // TODO ADD FORMAT HERE
  const whatsMessage = // eslint-disable-next-line
    "Hola Agos confirmo mi asistencia para el cumple%0a \
    Nombre y apellido:%0a \
    Cantidad de Adultos:%0a \
    Cantidad de Niños (de 3 a 10): %0a \
    Menu especial: Veggie/Celiaco %0a \
    Tienes alguna alergia o restricción alimentaria?";

  // FROM https://mailto.vercel.app/
  const emailMessage = `mailto:bloin.lourdes@gmail.com?cc=nahuelcalderon@gmail.com&subject=${encodeURIComponent(
    "Confirmo asistencia al cumple de Agos",
  )}&body=Nombre y apellido:%0a \Cantidad de Adultos:%0a \
  Cantidad de Niños (de 3 a 10): %0a \
  Menu especial: Veggie/Celiaco %0a \
  Tienes alguna alergia o restricción alimentaria?`;

  return (
    <Box component="section" className={classes.container} width='100%' height='200px'>
      <Typography fontSize="2rem" color='#575756eb'>
        Confirmar Asistencia
      </Typography>
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
    </Box>
  );
};

export default Confirmation;
