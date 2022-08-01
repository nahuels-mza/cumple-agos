import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'


import Dialog from '@mui/material/Dialog'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'

import { blue } from '@mui/material/colors'

const accountsTest =[{name: "CBU", value: "00123012093856712"}, {name: "alias", value: "birthday"}]

function GiftDialog(props) {
  const { onClose, open } = props

  const handleClose = () => {
    onClose()
  }

  const handleListItemClick = () => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} open={open}>

      <List sx={{ pt: 0 }}>
        {accountsTest.map((account) => (
          <ListItem onClick={handleListItemClick} key={account.name}>
            <ListItemText primary={`${account.name}: ${account.value}`} />
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[900] }}>
                <ContentCopyIcon onClick={() => {navigator.clipboard.writeText(account.value)}}>
                    Copy
                </ContentCopyIcon>
              </Avatar>
            </ListItemAvatar>

          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

GiftDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,

}

export default function GiftDialogDemo() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <p>
      <Button variant="outlined" onClick={handleClickOpen}>
      Si me queres hacer un obsequio
      </Button>
      <GiftDialog
        open={open}
        onClose={handleClose}
      />
    </p>
  )
}
