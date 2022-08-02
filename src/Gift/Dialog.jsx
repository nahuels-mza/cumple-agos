import * as React from 'react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import useGiftStyles from "./Gift.module"

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider';

import { blue } from '@mui/material/colors'

const accountsTest =[{name: "CBU", value: "1500001500005163476400"}, {name: "Alias", value: "LOURDES.BLOIN"}]

const GiftDialog = (props) => {
    const classes = useGiftStyles()
    const { onClose, open } = props

    const handleClose = () => {
        onClose()
    }

    const handleListItemClick = () => {
        onClose()
    }

    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
      }
    const copyToClipboard = (text) => {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text)
            return
        }
        navigator.clipboard.writeText(text)
      }
    return (
        <Dialog onClose={handleClose} open={open}>
            <List sx={{ pt: 0, margin: "20px 12px" }} >
                <AccountBalanceIcon />
                {accountsTest.map((account) => (
                <ListItem onClick={handleListItemClick} key={account.name}>
                    <ListItemText primary={<Typography  style={{ color: 'black' }}className={classes.accountText}>{`${account.name}:`} </Typography>}
                     secondary={`${account.value}`} />
                    <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[900], cursor:"pointer" }}>
                        <ContentCopyIcon onClick={copyToClipboard(account.value)} />
                    </Avatar>
                    </ListItemAvatar>
                </ListItem>
                ))}
               <Divider />
            <List>
                <CardGiftcardIcon />
                <ListItem>
                    <ListItemText primary="En la fiesta tambien habra un lugar para recibir regalos " />
                </ListItem>
            </List>
            </List>
        </Dialog>
    )
}

export default GiftDialog