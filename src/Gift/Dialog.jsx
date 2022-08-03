import * as React from "react";
import {
  Avatar,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Box,
  TextareaAutosize,
} from "@mui/material";
import useGiftStyles from "./Gift.module";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";

import { blue } from "@mui/material/colors";

const accountsTest = [
  { name: "CBU", value: "1500001500005163476400" },
  { name: "Alias", value: "LOURDES.BLOIN" },
];

const GiftDialog = (props) => {
  const classes = useGiftStyles();
  const { onClose, open } = props;

  const textRef_CBU = React.useRef(null);
  const textRef_Alias = React.useRef(null);

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = () => {
    onClose();
  };

  const copyToClipboard = (account) => {
    if (!navigator.clipboard) {
      const textRef = account.name.includes("CBU")
        ? textRef_CBU
        : textRef_Alias;
      textRef.current.focus();
      textRef.current.select();

      document.execCommand("copy", true, account.value);
    } else {
      navigator.clipboard.writeText(account.value);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0, margin: "20px 12px" }}>
        <AccountBalanceIcon />
        {accountsTest.map((account) => (
          <ListItem onClick={handleListItemClick} key={account.name}>
            <ListItemText
              primary={
                <Typography
                  style={{ color: "black" }}
                  className={classes.accountText}
                >
                  {`${account.name}:`}
                </Typography>
              }
              secondary={`${account.value}`}
            />
            <TextareaAutosize
              type="text"
              ref={account.name.includes("CBU") ? textRef_CBU : textRef_Alias}
              defaultValue={account.value}
              className={classes.displayNone}
            />

            <ListItemAvatar>
              <Avatar
                sx={{
                  bgcolor: blue[100],
                  color: blue[900],
                  cursor: "pointer",
                }}
              >
                <ContentCopyIcon onClick={() => copyToClipboard(account)} />
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
  );
};

export default GiftDialog;
