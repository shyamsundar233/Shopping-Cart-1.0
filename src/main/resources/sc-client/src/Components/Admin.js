import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import NavButton from "../UI-Components/NavButton";

const Admin = () => {
  return (
    <div>
      <Outlet />
      <NavButton
        label="Log out"
        path="/"
        variant="outlined"
        sx={{ position: "absolute", top: "10px", right: "10px" }}
      />
    </div>
  );
};

export default Admin;
