import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const CustomAlert = ({ alertOpen, type, message }) => {
  const [open, setOpen] = useState(alertOpen);
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("center");
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={() => setOpen(!open)}
      message="I love snacks"
      key={vertical + horizontal}
    >
      <Alert variant="filled" severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
