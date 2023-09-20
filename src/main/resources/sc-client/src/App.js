import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Title from "./Components/Title";
import { useDispatch } from "react-redux";
import "./App.css";
import { loadItems } from "./Store/item/itemReducer";

const App = () => {
  const dispatch = useDispatch();
  dispatch(loadItems(dispatch));
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
