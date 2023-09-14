import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavButton = ({ label, path, variant, sx }) => {
  const nav = useNavigate();
  return (
    <Button
      onClick={() => {
        nav(path);
      }}
      variant={variant}
      sx={sx}
    >
      {label}
    </Button>
  );
};

export default NavButton;
