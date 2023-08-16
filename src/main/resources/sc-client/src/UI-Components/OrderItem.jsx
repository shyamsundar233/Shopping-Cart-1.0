import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "./OrderItem.css";

const OrderItem = ({ orderId, orderDate, orderTotal, buyerName, items }) => {
  // const [orderId, setOrderId] = useState(orderId);
  // const [orderDate, setOrderDate] = useState(orderDate);
  // const [orderTotal, setOrderTotal] = useState(orderTotal);
  // const [buyerName, setBuyerName] = useState(buyerName);
  // const [items, setItems] = useState(items);
  return (
    <div className="outer-parent-1">
      <div className="header-content-1">
        <div className="header-left-content-1">
          <div className="pad-10">
            ORDER PLACED <br />
            {orderDate}
          </div>
          <div className="pad-10">
            TOTAL <br /> $ {orderTotal}
          </div>
          <div className="pad-10">
            SHIP TO <br /> {buyerName}
          </div>
        </div>
        <div className="header-right-content-1">
          <div className="pad-10">
            ORDER # {orderId} <br /> <a href="">View order details</a> |{" "}
            <a href="">Invoice</a>{" "}
          </div>
        </div>
      </div>
      <div className="body-content-1">
        {items.map((item, index) => (
          <div className="body-inner-content-1">
            <div className="img-container-1">
              <img src={item.prodImage} className="prod-image-order-1" />
            </div>
            <div className="prod-details-order">
              <p className="prod-name-order">{item.prodName}</p>
              <p className="prod-name-order">
                $ {item.prodPrice}&nbsp;&nbsp; | &nbsp;&nbsp;Qty: {item.prodQty}
              </p>
              <div>
                {/* <Button variant="contained">Track Package</Button>&nbsp;&nbsp;
                <Button variant="outlined">Write a Review</Button>&nbsp;&nbsp;
                <Button variant="outlined">Ask Question</Button> */}
                <MDBBtn
                  color="primary"
                  size="sm"
                  style={{ backgroundColor: "#512B81" }}
                >
                  Track Package
                </MDBBtn>
                &nbsp;&nbsp;
                <MDBBtn
                  outline
                  color="primary"
                  size="sm"
                  className="mt-2"
                  style={{ color: "#512B81", borderColor: "#512B81" }}
                >
                  Write a Review
                </MDBBtn>
                &nbsp;&nbsp;
                <MDBBtn
                  outline
                  color="primary"
                  size="sm"
                  className="mt-2"
                  style={{ color: "#512B81", borderColor: "#512B81" }}
                >
                  Ask Question
                </MDBBtn>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="footer-content-1">
        <div className="footer-tab-1">
          <a href="">Archieve order</a>
        </div>
        <div className="footer-tab-1">
          <a href="">Buy again</a>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
