import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Cart.css";
import "./Orders.css";
import CartItem from "../UI-Components/CartItem";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const nav = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8081/api/cart").then((resp) => {
      console.log(resp.data.allCartItems);
      setCartItems(resp.data.allCartItems);
      updateCartTotal(resp.data.allCartItems);
    });
  }, []);
  const deleteCart = (id) => {
    let itemId = cartItems.find((elem) => elem.product.prodId === id).itemId;
    axios.delete("http://localhost:8081/api/cart/" + itemId).then((resp) => {
      let updatedCartItems = cartItems.filter((elem) => elem.itemId !== itemId);
      setCartItems(updatedCartItems);
      updateCartTotal(updatedCartItems);
    });
  };
  const updateCartTotal = (cartItems) => {
    let subTotal = 0;
    for (let index = 0; index < cartItems.length; index++) {
      let cartItemTemp = cartItems[index];
      subTotal += cartItemTemp.prodPrice * cartItemTemp.itemQty;
    }
    setSubTotal(subTotal);
  };
  const handleProceedToBuy = () => {
    let buyNowPayLoad = [];
    for (let index = 0; index < cartItems.length; index++) {
      let cartItem = cartItems[index];
      buyNowPayLoad.push({
        prodId: cartItem.product.prodId,
        prodName: cartItem.product.prodName,
        quantity: cartItem.itemQty,
        prodQuantity: cartItem.prodQty,
        prodPrice: cartItem.prodPrice,
      });
    }
    nav("/buyNow", { state: { prodList: buyNowPayLoad } });
  };
  const editQuantityCallback = (prodId, updatedQty) => {
    let data = {
      product: {
        prodId: prodId,
      },
      itemQty: updatedQty,
    };
    axios.post("http://localhost:8081/api/cart", data).then((resp) => {
      let allCartItems = [...cartItems];
      let cartItem = allCartItems.find(
        (elem) => elem.product.prodId === prodId
      );
      cartItem.itemQty = updatedQty;
      setCartItems(allCartItems);
      updateCartTotal(allCartItems);
    });
  };
  return (
    <div className="cart-parent-container">
      <div className="cart-items-container">
        <div className="cart-title-pos">
          <div className="orders-title">Cart</div>
        </div>
        <div className="cart-items-table">
          {cartItems.map((item, index) => (
            <div className="cart-item-disp">
              <CartItem
                prodId={item.product.prodId}
                prodName={item.product.prodName}
                prodImage={item.product.prodImage}
                prodPrice={item.prodPrice}
                prodQty={item.itemQty}
                totalQty={item.prodQty}
                deleteCartItem={deleteCart}
                editQuantity={editQuantityCallback}
              />
            </div>
          ))}
        </div>
        <div className="cart-total-container">
          Subtotal ({cartItems.length} items):&nbsp; ${subTotal}
        </div>
      </div>
      <div className="cart-right-st-container">
        <div className="cart-st-title-pos">
          <div className="st-title">
            Subtotal ({cartItems.length} items):&nbsp; ${subTotal}
          </div>
          <div className="jc-center">
            <MDBBtn
              color="primary"
              size="sm"
              style={{ backgroundColor: "#512B81", width: "100%" }}
              onClick={handleProceedToBuy}
            >
              Track Package
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
