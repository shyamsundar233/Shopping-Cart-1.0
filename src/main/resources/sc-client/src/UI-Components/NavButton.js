import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavButton = ({ label, path, variant }) => {
  const nav = useNavigate();
  return (
    <Button
      onClick={() => {
        nav(path);
      }}
      variant={variant}
    >
      {label}
    </Button>
  );
};

export default NavButton;
