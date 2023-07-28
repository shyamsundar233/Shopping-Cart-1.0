import React from "react";
import image from "../Data/order_success.jpg";
import NavButton from "../UI-Components/NavButton";
import imageJson from "../Data/order_success_gif.json";
import "./PurchaseSuccess.css";

const PurchaseSuccess = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "250px" }}>
      {/* <img src={imageJson} style={{ width: "20%" }} /> */}
      <div class="success-animation">
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <h3>Order placed successfully</h3>
      <br />
      <NavButton label="Home" path="/" variant="contained" />
    </div>
  );
};

export default PurchaseSuccess;
