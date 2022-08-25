import React, { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"

import useTimerStyles from "./Timer.module"

const Timer = () => {
    const classes = useTimerStyles()
    const partyDate = new Date("2022-10-08T21:00:00")
    const calculateTimeLeft = () => {
      const now =  new Date();
      const difference = partyDate.getTime() - now.getTime();

      let timeLeft = {}

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (3600000 ) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft())
      }, 1000)
    })

    return (
      <Box component="section" className={classes.container} marginY={3}>
        <Typography variant="p" textAlign="center" className={classes.font}>
          {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
            <>
              <Typography className={classes.font}>Faltan</Typography>
                <Box display='flex' marginY={2}>
                <Box display='flex' flexDirection='column' marginX={2} sx={{borderRight: 'solid 1px', paddingRight: '25px'}}>
                  <Typography className={classes.font}>{timeLeft.days.toLocaleString('en-US', {minimumIntegerDigits: 2})}</Typography>
                  <Typography className={classes.font}>dias</Typography>
                </Box>
                <Box display='flex' flexDirection='column' marginX={2} sx={{borderRight: 'solid 1px', paddingRight: '25px'}}>
                  <Typography className={classes.font}>{timeLeft.hours.toLocaleString('en-US', {minimumIntegerDigits: 2})}</Typography>
                  <Typography className={classes.font}>hs</Typography>
                </Box>
                <Box display='flex' flexDirection='column' marginX={2} sx={{borderRight: 'solid 1px', paddingRight: '25px'}}>
                  <Typography className={classes.font}>{timeLeft.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2})}</Typography>
                  <Typography className={classes.font}>min</Typography>
                </Box>
                <Box display='flex' flexDirection='column' marginX={2} >
                  <Typography className={classes.font}>{timeLeft.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2})}</Typography>
                  <Typography className={classes.font}>seg</Typography>
                </Box>
              </Box>

            </>
          ) : (
            <p>Gracias por Participar!!</p>
          )}
        </Typography>
      </Box>
    )}

export default Timer