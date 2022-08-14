import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={1} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const { message, type, open } = useSelector(
    (state) => state.NotifyReducer,
    shallowEqual
  );

  const [openAl, setOpenAl] = useState(false);
  const [dataNoti, setDataNoti] = useState({
    message: "",
    type: "",
    open: 0,
  });

  useEffect(() => {
    setDataNoti({ message: message, type: type });
    setOpenAl(true);
    if (open === 0) {
      setOpenAl(false);
    }
  }, [open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAl(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={openAl} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={dataNoti.type}>
          {dataNoti.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
