import React from "react";
import "./Title.css";
import logo from "../Data/title-logo.png";

const Title = () => {
  return (
    <div className="title-outer-div-1">
      <div className="title-logo-par">
        <div className="title-logo-1">
          <img src={logo} alt="logo" className="img-logo" />
        </div>
        <div className="title-name">
          <a href="/" className="spl-link-title">
            Shopping Cart
          </a>
        </div>
      </div>
      <div className="title-options-outer-div-1">
        <a href="/admin" className="title-options">
          Admin
        </a>
        <a href="/orders" className="title-options">
          Orders & Returns
        </a>
        <a href="" className="title-options">
          Cart
        </a>
      </div>
    </div>
  );
};

export default Title;
