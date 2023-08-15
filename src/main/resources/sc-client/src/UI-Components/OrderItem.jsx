import React from "react";
import "./OrderItem.css";

const OrderItem = () => {
  return (
    <div className="outer-parent-1">
      <div className="header-content-1">
        <div className="header-left-content-1">
          <div className="pad-10">
            ORDER PLACED <br />5 July 2023
          </div>
          <div className="pad-10">
            TOTAL <br /> 1,999.00
          </div>
          <div className="pad-10">
            SHIP TO <br /> Shyamsundar Veeramani
          </div>
        </div>
        <div className="header-right-content-1">
          <div className="pad-10">
            ORDER # 404-5587476-9224354 <br /> <a href="">View order details</a>{" "}
            | <a href="">Invoice</a>{" "}
          </div>
        </div>
      </div>
      <div className="body-content-1">body</div>
      <div className="footer-content-1">footer</div>
    </div>
  );
};

export default OrderItem;
