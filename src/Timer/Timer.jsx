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
      <Box component="div">
        <Typography variant="p" textAlign="center" className={classes.font}>
          {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
            <p>
              Party starts in {timeLeft.days.toLocaleString('en-US', {minimumIntegerDigits: 2})} days {timeLeft.hours.toLocaleString('en-US', {minimumIntegerDigits: 2})}
              :{timeLeft.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2})}:{timeLeft.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2})}
            </p>
          ) : (
            <p>Party is up 🔥</p>
          )}
        </Typography>
      </Box>
    )}

export default Timer