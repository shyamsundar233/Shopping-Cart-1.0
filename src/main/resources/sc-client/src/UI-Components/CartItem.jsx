import React, { useEffect, useState } from "react";
import "./CartItem.css";
import "./OrderItem.css";
import { Link } from "react-router-dom";

const CartItem = ({
  prodId,
  prodName,
  prodImage,
  prodPrice,
  prodQty,
  totalQty,
  deleteCartItem,
  editQuantity,
}) => {
  const [quantityList, setQuantityList] = useState([]);

  useEffect(() => {
    const constructQuantityDropdown = (itemQty) => {
      const options = [];
      for (let itr = 0; itr < itemQty; itr++) {
        options.push(
          <option key={itr} value={itr + 1}>
            {itr + 1}
          </option>
        );
      }
      setQuantityList(options);
    };

    constructQuantityDropdown(totalQty);
  }, [prodQty, totalQty]);

  return (
    <div>
      <div className="outer-cart-container">
        <div className="img-container-1">
          <img src={prodImage} className="prod-image-order-1" alt={prodName} />
        </div>
        <div className="prod-details-1">
          <Link to={`/detail/${prodId}`}>
            <b>{prodName}</b>
          </Link>
          <br /> $ {prodPrice}
          <br />
          <select
            value={prodQty}
            style={{ width: "50px" }}
            onChange={(e) => editQuantity(prodId, e.target.value)}
          >
            {quantityList}
          </select>
          <br />
          <div className="options-cart">
            <a href="#" onClick={() => deleteCartItem(prodId)}>
              Delete
            </a>
            &nbsp;|&nbsp;
            <a href="#">Save for later</a>
            &nbsp;|&nbsp;
            <a href="#">See more like this</a>
            &nbsp;|&nbsp;
            <a href="#">Share</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
