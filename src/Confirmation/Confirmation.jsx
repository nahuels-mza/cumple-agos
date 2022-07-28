import React from 'react'
import useConfirmationStyles from "./Confirmation.module"
import { Box, Link, Typography } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import BallotIcon from '@mui/icons-material/Ballot'

const Confirmation = () => {
    const classes = useConfirmationStyles()
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

    return(
        <Box component="div" className={classes.container}>
            <Typography variant="h3" textAlign="center">
            No olvides confirmar
            </Typography>
            <Box flexDirection="row" className={classes.confirmation}>
            <Link target="_blank" href="https://forms.gle/mvkm2yPdj5CqsqQ28">
                <BallotIcon className={classes.icon} fontSize="large" />
            </Link>
            <Link href={`https://wa.me/5492615261617?text=${whatsMessage}`} marginLeft={2}>
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
    )
}

export default Confirmation