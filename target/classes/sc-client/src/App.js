import React from "react";
import { Outlet } from "react-router-dom";
import Title from "./Components/Title";
import "./App.css";

const App = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Title />

      <div className="outler-app">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
