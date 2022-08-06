import React, { forwardRef, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { getAuth, signOut } from "firebase/auth";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmationDialog() {
  const auth = getAuth();
  const { state, dispatch } = useContext(NoteContext);
  const {
    dialog: { isDialogOpen },
  } = state;

  // LOG USER OUT
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "REMOVE_USER" });
        console.log("User logout successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch({ type: "CLOSE_DIALOG" });
  };

  // CLOSE DIALOG
  const handleClose = () => {
    dispatch({ type: "CLOSE_DIALOG" });
    console.log("close dialog");
  };

  return (
    <div>
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>logout</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No, Stall Logged In</Button>
          <Button onClick={handleLogout}>Yes, Logout</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
