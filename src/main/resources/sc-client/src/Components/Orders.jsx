import React, { useEffect, useState } from "react";
import "./Orders.css";
import OrderItem from "../UI-Components/OrderItem";
import axios, { Axios } from "axios";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const constructOrdersList = (ordersResponse) => {
  let ordersList = [];
  for (let index = 0; index < ordersResponse.length; index++) {
    let order = ordersResponse[index];
    let ordersObj = {
      orderId: order.invoiceId,
      createdDate: getDateString(order.createdTime),
      buyerName: order.buyer.buyerName,
      buyerPhone: order.buyer.buyerPhone,
      buyerAddress: order.buyer.buyerAddress,
      orderTotal: order.invoiceTotal,
      items: [],
    };
    for (let index1 = 0; index1 < order.invoiceItems.length; index1++) {
      let invItem = order.invoiceItems[index1];
      let product = {
        prodId: invItem.product.prodId,
        prodName: invItem.product.prodName,
        prodTags: invItem.product.prodTags,
        prodDesc: invItem.product.prodDesc,
        prodImage: invItem.product.prodImage,
        prodPrice: invItem.prodPrice,
        prodQty: invItem.prodQuantity,
      };
      ordersObj.items.push(product);
    }
    ordersList.push(ordersObj);
  }
  return ordersList.reverse();
};

const getDateString = (date) => {
  const dateObj = new Date(date);
  let dateString =
    dateObj.getDate() +
    " " +
    months[dateObj.getMonth()] +
    " " +
    dateObj.getFullYear();
  return dateString;
};

const Orders = () => {
  const [ordersList, setOrdersList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/api/invoice").then((resp) => {
      let ordersList = constructOrdersList(resp.data.allInvoices);
      console.log(ordersList);
      setOrdersList(ordersList);
    });
  }, []);

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
        <div>
          {ordersList.map((order, index) => (
            <div className="orders-list-pos">
              <OrderItem
                orderId={order.orderId}
                orderDate={order.createdDate}
                buyerName={order.buyerName}
                items={order.items}
                orderTotal={order.orderTotal}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
