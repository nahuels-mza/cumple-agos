import * as React from 'react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import useGiftStyles from "./Gift.module"


import Dialog from '@mui/material/Dialog'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'

import { blue } from '@mui/material/colors'

const accountsTest =[{name: "CBU", value: "00123012093856712"}, {name: "Alias", value: "birthday"}]

const GiftDialog = (props) => {
    const classes = useGiftStyles()
    const { onClose, open } = props

    const handleClose = () => {
        onClose()
    }

    const handleListItemClick = () => {
        onClose()
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <List sx={{ pt: 0, margin: "20px" }} >
                {accountsTest.map((account) => (
                <ListItem onClick={handleListItemClick} key={account.name}>
                    <ListItemText primary={`${account.name}: ${account.value}`} className={classes.accountText} />
                    <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[900], cursor:"pointer" }}>
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

export default GiftDialog