import * as React from 'react'
import PropTypes from 'prop-types'
import { Box, Button} from "@mui/material"
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import useGiftStyles from "./Gift.module"
import GiftDialog from "./Dialog"

GiftDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,

}

export default function GiftDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const classes = useGiftStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <GiftDialog
        open={open}
        onClose={handleClose}
      />
      <Box display="flex" alignItems="center" margin="12px 0">
        <CardGiftcardIcon className={classes.gifIcon} />
        <Button variant="outlined" onClick={handleClickOpen}>
          Si me queres hacer un obsequio
        </Button>
        <CardGiftcardIcon className={classes.gifIcon} />
      </Box>
    </>
  )
}
