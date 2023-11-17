/* eslint-disable react/prop-types */
import {Fragment} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { NavLink } from "react-router-dom"

export default function AlertDialog({open,handleClose}) {

  return (
    <Fragment>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Do you want to continue?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <NavLink  to="/list/advanced" sx={{ my: 2, color: 'white', display: 'block', mr:10 }}>
          <Button onClick={handleClose} autoFocus>
            Continue
          </Button>
          </NavLink>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}