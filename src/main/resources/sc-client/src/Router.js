import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddProduct from "./Components/AddProduct";
import ListProduct from "./Components/ListProduct";
import AddPurchase from "./Components/AddPurchase";
import ListPurchase from "./Components/ListPurchase";
import Test from "./Components/Test";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
        <Routes>
          <Route path="admin">
            <Route index element={<ListProduct />} />
            <Route path="create" element={<AddProduct />} />
            <Route path="createPurchase" element={<AddPurchase />} />
            <Route path="listPurchase" element={<ListPurchase />} />
          </Route>
          <Route path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
