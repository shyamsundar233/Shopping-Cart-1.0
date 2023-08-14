import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddProduct from "./Components/AddProduct";
import ListProduct from "./Components/ListProduct";
import AddPurchase from "./Components/AddPurchase";
import ListPurchase from "./Components/ListPurchase";
import Test from "./Components/Test";
import Admin from "./Components/Admin";
import BuyNow from "./Components/BuyNow";
import PurchaseSuccess from "./Components/PurchaseSuccess";
import LoginComponent from "./Components/LoginComponent";
import ItemDetailView from "./Components/ItemDetailView";
import Home from "./Components/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="detail/:itemId" element={<ItemDetailView />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="admin" element={<Admin />}>
          <Route index element={<ListProduct />} />
          <Route path="create" element={<AddProduct />} />
          <Route path="createPurchase" element={<AddPurchase />} />
          <Route path="listPurchase" element={<ListPurchase />} />
        </Route>
        <Route path="buyNow" element={<BuyNow />} />
        <Route path="invoice/success" element={<PurchaseSuccess />} />
        <Route path="loginPage" element={<LoginComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
