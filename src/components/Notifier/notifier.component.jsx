import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import "./Notifier.styles.css";

export default function Notifier(props) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        className="notifier__style"
        open={props.open}
        autoHideDuration={
          props.autoHideDuration > 0 ? props.autoHideDuration : 6000
        }
        onClose={props.handleClick}
        message={props.message}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={props.handleClick}>
              Close
            </Button>
          </React.Fragment>
        }
      />
    </div>
  );
}
