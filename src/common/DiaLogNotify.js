import React from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export const DialogNotifyConfirm = (data) => {
  /*
    {
        title:"",
        message:"",
        buttons: [
            {
            
                label: "Yes",
                onClick: () => alert("Click Yes"),
                className:""
            },

        ]
    }
    */
  return confirmAlert({
    title: data.title,
    message: data.message,
    buttons: [
      {
        label: "Có",
        onClick: () => data.handle,
        className: "btn btn-primary btn-sm",
      },
      {
        label: "No",
        onClick: () => {return;},
        className: "btn btn-primary btn-sm",
      },
    ],
  });
};
