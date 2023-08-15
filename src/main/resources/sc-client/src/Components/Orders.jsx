import React from "react";
import "./Orders.css";
import OrderItem from "../UI-Components/OrderItem";

const Orders = () => {
  return (
    <div className="orders-container">
      <div className="orders-outer-par">
        <div className="order-title-container">
          <div className="orders-title">Your Orders</div>
          <input
            type="search"
            placeholder="Search your orders"
            className="search-orders-input"
          />
        </div>
        <OrderItem />
      </div>
    </div>
  );
};

export default Orders;
