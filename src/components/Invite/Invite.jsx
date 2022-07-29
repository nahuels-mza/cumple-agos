import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import photo from "../../assets/photo1.png";
import useInviteStyles from "./Invite.module";

const Invite = () => {
  const classes = useInviteStyles()

  return (
    <Box
      component="section"
      className={`${classes.imageContainer} ${classes.parallax}`}
      sx={{
        background: `url(${photo}) no-repeat center fixed`,
      }}
      width="100%"
    >
      <Box component="div" className={classes.textContainer}>
        <Typography variant="h2" textAlign="center" className={classes.font}>
          Save the Date
        </Typography>
        <Typography variant="h4" textAlign="center" className={classes.font}>
          08 / 10 / 22
        </Typography>
        <Typography variant="h4" className={classes.font} textAlign="center">
          Te espero!
        </Typography>
        <Timer />
      </Box>
    </Box>
  )
}


function Timer() {
  const classes = useInviteStyles()
  const partyDate = new Date("2022-08-28T10:00:00")
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
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <Box component="div" className={classes.textContainer}style={{ background: '#8383c3'}}>
      <Typography variant="h2" textAlign="center" className={classes.font}>
        {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
          <p>
            Party starts in {timeLeft.days.toLocaleString('en-US', {minimumIntegerDigits: 2})} days {timeLeft.hours.toLocaleString('en-US', {minimumIntegerDigits: 2})}
            :{timeLeft.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2})}:{timeLeft.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2})}
          </p>
        ) : (
          <p>Time is up 🔥</p>
        )}
      </Typography>
    </Box>
  );
}

export default Invite
