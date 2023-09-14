import React, { useEffect } from "react";
import "./CustomModal.css";
import { Button } from "@mui/material";

const CustomModal = ({ header, content, footer, open, closeModal }) => {
  return (
    <div>
      <div className={"modal-container " + (open ? "open" : "")}>
        <div className="modal-box">
          <div className="cust-modal-header">{header}</div>
          <div className="cust-modal-content">{content}</div>
          <div className="cust-modal-footer">{footer}</div>
          <Button variant="contained" onClick={closeModal}>
            Close
          </Button>
        </div>
      </div>
      <div className={"freeze-layer " + (open ? "open" : "")}></div>
    </div>
  );
};

export default CustomModal;
