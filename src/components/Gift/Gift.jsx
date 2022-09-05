import * as React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import useGiftStyles from "./Gift.module";
import GiftDialog from "./Dialog";

GiftDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function GiftDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const classes = useGiftStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GiftDialog open={open} onClose={handleClose} />
      <Box component='section' display="flex" alignItems="center" justifyContent='center' width='100%' height='200px' sx={{backgroundColor: '#dcecef99'}}>
        <CardGiftcardIcon className={classes.gifIcon} />
        <Button
          sx={{
            border: "3px solid rgba(25, 118, 210, 0.5)",
            "&:hover": { border: "3px solid rgba(25, 118, 210, 0.5)" },
          }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          <Typography sx={{ fontWeight: 600 }}>
            Queres hacerme un regalo?
          </Typography>
        </Button>
        <CardGiftcardIcon className={classes.gifIcon} />
      </Box>
    </>
  );
}
