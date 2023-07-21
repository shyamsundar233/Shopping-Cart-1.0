import React from "react";
import { Link } from "react-router-dom";
import ViewProduct from "./Components/ViewProduct";
import Title from "./Components/Title";

const App = () => {
  return (
    <div>
      <Title></Title>
      <ViewProduct></ViewProduct>
    </div>
  );
};

export default App;
